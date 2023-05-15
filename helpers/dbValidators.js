// Importacón del modelo User que interactua con la base de datos
const { User } = require("../models/User.model");

// Los metodos de este archivo funcionan en conjunto con express-validator
// Permite realizar validaciones personalizadas que no se incluyen en express-validator

// Este metodo evita que un usuario se registre con un correo electronico ya registrado 
const isEmail = async (email = "") => {
  const isEmail = await User.findOne({ where: { email } });
  if (isEmail) {
    throw new Error(`El correo: ${email} ya esta registrado`);
  }
};

// Este metodo valida que la propiedad sea un numero
const isNumber = (num) => {
  if (!(typeof Number(num) === "number")) {
    throw new Error(`El campo no es un numero`);
  }

  return true;
};

// Este metodo verifica que el producto a publicar cumpla con alguna de las categorias de abajo
const allowedCategories = async (category) => {
  const categories = [
    "Teclados",
    "Ratones",
    "Gabinetes",
    "Monitores",
    "Sillas",
    "Audio",
    "Camaras",
    "Mandos",
  ];

  if (!categories.includes(category)) {
    throw new Error(
      `La categoria ${category} no es valida. Categorias permitidas: ${categories}`
    );
  }
};

module.exports = {
  isEmail,
  allowedCategories,
  isNumber,
};
