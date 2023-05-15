const { Router } = require("express");

const products = Router();

products.get("/products");

module.exports = {
  products,
};
