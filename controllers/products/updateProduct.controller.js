// Importaciones de terceros (npm)
// En postProduct exlico que es esto
const fs = require("fs-extra");
const { validate } = require("uuid");

// Importaciones locales
const { uploadImage } = require("../../helpers/cloudinary");

// En postProduct exlico que es esto
const { Product } = require("../../models");

const updateProduct = async (req, res) => {

  // En deleteProduct exlico que es esto
  const { id } = req.params;

  // En postProduct exlico que es esto
  const { file } = req.body

  // En deleteProduct exlico que es esto
  if (!validate(id)) {
    return res.json({ msg: `El indentificador no es valido: No es un uuid` });
  }

  try {
    // En deleteProduct exlico que es esto
    const product = await Product.findByPk(id);

    // En deleteProduct exlico que es esto
    if (!product) {
      return res.json({ msg: `No existe un producto con ese id` });
    }

    if (file) {
      // En postProduct exlico que es hace todo esto
      const { tempFilePath } = req.files.image
      const { secure_url } = await uploadImage(tempFilePath);
      await product.update({ ...req.body, image: secure_url });
      await fs.unlink(req.files.image.tempFilePath);
    } else {
      // Si file es false, indica que la imagen es una url y no un archivo de imagen
      // por lo que la propiedad image viene en req.body y no en req.files
      await product.update({ ...req.body })
    }

    // Acualiza el producto en la base de datos y desestructura dataValues
    // dataValues contiene la información del producto actualizado
    const { dataValues } = await product.save();

    return res.status(200).json({ message: "Producto actualizado correctamente", data: { ...dataValues } });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

module.exports = {
  updateProduct,
};
