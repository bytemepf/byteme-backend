const {Cart} = require("../../models/Cart")
const { Product } = require("../../models/Product.model");


const CartId = async (req,res)=>{
    try{
    const userId = req.params.userId
    if(!userId){
        res.status(400).send("no hay id")
    }
    const orderuser = await Cart.findAll()
    const filteruser = orderuser.filter(userid=>userid.user==userId)
    if(filteruser){
        const sum = filteruser.reduce((accumulator, current) => {
            return accumulator + current.total;
          }, 0);
          const cartF = [filteruser,sum]
          console.log(cartF[1])
        res.status(200).json(cartF)
    }else{
        res.status(200).json("Carrito vacio")
    }
    }catch{
        res.status(400).send("Not found CardId")
    }
}
module.exports = {
    CartId
  };