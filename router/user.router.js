const { Router } = require("express");
const { account } = require("../controllers/user/account.controller");
const {infoUser} = require("../controllers/user/account.controller")

const user = Router();

user.get("/", account);
user.get("/Info",infoUser) //user/Info

module.exports = {
  user,
};
