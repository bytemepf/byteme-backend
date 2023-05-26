const { Router } = require("express");
const { Review } = require("../../models");
const { Product } = require("../../models");
const router = Router();

router.post("/review/:idProduct", async (req, res, next) => {
    const {
      idProduct
    } = req.params;
    const {
      rating,
      title,
      description
    } = req.body;
    try {
      const product = await Product.findOne({
        where: { id: idProduct },
        include: {
            model: Review,
            attributes: ["rating", "title","description"],
            through: { attributes: [] }
        }
    })
  
      const review = await Review.create({
        rating,
        title,
        description
      })
      if (product) {
        await review.setProduct(product)
      }
  
      product.addReview(review)
    
    res.status(200).send({msg: "ok"})
  
    } catch (err) {
      console.log(err)
    }
  })

  
router.get("/reviews/:idProduct", async (req, res) => {
  const { idProduct} = req.params;
   try{
    const product = await Product.findByPk(idProduct, {
      include: [
        
       
        {
          model: Review,
          attributes: ["rating", "title", "description"],
          through: {
            attributes: [],
          },
        }
      ],
    });
  
    
  
    res.send(product);
   }catch (err) {
    console.log(err)
  }
});


  module.exports = router;