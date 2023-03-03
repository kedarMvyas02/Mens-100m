const express = require("express");
const router = express.Router();
const MensRanking = require("../models/mens");

//  POST

router.post("/mens", async (req, res) => {
  try {
    // const addingMensRecords = new MensRanking(req.body);
    const addingMensRecords = new MensRanking({
      ranking: req.body.ranking,
      name: req.body.name,
      dob: req.body.dob,
      country: req.body.country,
      score: req.body.score,
      event: req.body.event,
    });
    //console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.send(insertMens);
    res.status(201).json({
      message: "Created...",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//    GET

router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.send(getMens);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// INDIVIDUAL

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log("id.....");
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// RANKING

router.get("/ranking/:ranking", async (req, res) => {
  try {
    const ranking = req.params.ranking;
    console.log("rank----" + ranking);
    const getMan = await MensRanking.find({ ranking });
    res.send(getMan);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//  UPDATE

router.patch("/kedar/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log("rank----" + _id);
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// delete

router.delete("/mens/:id", async (req, res) => {
  try {
    const del = await MensRanking.findByIdAndDelete(req.params.id);
    res.send(del);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
