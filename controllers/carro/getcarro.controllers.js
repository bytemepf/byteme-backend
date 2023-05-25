const {Cart} = require("../../models/Cart")
const { Product } = require("../../models/Product.model");

const getcart = async (req,res)=>{
    try {
        let carro = await Cart.findAll({ where: { user} }); 
        console.log(carro)
        const result = [];
        for (let i = 0; i < carro.length; i++) {
            const productData = await Product.findOne({where:{productid: carro[i].productid}})
            const resu = {
                ...carro[i].dataValues,
                quantity: productData.dataValues.quantity,
                brand: productData.dataValues.brand,
            };
            result.push(resu);
        }
        return result;
    
      } catch (error) {
        throw new Error(error.message);
      }
}