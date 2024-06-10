// import libraries
const express = require("express");
const router = express.Router();

// import model:

// route boilerplate
router.get("/url", async (req, res) => {
  try {
    // use the model
  } catch (error) {
    // send an error:
    // 401 is auth
    // 404 is resource not found
    // 500 is generic server error
    res.status(401).send({ message: error });
  }
});

// create

// retrieve

// update

// delete

module.exports = router;
