const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const generateToken = require("../config/generateToken");

const showUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400).send("Please enter all the fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).send("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
    console.log("User created successfully");
  } else {
    res.status(400).send("Invalid user data");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(400).send("Please enter all the fields");
  }

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).send("Invalid email or password");
  }
});

module.exports = { registerUser, authUser, showUsers };
