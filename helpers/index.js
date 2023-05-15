// Esto lo explico en el archivo index de la crpeta controllers

const { uploadImage } = require("./cloudinary");
const { generateJWT } = require("./generateJWT");
const dbValidators = require("./dbValidators")

module.exports = {
    uploadImage,
    generateJWT,
    ...dbValidators
}
