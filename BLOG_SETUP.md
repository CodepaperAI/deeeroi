# Blog Setup

The `/blog` page and `/blog/[slug]` article pages fetch published posts from Uplift AI on the server.

Required production environment variable:

```env
UPLIFT_API_TOKEN=uai_xxxxxxxxx
```

Recommended hosting steps:

1. Add `UPLIFT_API_TOKEN` to the hosting provider environment variables.
2. Redeploy the website.
3. Publish posts in Uplift AI with status `PUBLISH`.
4. Visit `/blog` and `/sitemap.xml` to confirm the posts are visible.

Do not place the Uplift token in client-side code. The website uses the server-side Uplift API endpoint so the token stays private.
