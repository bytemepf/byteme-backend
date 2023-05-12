require("dotenv").config();

const { database } = require("./database/connection");
// const { loadDataInCategories } = require("./database/loadData");

require("./models");

const { app } = require("./server/app");

const main = async () => {
  try {
    //
    await database.sync({ alter: true });
    console.log("Conexion establecida con la base de datos");

    // await loadDataInCategories();
    // console.log("Categorias cargadas correctamente en la base de datos");

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
