const express = require("express");
const { router } = require("../router/router");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const fileUpload = require("express-fileupload");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
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
