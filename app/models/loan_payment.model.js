module.exports = (sequelize, Sequelize) => {
    const LoanPayment = sequelize.define("loan_payment", {
        term_number: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.DECIMAL(8, 2)
        },
        status: {
            type: Sequelize.ENUM('pending', 'paid', 'rejected')
        },
        paid_at: Sequelize.DATE,
        payment_info: Sequelize.JSON
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });

  
    return LoanPayment;
};