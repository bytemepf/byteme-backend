const { filtering } = require("../../handlers/filtering");
const { paged } = require("../../handlers/paged");
const { Product } = require("../../models/Product.model");

const filterProducts = async (req, res) => {

  const { page = 1, limit = 10 } = req.query;
  
  try {
    const products = await Product.findAll({raw: true})
    
    const filteredProducts = filtering({products, ...req.query})
    
    if (filteredProducts.length === 0) {
      return res.status(200).json({ message: "No se encontraron registros", data: [] });
    }
    
    const totalProducts = filteredProducts.length
    const totalPages = Math.ceil(totalProducts / limit)

    if(page>totalPages){
      return res.status(200).json({ message: "Numero de pagina no valida", data: [] });
    }

    const pagedProducts = paged(filteredProducts,totalPages,page,limit)

    return res.json( { 
      message: "Filtrado y ordenamiento satisfactorio",
      totalProducts,
      totalPages,
      page,
      data:pagedProducts
    });

  } catch (error) {
    
    console.log(error.message);
    return res.status(500).json({ message: "Error en el servidor", error: error.message });
  
  }
};

module.exports = {
  filterProducts,
};
