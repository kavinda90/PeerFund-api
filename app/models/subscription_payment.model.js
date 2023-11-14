module.exports = (sequelize, Sequelize) => {
    const SubscriptionPayment = sequelize.define("subscription_payment", {
        term_number: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.DECIMAL(8, 2)
        },
        status: {
            type: Sequelize.ENUM('pending', 'paid', 'rejected', 'overdue', 'cancelled')
        },
        paid_at: Sequelize.DATE,
        payment_info: Sequelize.JSON
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });

  
    return SubscriptionPayment;
};