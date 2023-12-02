module.exports = (sequelize, Sequelize) => {
    const Investment = sequelize.define("investment", {
        interest_rate: {
            type: Sequelize.FLOAT
        },
        status: {
            type: Sequelize.ENUM('pending', 'rejected', 'approved', 'paid')
        },
        transaction_info: Sequelize.JSON
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });

  
    return Investment;
};