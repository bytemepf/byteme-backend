const {Order} = require("../../models/Order.model")
const {Cart} = require("../../models/Cart")


const getOrdersByIduser = async (req, res) => {
    const order_id = req.params.order_id;
    
    try {
      const orders = await Order.findByPk(order_id)
  console.log(orders)
      if (orders.length > 0) {
        res.status(200).send(orders);
      } else {
        res.status(400).send("El usuario no tiene ordenes");
      }
   } catch (error) {
      console.error(error);
      res.status(500).send("Not found ");
   }
  
  };

module.exports = {
    getOrdersById
  };