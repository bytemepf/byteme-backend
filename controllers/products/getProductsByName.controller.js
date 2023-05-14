// Importación del metodo que realiza el paginado de los productos
const { paged } = require("../../handlers/paged");

// Importación del modelo Product que permite interactuar con la tabla Product de la base de datos
const { Product } = require("../../models/Product.model");


const getProductsByName = async (req, res) => {

  // En el controller filterProducts explico esto.
  // El query es el nombre de los productos que se quiere buscar
  const { query = "", page = 1, limit = 10 } = req.query

  try {

    // En el controller filterProducts explico esto
    let products = await Product.findAll({ raw: true })

    // Esta instrucción filtra los productos que coincidan por nombre con la constante query
    products = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))

    // En el controller filterProducts explico esto
    if (products.length === 0) {
      return res.status(200).json({ message: "No se encontraron registros", data: [] })
    }

    // En el controller filterProducts explico esto
    const totalProducts = products.length
    const totalPages = Math.ceil(totalProducts / limit)

    // En el controller filterProducts explico esto
    if (page > totalPages) {
      return res.status(200).json({ message: "Numero de pagina no valida", data: [] });
    }

    // En el controller filterProducts explico esto
    const pagedProducts = paged(products, totalPages, page, limit)

    return res.json({
      message: "Filtrado por nombre satisfactorio",
      totalProducts,
      totalPages,
      page,
      data: pagedProducts
    })

  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: "Error en el servidor", error: error.message })
  }

};

module.exports = {
  getProductsByName,
};
