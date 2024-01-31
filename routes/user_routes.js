const express = require("express");
const router = express.Router();

const User = require("./../models/User_Schema");

// User Post Route
router.post("/create-user", async (req, res) => {
  console.table(req.body);
  try {
    const postUser = await User.create(req.body);
    res.status(201).json(postUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// User Get Route
router.get("/get-user", async (req, res) => {
  try {
    const getUsers = await User.find();
    console.log(getUsers);
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
