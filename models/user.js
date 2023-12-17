const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
    ,
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    totalExpenses: {
        type: Sequelize.FLOAT(),
        defaultValue: 0.00
    },
    password: Sequelize.STRING,
    ispremiumuser: Sequelize.BOOLEAN,
})

module.exports = User;