const { paged } = require("../../handlers/paged");
const { Product } = require("../../models/Product.model");

const getAllProducts = async (req, res) => {

  const { page = 1, limit = 10 } = req.query;

  try {
    
    let products = await Product.findAll()

    if(products.length === 0){
      return res.status(200).json({message: "No se encontraron registros", data: [] })
    }

    const totalProducts = products.length
    const totalPages = Math.ceil(totalProducts / limit)

    if(page>totalPages){
      return res.status(200).json({ message: "Numero de pagina no valida", data: [] });
    }

    const pagedProducts = paged(products,totalPages,page,limit)

    return res.json({message: "Registros traidos correctamente",
    totalProducts,
    totalPages,
    page,
    data:pagedProducts
  })

  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message:"Error en el servidor", error: error.message})
  }
};

module.exports = {
  getAllProducts,
};
