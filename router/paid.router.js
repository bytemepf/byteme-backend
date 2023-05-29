const { Router } = require("express");
const {Paid}= require('../controllers/paid/paid.controller')
const paid = Router();


paid.get("/:userId",Paid);

module.exports = {
  paid
}