// Importación del metodo que verifica si el identificador proporcionado es valido
const { validate } = require('uuid');

// Importciones locales
// Importación del modelo Product que permite interactuar con la tabla Product de la base de datos
const { Product } = require("../../models/Product.model");



const getProductById = async (req, res) => {
  // desetructuración del id del producto
  const { id } = req.params

  // En el controlador deleteProduct explico que hace esto
  if (!validate(id)) {
    return res.json({ msg: `El indentificador no es valido: No es un uuid` });
  }

  try {
    // Busca un producto con el identificador proporcionado por el usuario
    // Si no lo encuentra, devuelve null o undefined.
    const product = await Product.findByPk(id)

    // Si la constante product es null o undefined. Indica que no se encontro el producto
    // Esta condicion responde el siguiente mensaje si no se encontro el producto
    if (!product) {
      return res.json({ msg: `No existe producto con ese id` });
    }

    // Si encuentra el producto, se responde con la información del producto
    return res.json(product)

  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: "Error en el servidor", error: error.message })
  }
};

module.exports = {
  getProductById,
};
