// lib/wordpress/types.ts

export interface WordPressRenderedString {
  rendered: string;
}

export interface WordPressFeaturedMedia {
  source_url?: string;
  alt_text?: string;
}

export interface WordPressEmbedded {
  author?: Array<{
    name?: string;
    slug?: string;
    url?: string;
  }>;
  "wp:featuredmedia"?: WordPressFeaturedMedia[];
}

export interface WordPressPost {
  id: number;
  title: WordPressRenderedString;
  excerpt: WordPressRenderedString;
  content: WordPressRenderedString;
  slug: string;
  date: string;
  modified: string;
  link: string;
  author: number;
  featured_media: number;
  _embedded?: WordPressEmbedded;
}

export interface WordPressPostsResponseMeta {
  total: number;
  totalPages: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  link: string;
  image: string;
  author: string;
  date: string;
  slug: string;
  category?: string; // e.g. "AI Hiring", "Contract Staffing"
  readTime?: string; // e.g. "7 min read"
  content?: string; // Full HTML content from WordPress or local data
}

