// Importaciones locales
// Importación del metodo que verifica si el identificador proporcionado es valido
const { validate } = require("uuid");

// Importación del modelo Product que permite interactuar con la tabla Product de la base de datos
const { Product } = require("../../models");


const deleteProduct = async (req, res) => {
  // desestructura el id 
  const { id } = req.params;

  // Esta condición verifica que el id sea valido, en caso de que no lo sea, se responde
  // Ccon el siguiente mensaje
  if (!validate(id)) {
    return res.json({ msg: `El indentificador no es valido: No es un uuid` });
  }

  try {
    // Busca el producto en la base de datos, si no encuentra un producto
    // que coincida con el id, devuelve null o undefined, no me acuerdo cual de los dos XD
    const product = await Product.findByPk(id);

    // Esta condición responde el siguiente mensaje si no existe el producto
    if (!product) {
      return res.json({ msg: `No existe un producto con ese id` });
    }

    // Si encuentra el producto procede a eliminarlo
    await product.destroy()

    // No hay necesidad de explicar esto :)
    res.status(200).json({ message: "Producto eliminado correctamente" });

  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }

}

module.exports = {
  deleteProduct
};