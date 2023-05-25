const { Router } = require("express");
const {addproduct} = require("../controllers/carro/addproduct")
const {CartId} = require("../controllers/carro/getidcarro.controllers")
const {deletecart} = require("../controllers/carro/deletecartid.controllers")
const {deleteproduct} = require("../controllers/carro/deleteproduct")
const cart = Router();

//agregar al carrito
cart.post("/:userId", addproduct);
//carrito por usuario
cart.get("/:userId", CartId);
//limpiar carrito
cart.delete("/:userId",deletecart );

cart.delete("/:userId/:productid",deleteproduct );

//cart.get("/prueba",prueba)

module.exports = {
    cart
  };