const { Router } = require("express");
const { updateUser } = require("../controllers/admin/updateUser.controller");

const admin = Router();

admin.put("/user/active/:id", updateUser);

module.exports = {
  admin,
};
