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

export interface ArticleDetailResponse {
  data: Article;
}

export interface ArticleFilters {
  [key: string]: {
    $eq?: string | number;
    $ne?: string | number;
    $in?: (string | number)[];
    $nin?: (string | number)[];
    $contains?: string;
    $notContains?: string;
    $startsWith?: string;
    $endsWith?: string;
    $gt?: number;
    $gte?: number;
    $lt?: number;
    $lte?: number;
  };
}

export interface ArticleParams {
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  sort?: string[];
  filters?: ArticleFilters;
  populate?: string[];
}