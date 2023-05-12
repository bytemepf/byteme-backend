const { Product } = require("../models/Product.model");

const test = async (req, res) => {
  const { count, rows } = await Product.findAndCountAll({
           offset:0,
           limit:2,
           order: [['name', 'ASCE']], 
         });
         res.json({count, rows})
}

module.exports = {
  test
}

// router.get("/products", async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const pageSize = parseInt(req.query.pageSize) || 10;

//     // Validar los parámetros de paginado
//     if (page < 1 || pageSize < 1 || pageSize > 100) {
//       return res.status(400).json({ message: 'Parámetros de paginado inválidos' });
//     }

//     const offset = (page - 1) * pageSize;
//     const limit = pageSize;

//     const { count, rows } = await Request.findAndCountAll({
//       offset,
//       limit,
//       order: [['createdAt', 'DESC']], // Ordenar por fecha de creación descendente
//     });

//     const totalPages = Math.ceil(count / pageSize);

//     return res.json({
//       data: rows,
//       page,
//       pageSize,
//       totalPages,
//       totalRecords: count,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Error al obtener registros de solicitudes' });
//   }
// });