module.exports = (sequelize, Sequelize) => {
    const BorrowerAccount = sequelize.define("borrower_account", {
        status: {
            type: Sequelize.ENUM('active', 'deactived', 'blocked', 'default')
        },
        credit_score: {
            type: Sequelize.INTEGER
        }
    }, {    
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });

  
    return BorrowerAccount;
};