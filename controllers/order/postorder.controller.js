const {Order} = require("../../models/Order.model")
const {Cart} = require("../../models/Cart")
const {User}=require("../../models/User.model")

const postorderuser = async (req,res)=>{
   try {
      const {adress,phone,city,country,productC}=req.body
    // const Cart_id = req.params
     const userId = req.params.userId
    // console.log(req.params)
     const nameuser= await User.findOne({where:{email:userId}})
     console.log(nameuser.name)
     console.log("________")
     const nameep=[
      {
        id: '8200dd15-186b-4fd0-a92e-af8be2d9c08f',
        name: 'Grabadora de voz digital',
        description: 'Grabadora portátil de voz digital con amplio almacenamiento y alta calidad de grabación.',
        brand: 'Olympus',
        price: 79.99
      },
      {
        id: '8200dd15-186b-4fd0-a92e-af8be2d9c08f',
        name: 'Grabadora de voz digital',
        description: 'Grabadora portátil de voz digital con amplio almacenamiento y alta calidad de grabación.',
        brand: 'Olympus',
        price: 79.99
      }
    ]
  //   const cartALL = await Cart.findAll({where:{user:userId}})
    //const Namep= JSON.parse([productC])
  //const idP = productC.map((producto) => producto.id);
    //const nameP = productC.map((producto) => producto.name);
 //    const nombresProductos = [];
 // for (let i = 0; i < cartALL.length; i++) {
 //   nombresProductos.push(cartALL[i].productname);
 // }
 console.log(productC)
 var sumaname = [];  
  for (let i = 0; i < nameep.length; i++) {
    sumaname.push(nameep[i].name);
  }
    var sumaTotalC = 0;  
  for (let i = 0; i < nameep.length; i++) {
    sumaTotalC += nameep[i].price;
  }
   //  const carduserall= await cartALL.length
   //  console.log(carduserall)
     const neworder= await Order.create(
      {
        detail:sumaname.join(','),
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
