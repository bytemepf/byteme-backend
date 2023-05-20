// Importa el modelo User que interactua con la base de datos
const { User } = require("../../models/User.model");

// El metodo realiza un borrado logico del usuario
const logicalDeletion = async (req, res) => {

  // En el controller deleteProduct explico esto
  const { id } = req.params;

  // En el controller deleteProduct explico esto
  const user = await User.findByPk(id);

  if (!user) {
    return res.json({ message: `No existe un usuario con ese id` });
  }
  // Esta instrucción realiza el borrado logico
  // funciona como toggle. Si el usuario esta activo, lo desactiva y
  // si el usuario esta desactivo, lo vuelve a activar, habilitar, agregar o como ustedes le quieran llamar XD
  user.active = user.active ? false : true;

  // Actualiza el usuario en la base de datos
  user.save();

  res.status(200).json(user);
};

module.exports = { logicalDeletion };
