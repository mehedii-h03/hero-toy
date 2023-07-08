require('dotenv').config();
const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6dgrwby.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const toysCollection = client.db('heroToy').collection('toys')

    app.get('/categories/marvel', async (req, res) => {
      const query = { subCategory: { $regex: new RegExp("marvel", 'i') } };
      const cursor = toysCollection.find(query);
      const result = await cursor.toArray();
      res.send(result)
    })
    app.get('/categories/star', async (req, res) => {
      const query = { subCategory: { $regex: new RegExp("star wars", 'i') } };
      const cursor = toysCollection.find(query);
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/categories/transformer', async (req, res) => {
      const query = { subCategory: { $regex: new RegExp("transformer", 'i') } };
      const cursor = toysCollection.find(query);
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/trending', async (req, res) => {
      const query = { trending: true };
      const cursor = toysCollection.find(query);
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/alltoys', async (req, res) => {
      const cursor = toysCollection.find().limit(20);
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/ascending', async (req, res) => {
      const email = req.query.email;
      const query = { email };
      const options = { sort: { price: 1 } };
      const cursor = toysCollection.find(query, options);
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/descending', async (req, res) => {
      const email = req.query.email;
      const query = { email };
      const options = { sort: { price: -1 } };
      const cursor = toysCollection.find(query, options);
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/mytoys', async (req, res) => {
      const email = req.query.email;
      const query = { email };
      const cursor = toysCollection.find(query);
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/searchtoys', async (req, res) => {
      const name = req.query.toyName.toLowerCase();
      console.log(name);
      const query = { name: { $regex: new RegExp(name, 'i') } };
      const cursor = toysCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/toy/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toysCollection.findOne(query);
      res.send(result)
    })

    app.post('/addtoy', async (req, res) => {
      const toy = req.body;
      console.log(toy);
      const result = await toysCollection.insertOne(toy);
      res.send(result);
    })

    app.put("/updateToy/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const option = { upsert: true }
      const updatedToy = req.body;
      const toy = {
        $set: {
          name: updatedToy.name,
          subCategory: updatedToy.subCategory,
          price: updatedToy.price,
          quantity: updatedToy.quantity,
          rating: updatedToy.rating,
          picture: updatedToy.picture,
          description: updatedToy.description,
          email: updatedToy.email,
          seller: updatedToy.seller,
        }
      }
      const result = await toysCollection.updateOne(filter, toy, option);
      res.send(result);
    })

    app.delete('/toy/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toysCollection.deleteOne(query);
      res.send(result);

    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

