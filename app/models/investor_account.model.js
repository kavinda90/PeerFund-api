module.exports = (sequelize, Sequelize) => {
    const InvestorAccount = sequelize.define("investor_account", {
        subscription_status: {
            type: Sequelize.ENUM('active', 'inactive')
        },
        account_balance: {
            type: Sequelize.DECIMAL(8, 2),
            defaultValue: 0.00
        },
        level: {
            type: Sequelize.ENUM('Beginner', 'Average', 'Experienced')
        },
        status: {
            type: Sequelize.ENUM('active', 'deactived', 'blocked')
        }
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });
    
    return InvestorAccount;
};