const { Router } = require("express");
const { auth } = require("./auth.router");

const router = Router();

router.use("/api/auth", auth);
router.use("/api/products", auth);

module.exports = {
  router,
};
