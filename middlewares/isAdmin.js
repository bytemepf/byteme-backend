// Este metodo verifica que el rol del usuario sea administrador
// Debe ser usado con middleware en las rutas que riequera privilegios de adminstrador
const isAdmin = (req, res, next) => {
    const { role } = req.user

    if (role === "ADMIN_ROLE") {
        return next()
    }

    return res.status(400).json({ message: "No tiene permisos de administrador" })
}

module.exports = {
    isAdmin
}