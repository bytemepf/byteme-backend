const { Router } = require("express");

const products = Router();

products.get("/products", get);

module.exports = {
  products,
};
