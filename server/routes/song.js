// import libraries
const express = require("express");
const Song = require("../models/song");
const router = express.Router();

// create
router.post("/new", async (req, res) => {
  try {
    console.log(typeof req.body);
    const newSong = await Song.createSong(
      req.body.title,
      req.body.length,
      req.body.key,
      req.body.mood,
      req.body.performanceNotes
    );
    res.send(newSong);
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
    const Song = await Song.getSong(req.body.id);
    res.send(Song);
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

// update
router.put("/update", async (req, res) => {
  try {
    // use the model
    const updatedSong = await Song.updateSong(
      req.body.id,
      req.body.updatedSong
    );
    res.send(updatedSong);
  } catch (error) {
    // send an error:
    res.status(401).send({ message: error });
  }
});
// delete
router.delete("/delete", async (req, res) => {
  try {
    await Song.deleteSong(req.body.id);
    res.status(200).send({ message: "deleted successfully" });
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

module.exports = router;
