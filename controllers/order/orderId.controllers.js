const {Order} = require("../../models/Order.model")


const getOrdersById = async (req, res) => {
  try {
    const orders = await Order.findOne({
      order: [['createdAt', 'DESC']],
    });
    console.log(orders);
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(401).send("No se encontraron órdenes para el usuario especificado");
    }
  } catch (error) {
    console.error(error);
    res.status(400).send("Ocurrió un error al obtener las órdenes");
  }
  };

module.exports = {
    getOrdersById
  };