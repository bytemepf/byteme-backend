const { Router } = require("express");

const auth = Router();

auth.get("/login", (req, res) => {
  res.json({ ruta: "mensaje" });
});

module.exports = {
  auth,
};
