const db = require("../models");
const User = db.user;
const LoanRequest = db.loan_request;
const Investment = db.investment;
const InvestorAccount = db.investor_account;
const BorrowerAccount = db.borrower_account;
const CreditGrade = db.credit_grade;
const Op = db.Sequelize.Op;
var investorCondition = {user_type: 'investor', status: 'active'};

exports.getActiveLoanRequests = (req, res) => {

    LoanRequest.findAll({
      where: {
        status: ['new', 'approved', 'completed']
      },
      include: {
        model: BorrowerAccount,
        include: CreditGrade
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};

exports.getListOfPortfolio = (req, res) => {

    Investment.findAll({
        include: [
            {model: LoanRequest},
            {
                model: InvestorAccount,
                include: {
                    model: User,
                    where: {
                        id: req.params.userId
                    }
                }
            }
        ]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};

// Retrieve all Borrowers from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    // Users.findAll({ where: condition })
    User.findAll({
      where: investorCondition,
      include: db.investor_account
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk({
        id: id,
        where: investorCondition,
        include: [db.user_document, db.investor_account]
    })
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
      where: { 
        id: id,
        user_type: 'investor'
      }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
      where: { 
        id: id,
        user_type: 'investor'
      }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: investorCondition,
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all users."
          });
        });
};