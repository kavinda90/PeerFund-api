const db = require("../models");
const loanRequestService = require("../services/loan_request.service");
const User = db.user;
const LoanRequest = db.loan_request;
const BorrowerAccount = db.borrower_account;
const CreditGrade = db.credit_grade;
const Op = db.Sequelize.Op;

exports.loanRequest = (req, res) => {

  const loanRequest = loanRequestService.processLoanRequest(req.body);

  db.sequelize.transaction().then((t) => {
    LoanRequest.create(loanRequest, {transaction: t})
    .then(() => {
      t.commit();
      res.status(201).send({
        message: "Loan request is created"
      });
    })
    .catch((error) => {
      console.error(error);
      t.rollback();
      res.status(500).send({
        message: "Unable to create the loan request"
      });
    });
  });
};
