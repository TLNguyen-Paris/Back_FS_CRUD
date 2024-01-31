// Setup model
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create User Schema structure
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  created_date: {
    type: String,
    required: true,
  },
  lastupdate_date: {
    type: Array,
  },
});

// Validate User Model and export to the root ready to use
const UserModel = mongoose.model("FS/CRUD_User", userSchema);
module.exports = UserModel;
