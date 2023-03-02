const express = require("express");
const mongoose = require("mongoose");
const MensRanking = require("./src/models/mens");
require("./src/db/connect");

const mensRanking = require("./src/models/mens");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello From Kedar");
});

app.use(express.json());

//  POST

app.post("/mens", async (req, res) => {
  try {
    // const addingMensRecords = new MensRanking(req.body);
    const addingMensRecords = new mensRanking({
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

app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.send(getMens);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// INDIVIDUAL

app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id });
    res.send(getMen);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//// RANKING

// app.get("/mens/:ranking", async (req, res) => {
//   try {
//     const ranking = req.params.ranking;
//     const getMan = await MensRanking.find({ ranking });
//     res.send(getMan);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate({ _id });
    res.send(getMen);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`We are live on port: ${PORT}`);
});
