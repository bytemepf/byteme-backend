const {Cart} = require("../../models/Cart")
const { Product } = require("../../models/Product.model");


const deleteproduct = async (req,res)=>{
 // try {
 //   const userId = req.params.userId;
 //   const productid=req.params.productid
 //   const orderuser = await Cart.findAll({ where: { productid: productid } });
//
 //   if (orderuser.length > 0) {
 //     await Cart.destroy({ where: { productid: productid } });
 //     res.status(200).send("Carrito producto correctamente");
 //   } else {
 //     res.status(200).send("El carrito está vacío");
 //   }
 // } catch (error) {
 //   console.error(error);
 //   res.status(500).send("Not found deleteproduct");
 // }
 const productid = req.params.productid;

 try {
    const cart = await Cart.findOne({ where: { productid: productid } });

    if (cart) {
      await cart.destroy();
      res.status(200).send( 'El objeto ha sido eliminado correctamente' );
    } else {
      res.status(404).send('El objeto no fue encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocurrió un error al eliminar el objeto');
  }
}
module.exports = {
    deleteproduct
  };