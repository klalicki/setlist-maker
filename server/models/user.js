const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  albums: [String],
  setlists: [String],
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

  const newUser = await User.create({
    username: username,
    password: password,
    email: email,
  });
  return newUser;
};
// READ
const login = async (username, password) => {
  const user = await getUser(username);
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
  return await User.findById(id);
};
// DELETE
const deleteUser = async (id) => {
  await User.deleteOne({ _id: id });
};

module.exports = { register, login, updatePassword, deleteUser };
