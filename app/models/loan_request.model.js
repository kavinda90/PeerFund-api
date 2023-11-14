module.exports = (sequelize, Sequelize) => {
    const LoanRequest = sequelize.define("loan_request", {
        amount: {
            type: Sequelize.DECIMAL(8, 2)
        },
        expiry_date: {
            type: Sequelize.DATE
        },
        purpose: {
            type: Sequelize.ENUM('debt', 'home', 'creditcard', 'car', 'bills', 'wedding', 'other', 'education')
        },
        description: Sequelize.STRING,
        loan_period: Sequelize.INTEGER,
        payment_term: Sequelize.ENUM('monthly', 'byweekly', 'weekly'),
        status: Sequelize.ENUM('new', 'approved', 'rejected', 'completed'),
        investment_id: {
            type: Sequelize.INTEGER,
            references: {
                model: sequelize.models.investment,
                key: 'id'
            }
        },
        term_amount: Sequelize.DECIMAL(8, 2),
        assesment_fee: Sequelize.DECIMAL(8, 2),
        transaction_info: Sequelize.JSON
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });

  
    return LoanRequest;
};