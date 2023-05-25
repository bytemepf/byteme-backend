

const { validationResult } = require("express-validator");

// Es obligatorio el uso de este middleware para validar los formularios
// Es el ultimo middleware que se inserta en una ruta
// Responde con todos los errores econtrados en los formularios

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};

module.exports = { validateFields };
