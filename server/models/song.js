const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  title: String,
  length: Number,
  key: String,
  mood: String,
  performanceNotes: String,
});

const Song = mongoose.model("Song", songSchema);

const createSong = async (songData) => {
  const newSong = await Song.create({ ...songData });
  return newSong.toObject();
};

const createMultipleSongs = async (songInfo) => {
  const newSongs = await songInfo.map(
    ({ title, length, key, mood, performanceNotes }) => {
      return createSong(title, length, key, mood, performanceNotes);
    }
  );
  return newSongs;
};

const getSong = async (songID) => {
  const song = await Song.findById(songID);
  return song.toObject();
};

const updateSong = async (songID, newSongInfo) => {
  await Song.updateOne({ _id: songID }, { $set: { ...newSongInfo } });
  const updatedSong = await Song.findById(songID);

  return updatedSong;
};

const deleteSong = async (songID) => {
  await Song.deleteOne({ _id: songID });
};

module.exports = {
  createSong,
  createMultipleSongs,
  getSong,
  updateSong,
  deleteSong,
};
