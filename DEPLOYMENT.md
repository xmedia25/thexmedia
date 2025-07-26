# Deployment Guide - The X Media Website

## Vercel Deployment

### Prerequisites
1. [Vercel Account](https://vercel.com/signup)
2. [Vercel CLI](https://vercel.com/cli) (optional but recommended)
3. Git repository (GitHub, GitLab, or Bitbucket)

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Production ready deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Select "The X Media" project

3. **Configure Environment Variables**
   In Vercel dashboard, go to Project Settings > Environment Variables and add:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=The X Media
   NEXT_PUBLIC_SITE_DESCRIPTION=Professional Digital Marketing Agency
   NEXT_PUBLIC_CONTACT_EMAIL=contact@thexmedia.com
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL
   vercel env add NEXT_PUBLIC_SITE_NAME
   vercel env add NEXT_PUBLIC_SITE_DESCRIPTION
   vercel env add NEXT_PUBLIC_CONTACT_EMAIL
   vercel env add NEXT_PUBLIC_GOOGLE_VERIFICATION
   ```

### Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variables**
   - Update `NEXT_PUBLIC_SITE_URL` to your custom domain
   - Redeploy the project

### Performance Optimization

The project includes several optimizations:
- Image optimization with Next.js Image component
- Static generation for better performance
- Compression and caching headers
- Bundle optimization
- Web Vitals monitoring

### Security Features

- Security headers configured in `vercel.json`
- Content Security Policy
- XSS protection
- CSRF protection
- Environment variable validation

### Monitoring and Analytics

1. **Vercel Analytics**
   - Automatically enabled for performance monitoring
   - View in Vercel dashboard

2. **Google Analytics** (Optional)
   - Add `NEXT_PUBLIC_GA_ID` environment variable
   - Update tracking code in layout

3. **Error Monitoring**
   - Error boundary implemented
   - Console logging in development
   - Production error tracking ready

### Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Production Build**: `npm run build:production`
- **Type Check**: `npm run type-check`
- **Lint**: `npm run lint`

### Troubleshooting

1. **Build Failures**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names (case-sensitive)
   - Redeploy after adding variables

3. **Performance Issues**
   - Use Vercel Analytics to identify bottlenecks
   - Optimize images and assets
   - Check bundle size with `npm run build:analyze`

### Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Contact forms work
- [ ] Images load properly
- [ ] SEO meta tags are correct
- [ ] Performance scores are good
- [ ] Security headers are active
- [ ] Analytics tracking works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate is active

### Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches
- **Development**: Local development with `vercel dev`

### Support

For deployment issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review build logs
3. Contact Vercel support
4. Check project GitHub issues

---

**Note**: Make sure to update environment variables with your actual values before deployment.