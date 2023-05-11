const { User } = require("../models/User.model");

const isEmail = async (email = "") => {
  const isEmail = await User.findOne({ where: { email } });
  if (isEmail) {
    throw new Error(`El correo: ${email} ya esta registrado`);
  }
};

const isNumber = (num) => {
  if (!(typeof Number(num) === "number")) {
    throw new Error(`El campo no es un numero`);
  }
  return true;
};

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
