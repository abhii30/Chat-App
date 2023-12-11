const express = require("express");
const {
  registerUser,
  authUser,
  showUsers,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser).get(showUsers);

router.route("/login").post(authUser);

module.exports = router;
