import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

  const uri = "mongodb+srv://mongodb:wXErcQgDHoI9OfAW@cluster0.h38by39.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    await client.connect(); // Connect to the MongoDB server

    const database = client.db('stock');
    const inventory = database.collection('Inventory'); // Corrected collection name

    const query = {}; // You can add specific query conditions here if needed
    const allproducts = await inventory.find().toArray(); // Use "collection" instead of "movies"
    
    // console.log(movie);
    return NextResponse.json({ allproducts }); // Return the "movie" array in the JSON response
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("An error occurred");
  } finally {
    await client.close();
  }
}

export async function POST(request) {
    let body=request.body;

    const uri = "mongodb+srv://mongodb:wXErcQgDHoI9OfAW@cluster0.h38by39.mongodb.net/?retryWrites=true&w=majority";
  
    const client = new MongoClient(uri);
  
    try {
      await client.connect(); // Connect to the MongoDB server
  
      const database = client.db('stock');
      const inventory = database.collection('Inventory'); // Corrected collection name
  
      const query = {}; // You can add specific query conditions here if needed
      const product = await inventory.insertOne(body); // Use "collection" instead of "movies"
      
      // console.log(movie);
      return NextResponse.json({ product }); // Return the "movie" array in the JSON response
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.error("An error occurred");
    } finally {
      await client.close();
    }
  }
