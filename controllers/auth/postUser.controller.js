const bcryptjs = require("bcryptjs");
const { User } = require("../../models/User.model");

const postUser = async (req, res) => {
  let { name, email, password } = req.body;

  const salt = bcryptjs.genSaltSync();
  password = bcryptjs.hashSync(toString(password), salt);

  const user = await User.create({ name, email, password });

  res.status(201).json({ user });
};

module.exports = {
  postUser,
};
