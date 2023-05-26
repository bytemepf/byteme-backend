require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

// Obtiene los valores de las variables de entorno
const { DB_URL } = process.env;

// Crea la conexión a la base de datos
const database = new Sequelize(DB_URL, { logging: false });

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "../models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "../models", file)));
  });

modelDefiners.forEach((model) => model(database));

let entries = Object.entries(database.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
database.models = Object.fromEntries(capsEntries);

const { Product, User, Review, Order } = database.models;

Product.belongsToMany(Review, { through: 'ProductReviews' });
Review.belongsTo(Product);

User.belongsToMany(Review, { through: 'UserReviews' });
Review.belongsTo(User);

module.exports = {
  ...database.models,
  Product,
  User,
  Review,
  Order,
  database
};
