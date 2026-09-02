 I# Deployment Guide: WordPress + Next.js

This guide explains how to deploy your WordPress backend and Next.js frontend separately, and how to configure the GraphQL connection between them.

## Architecture Overview

```
┌─────────────────┐         GraphQL API         ┌──────────────────┐
│                 │ ─────────────────────────> │                  │
│  Next.js App    │                            │  WordPress Site  │
│  (Frontend)     │ <───────────────────────── │  (Backend/CMS)   │
│                 │      Blog Posts Data       │                  │
└─────────────────┘                            └──────────────────┘
```

**Yes, you should deploy them separately:**
- **WordPress**: Deployed on its own server/hosting (handles content management)
- **Next.js**: Deployed on its own server/hosting (handles the frontend)

## Deployment Strategy

### Option 1: Recommended - Separate Hosting (Best for Production)

#### WordPress Deployment
Deploy WordPress to a traditional hosting service:
- **Shared Hosting**: Bluehost, SiteGround, HostGator
- **VPS/Cloud**: DigitalOcean, Linode, AWS EC2
- **Managed WordPress**: WP Engine, Kinsta, WordPress.com Business

#### Next.js Deployment
Deploy Next.js to modern hosting platforms:
- **Vercel** (Recommended - made by Next.js creators)
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**
- **DigitalOcean App Platform**

### Option 2: Same Server, Different Services
Both on the same server but running as separate services:
- WordPress on Apache/Nginx (port 80/443)
- Next.js on Node.js (different port or subdomain)

---

## Step-by-Step Deployment

### Part 1: Deploy WordPress

#### 1.1 Install WordPress
1. Set up WordPress on your hosting provider
2. Install and activate the **WPGraphQL** plugin
3. Configure WordPress permalinks (Settings → Permalinks)

#### 1.2 Get Your GraphQL Endpoint
Your GraphQL endpoint will be:
```
https://your-wordpress-site.com/graphql
```

Test it by visiting: `https://your-wordpress-site.com/graphql` in your browser (you should see a GraphQL interface or JSON response)

#### 1.3 Configure CORS (Important!)
If your Next.js app is on a different domain, you need to allow CORS requests.

**Option A: Using a Plugin**
- Install "WPGraphQL CORS" plugin
- Configure allowed origins

**Option B: Add to `functions.php`**
```php
add_action('graphql_register_types', function() {
    add_filter('graphql_response_headers_to_send', function($headers) {
        $headers['Access-Control-Allow-Origin'] = '*'; // Or your Next.js domain
        $headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
        $headers['Access-Control-Allow-Headers'] = 'Content-Type';
        return $headers;
    });
});
```

---

### Part 2: Deploy Next.js

#### 2.1 Prepare Your Next.js App

**Update `.env.production` or environment variables in your hosting platform:**

```env
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://your-wordpress-site.com/graphql
```

**Important Notes:**
- Use `NEXT_PUBLIC_` prefix for client-side accessible variables
- Use HTTPS in production (not HTTP)
- Never commit `.env` files to Git

#### 2.2 Deploy to Vercel (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL`
   - Value: `https://your-wordpress-site.com/graphql`
   - Select: Production, Preview, Development
   - Click "Save"

4. **Deploy:**
   - Vercel will automatically deploy
   - Your app will be live at: `https://your-app.vercel.app`

#### 2.3 Deploy to Netlify

1. **Push code to Git repository**

2. **Import to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository

3. **Build Settings:**
   - Build command: `npm run build` or `pnpm build`
   - Publish directory: `.next`

4. **Environment Variables:**
   - Go to Site Settings → Environment Variables
   - Add: `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL`
   - Value: `https://your-wordpress-site.com/graphql`

#### 2.4 Deploy to Other Platforms

**AWS Amplify:**
- Connect repository
- Add environment variables in console
- Build settings auto-detected

**Cloudflare Pages:**
- Connect repository
- Build command: `npm run build`
- Output directory: `.next`
- Add environment variables in dashboard

