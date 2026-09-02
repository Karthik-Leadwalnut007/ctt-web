# Deployment Quick Start Guide

A quick reference guide for deploying your WordPress + Next.js application.

## 🚀 Quick Overview

**Deploy separately:**
- **WordPress** → Traditional hosting (handles content)
- **Next.js** → Modern hosting like Vercel (handles frontend)
- **GraphQL URL** → Configure in Next.js environment variables

---

## 📋 Pre-Deployment Checklist

### WordPress Setup
- [ ] WordPress installed on hosting
- [ ] WPGraphQL plugin installed & activated
- [ ] GraphQL endpoint accessible: `https://your-site.com/graphql`
- [ ] CORS configured (if Next.js on different domain)

### Next.js Setup
- [ ] Code pushed to GitHub/GitLab
- [ ] Environment variable ready: `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL`

---

## ⚡ Quick Deployment Steps

### Step 1: Deploy WordPress (5 minutes)

1. **Install WordPress** on your hosting
2. **Install WPGraphQL Plugin:**
   - Go to Plugins → Add New
   - Search "WPGraphQL"
   - Install and Activate
3. **Get your GraphQL URL:**
   ```
   https://your-wordpress-site.com/graphql
   ```
4. **Test it:** Visit the URL in browser (should see GraphQL interface)

### Step 2: Configure CORS (If needed)

If Next.js is on a different domain, add this to WordPress `functions.php`:

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

### Step 3: Deploy Next.js to Vercel (5 minutes)

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Add Environment Variable:**
   - Go to: Project Settings → Environment Variables
   - Name: `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL`
   - Value: `https://your-wordpress-site.com/graphql`
   - Select: Production, Preview, Development
   - Click "Save"

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your app is live! 🎉

---

## 🔧 Environment Variables

### Local Development (`.env.local`)
```env
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=http://localhost/PHPproject/wp_headless/graphql
```

### Production (Vercel/Netlify/etc.)
```env
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=https://your-wordpress-site.com/graphql
```

**Important:**
- ✅ Use `NEXT_PUBLIC_` prefix (required for client-side access)
- ✅ Use HTTPS in production
- ✅ Never commit `.env` files to Git

---

## 🧪 Testing After Deployment

### 1. Test WordPress GraphQL
Visit: `https://your-wordpress-site.com/graphql`
- Should show GraphQL interface or JSON response

### 2. Test Next.js App
Visit: `https://your-app.vercel.app/media`
- Should display blog posts from WordPress
- Check browser console (F12) for errors

### 3. Check Network Requests
- Open DevTools → Network tab
- Look for requests to `/graphql`
- Should return 200 status code

---

## 🐛 Common Issues & Quick Fixes

### CORS Error
**Error:** `Access to fetch blocked by CORS policy`

**Fix:** Add CORS headers in WordPress (see Step 2 above)

### GraphQL 404
**Error:** `404 Not Found` at `/graphql`

**Fix:**
1. Verify WPGraphQL plugin is activated
2. Check WordPress permalinks (Settings → Permalinks → Save)

### Environment Variable Not Working
**Error:** Still using localhost URL

**Fix:**
1. Verify variable is set in hosting platform
2. Redeploy the app
3. Check variable name matches exactly (case-sensitive)

### Images Not Loading
**Error:** Broken images from WordPress

**Fix:**
- Images should work automatically (already configured in `next.config.mjs`)
- Verify image URLs are absolute (start with `http://` or `https://`)

---

## 📝 Platform-Specific Notes

### Vercel
- ✅ Auto-detects Next.js
- ✅ Environment variables in dashboard
- ✅ Automatic deployments on git push
- ✅ Free tier available

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Environment variables in Site Settings

### AWS Amplify
- Connect repository
- Auto-detects Next.js
- Environment variables in console

---

## 🔐 Security Checklist

- [ ] Use HTTPS in production (not HTTP)
- [ ] Restrict CORS to your Next.js domain (not `*`)
- [ ] Keep WordPress updated
- [ ] Use strong WordPress admin password
- [ ] Enable 2FA if available

---

## 📞 Need Help?

- **Full Guide:** See `DEPLOYMENT.md` for detailed instructions
- **Vercel Docs:** https://vercel.com/docs
- **WPGraphQL Docs:** https://www.wpgraphql.com

---

## ✅ Final Checklist

Before going live:
- [ ] WordPress deployed and accessible
- [ ] WPGraphQL plugin active
- [ ] GraphQL endpoint working
- [ ] CORS configured (if needed)
- [ ] Next.js deployed
- [ ] Environment variable set correctly
- [ ] Blog posts loading from WordPress
- [ ] Images displaying correctly
- [ ] No console errors

**You're ready to go! 🚀**

