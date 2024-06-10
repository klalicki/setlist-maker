// import libraries
const express = require("express");
const Album = require("../models/album");
const router = express.Router();

// route boilerplate
router.get("/url", async (req, res) => {
  try {
    // use the model
  } catch (error) {
    // send an error:
    res.status(401).send({ message: "message" });
  }
});

module.exports = router;
