const express = require("express");
const router = express.Router();
const User = require("./../models/User_Schema");

// Create Route
router.route("/create-user").post((req, res, next) => {
  User.create(req.body, (err, data) => {
    console.log(req.body);
    if (err) {
      return next(err);
    } else {
      console.table(req.body);
      res.json(data);
    }
  });
});

module.exports = router;
