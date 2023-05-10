const bcryptjs = require("bcryptjs");
const { User } = require("../../models/User.model");
const { generateJWT } = require("../../helpers/generateJWT");

const loginUser = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res
        .status(404)
        .json({ message: "No existe un usuario con el correo " + email });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    if (!user.active) {
      return res.status(400).json({ message: "Usuario inactivo" });
    }

    const { id, name, role } = user;
    const token = await generateJWT(user.id);

    return res.status(200).json({ id, name, role, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};
