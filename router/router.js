const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ ruta: "/" });
});

module.exports = {
  router,
};
