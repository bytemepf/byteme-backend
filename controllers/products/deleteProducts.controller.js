//const axios = require("axios");
const { Products} = require('../database');


const  DeleteProduct= async (req,res)=>{
    const { id } = req.params;
  try {
    const producttoremove = await Products.findByPk(id);
    if (!producttoremove) {
      res.status(400).send("the product does not exist");
    } else {
      producttoremove.destroy();
      return res.send("the product was removed");
    }
  } catch  {
    res.status(400).send("not found");
  }

}  



module.exports = {
    DeleteProduct
  };