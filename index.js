require("dotenv").config();

const { app } = require("./server/app");

const main = async () => {
  app.listen(process.env.PORT, () => {
    console.log("Servidor eschuchando en el puerto", process.env.PORT);
  });
};

main();
