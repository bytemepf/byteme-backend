const postProduct = require("../controllers/products/postProductHandler.controller")
const getProductById = require("../controllers/products/getProductById.controller")

const getProductByIdHandler = (req, res) => {
    const id = req.params.id;
    try {
        const product = getProductById(id)
        res.status(201).json(product)
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
};

const postProductHandler = async (req, res) => {
    const {name, email, password, role, google} = req.body;
    await postProduct(name, email, password, role, google)
    res.status(201).json("creado correctamente")
}


module.exports = {
    getProductByIdHandler,
    postProductHandler,
};

