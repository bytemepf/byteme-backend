const { Router } = require("express");
const { account } = require("../controllers/user/account.controller");

const user = Router();

user.get("/", account);

module.exports = {
  user,
};
