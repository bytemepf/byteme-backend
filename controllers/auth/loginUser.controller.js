// Importaciones de terceros (NPM)
// Esta bibliteca permite encriptar y desencriptar cadenas (string)
const bcryptjs = require("bcryptjs");

// Importaciones locales
// Importa el modelo User para interactuar con la tabla User de la base de datos 
const { User } = require("../../models");
// Importa el metodo que se encarga de generar los JWT
const { generateJWT } = require("../../helpers/generateJWT");

const loginUser = async (req, res) => {

  // desestructura las propiedades enviadas por el usuario
  let { email, password } = req.body;

  try {
    // Esta instrucción busca un usuario en la base de datos que coincida con el email
    const user = await User.findOne({ where: { email } });

    // Verifica que el usuario exista
    if (!user) {
      return res.status(404).json({ message: "No existe un usuario con el correo " + email });
    }

    // Esta instrucción compara la contraseña encriptada de la base de datos con la que introdujo el usuario, si coinciden devuelve true, de lo contrario false
    const validPassword = bcryptjs.compareSync(password.toString(), user.password);

    // Si validPassword es false, responde con el siguiente mensaje
    if (!validPassword) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // Si la contraseñas coinciden, el siguiente paso es verficar si el usuario esta activo con esta condición
    // Si el usuario esta inactivo responde con el siguiente mensaje
    if (!user.active) {
      return res.status(400).json({ message: "Usuario inactivo" });
    }

    // Si todas las condiciones anteriores fueron superadas, se desestructura del objeto user las propiedades de abajo
    const { id, name, role } = user;

    // Esta instrucción genera un JWT con el id del usuario
    const token = await generateJWT(user.id);

    return res.status(200).json({ id, name, email, role, token });
  } catch (error) {

    console.log(error.message);
    res.status(500).json({ message: "Error en el servidor", error: error.message });

  }
};

module.exports = {
  loginUser,
};
