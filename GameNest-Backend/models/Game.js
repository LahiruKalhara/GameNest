const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isFree: {
    type: Boolean,
    default: false
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
