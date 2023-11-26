module.exports = app => {
    const { getActiveLoanRequests, getListOfPortfolio } = require("../controllers/investor.controller");

    var router = require("express").Router();

    router.get('/getActiveLoanRequests', getActiveLoanRequests);
    router.get('/getListOfPortfolio/:userId', getListOfPortfolio);

    app.use('/api/investor', router);
}