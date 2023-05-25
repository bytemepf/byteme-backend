const {Order} = require("../../models/Order.model")
const {Cart} = require("../../models/Cart")


const getOrdersById = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const orders = await Order.findAll({ where: { user: userId } });
  
      if (orders.length > 0) {
        res.status(200).send(orders);
      } else {
        res.status(400).send("No se encontraron órdenes para el usuario especificado");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Ocurrió un error al obtener las órdenes");
    }
  };

module.exports = {
    getOrdersById
  };