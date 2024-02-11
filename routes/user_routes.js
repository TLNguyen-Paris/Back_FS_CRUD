const express = require("express");
const router = express.Router();

const User = require("./../models/User_Schema");

// POST User Route (CREATE User)
router.post("/create-user", async (req, res) => {
  try {
    const postUser = await User.create(req.body._value);
    res.status(201).json(postUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET All Users Route (READ User)
router.get("/get-user", async (req, res) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET Single User Route (READ selected User)
router.get("/find-user/:id", async (req, res) => {
  try {
    const getSingleUser = await User.findById(req.params.id);
    res.status(200).json(getSingleUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT User Update (UPDATE selected User)
router.put("/update-user/:id", async (req, res) => {
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

// DELETE user (DELETE selected User)
router.delete("/delete-user/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const deleteUser = await User.deleteOne({ _id: userId });
    if (deleteUser.deletedCount > 0) {
      res.status(200).json({ message: "User deleted successfully." });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (err) {
    console.error(`Error Delete User : ${err}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
