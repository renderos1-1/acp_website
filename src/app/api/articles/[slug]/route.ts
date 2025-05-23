import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1338';
    console.log('Proxy API route fetching article with slug:', slug);
    
    // First get all articles with properly populated media including Documents
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
    
    // Find the article with the matching slug
    const article = data.data.find((article: { Slug: string }) => article.Slug === slug);
    
    if (!article) {
      return NextResponse.json(
        { error: `Article with slug '${slug}' not found` },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ data: article });
  } catch (error) {
    console.error('Error in proxy API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article from Strapi' },
      { status: 500 }
    );
  }
}