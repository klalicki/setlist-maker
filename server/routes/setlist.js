const express = require("express");
const Setlist = require("../models/setlist");
const router = express.Router();

// create
router.post("/", async (req, res) => {
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
router.get("/:setlistID", async (req, res) => {
  try {
    // use the model
    const setlist = await Setlist.getSetlist(req.params.setlistID);
    res.send(setlist);
  } catch (error) {
    console.log(error);
    // send an error:
    res.status(500).send({ message: error });
  }
});

// update
router.put("/:setlistID", async (req, res) => {
  try {
    // use the model
    const updatedSetlist = await Setlist.updateSetlist(
      req.params.setlistID,
      req.body.updatedSetlist
    );
    res.send(updatedSetlist);
  } catch (error) {
    // send an error:
    res.status(401).send({ message: error });
  }
});
// delete
router.delete("/:setlistID", async (req, res) => {
  try {
    await Setlist.deleteSetlist(req.params.setlistID);
    res.status(200).send({ message: "deleted successfully" });
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

module.exports = router;
