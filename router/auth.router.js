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
  "/register",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email").custom(isEmail),
   // check("password", "El password debe tener mas de 6 letras").isLength({
   //   min: 6,
   // }),
    validateFields,
  ],
  registerUser
);
auth.post(
  "/login",
  [
    check("email", "El correo es obligatorio").isEmail(),
 //   check("password", "La contraseña es obligatoria").not().isEmpty(),
    validateFields,
  ],
  loginUser
);

module.exports = {
  auth,
};
