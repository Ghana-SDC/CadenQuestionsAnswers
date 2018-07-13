require("newrelic");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// POSTGRESQL //
require("../database/config/index.js");

const router = require("./router/index.js");
const cors = require("cors");

const app = express();
const PORT = 3227;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", router);

app.listen(
  PORT,
  err =>
    err
      ? console.log("failed to connect to server", err)
      : console.log(`Listening on PORT ${PORT}`)
);
