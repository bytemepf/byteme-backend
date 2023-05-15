
// Este metodo verifica si viene una archivo de imagen o una url
const checkFile = (req, res, next) => {

    console.log(req.files)

    if (req.files) {
        if (req.files.image) {
            req.body.file = true
            return next()
        } else {
            return res.status(400).json({ message: "El nombre de la propiedad debe ser image" })
        }
    }
    req.body.file = false
    return next()
}

module.exports = {
    checkFile
}