const {Cart} = require("../../models/Cart")
const { Product } = require("../../models/Product.model");
const {User}=require("../../models/User.model")

const addproduct = async (req,res)=>{
    try{

    const userId = req.params.userId
    const {productid,count}=req.body
    
    if(!productid){
        res.status(400).send("need productid")
    }
    const idproduc = await Product.findByPk(productid)
   
        const Price = idproduc.price*count
        const productuser =await Cart.findOne({ where: { user: userId,productid:productid } });
       // console.log(productuser)
     if(!productuser){
            const cartorder =await Cart.create(
                {
                    user:userId,
                    productid: productid,
                   total:Price,
                   quantityP: count
                    
                }
            )
            res.status(200).json(cartorder)
        }else{
            const countactual =productuser.quantityP
            const totalAc = productuser.total
           const countcart = await productuser.update({quantityP:countactual+count,total:countactual*totalAc}, {where: {productid: productid}})
           res.status(200).json(countcart)
        }
        
    }catch(error){
        console.log(error)
        res.status(400).send("Not foun addproduct")
    }
}
module.exports = {
    addproduct
  };