const express = require("express");
const Performance = require("../models/performance");
const router = express.Router();

// create
router.post("/new", async (req, res) => {
  try {
    const newPerformance = await Performance.createPerformance(
      req.body.userID,
      req.body.setlistID,
      req.body.data
    );
    res.send(newPerformance);
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});
// retrieve
router.get("/get", async (req, res) => {
  try {
    // use the model
    const performance = await Performance.getPerformance(
      req.body.performanceID
    );

    res.send(performance);
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

// update
router.put("/update", async (req, res) => {
  try {
    // use the model
    const updatedPerformance = await Performance.updatePerformanceData(
      req.body.performanceID,
      req.body.performanceData
    );
    res.send(updatedPerformance);
  } catch (error) {
    // send an error:
    res.status(401).send({ message: error });
  }
});
// delete
router.delete("/delete", async (req, res) => {
  try {
    await Performance.deletePerformance(req.body.performanceID);
    res.status(200).send({ message: "deleted successfully" });
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

module.exports = router;
