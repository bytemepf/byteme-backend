// Importaciones locales

// Importación del metodo que filtra y ordena los productos
// Importación del metodo que realiza el paginado de los productos
const { filtering, paged } = require("../../handlers");

// Importación del modelo Product que permite interactuar con la tabla Product de la base de datos
const { Product } = require("../../models");

const filterProducts = async (req, res) => {

  // constantes que controlan el paginado. page es el numero de pagina y
  // limit es el numero de productos a mostrar por pagina
  const { page = 1, limit = 10 } = req.query;

  try {

    // Trae todos lo productos de la base de datos
    const products = await Product.findAll({ raw: true })

    // Esta instrucción filtra los productos en forma de cascada. 
    // Empezando con los argumentos de mayor prioridad hasta terminar en los de menor prioridad
    // El metodo filtering recibe como argumento los productos traidos de la base de datos
    // y los parametros enviados por el usuario por medio de req.query
    const filteredProducts = filtering({ products, ...req.query })

    // Si despues de la filtración no quedan productos que coincidan
    // con los parametros proporcionados, responde el siguiente mensaje
    if (filteredProducts.length === 0) {
      return res.status(200).json({ message: "No se encontraron registros", data: [] });
    }

    // Esto forma parte del paginado. Ya ni me acuerdo como funciona esto XD.
    // totalProducts y totalPages habla por si mismo
    const totalProducts = filteredProducts.length
    const totalPages = Math.ceil(totalProducts / limit)

    // Si el numero de paginas es mayor a el total de paginas disponibles
    // Responde con el siguiente error
    if (page > totalPages) {
      return res.status(200).json({ message: "Numero de pagina no valida", data: [] });
    }

    // Esto ya crea el paginado de los productos,
    // devuelve la cantidad de productos solicitados en limit. Es un array con productos
    const pagedProducts = paged(filteredProducts, totalPages, page, limit)

    // No hay necesidad de explicar esto
    return res.json({
      message: "Filtrado y ordenamiento satisfactorio",
      totalProducts,
      totalPages,
      page,
      data: pagedProducts
    });

  } catch (error) {

    console.log(error.message);
    return res.status(500).json({ message: "Error en el servidor", error: error.message });

  }
};

module.exports = {
  filterProducts,
};
