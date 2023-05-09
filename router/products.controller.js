const { Router } = require("express");

const products = Router();

products.get("/products", (req, res) => {
  res.json({ ruta: "mensaje" });
});

module.exports = {
  auth: products,
};
