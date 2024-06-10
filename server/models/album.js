const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema({
  title: String,
  artist: String,
  year: Number,
  songs: [String],
});

const Album = mongoose.model("Album", albumSchema);

const createAlbum = async (title, artist, year) => {
  const newAlbum = await Album.create({ title, artist, year });
  return newAlbum.toObject();
};

const getAlbum = async (albumID) => {
  const album = await Album.findById(albumID);
  return album.toObject();
};

const updateAlbum = async (albumID, updatedAlbum) => {
  const album = await Album.updateOne(
    { _id: albumID },
    { $set: { ...updatedAlbum } }
  );
};
const deleteAlbum = async (albumID) => {
  await Album.deleteOne({ _id: albumID });
};

module.exports = { createAlbum, getAlbum, updateAlbum, deleteAlbum };
