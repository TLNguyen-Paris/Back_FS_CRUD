const express = require("express");
const router = express.Router();

const User = require("./../models/User_Schema");

// Create Route
// Mongo 6.0 (.create()) can get callback
// router.route("/create-user").post(async (req, res, next) => {
//   await User.create(req.body, (err, data) => {
//     console.log(req.body);
//     if (err) {
//       return next(err);
//     } else {
//       console.table(req.body);
//       res.json(data);
//     }
//   });
// });

router.post("/create-user", async (req) => {
  await User.create(req.body);
  console.table(req.body);
});

module.exports = router;
