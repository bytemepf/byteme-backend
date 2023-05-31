const {Order} = require("../../models/Order.model")
const {Cart} = require("../../models/Cart")
const {User}=require("../../models/User.model")

const postorderuser = async (req,res)=>{
  try {
      const {adress,phone,city,country,Cart_id}=req.body
    // const Cart_id = req.params
      const userId = req.params.userId
      const nameuser= await User.findByPk(userId)
      console.log(nameuser.name)
      const carroaorden= await Cart.findByPk(Cart_id)
      const cartALL = await Cart.findAll({where:{user:userId}})
      const nombresProductos = [];
  
  for (let i = 0; i < cartALL.length; i++) {
    nombresProductos.push(cartALL[i].productname);
  }
    var sumaTotalC = 0;  
  for (let i = 0; i < cartALL.length; i++) {
    sumaTotalC += cartALL[i].totalC;
  }
   //  const carduserall= await cartALL.length
   //  console.log(carduserall)
    const neworder= await Order.create(
      {
        detail:nombresProductos.join(', '),
        adress: adress,
        phone:phone,
        city: city,
        country:country,
        name:nameuser.name,
        userId:userId,
        total:sumaTotalC
      }
     )
     res.status(200).json(neworder)  
      } catch (error) {
       console.log(error)
       
        res.status(400).send("not found 'post orders'")
     }
}
module.exports = {
  postorderuser
};
