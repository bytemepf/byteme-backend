const { Product } = require("../../models/Product.model");
const { validate } = require('uuid');


const getProductById = async (req, res) => {
    const {id} = req.params

    if(!validate(id)){
        return res.json({msg: `El indentificador no es valido: No es un uuid`});
      }

  try {
    
    const product = await Product.findByPk(id)
    if(!product){
      return res.json({msg: `No existe producto con ese id`});
    }
    return res.json(product)

  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message:"Error en el servidor", error: error.message})
  }
};

module.exports = {
  getProductById,
};