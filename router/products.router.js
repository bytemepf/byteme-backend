const { Router } = require("express");

const {getProductByIdHandler, postProductHandler} = require("../handlers/productsHandler")

const products = Router();

products.get("/");

products.post("/", postProductHandler);

products.get("/:id", getProductByIdHandler);


module.exports = {
  products,
};
