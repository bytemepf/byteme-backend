const { User } = require("../models/User.model");

const isEmail = async (email = "") => {
  const isEmail = await User.findOne({ where: { email } });
  if (isEmail) {
    throw new Error(`El correo: ${email} ya esta registrado`);
  }
};

module.exports = {
  isEmail,
};
