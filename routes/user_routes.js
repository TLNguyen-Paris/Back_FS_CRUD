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
// router.route("/find-user/:id").get((req, res) => {
//   User.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });
router.get("/find-user/:id", async (req, res) => {
  try {
    const getSingleUser = await User.findById(req.params.id);
    console.log("user : ", getSingleUser);
    res.status(200).json(getSingleUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
