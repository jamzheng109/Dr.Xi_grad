require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
console.log('Connecting to MongoDB with URI:', uri);

const options = {
  tls: true,
  tlsAllowInvalidCertificates: false,
  tlsInsecure: false,
  minVersion: 'TLSv1.2'
};

// Connect to MongoDB
const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    await client.connect();
    const db = client.db('xiparty'); // Use your database name
    const rsvps = db.collection('guestlist'); // Use your collection name

    console.log('✅ Connected to MongoDB');

    app.post('/api/rsvp', async (req, res) => {
      const { fullName, plusOne } = req.body;
      try {
        const result = await rsvps.insertOne({ fullName, plusOne });
        res.status(201).json({ message: 'RSVP saved!', id: result.insertedId });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error saving RSVP' });
      }
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

run().catch(console.dir);