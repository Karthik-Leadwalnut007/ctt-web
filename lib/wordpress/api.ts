// lib/wordpress/api.ts
import { transformWordPressPosts, transformWordPressPostToBlogPost } from "./utils";
import type { WordPressPost, BlogPost, WordPressPostsResponseMeta } from "./types";
import { getAllLocalBlogPosts, getLocalBlogPostBySlug } from "../blog-data";

const DEFAULT_REST_BASE =
  process.env.NEXT_PUBLIC_WORDPRESS_REST_URL ||
  process.env.WORDPRESS_REST_URL ||
  "https://www.connecttechtalent.com/wp-json/wp/v2";

const POSTS_ENDPOINT = `${DEFAULT_REST_BASE.replace(/\/$/, "")}/posts`;

interface FetchPostsOptions {
  page?: number;
  perPage?: number;
  slug?: string;
}

async function fetchWordPressPosts(options: FetchPostsOptions = {}): Promise<{
  posts: WordPressPost[];
  meta: WordPressPostsResponseMeta;
}> {
  const { page = 1, perPage = 100, slug } = options;
  const url = new URL(POSTS_ENDPOINT);
  url.searchParams.set("page", page.toString());
  url.searchParams.set("per_page", perPage.toString());
  url.searchParams.set("_embed", "1");
  url.searchParams.set("orderby", "date");
  url.searchParams.set("order", "desc");
  if (slug) {
    url.searchParams.set("slug", slug);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);

  const response = await fetch(url.toString(), {
    signal: controller.signal,
    next: { revalidate: 60 },
    headers: {
      Accept: "application/json",
    },
  });
  clearTimeout(timeoutId);

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `WordPress REST request failed (${response.status}): ${response.statusText} ${errorText}`.trim()
    );
  }

  const total = Number(response.headers.get("X-WP-Total") || "0");
  const totalPages = Number(response.headers.get("X-WP-TotalPages") || "0");
  const posts = (await response.json()) as WordPressPost[];

  return {
    posts,
    meta: { total, totalPages },
  };
}

/**
 * Convert a LocalBlogPost to the shared BlogPost interface.
 */
function localPostToBlogPost(
  local: ReturnType<typeof getAllLocalBlogPosts>[number]
): BlogPost {
  return {
    id: local.id,
    title: local.title,
    excerpt: local.excerpt,
    link: local.link,
    image: local.image,
    author: local.author,
    date: local.date,
    slug: local.slug,
    category: local.category,
    readTime: local.readTime,
    content: local.content,
  };
}

/**
 * Fetch all blog posts from WordPress REST API.
 * Falls back to local data if WordPress returns no posts.
 */
export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const { posts } = await fetchWordPressPosts({ perPage: 100 });
    if (posts.length > 0) {
      return transformWordPressPosts(posts);
    }
  } catch (error) {
    console.error("Error fetching blog posts from WordPress REST API:", error);
  }
  // Fallback to local data
  return getAllLocalBlogPosts().map(localPostToBlogPost);
}

/**
 * Fetch paginated blog posts from WordPress REST API.
 * Falls back to local data if WordPress returns no posts.
 */
export async function fetchBlogPosts(
  page: number = 1,
  perPage: number = 6
): Promise<{
  posts: BlogPost[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalPages: number;
}> {
  try {
    const { posts, meta } = await fetchWordPressPosts({ page, perPage });
    if (posts.length > 0) {
      const transformedPosts = transformWordPressPosts(posts);
      return {
        posts: transformedPosts,
        hasNextPage: page < meta.totalPages,
        hasPreviousPage: page > 1,
        totalPages: meta.totalPages,
      };
    }
  } catch (error) {
    console.error("Error fetching paginated blog posts from REST API:", error);
  }

  // Fallback: paginate local data
  const allLocal = getAllLocalBlogPosts();
  const total = allLocal.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * perPage;
  const slice = allLocal.slice(start, start + perPage);

  return {
    posts: slice.map(localPostToBlogPost),
    hasNextPage: safePage < totalPages,
    hasPreviousPage: safePage > 1,
    totalPages,
  };
}

/**
 * Fetch a single blog post by slug.
 * Checks local data first (instant), then falls back to WordPress REST API.
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // ── Check local data first — instant, no network needed ──────────────────
  const localPost = getLocalBlogPostBySlug(slug);
  if (localPost) {
    return localPostToBlogPost(localPost);
  }

  // ── Not in local data — try WordPress REST API ────────────────────────────
  try {
    const { posts } = await fetchWordPressPosts({ slug, perPage: 1 });
    if (posts && posts.length > 0) {
      return transformWordPressPostToBlogPost(posts[0]);
    }
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}" via REST API:`, error);
  }

  return null;
}
