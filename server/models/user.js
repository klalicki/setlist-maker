const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  albums: [{ type: mongoose.Schema.ObjectId, ref: "Setlist", required: true }],
  setlists: [
    { type: mongoose.Schema.ObjectId, ref: "Setlist", required: true },
  ],
});

const User = mongoose.model("User", userSchema);
// UTILITY
const getUser = async (username) => {
  return User.findOne({ username: username }).exec();
};

// CREATE
const register = async (username, password, email) => {
  const user = await getUser(username);
  console.log(user);
  if (user) throw Error("Username already in use!");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    username: username,
    password: hashedPassword,
    email: email,
  });
  return newUser;
};
// READ
const login = async (username, password) => {
  const user = await getUser(username);
  if (!user) throw Error("User not found!");
  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (!isCorrectPassword) throw Error("Incorrect password!");
  return user;
};
// UPDATE
const updatePassword = async (id, password,oldPassword) => {
  const user = await User.updateOne(
    { _id: id },
    { $set: { password: password } }
  );
  return await User.findById(id);
};
// DELETE
const deleteUser = async (id) => {
  await User.deleteOne({ _id: id });
};

module.exports = { register, login, updatePassword, deleteUser };
