const { uploadImage } = require("../../helpers/cloudinary");
const { validate } = require('uuid');
const { Product } = require("../../models/Product.model");
const fs = require("fs-extra");

const putProduct = async (req, res) => {
  const { id } = req.params;
console.log(req.body)
  if(!validate(id)){
    return res.json({msg: `No es un uuid`});
  }
  
  const product = await Product.update({id}, {where: {...req.body}});

      return res.json(product);
  
  
  try {
    if(!product){
      return res.json({msg: `No existe producto con ese id`});
      return res.json({msg: `El indentificador no es valido: No es un uuid`});

    }
  
    if (req.files?.image) {
      const { secure_url } = await uploadImage(req.files.image.tempFilePath);
      await product.update({ ...req.body, image: secure_url });
      await product.save();
      await fs.unlink(req.files.image.tempFilePath);
      return res.json(product);
    }
  
    
    if (req.body.image.length>4) {
      const product = await Product.update({where:{ ...req.body }});
      await product.save();

      return res.json(product);
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message:"Error en el servidor", error: error.message})
  }

 



};

module.exports = {
   putProduct,
};
