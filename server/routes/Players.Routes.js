const express = require("express");
const router = express.Router();

const Players = require("../models/Players");

router.get("/players", async (req, res) => {
  const playersSearched = await Players.find();
  res.json(playersSearched);
});

router.post("/players/add", async (req, res) => {
  const addPlayer = new Players(req.body);
  const savedPlayer = await addPlayer.save();

  res.json(savedPlayer);
});

module.exports = router;
