const db = require("../models");
const authconfig = require("../config/auth.config");
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register User
const registerUser = async (req, res) => {
    try {
        const { first_name, last_name, email, dob, password, phone, user_type } = req.body;

        //Check if email exists
        const userExists = await User.findOne({
            where: {email}
        });
        if (userExists) {
            return res.status(400).send('Email is already associated with an account');
        }

        // Create a User
        const user = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            dob: dob,
            phone: phone,
            status: true,
            user_type: user_type,
            password: bcrypt.hashSync(password, 15),
        };

        await User.create(user)
            .then(data => {
                return res.status(200).send({data, message: 'Registration successful'});
            })
    } catch (err) {
        return res.status(500).send(err.message || 'Error in registering user');
    }
};

const signInUser = async (req, res) => {
    try {
        const { email, password, user_type } = req.body;
        const user = await User.findOne({
            where: {email, user_type}
        });
        if (!user) {
            return res.status(404).json({errors: ['User not found']});
        }


        // Verify password
        const passwordValid = bcrypt.compareSync(password, user.password);
        if (!passwordValid) {
            return res.status(404).json({errors: ['Incorrect email and password combination']});
        }


        // Authenticate user with jwt
        const token = jwt.sign({ id: user.id }, authconfig.JWT_SECRET, {
            expiresIn: authconfig.JWT_REFRESH_EXPIRATION
        });
        return res.status(200).send({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            api_token: token,
            dob: user.dob,
            type: user.user_type
        });
    } catch (err) {
        return res.status(500).send({errors: ['Sign in error']});
    }
}

const verifyToken = async (req, res, next) => {
    // let token = req.headers["x-access-token"];
    let token = req.body.api_token;
  
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
  
    try {
        jwt.verify(token,
            authconfig.JWT_SECRET,
            async (err, decoded) => {
                if (err) {
                    return res.status(401).send({
                    message: "Unauthorized!",
                    });
                }
                const userId = decoded.id;
                const user = await User.findOne({
                    where: {id: userId}
                });
                if (!user) {
                    return res.status(404).json({errors: ['User not found']});
                }
                return res.status(200).send({api_token: token, user});
                // next();
            });
    } catch (error) {
        return res.status(500).send({errors: ['Token verification error']});
    }
    
  };

module.exports = {
    registerUser,
    signInUser,
    verifyToken
}