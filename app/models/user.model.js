module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            unique: {
                msg: 'The specified email address is already in use.'
            },
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.DATEONLY
        },
        phone: {
            type: Sequelize.STRING
        },
        status: Sequelize.BOOLEAN,
        user_type: {
            type: Sequelize.ENUM('admin', 'borrower', 'investor')
        },
        image_path: {
            type: Sequelize.STRING
        },
        payment_method: Sequelize.JSON
    });
  
    return Tutorial;
};