const { Product } = require("../../models/Product.model");


const filterProducts = async (req, res) => {

  const {category, price} =  req.query

  try {

    let products = await Product.findAll()

    if(category) {
        products = products.filter(product => 
            product?.category.toLowerCase() === category.toLowerCase()
          )
    }

    if(price) {
        products = products.filter(product => 
            product?.price <= Number(price)
          )
    }
    
    
  
    return res.json(products)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message:"Error en el servidor", error: error.message})
  }

};

module.exports = {
  filterProducts,
};
