const { Product } = require("../../models/Product.model");


const getProductsByName = async (req, res) => {

  const {query} =  req.query

  try {
    
    let products = await Product.findAll()
    
    products = products.filter(product => 
      product?.name.toLowerCase().includes(query.toLowerCase())
    )
    return res.json(products)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message:"Error en el servidor", error: error.message})
  }

};

module.exports = {
  getProductsByName,
};
