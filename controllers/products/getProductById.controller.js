const axios = require('axios'); 

const getProductById = async (req) => {
try{
    res.json({ ruta: `get/products/${req}` })
}
catch (error){
    res.status(400).json({error: error.message})
  }
};

module.exports = {
    getProductById,
};
