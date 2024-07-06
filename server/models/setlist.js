const mongoose = require("mongoose");
const setlistSchema = new mongoose.Schema({
  title: String,
  author: String,
  songs: [{ type: mongoose.Schema.ObjectId, ref: "Song", required: true }],
  date: Date,
  published: Boolean,
  notes: String,
});

const Setlist = mongoose.model("Setlist", setlistSchema);

const createSetlist = async (setlistInfo) => {
  const newSetlist = await Setlist.create({ ...setlistInfo });
  return newSetlist.toObject();
};

const getSetlist = async (setlistID) => {
  const setlist = await Setlist.findById(setlistID);
  return setlist.toObject();
};

const getSetlistsByUser = async (userID) => {
  const setlists = await Setlist.find({ author: userID });
  return setlists;
};

const updateSetlist = async (setlistID, newSetlistInfo) => {
  await Setlist.updateOne({ _id: setlistID }, { $set: { ...newSetlistInfo } });
  const updatedSetlist = await Setlist.findById(setlistID);
  return updatedSetlist;
};

const deleteSetlist = async (setlistID) => {
  await Setlist.deleteOne({ _id: setlistID });
};

module.exports = {
  createSetlist,
  getSetlist,
  updateSetlist,
  deleteSetlist,
  getSetlistsByUser,
};
