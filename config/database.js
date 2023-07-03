const Sequelize = require('sequelize')
module.exports = new Sequelize('codegig', 'postgres', 'abcd', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAlisases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})