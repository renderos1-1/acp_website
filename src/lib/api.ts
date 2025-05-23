import axios from 'axios';
import { ArticleDetailResponse, ArticleListResponse } from '@/types/article';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1338';

console.log('Using API URL:', API_URL);

// Create a reusable axios instance with base configuration
const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  // Include credentials
  withCredentials: true
});

// Add a request interceptor for debugging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making request to: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor for debugging
apiClient.interceptors.response.use(
  (response) => {
    console.log('Response received successfully');
    return response;
  },
  (error) => {
    console.error('Response error:', error.message);
    if (error.response) {
      console.error('Error data:', error.response.data);
      console.error('Error status:', error.response.status);
    }
    return Promise.reject(error);
  }
);

// Function to fetch list of articles - simplified to avoid query parameters
export const getArticles = async (): Promise<ArticleListResponse> => {
  try {
    // Try our proxy API route first
    console.log('Fetching articles from local proxy API route');
    const response = await fetch(`/api/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

// Function to fetch a single article by slug
export const getArticleBySlug = async (slug: string): Promise<ArticleDetailResponse> => {
  try {
    // Use our dedicated proxy API route for fetching by slug
    console.log('Fetching article by slug from local proxy API route:', slug);
    const response = await fetch(`/api/articles/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    throw error;
  }
};

// Function to normalize article data - simplified for current structure
export const normalizeArticleData = (article: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1338';
  
  // Log the Documents field for debugging
  console.log('Documents field in response:', article.Documents);
  
  // Process documents safely - Documents can be null, single object, or array
  let documents = [];
  if (article.Documents) {
    console.log('Raw Documents field:', article.Documents);
    
    if (Array.isArray(article.Documents)) {
      // Handle array of documents
      documents = article.Documents.map((doc: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
        id: doc.id,
        name: doc.name || 'Document',
        url: doc.url ? `${API_URL}${doc.url}` : '',
        mime: doc.mime || 'application/pdf',
        size: doc.size || 0,
      }));
    } else if (article.Documents.id) {
      // Handle single document object
      documents = [{
        id: article.Documents.id,
        name: article.Documents.name || 'Document',
        url: article.Documents.url ? `${API_URL}${article.Documents.url}` : '',
        mime: article.Documents.mime || 'application/pdf',
        size: article.Documents.size || 0,
      }];
    }
    
    console.log('Processed documents:', documents);
  } else {
    console.log('No Documents found in article');
  }
  
  return {
    ...article,
    title: article.Title,
    slug: article.Slug,
    content: article.Content,
    summary: article.Summary,
    category: article.Category,
    // Use PublishedDate if available, otherwise use publishedAt
    publishedAt: article.PublishedDate || article.publishedAt,
    // Add featuredImage if available
    featuredImage: article.FeaturedImage ? {
      url: `${API_URL}${article.FeaturedImage.url}`,
      alternativeText: article.FeaturedImage.alternativeText,
      width: article.FeaturedImage.width,
      height: article.FeaturedImage.height,
      formats: article.FeaturedImage.formats,
    } : undefined,
    // Add documents that were processed safely
    documents: documents,
  };
};

// Function to normalize articles data
export const normalizeArticlesData = (articlesData: ArticleListResponse) => {
  return {
    articles: articlesData.data.map(article => normalizeArticleData(article)),
    pagination: articlesData.meta.pagination,
  };
};