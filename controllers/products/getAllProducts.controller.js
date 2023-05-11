const { Product } = require("../../models/Product.model");

const getAllProducts = async (req, res) => {
  try {
    
    const products = await Product.findAll()
    return res.json(products)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message:"Error en el servidor", error: error.message})
  }
};

module.exports = {
  getAllProducts,
};
