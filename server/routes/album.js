// import libraries
const express = require("express");
const Album = require("../models/album");
const router = express.Router();

// create
router.post("/new", async (req, res) => {
  try {
    console.log(typeof req.body);
    const newAlbum = await Album.createAlbum(
      req.body.title,
      req.body.artist,
      req.body.year
    );
    res.send(newAlbum);
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
    const album = await Album.getAlbum(req.body.id);
    res.send(album);
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

// update
router.put("/update", async (req, res) => {
  try {
    // use the model
    const updatedAlbum = await Album.updateAlbum(
      req.body.id,
      req.body.updatedAlbum
    );
    res.send(updatedAlbum);
  } catch (error) {
    // send an error:
    res.status(401).send({ message: error });
  }
});
// delete
router.delete("/delete", async (req, res) => {
  try {
    await Album.deleteAlbum(req.body.id);
    res.status(200).send({ message: "deleted successfully" });
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

module.exports = router;