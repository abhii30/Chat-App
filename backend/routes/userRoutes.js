const express = require("express");
const {
  registerUser,
  authUser,
  showUsers,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").get(showUsers);
router.route("/").post(registerUser);

router.route("/login").post(authUser);

module.exports = router;
