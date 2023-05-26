const {Cart} = require("../../models/Cart")
const { Product } = require("../../models/Product.model");
const {User}=require("../../models/User.model")

const deletecart = async (req,res)=>{
  try {
    const userId = req.params.userId;
    const orderuser = await Cart.findAll({ where: { user: userId } });

    if (orderuser.length > 0) {
      await Cart.destroy({ where: { user: userId } });
      res.status(200).send("Carrito eliminado correctamente");
    } else {
      res.status(200).send("El carrito está vacío");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Not found cart");
  }
}
module.exports = {
    deletecart
  };