import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const destination = req.nextUrl.search.split('?').filter(Boolean).pop(); ;
  // Construct the absolute path to the JSON file
  const filePath = path.join(process.cwd(), 'src/app/Data', `${destination}.json`);
  const data = fs.readFileSync(filePath, 'utf-8');
  try {
    // Read the file asynchronously
    const jsonData = JSON.parse(data); // Parse the JSON data if needed
  
    return NextResponse.json(jsonData);
  } catch (err) {
    console.error('Error reading file:', err);
    return NextResponse.json({ error: 'File not found or could not be read' });
  }
}

export async function POST(req) {
  try {
    const body = await req.json(); // Get request body
    return NextResponse.json({ message: "Destination created", data: body });
  } catch (error) {
    return NextResponse.json({ message: "Error processing request" }, { status: 500 });
  }
}