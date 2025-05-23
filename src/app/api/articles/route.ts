import { NextResponse } from 'next/server';

// This is a proxy API route to get around CORS issues
export async function GET() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    console.log('Proxy API route fetching from:', `${API_URL}/api/articles`);
    
    const response = await fetch(`${API_URL}/api/articles?populate=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Error from Strapi: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in proxy API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles from Strapi' },
      { status: 500 }
    );
  }
}