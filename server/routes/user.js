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
    const newUser = await User.register(
      req.body.username,
      req.body.password,
      req.body.email
    );
    res.send({ ...newUser, password: undefined });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

router.put("/update", async (req, res) => {
  try {
    const user = await User.updatePassword(req.body.id, req.body.password);
    
    res.send({ ...user, password: undefined });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const user = await User.deleteUser(req.body.id);
    // res.send({ ...user, password: undefined });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

module.exports = router;
