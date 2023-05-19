// Importaciones de terceros (NPM)
const { Router } = require("express");

// Importaciones locales (Controladores)
const { getAllProducts, getProductsByName, filterProducts, getProductById } = require("../controllers");


const products = Router();

products.get("/products");

module.exports = {
  products
};