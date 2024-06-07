// import libraries
const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await User.login(req.body.username, req.body.password);
    res.send({ ...user, password: undefined });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});
