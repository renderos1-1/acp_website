// src/lib/api.ts

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// Types for Strapi v5 data structures
export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string; width: number; height: number; };
    small?: { url: string; width: number; height: number; };
    medium?: { url: string; width: number; height: number; };
    large?: { url: string; width: number; height: number; };
  };
}

export interface StrapiArticle {
  id: number;
  documentId: string;
  Title: string;
  Content: string;
  Summary?: string;
  Slug: string;
  Category?: string;
  PublishedDate?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  locale?: string | null;
  FeaturedImage?: StrapiImage;
  Documents?: StrapiDocument[];
}

export interface StrapiDocument {
  id: number;
  documentId: string;
  name: string;
  url: string;
  mime: string;
  size: number;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Utility function to construct full URLs
const getStrapiUrl = (url: string): string => {
  if (url.startsWith('http')) {
    return url;
  }
  return `${STRAPI_URL}${url}`;
};

// Normalize Strapi v5 response format
export const normalizeArticlesData = (response: any): { articles: any[] } => {
  if (!response || !response.data) {
    return { articles: [] };
  }

  const articles = Array.isArray(response.data) ? response.data : [response.data];

  const normalizedArticles = articles.map((article: any) => {
    let featuredImage = null;
    if (article.FeaturedImage) {
      const imageData = article.FeaturedImage;
      featuredImage = {
        id: imageData.id,
        documentId: imageData.documentId,
        url: getStrapiUrl(imageData.url),
        alternativeText: imageData.alternativeText,
        caption: imageData.caption,
        width: imageData.width,
        height: imageData.height,
        formats: imageData.formats,
      };
    }

    let documents = [];
    if (article.Documents) {
      if (Array.isArray(article.Documents)) {
        documents = article.Documents.map((doc: any) => ({
          id: doc.id,
          documentId: doc.documentId,
          name: doc.name || 'Document',
          url: getStrapiUrl(doc.url),
          mime: doc.mime || 'application/pdf',
          size: doc.size || 0,
        }));
      }
    }

    return {
      id: article.id,
      documentId: article.documentId,
      title: article.Title,
      content: article.Content,
      summary: article.Summary,
      slug: article.Slug,
      category: article.Category,
      publishedAt: article.PublishedDate || article.publishedAt,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      locale: article.locale,
      featuredImage,
      documents,
    };
  });

  return { articles: normalizedArticles };
};

// API Functions
export const getArticles = async (limit?: number): Promise<any> => {
  const queryParams = new URLSearchParams();

  // Add population for featured image and documents
  queryParams.append('populate', 'FeaturedImage');
  queryParams.append('populate', 'Documents');

  // Add sorting (newest first)
  queryParams.append('sort', 'publishedAt:desc');

  // Add limit if specified
  if (limit) {
    queryParams.append('pagination[limit]', limit.toString());
  }

  const url = `${STRAPI_URL}/api/articles?${queryParams.toString()}`;

  console.log('Fetching articles from:', url);

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Articles response:', data);
  return data;
};

export const getArticleBySlug = async (slug: string): Promise<any> => {
  const queryParams = new URLSearchParams();
  queryParams.append('filters[Slug][$eq]', slug);
  queryParams.append('populate', 'FeaturedImage');
  queryParams.append('populate', 'Documents');

  const url = `${STRAPI_URL}/api/articles?${queryParams.toString()}`;

  console.log('Fetching article by slug from:', url);

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch article: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Article by slug response:', data);

  if (data.data && data.data.length > 0) {
    return { data: data.data[0] };
  }

  return null;
};

// Contact form submission
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone?: string;
  service: string;
  contactReason: string;
  message?: string;
}): Promise<boolean> => {
  const response = await fetch(`${STRAPI_URL}/api/contact-messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Service: formData.service,
        ContactReason: formData.contactReason,
        Message: formData.message,
      }
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit contact form: ${response.status} ${response.statusText}`);
  }

  return true;
};

// CV/Job application submission
export const submitJobApplication = async (formData: FormData): Promise<boolean> => {
  const response = await fetch(`${STRAPI_URL}/api/job-applications`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to submit job application: ${response.status} ${response.statusText}`);
  }

  return true;
};