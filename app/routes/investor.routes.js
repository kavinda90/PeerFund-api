module.exports = app => {
    const { getActiveLoanRequests } = require("../controllers/investor.controller");

    var router = require("express").Router();

    router.get('/getActiveLoanRequests', getActiveLoanRequests);

    app.use('/api/investor', router);
}