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

module.exports = {
    getProductByIdHandler,
};
