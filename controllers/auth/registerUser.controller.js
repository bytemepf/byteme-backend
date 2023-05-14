// Importaciones de terceros (NPM)
// Esta bibliteca permite encriptar y desencriptar cadenas (string)
const bcryptjs = require("bcryptjs");

// Importa el modelo User para interactuar con la tabla User de la base de datos 
const { User } = require("../../models");
// Importa el metodo que se encarga de generar los JWT
const { generateJWT } = require("../../helpers/generateJWT");

// desestructura las propiedades enviadas por el usuario
const registerUser = async (req, res) => {

  let { name, email, password, admin } = req.body;

  // Esto indica a cantidad de vueltas necesarias para encriptar la contraseña
  const salt = bcryptjs.genSaltSync();

  // Esta funcion encripta la contraseña
  password = bcryptjs.hashSync(password.toString(), salt);

  const user = User.build({ name, email, password });

  console.log(admin)
  if (admin === "yes") {
    user.role = "ADMIN_ROLE"
  }

  await user.save()

  const { id, role } = user.dataValues

  const token = await generateJWT(id)

  console.log(token)

  res.status(200).json({ id, name, email, role, token });


}
// Aqui se crea el usuario con privilegios de administrador y se inserta a la base de datos con la contraseña encriptada

// Se genera un JWT para regresarselo al usuario recien registrado

// Aqui se crea el usuario y se inserta a la base de datos con la contraseña encriptada

// Se genera un JWT para regresarselo al usuario recien registrado

// Se genera un JWT para regresarselo al usuario recien registrado



module.exports = {
  registerUser,
};
