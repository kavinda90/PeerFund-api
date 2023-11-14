const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.user_document = require("./user_document.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.borrower_account = require("./borrower_account.model.js")(sequelize, Sequelize);
db.investor_account = require("./investor_account.model.js")(sequelize, Sequelize);
db.investment = require("./investment.model.js")(sequelize, Sequelize);
db.loan_request = require("./loan_request.model.js")(sequelize, Sequelize);
db.loan_payment = require("./loan_payment.model.js")(sequelize, Sequelize);
db.credit_grade = require("./credit_grade.model.js")(sequelize, Sequelize);
db.investor_withdrawal = require("./investor_withdrawal.model.js")(sequelize, Sequelize);
db.subscription_payment = require("./subscription_payment.model.js")(sequelize, Sequelize);

//Defining Assciations
db.user_document.belongsTo(db.user);
db.user.hasMany(db.user_document);

db.user.hasOne(db.borrower_account);
db.borrower_account.belongsTo(db.user);

db.borrower_account.belongsTo(db.credit_grade);
db.credit_grade.hasMany(db.borrower_account);

db.user.hasOne(db.investor_account);
db.investor_account.belongsTo(db.user);

db.investor_account.hasMany(db.subscription_payment);
db.subscription_payment.belongsTo(db.investor_account);

db.investor_account.hasMany(db.investor_withdrawal);
db.investor_withdrawal.belongsTo(db.investor_account);

db.investor_account.hasMany(db.investment);
db.investment.belongsTo(db.investor_account);

db.investment.belongsTo(db.loan_request);
db.loan_request.hasMany(db.investment);

db.loan_request.hasMany(db.loan_payment);
db.loan_payment.belongsTo(db.loan_request);

db.loan_request.belongsTo(db.borrower_account);
db.borrower_account.hasMany(db.loan_request);

module.exports = db;