const { Router } = require("express");
const { auth } = require("./auth.router");
const { products } = require("./products.router");

const router = Router();

router.use("/api/auth", auth);
router.use("/api/products", products);

module.exports = {
  router,
};
