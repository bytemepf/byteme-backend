// Importaciones de terceros (NPM)
const { Router } = require("express");
// Importaciones locales (Controladores)
const { getAllProducts, getProductsByName, filterProducts, getProductById } = require("../controllers");

const products = Router();

products.get("/", getAllProducts);
products.get("/search", getProductsByName);
products.get("/filter", filterProducts)
products.get("/:id", getProductById)
products.get("/products");

module.exports = {
  products
}