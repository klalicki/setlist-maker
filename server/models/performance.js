const mongoose = require("mongoose");
const performanceSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  setlistID: { type: mongoose.Schema.ObjectId, ref: "Setlist", required: true },
  data: {
    date: Date,
    venue: String,
    notes: String,
  },
});

const Performance = mongoose.model("Performance", performanceSchema);

// create function
// 'data' is an object containing any combination of date, venue, and notes, since none are strictly required
const createPerformance = async (userID, setlistID, data) => {
  const newPerformance = await Performance.create({
    userID: userID,
    setlistID: setlistID,
    data: data,
  });
  return newPerformance.toObject();
};

const getPerformance = async (performanceID) => {
  const performance = await Performance.findById(performanceID);
  return performance.toObject();
};

const updatePerformanceData = async (performanceID, performanceData) => {
  await Performance.updateOne(
    { _id: performanceID },
    { $set: { data: performanceData } }
  );
  const updatedPerformance = await Performance.findById(performanceID);
  return updatedPerformance.toObject();
};

const deletePerformance = async (performanceID) => {
  await Performance.deleteOne({ _id: performanceID });
};

module.exports = {
  createPerformance,
  getPerformance,
  updatePerformanceData,
  deletePerformance,
};
