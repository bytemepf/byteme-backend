const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");

const { updateUser } = require("../controllers/admin/updateUser.controller");
const {
  postProduct,
} = require("../controllers/products/postProduct.controller");
const { allowedCategories, isNumber } = require("../helpers/dbValidators");
const { putProduct } = require("../controllers/products/putProduct.controller");
const { getAllProducts } = require("../controllers/products/getAllProducts.controller");

const admin = Router();

admin.put("/user/active/:id", updateUser);
admin.post(
  "/products",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("description", "La descripción es obligatoria es obligatorio")
      .not()
      .isEmpty(),
    check("brand", "La marca es obligatoria").not().isEmpty(),
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("price").custom(isNumber),
    check("category", "El precio es obligatorio").custom(allowedCategories),
    check("quantity", "La cantidad de productos disponibles es obligatorio")
      .not()
      .isEmpty(),

    check("quantity").custom(isNumber),
    validateFields,
  ],
  postProduct
);
// admin.put("/products/:id", putProduct)


module.exports = {
  admin,
};