**DigitalOcean App Platform:**
- Connect repository
- Auto-detects Next.js
- Add environment variables in app settings

---

## Environment Variables Configuration

### Development (Local)
Create `.env.local`:
```env
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=http://localhost/PHPproject/wp_headless/graphql
```

### Production
Set in your hosting platform's dashboard:
```env
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://your-wordpress-site.com/graphql
```

### Where to Configure?

**✅ YES - Configure in Frontend (Next.js):**
- The GraphQL URL is set in your Next.js app's environment variables
- This is correct because Next.js needs to know where to fetch data from
- The URL points to your WordPress backend

**❌ NO - Don't hardcode in code:**
- Never put the URL directly in your code
- Always use environment variables

---

## Security Best Practices

### 1. Use HTTPS in Production
```env
# ✅ Good
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://your-site.com/graphql

# ❌ Bad
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=http://your-site.com/graphql
```

### 2. Restrict CORS (Production)
Instead of allowing all origins (`*`), specify your Next.js domain:
```php
$headers['Access-Control-Allow-Origin'] = 'https://your-nextjs-app.vercel.app';
```

### 3. Use Environment-Specific URLs
- Development: `http://localhost/...`
- Staging: `https://staging.your-site.com/graphql`
- Production: `https://your-site.com/graphql`

### 4. Protect WordPress Admin
- Use strong passwords
- Enable 2FA
- Limit login attempts
- Keep WordPress and plugins updated

---

## Testing After Deployment

### 1. Test GraphQL Endpoint
Visit: `https://your-wordpress-site.com/graphql`
- Should show GraphQL interface or JSON response

### 2. Test Next.js App
Visit: `https://your-nextjs-app.vercel.app/media`
- Should display blog posts from WordPress
- Check browser console for errors

### 3. Check Network Tab
- Open DevTools → Network
- Look for requests to `/graphql`
- Verify they're successful (200 status)

---

## Troubleshooting

### Issue: CORS Error
**Error:** `Access to fetch at '...' from origin '...' has been blocked by CORS policy`

**Solution:**
1. Install WPGraphQL CORS plugin
2. Or add CORS headers in WordPress (see Part 1.3)

### Issue: GraphQL Endpoint Not Found
**Error:** `404 Not Found` when accessing `/graphql`

**Solution:**
1. Verify WPGraphQL plugin is installed and activated
2. Check WordPress permalinks are set (Settings → Permalinks)
3. Try: `https://your-site.com/wp-json/wp/v2/posts` (REST API) to verify WordPress is working

### Issue: Environment Variable Not Working
**Error:** Still using localhost URL in production

**Solution:**
1. Verify environment variable is set in hosting platform
2. Restart/redeploy the app
3. Check variable name matches exactly (case-sensitive)
4. Ensure `NEXT_PUBLIC_` prefix is used for client-side access

### Issue: Images Not Loading
**Error:** WordPress images showing as broken

**Solution:**
1. Update `next.config.mjs` to allow your WordPress domain
2. Check image URLs are absolute (starting with `http://` or `https://`)
3. Verify WordPress media library is accessible

---

## Quick Deployment Checklist

### WordPress
- [ ] WordPress installed and configured
- [ ] WPGraphQL plugin installed and activated
- [ ] GraphQL endpoint accessible at `/graphql`
- [ ] CORS configured (if needed)
- [ ] HTTPS enabled
- [ ] WordPress updated to latest version

### Next.js
- [ ] Code pushed to Git repository
- [ ] Environment variable set in hosting platform
- [ ] GraphQL URL points to production WordPress
- [ ] Build succeeds without errors
- [ ] App deployed and accessible
- [ ] Blog posts loading from WordPress

---

## Example Deployment URLs

**WordPress:**
```
https://blog.yourcompany.com
GraphQL: https://blog.yourcompany.com/graphql
```

**Next.js:**
```
https://yourcompany.com
Media Page: https://yourcompany.com/media
```

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **WPGraphQL Docs**: https://www.wpgraphql.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment

