module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            unique: {
                msg: 'The specified email address is already in use.'
            },
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.DATEONLY
        },
        phone: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        user_type: {
            type: Sequelize.ENUM('admin', 'borrower', 'investor')
        },
        image_path: {
            type: Sequelize.STRING
        },
        payment_method: Sequelize.JSON
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });

    
  
    return User;
};