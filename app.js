const express = require("express");
const mongoose = require("mongoose");
require("./src/db/connect");

const menModel = require("./src/models/mens");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello From Kedar");
});

app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/mydb");

app.post("/mens", async (req, res) => {
  try {
    // const addingMensRecords = new MensRanking(req.body);
    const newRecord = new menModel({
      ranking: req.body.ranking,
      name: req.body.name,
      dob: req.body.dob,
      country: req.body.country,
      score: req.body.score,
      event: req.body.event,
    });
    //console.log(req.body);
    await newRecord.save();
    res.status(201).json({
      message: "Created...",
    });
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`We are live on port: ${PORT}`);
});
