import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
// const { MongoClient } = require("mongodb");

export async function GET(request) {
    return NextResponse.json({"a":34})
}

// Replace the uri string with your connection string.
const uri = "mongodb+srv://mongodb:BFbW8jrjZyKbuHRx@cluster0.h38by39.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);