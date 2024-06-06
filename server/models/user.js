const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  uesrname: String,
  password: String,
  email: String,
  albums: [String],
  setlists: [String],
});
const User = mongoose.model("User", userSchema);

module.exports = {};
