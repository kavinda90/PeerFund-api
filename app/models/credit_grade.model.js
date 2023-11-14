module.exports = (sequelize, Sequelize) => {
    const CreditGrade = sequelize.define("credit_grade", {
        grade: {
            type: Sequelize.STRING
        },
        limit_min: {
            type: Sequelize.DECIMAL(8, 2)
        },
        limit_max: {
            type: Sequelize.DECIMAL(8, 2)
        }
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });

  
    return CreditGrade;
};