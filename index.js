const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./server/routes/user");

mongoose
  .connect(process.env.dbUrl)
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
const app = express();
const path = require("path");
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use("/user", userRoutes);

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
