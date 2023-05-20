const { Router } = require("express");
const paymentStripe = require("../controllers/Stripe/Stripe")
//const {isAuth} = require('../middlewares/authentication')

const stripe = Router();

stripe.post('/',/*isAuth, */paymentStripe)

module.exports = {
    stripe,
}