
// Esto es un archivo de barrel. Sirve para realizar una exportación masiva
// Evita llenar los archivos de importaciones

// Si el desarrollador necesita alguno de los metodos importdos aqui,
// basta simplemente con llamar la carpeta donde se encuentra esta archivo de barrel.
// Ejemplo:
// Si necesita el controlador deleteProduct y updateProduct, con una importación normal seria así

// const {deleteProduct} = require("./controllers/products/deleteProduct.controllerjs")
// const {updateProduct} = require("./controllers/products/updateProduct.controllerjs")

// Pero si se utiliza un archivo de barrel como este la importación seria asi

// const {deleteProduct, updateProduct} = require("./controllers")


// Imporatciones de la carpeta products
const { deleteProduct } = require("./products/deleteProduct.controller");
const { logicalDeletionProducts } = require("./products/logicalDeletionProducts.controller");
const { filterProducts } = require("./products/filterProducts.controller");
const { getAllProducts } = require("./products/getAllProducts.controller");
const { getProductById } = require("./products/getProductById.controller");
const { getProductsByName } = require("./products/getProductsByName.controller");
const { postProduct } = require("./products/postProduct.controller");
const { updateProduct } = require("./products/updateProduct.controller");

// Importaciones de la carpeta auth
const { loginUser } = require("./auth/loginUser.controller");
const { registerUser } = require("./auth/registerUser.controller");

// Importaciones de la carpeta user
const { logicalDeletion } = require("./user/logicalDeletion.controller");

// Exportacion de todos los rchivos
module.exports = {
    logicalDeletionProducts,
    deleteProduct,
    filterProducts,
    getAllProducts,
    getProductById,
    getProductsByName,
    postProduct,
    updateProduct,
    loginUser,
    registerUser,
    logicalDeletion
}

