const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const RSVP = require('./models/RSVP');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error', err));

app.post('/api/rsvp', async (req, res) => {
  const { fullName, plusOne } = req.body;
  try {
    const rsvp = new RSVP({ fullName, plusOne });
    await rsvp.save();
    res.status(200).json({ message: 'RSVP saved' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving RSVP' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));