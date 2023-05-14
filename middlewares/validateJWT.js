const jwt = require("jsonwebtoken");

const { User } = require("../models");

// Este middleware se encarga de validar el token que proviene del front.
// Si el token no tiene validez no permite que el usuario avance
// Solo ha sido implementado en una ruta, mas adelanten deberan implementarlo en mas rutas
const validateJWT = async (req, res, next) => {

    const token = req.header("x-token");

    if (!token) {
        return res.status(400).json({ message: "No hay token en la petición" });
    }

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findByPk(id, { raw: true })

        if (!user) {
            return res.status(400).json({ message: "Token no valido - Usuario no exite en DB" });
        }

        if (!user.active) {
            return res.status(400).json({ message: "Token no valido - Usuario con estado false" });
        }

        req.user = user;

        return next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Token no válido" });
    }
};

module.exports = {
    validateJWT,
};
