module.exports = app => {
    const {loanRequest} = require("../controllers/borrower.controller");

    const router = require("express").Router();

    router.post('/new-loan', loanRequest);

    app.use('/api/borrower', router);
}
