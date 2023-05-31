const {Order} = require("../../models/Order.model")
const { Product } = require("../../models/Product.model");
const {Cart} = require("../../models/Cart");
// const { nodemailerPay } = require("../../middlewares/nodemailer");

const Paid = async(req,res)=>{
    console.log(req.user);
    try {
        const userId = req.params.userId
        const {email, name} = req.body;

        const carro = await Cart.findAll({where:{user:userId}}) 
        console.log(carro)
        for (let index = 0; index < carro.length; index++) {
            const productcarro = await Product.findByPk(carro[index].productid);
            const cantC = carro[index].quantityP;
            const cantidadP = productcarro.quantity;
            await productcarro.update({ quantity: cantidadP - cantC }, { where: { id: userId } });
        }
        for (let i = 0; i < carro.length; i++) {
            await carro[i].destroy({ where: { user: userId } });
            
        }
        
        // await nodemailerPay(userId, email, name);
        
        res.status(200).send(carro)
    } catch (error) {
        console.log(error)
        res.status(400).send("Not found Paid")
    }
}
module.exports={
    Paid
}