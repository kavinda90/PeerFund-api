module.exports = app => {
    const { getActiveLoanRequests, getListOfPortfolio, getLoanRequest, getMyAccount, submitInvestment, getInvestedList, getInvestmentsByInvestor } = require("../controllers/investor.controller");

    var router = require("express").Router();

    router.get('/getActiveLoanRequests/:investorId', getActiveLoanRequests);
    router.get('/getLoanRequest/:id', getLoanRequest);
    router.get('/getListOfPortfolio/:userId', getListOfPortfolio);
    router.get('/myAccount/:userId', getMyAccount);
    router.post('/submitInvestment', submitInvestment);
    router.get('/getInvestedList', getInvestedList);
    router.post('/getInvestmentsByInvestor', getInvestmentsByInvestor);

    app.use('/api/investor', router);
}