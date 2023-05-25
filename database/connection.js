const { Sequelize } = require("sequelize");

const database = new Sequelize(process.env.DB_URL, { logging: false });


module.exports = { database };
