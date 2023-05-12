const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const { registerUser, loginUser } = require("../controllers/auth");
const { isEmail } = require("../helpers/dbValidators");

const auth = Router();

auth.post(
  "/register",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email").custom(isEmail),
    check("password", "El password debe tener mas de 6 letras").isLength({
      min: 6,
    }),
    validateFields,
  ],
  registerUser
);

auth.get(
  "/login",
  [
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validateFields,
  ],
  loginUser
);

module.exports = {
  auth,
};
