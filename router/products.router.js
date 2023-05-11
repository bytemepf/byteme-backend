const { Router } = require("express");
const { getAllProducts } = require("../controllers/products/getAllProducts.controller");
const { getProductById } = require("../controllers/products/getProductById.controller");
const { getProductsByName } = require("../controllers/products/getProductsByName.controller");
const { filterProducts } = require("../controllers/products/filterProducts.controller");

const products = Router();

products.get("/", getAllProducts);
products.get("/search", getProductsByName);
products.get("/filter", filterProducts)
products.get("/:id", getProductById)

module.exports = {
  products
};
