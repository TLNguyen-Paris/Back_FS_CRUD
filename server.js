require("dotenv").config();
require("./config/database");

const express = require("express");
const app = express();

app.listen("4432");
