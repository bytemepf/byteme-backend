const { User } = require("../../models");

const registerUser = async (req, res) => {
  try {
    const { name, email, picture } = req.body;

    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "El usuario ya está registrado" });
    }

    // Crea el usuario en la base de datos
    const newUser = await User.create({ name, email, picture });

    // Envía una respuesta exitosa con los detalles del usuario registrado
    res.status(200).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};


// Aqui se crea el usuario con privilegios de administrador y se inserta a la base de datos con la contraseña encriptada

// Se genera un JWT para regresarselo al usuario recien registrado

// Aqui se crea el usuario y se inserta a la base de datos con la contraseña encriptada

// Se genera un JWT para regresarselo al usuario recien registrado

// Se genera un JWT para regresarselo al usuario recien registrado



module.exports = {
  registerUser,
};
