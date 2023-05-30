const { Router } = require("express");
const { account } = require("../controllers/user/account.controller");
const {infoUser} = require("../controllers/user/account.controller")
const {useremail} = require("../controllers/user/useremail")
const user = Router();

user.get("/", account);
user.get("/Info",infoUser) //user/Info
user.get("/:email",useremail)
module.exports = {
  user,
};
