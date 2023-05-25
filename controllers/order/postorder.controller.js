const {Order} = require("../../models/Order.model")
const {Cart} = require("../../models/Cart")
const { Product } = require("../../models/Product.model");
const {User}=require("../../models/User.model")

const postorderuser = async (req,res)=>{
    try {
      const {adress,phone,city,country}=req.body
     const Cart_id = req.params
     const user_id = req.params
     const nameuser= await User.findByPk(user_id)
     console.log(nameuser)
     const carroaorden= await Cart.findByPk(Cart_id)
     console.log(carroaorden)
     const neworder= await Order.create(
      {
        detail:Cart_id.productid,
        adress: adress,
        phone:phone,
        city: city,
        country:country,
        name:nameuser.name,
        user_id:user_id,
        total:Cart_id.total
      }
     )
     res.status(200).json(neworder)  
      } catch  {
        res.status(400).send("not found 'post orders'")
      }
}
module.exports = {
  postorderuser
};
