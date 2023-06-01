// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51N6grFDH4FxWaNHv6qZoPtl55F3AApQtxzDxDI88jr4n9TEI0G5bdeUmkUiZlu6vUesJgFAYbEMXbO9t7hXL5ynX00wD7WhVow');
const { nodemailerPay } = require('../../middlewares/nodemailer');

const calculateTotalAmount = (quantity,price) => {
  const pricePerItem = price * 100
  const totalAmount = quantity * pricePerItem;
  return totalAmount;
};

const paymentStripe = async (req, res, next) => {
  const { email, quantity, price} = req.body;

  console.log(email);

  await stripe.paymentIntents.create(
    {
     // source: tokenId,
      amount: calculateTotalAmount(quantity,price),
      currency: 'USD',
     //payment_method: 'pm_card_visa',
      automatic_payment_methods: {
      enabled: true
    },
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        next(new Error('Error in paymentStripe' + stripeErr))
      } else {
        res.status(200).json(stripeRes)
      }
    }
  )
  await nodemailerPay(email, price); 
}

module.exports = paymentStripe
//const stripe = require('stripe')('sk_test_51N6grFDH4FxWaNHv6qZoPtl55F3AApQtxzDxDI88jr4n9TEI0G5bdeUmkUiZlu6vUesJgFAYbEMXbO9t7hXL5ynX00wD7WhVow');
//
//const calculateTotalAmount = (quantity,price) => {
//  const pricePerItem = price * 100
//  const totalAmount = quantity * pricePerItem;
//  return totalAmount;
//};
//
//const paymentStripe = async (req, res, next) => {
//  const { quantity,price} = req.body;
//
//  await stripe.paymentIntents.create(
//    {
//     // source: tokenId,
//      amount: calculateTotalAmount(quantity,price),
//      currency: 'USD',
//     //payment_method: 'pm_card_visa',
//     automatic_payment_methods: {
//      enabled: true
//    },
//    },
//    (stripeErr, stripeRes) => {
//      if (stripeErr) {
//        next(new Error('Error in paymentStripe' + stripeErr))
//      } else {
//        res.status(200).json(stripeRes)
//      }
//    }
//  )}
//
//module.exports = paymentStripe
