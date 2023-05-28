// Este middleware verifica que venga una imagen o una url valida a cualquer imagen

const validateImage = (req, res, next) => {
    console.log(req.files);
    // Esta condición verifica que venga un archivo de imagen, si es falsa, se pasa a la siguiente condición
    if (req.files) {
        if (req.files.image) {
            const imageName = req.files.image.name.split(".")
            const formats = ["jpeg", "jpg", "png"]
            if (formats.includes(imageName[imageName.length - 1])) {
                req.body.file = true
                return next()
            } else {
                return res.status(400).json({ message: "Formato de archivo no valido. Use los siguientes: jpg, jpeg, png" })
            }
        } else {
            return res.status(400).json({ message: "Falta la propiedad image o no proporciono ningún archivo" })
        }
    }
    // En esta condición se verifica que venga la propiedad image con una url valida 
    // if (req.body.image) {
    //     const { image } = req.body
    //     console.log(image, "validate");
    //     if (/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(image)) {
    //         //req.body.file = false
    //         return next()
    //     } else {
    //         return res.status(400).json({ message: "Url de la imagen no valida" })
    //     }
    // }
    return res.status(400).json({ message: "Falta la propiedad image" })
}

module.exports = {
    validateImage
}