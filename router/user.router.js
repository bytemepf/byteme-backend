const { Router } = require("express");
const { infoUser } = require("../controllers/user/account.controller");
const {logicalDeletion} = require("../controllers/user/logicalDeletion.controller")

const user = Router();

  user.get("/info", (req, res) => {   //* ESTOS SERÍAN LOS HANDLERS, LOS CONTROLLERS LOS IMPORTO ARRIBA
    try {
        const response = infoUser(); // infoUser es uno de los controllers
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
    }
  });

  // user.put("/info",(req, res) => {  
  //   const {id} = req.params;
    
  //   try {
  //     logicalDeletion(id);  
  //       res.status(200).send("Usuario eliminado correctamente")
  //   } catch (error) {
  //     console.error(error);
  //   }
  // })


module.exports = {user}
