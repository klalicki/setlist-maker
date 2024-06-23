// import libraries
const express = require("express");
const Song = require("../models/song");
const router = express.Router();

// For these routes:
// the request body and/or response is always a Song object

// create

router.post("/", async (req, res) => {
  try {
    console.log(typeof req.body);
    const newSong = await Song.createSong(req.body);
    res.send(newSong);
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});
// retrieve
router.get("/:songID", async (req, res) => {
  try {
    // use the model
    const Song = await Song.getSong(req.params.songID);
    res.send(Song);
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

// update
router.put("/:songID", async (req, res) => {
  try {
    // use the model
    const updatedSong = await Song.updateSong(req.params.songID, req.body);
    res.send(updatedSong);
  } catch (error) {
    // send an error:
    res.status(401).send({ message: error });
  }
});
// delete
router.delete("/:songID", async (req, res) => {
  try {
    await Song.deleteSong(req.params.songID);
    res.status(200).send({ message: "deleted successfully" });
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

module.exports = router;
