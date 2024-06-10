const mongoose = require("mongoose");
const setlistSchema = new mongoose.Schema({
  title: String,
  songs: [String],
  date: Date,
  playedDate: [Date],
  published: Boolean,
  notes: String,
});

