const { Router } = require("express");
const { auth } = require("./auth.router");
const { products } = require("./products.router");
const { admin } = require("./admin.router");
const { user } = require("./user.router");
const {nodemailerPay} = require("../middlewares/nodemailer")

const {cart} = require("./cart.router");
const {order} =require("./order.router")
const {stripe} = require("./stripe")
const {paid} = require("./paid.router")
const router = Router();
//router.use("/", async(req,res)=>{
//const resp = await nodemailerPay("cheyinho25@gmail.com",) 
// return res.json(resp)
//});
router.use("/api/auth", auth);
router.use("/api/products", products);
router.use("/api/admin", admin);
router.use("/api/user", user);
router.use("/api/cart",cart)
router.use("/api/order",order)
router.use("/api/checkout", stripe)
// router.get("/api/internal");
router.use("/api/paid",paid)
module.exports = {
  router,
};
