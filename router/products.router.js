const { Router } = require("express");
const getProducts = require('../controllers/products/getProducts.controller')
const DeleteProduct = require('../controllers/products/deleteProducts.controller')

const products = Router();

products.get("/products", getProducts);
products.delete("/delete/:id",DeleteProduct)

module.exports = {
  products
};
