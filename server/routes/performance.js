const express = require("express");
const Performance = require("../models/performance");
const router = express.Router();

// create

router.post("/", async (req, res) => {

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

router.get("/:performanceID", async (req, res) => {
  try {
    // use the model
    const performance = await Performance.getPerformance(
      req.params.performanceID

    );

    res.send(performance);
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

// update

router.put("/:performanceID", async (req, res) => {
  try {
    // use the model
    const updatedPerformance = await Performance.updatePerformanceData(
      req.params.performanceID,

      req.body.performanceData
    );
    res.send(updatedPerformance);
  } catch (error) {
    // send an error:
    res.status(401).send({ message: error });
  }
});
// delete

router.delete("/:performanceID", async (req, res) => {
  try {
    await Performance.deletePerformance(req.params.performanceID);

    res.status(200).send({ message: "deleted successfully" });
    // use the model
  } catch (error) {
    // send an error:
    res.status(500).send({ message: error });
  }
});

module.exports = router;
