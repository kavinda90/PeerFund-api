module.exports = app => {
    var router = require("express").Router();

    // router.get('/approve/:investorId', getActiveLoanRequests);

    app.use('/api/admin', router);
}