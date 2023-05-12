const { Router } = require("express");
const { auth } = require("./auth.router");
const { products } = require("./products.router");
const { admin } = require("./admin.router");
const { user } = require("./user.router");
const { test } = require("../internal-use/app");

const router = Router();

router.use("/api/auth", auth);
router.use("/api/products", products);
router.use("/api/admin", admin);
router.use("/api/user", user);
router.get("/api/internal", test);

module.exports = {
  router,
};
