const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');

// Load environment variables from .env
dotenv.config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // for parsing JSON
app.use(cors());

const dbURI = 'mongodb+srv://lahirukalhara:82901317_aA@cluster0.l1l4hpv.mongodb.net/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
