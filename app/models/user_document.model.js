
module.exports = (sequelize, Sequelize) => {
    const UserDocument = sequelize.define("user_document", {
        name: Sequelize.STRING,
        url: Sequelize.STRING,
        status: {
            type: Sequelize.ENUM('approved', 'pending', 'rejected')
        }
    }, {
        paranoid: true, // Enable soft deletion
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    });
  
    return UserDocument;
};