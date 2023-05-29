// Importa el modelo User que interactua con la base de datos
const { Product } = require("../../models/Product.model");

// El metodo realiza un borrado logico del usuario
const logicalDeletionProducts = async (req, res) => {

  // En el controller deleteProduct explico esto
  const { id } = req.params;

  // En el controller deleteProduct explico esto
  const product = await Product.findByPk(id);

  if (!product) {
    return res.json({ message: `No existe un producto con ese id` });
  }
  // Esta instrucción realiza el borrado logico
  // funciona como toggle. Si el usuario esta activo, lo desactiva y
  // si el usuario esta desactivo, lo vuelve a activar, habilitar, agregar o como ustedes le quieran llamar XD
  product.active = product.active ? false : true;

  // Actualiza el usuario en la base de datos
  product.save();

  res.status(200).json(product);
};

module.exports = { logicalDeletionProducts };