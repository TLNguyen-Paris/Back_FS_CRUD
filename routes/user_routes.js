const express = require("express");
const router = express.Router();

const User = require("./../models/User_Schema");

// POST User Route (create User)
router.post("/create-user", async (req, res) => {
  try {
    const postUser = await User.create(req.body._value);
    res.status(201).json(postUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT User Update
router.put("/update-user/:id", async (req, res) => {
  console.log(`params id :${req.params.id}`);
  console.log(`update data: ${req.body}`);
  const userID = req.params.id;
  const updateData = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(userID, updateData);
    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    } else {
      res.json(updateUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET All Users Route
router.get("/get-user", async (req, res) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Single User Route
router.get("/find-user/:id", async (req, res) => {
  try {
    const getSingleUser = await User.findById(req.params.id);
    res.status(200).json(getSingleUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
