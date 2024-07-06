// import libraries
const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await User.login(req.body.username, req.body.password);
    res.send({ ...user.toObject(), password: undefined });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.register(
      req.body.username,
      req.body.password,
      req.body.email
    );
    res.send({ ...newUser.toObject(), password: undefined });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

router.put("/:userID", async (req, res) => {
  console.log("received password change endpoint");
  try {
    const user = await User.updatePassword(
      req.params.userID,
      req.body.password,
      req.body.oldPassword
    );

    res.send({ ...user.toObject(), password: undefined });
  } catch (error) {
    res.status(401).send({ message: error.message || error });
  }
});

router.delete("/:userID", async (req, res) => {
  try {
    const user = await User.deleteUser(req.params.userID);
    // res.send({ ...user, password: undefined });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

module.exports = router;
