const {Order} = require("../../models/Order.model")
const {Cart} = require("../../models/Cart")

const getAll = async (req, res) => {
 
    try {
      
        const allorder = await Order.findAll()

        res.status(200).json(allorder)
        
    } catch {
        res.status(400).send("Not found getAll")
    }
  };

module.exports = {
    getAll
  };