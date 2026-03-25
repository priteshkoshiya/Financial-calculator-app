import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { year, data } = await request.json();
    
    if (!year || !data) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    // Security check - you can add a secret header check here later
    
    // Construct path to the JSON file
    const filePath = path.join(process.cwd(), 'lib/Data', `d-${year}.json`);
    
    // Write contents to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    
    return NextResponse.json({ success: true, path: filePath });
  } catch (error) {
    console.error('Save error:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
