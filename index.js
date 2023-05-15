// Importaciones de terceros
require("dotenv").config();

// Importación de la base de datos
const { database } = require("./database");

// Sincronización de los modelos
require("./models");

const { app } = require("./server/app");

const main = async () => {
  try {
    await database.sync({ force: false });
    console.log("Conexion establecida con la base de datos");
    app.listen(process.env.PORT, () => {
      console.log("Servidor eschuchando en el puerto", process.env.PORT);
    });
  } catch (error) {
    console.error("Conexion fallida con la base de datos");
    console.log(error.message);
  }
};

main();
