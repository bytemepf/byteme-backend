// Importaciones de terceros (npm)
const { Sequelize } = require("sequelize");

// Crea la conexion a la base de datos
// process.env.DB_URL es una variable de entorno que esta en .env
const database = new Sequelize(process.env.DB_URL, { logging: false });


module.exports = { database };
