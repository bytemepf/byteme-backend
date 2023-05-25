const {Cart} = require("../../models/Cart")
const { Product } = require("../../models/Product.model");
const {User}=require("../../models/User.model")

const addproduct = async (req,res)=>{
    //console.log(req)
    const userId = req.params.userId
    const {productid,}=req.body
    if(!productid){
        res.status(400).send("need productid")
    }
    const totalprice = await Product.findByPk(productid)
    console.log(totalprice.price)
    const cartorder =await Cart.create(
        {
            user:userId,
            productid: productid,
           total:totalprice.price
            
        }
    )
    res.status(200).json(cartorder)
}
module.exports = {
    addproduct
  };