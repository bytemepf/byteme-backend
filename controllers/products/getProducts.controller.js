const { Products} = require('../database');


const getProducts = (req, res) => {
  try{
   const {name}=req.query;
   const getallproducts = Products.findAll()
 
   if(name){
     const ProductName = getallproducts.filter((r) =>
           r.name.toLowerCase() === name.toLowerCase());
 
         ProductName.length > 0  ? res.send(ProductName) 
                                 : res.status(404).send( "no product found" );

  }else{
    res.status(200).send(getallproducts)
  }
  }catch{
    res.status(400).send("not found")
}

  //res.json({ ruta: "get/products" });
};

module.exports = {
  getProducts,
};
