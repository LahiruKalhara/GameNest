const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// Get all games
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new game
router.post('/', async (req, res) => {
  const { title, genre, price, isFree, description, imageUrl } = req.body;
  const newGame = new Game({ title, genre, price, isFree, description, imageUrl });

  try {
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
