const { Router } = require("express");

const {getProductByIdHandler} = require("../handlers/productsHandler")

const products = Router();

products.get("/", get);

products.get("/:id", getProductByIdHandler);

module.exports = {
  products,
};
