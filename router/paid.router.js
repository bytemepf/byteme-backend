const { Router } = require("express");
const {Paid}= require('../controllers/paid/paid.controller');
const { nodemailerPay } = require("../middlewares/nodemailer");
const { validateJWT } = require("../middlewares");
const paid = Router();


paid.get("/:userId", Paid);

module.exports = {
  paid
}