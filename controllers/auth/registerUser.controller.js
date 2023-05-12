const bcryptjs = require("bcryptjs");
const { User } = require("../../models/User.model");

const registerUser = async (req, res) => {
  let { name, email, password } = req.body;


  const salt = bcryptjs.genSaltSync();
  password = bcryptjs.hashSync(password.toString(), salt);

  const user = await User.create({ name, email, password });

  res.status(201).json({ user });
};

module.exports = {
  registerUser,
};
