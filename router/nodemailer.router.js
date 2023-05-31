const { Router } = require("express");
const { nodemailerController } = require("../controllers/nodemailer/nodemailer.controller");

const nodemailer = Router();


nodemailer.get('/', nodemailerController)


module.exports = {nodemailer}