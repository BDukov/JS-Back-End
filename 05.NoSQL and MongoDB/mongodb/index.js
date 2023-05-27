const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionStr = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(connectionStr, { useUnifiedTopology: true});

async function connectDB() {
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("test");

    const result = await collection.find().toArray();

    console.log(result);
}

connectDB();
