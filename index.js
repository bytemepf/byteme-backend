require("dotenv").config();

const { database } = require("./database/connection");
require("./models/User.model");
const { app } = require("./server/app");

const main = async () => {
  try {
    //
    await database.sync({ force: true });
    console.log("Conexion establecida con la base de datos");

    app.listen(process.env.PORT, () => {
      console.log("Servidor eschuchando en el puerto", process.env.PORT);
    });
    //
  } catch (error) {
    //
    console.error("Conexion fallida con la base de datos");
    console.log(error.message);
    //
  }
};

main();
