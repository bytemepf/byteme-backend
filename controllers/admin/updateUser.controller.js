const { User } = require("../../models/User.model");

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  console.log(user);
  user.active = user.active ? false : true;

  user.save();

  res.status(200).json(user);
};

module.exports = { updateUser };
