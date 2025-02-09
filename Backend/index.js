const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(express.json());

// Connect to MongoDB

// const url = 'mongodb://localhost:27017';

const uri = `mongodb://${process.env.NAME_KEY}:${process.env.SECRET_KEY}@cluster0.whh17.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const uri = `mongodb+srv://${process.env.NAME_KEY}:${process.env.SECRET_KEY}@cluster0.whh17.mongodbnet/`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });

    const db = client.db('ecommerceDB');
    const productsCollection = db.collection('products');

    // API Endpoint to Get Products
    app.get('/products', async (req, res) => {
      const result = await productsCollection.find().toArray();
      console.log('result', result);
      res.send(result);
    });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Default Route
app.get('/', (req, res) => {
  res.send('Daraz-এর মতো ই-কমার্স ওয়েবসাইট');
});

// Start Server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
