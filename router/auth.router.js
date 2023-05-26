// Importaciones de terceros (NPM)
const { Router } = require("express");
const { check } = require("express-validator");

// Importaciones locales (helpers y middlewares)
const { isEmail } = require("../helpers");
const { validateFields } = require("../middlewares");

// Importaciones locales (Controladores)
const { registerUser, loginUser } = require("../controllers");

const auth = Router();

auth.post(
  "/register", registerUser );

auth.post(
  "/login", loginUser);

module.exports = {
  auth,
};
