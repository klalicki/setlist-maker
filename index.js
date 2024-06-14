const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./server/routes/user");
const albumRoutes = require("./server/routes/album");
const songRoutes = require("./server/routes/song");
const setlistRoutes = require("./server/routes/setlist");
const performanceRoutes = require("./server/routes/performance");
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

app.use("/api/user", userRoutes);
app.use("/api/album", albumRoutes);
app.use("/api/song", songRoutes);
app.use("/api/setlist", setlistRoutes);
app.use("api/performance", performanceRoutes);

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
