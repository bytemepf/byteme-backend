const {Order} = require("../../models/Order.model")
const {Cart} = require("../../models/Cart")

const getAll = async (req, res) => {
 
    try {
      const userId = "08cc7624-2ae4-43bd-988a-0a5d0c6ab2bf"
        const allorder = await Order.findAll()
        const cartALL = await Cart.findAll({where:{user:userId}})
     const carduserall= await cartALL
        if (allorder.length<1){
          res.status(200).send("No hay ordenes")
        }else{
        res.status(200).json(carduserall)
        }
    } catch {
        res.status(400).send("Not found getAll")
    }
  };

module.exports = {
    getAll
  };