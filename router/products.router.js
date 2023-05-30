// Importaciones de terceros (NPM)
const { Router } = require("express");
// Importaciones locales (Controladores)
const { getAllProducts, getProductsByName, filterProducts, getProductById } = require("../controllers");
const {validateJWT} =require("../middlewares/validateJWT")

const products = Router();

products.get("/",/*validateJWT,*/ getAllProducts);
products.get("/search", getProductsByName);
products.get("/filter", filterProducts)
products.get("/:id",/*validateJWT*/ getProductById)
products.get("/products");

module.exports = {
  products
}