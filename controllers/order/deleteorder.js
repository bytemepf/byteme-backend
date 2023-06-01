const {Cart} = require("../../models/Cart")
const { Product } = require("../../models/Product.model");
const {Order} = require('../../models/Order.model')


const deleteorder = async (req,res)=>{
    try {
    const userId = req.params.userId;
    const orderuser = await Order.findAll({ where: { userId: userId } });
    if (orderuser) {
        await  orderuser.destroy({ where: { userId: userId } });
        res.status(200).send("la orden se eliminado correctamente");
      } else {
        res.status(200).send("no existe orden");
      }
    } catch  {
        
    }
}
module.exports = {
    deleteorder
  };
  