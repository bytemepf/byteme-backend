const { json } = require('sequelize');
const app = require('../../server/app')

app.put('/put', (req, res) =>{
    const id = req.params.id   //se requiere el id a modificar por params
    const product = req.body //pide la informacion nueva que entra por el body 


    //json se cambia por la variable que almacene los datos traidos por el GET (getProducts)
    json.filter(e => {
        if(e.id === id) { // Si los ID coinciden ejecute...
            e.name = body.name;
            e.price = body.price;
            e.category = body.category;
            //Estos son ejemplos de las propiedades que se les hara el PUT
        }
    });l
    return res.send(json)
})

module.exports = {
    app,
};