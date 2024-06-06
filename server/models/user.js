const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  uesrname: String,
  password: String,
  email: String,
  albums: [String],
  setlists: [String],
});

const User = mongoose.model("User", userSchema);
// UTILITY
const getUser = async (username) => {
  return await User.findOne({ username: username });
};

// CREATE
const register = async (username, password, email) => {
  const user = getUser(username);
  if (user) throw Error("Username already in use!");

  const newUser = await User.create({ username: username, password: password });
  return newUser;
};
// READ
const login = async (username, password) => {
  const user = getUser(username);
  if (!user) throw Error("User not found!");
  if (user.password !== password) throw Error("Incorrect password!");
  return user;
};
// UPDATE
const updatePassword = async (id, password) => {
  const user = await User.updateOne(
    { _id: id },
    { $set: { password: password } }
  );
};
// DELETE
const deleteUser = async (id) => {
  await User.deleteOne({ _id: id });
};

module.exports = { register, login, updatePassword, deleteUser };
