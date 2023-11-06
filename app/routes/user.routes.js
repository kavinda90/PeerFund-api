module.exports = app => {
    const { registerUser, signInUser, verifyToken } = require("../controllers/auth.controller");

    var router = require("express").Router();

    router.post('/sign-up', registerUser);
    router.post('/login', signInUser);
    router.post('/verify_token', verifyToken);

    app.use('/api/users', router);
}