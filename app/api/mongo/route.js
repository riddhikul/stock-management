import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

const uri = "mongodb+srv://mongodb:wXErcQgDHoI9OfAW@cluster0.h38by39.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect(); // Connect to the MongoDB server

    const database = client.db('RMango');
    const collection = database.collection('Inventory'); // Corrected collection name

    const query = {}; // You can add specific query conditions here if needed
    const result = await collection.findOne(query);

    console.log(result);
    
    return NextResponse.json(result); // Returning the result as JSON
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("An error occurred");
  } finally {
    await client.close();
  }
}
