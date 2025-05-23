export interface ArticleImage {
  url: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };
    small?: {
      url: string;
      width: number;
      height: number;
    };
    medium?: {
      url: string;
      width: number;
      height: number;
    };
    large?: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export interface ArticleDocument {
  id: number;
  name: string;
  url: string;
  mime: string;
  size: number;
}

// Adjusted to match the actual Strapi structure
export interface Article {
  id: number;
  documentId?: string;
  Title: string;
  Slug: string;
  Content: string;
  Summary: string;
  Category?: string;
  PublishedDate?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  featuredImage?: ArticleImage;
  documents?: ArticleDocument[];
}

// Adjusted to match the actual Strapi response
export interface ArticleListResponse {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Adjusted for detailed response
export interface ArticleDetailResponse {
  data: Article;
}

export interface ArticleParams {
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  sort?: string[];
  filters?: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  populate?: string[];
}