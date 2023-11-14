module.exports = (sequelize, Sequelize) => {
    const Withdrawal = sequelize.define("investor_withdrawal", {
        amount: {
            type: Sequelize.DECIMAL(8, 2)
        },
        method: {
            type: Sequelize.ENUM('bank', 'card', 'paypal')
        },
        status: {
            type: Sequelize.ENUM('pending', 'rejected', 'completed')
        },
        transaction_info: Sequelize.JSON
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });


  
    return Withdrawal;
};