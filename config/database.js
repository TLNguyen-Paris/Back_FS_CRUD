require("dotenv").config();

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_CONNECT);
}

const database = mongoose.connection;
database.on("error", console.error.bind(console, " Connection Error"));
database.once("open", () => {
  console.log("Connected with database");
});
