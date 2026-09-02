# WordPress Integration

This directory contains the WordPress GraphQL integration for fetching blog posts dynamically.

## Files

- **`queries.ts`**: GraphQL queries for fetching posts from WordPress
- **`types.ts`**: TypeScript type definitions for WordPress data
- **`utils.ts`**: Utility functions for transforming WordPress data
- **`api.ts`**: API functions for fetching blog posts

## Setup

1. **Configure WordPress GraphQL Endpoint**

   Add your WordPress GraphQL endpoint to your `.env.local` file:

   ```env
   NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://your-wordpress-site.com/graphql
   ```

2. **Install WordPress GraphQL Plugin**

   Make sure your WordPress site has the WPGraphQL plugin installed and activated.

3. **Test the Connection**

   The app will automatically fetch blog posts from WordPress. If WordPress is unavailable, it will fall back to the hardcoded blog posts.

## Usage

### Fetching All Posts

```typescript
import { fetchAllBlogPosts } from "@/lib/wordpress/api"

const posts = await fetchAllBlogPosts()
```

### Fetching a Single Post

```typescript
import { fetchBlogPostBySlug } from "@/lib/wordpress/api"

const post = await fetchBlogPostBySlug("my-post-slug")
```

## Data Structure

Blog posts are transformed to match the `BlogPost` interface:

```typescript
interface BlogPost {
  id: string
  title: string
  excerpt: string
  link: string
  image: string
  author: string
  date: string
  slug: string
}
```

## Error Handling

The integration includes error handling:
- If WordPress is unavailable, the app falls back to hardcoded posts
- Network errors are caught and logged
- Empty arrays are returned instead of throwing errors

