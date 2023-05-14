// En el archivo index de la carpeta controllers indico que hace este archivo

const { checkFile } = require("./checkFile");
const { isAdmin } = require("./isAdmin");
const { validateFields } = require("./validateFields");
const { validateImage } = require("./validateImage");
const { validateJWT } = require("./validateJWT");

module.exports = {
    validateFields,
    validateImage,
    checkFile,
    validateJWT,
    isAdmin
}