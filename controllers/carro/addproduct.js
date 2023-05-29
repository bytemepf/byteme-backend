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
    const nameproduct = idproduc.name
   
        const Price = idproduc.price*count
        const productuser =await Cart.findOne({ where: { user: userId,productid:productid } });
        const cartuser = await Cart.findAll({where:{user:userId}}) 
       // console.log(productuser)
     if(!productuser){
            const cartorder =await Cart.create(
                {
                    user:userId,
                    productid: productid,
                   totalC:Price,
                   quantityP: count,
                   productname: nameproduct
                    
                }
            )
            res.status(200).json(cartorder)
        }else{
            const countactual =productuser.quantityP
            const totalAc = idproduc.price
            const countA = countactual + count
           const countcart = await productuser.update({quantityP:countactual+count,totalC:countA*totalAc}, {where: {productid: productid}})
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