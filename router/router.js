const { Router } = require("express");
const { auth } = require("./auth.router");
const { products } = require("./products.router");
const { admin } = require("./admin.router");
const { user } = require("./user.router");
const {stripe} = require("./stripe")

const router = Router();

router.use("/api/auth", auth);
router.use("/api/products", products);
router.use("/api/admin", admin);
router.use("/api/user", user);
router.use("/api/checkout", stripe)
// router.get("/api/internal");

module.exports = {
  router,
};
