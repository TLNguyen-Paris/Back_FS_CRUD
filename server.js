require("dotenv").config();
require("./config/database");

const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors({ credentials: true, origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen("4432");

const UserRoutes = require("./routes/user_routes");

app.use("/fs/api", UserRoutes);
