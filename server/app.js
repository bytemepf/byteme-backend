const express = require("express");
const { router } = require("../router/router");
const cors = require("cors");
const app = express();

const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

app.use(router);

module.exports = {
  app,
};
