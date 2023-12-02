const dateFns = require('date-fns');

exports.processLoanRequest = (loanRequest) => {

  return {
    borrowerAccountId: loanRequest.accountId,
    amount: loanRequest.amount,
    expiry_date: dateFns.parseISO(loanRequest.preferredDate),
    purpose: loanRequest.purpose,
    description: loanRequest.description,
    loan_period: loanRequest.loanPeriod,
    payment_term: loanRequest.paymentTerm,
    status: 'new',
  }
}
