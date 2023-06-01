// Importaciones de terceros (NPM)
const { Router } = require("express");
const { check } = require("express-validator");

// Importaciones locales (helpers y middlewares)
const { allowedCategories, isNumber } = require("../helpers");
const { validateFields, validateImage, checkFile, validateJWT, isAdmin } = require("../middlewares");

// Importaciones locales (Controladores)
const { logicalDeletion, postProduct, updateProduct, deleteProduct, logicalDeletionProducts } = require("../controllers");

const admin = Router();


// Esta ruta es para reaizar el borrado logico
admin.put("/user/active/:id", logicalDeletion);

// los metodos dentro de corchetes son middlewares, se ejecutan en secuencia
admin.post("/products",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("description", "La descripción es obligatoria es obligatorio").not().isEmpty(),
    check("brand", "La marca es obligatoria").not().isEmpty(),
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("price").custom(isNumber),
    check("category", "El precio es obligatorio").custom(allowedCategories),
    check("quantity", "La cantidad de productos disponibles es obligatorio").not().isEmpty(),
    check("quantity").custom(isNumber),
    validateImage,
    validateFields,
  ],
  postProduct
);

admin.put("/products/:id",
  [
    checkFile
  ],
  updateProduct
);

// admin.delete("/products/:id", [
//   validateJWT,
//   isAdmin
// ], deleteProduct)

admin.put("/products/active/:id", logicalDeletionProducts);

module.exports = {
  admin,
};
