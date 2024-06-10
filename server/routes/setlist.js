const express = require("express");
const Setlist = require("../models/setlist");
const router = express.Router();

// create
router.post("/new", async (req, res) => {
  try {
    console.log(typeof req.body);
    const newSetlist = await Setlist.createSetlist(req.body);
    res.send(newSetlist);
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});
// retrieve
router.get("/get", async (req, res) => {
  try {
    // use the model
    const Setlist = await Setlist.getSetlist(req.body.id);
    res.send(Setlist);
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

// update
router.put("/update", async (req, res) => {
  try {
    // use the model
    const updatedSetlist = await Setlist.updateSetlist(
      req.body.id,
      req.body.updatedSetlist
    );
    res.send(updatedSetlist);
  } catch (error) {
    // send an error:
    res.status(401).send({ message: error });
  }
});
// delete
router.delete("/delete", async (req, res) => {
  try {
    await Setlist.deleteSetlist(req.body.id);
    res.status(200).send({ message: "deleted successfully" });
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

module.exports = router;
