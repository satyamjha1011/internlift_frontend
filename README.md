# Internlift India Technology - Frontend Website

A modern, professional website for Internlift India Technology - an MSME-registered IT services company and internship provider based in Bengaluru.

## 🚀 Features

- **Modern Design**: Clean, professional design with black and green color scheme
- **Responsive**: Mobile-first design that works on all devices (320px to 1920px+)
- **Fast Performance**: Optimized with Vite and code splitting
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG 2.1 AA compliant

## 🛠️ Tech Stack

- **Framework**: React 18+ with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios (for future API integration)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
internlift-frontend/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── home/            # Home page components
│   │   ├── services/        # Service page components
│   │   ├── internship/      # Internship components
│   │   ├── verification/    # Verification components
│   │   └── contact/         # Contact components
│   ├── pages/               # Page components
│   ├── data/                # Data files
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Color Scheme

- **Primary Black**: #000000
- **Bright Green**: #00FF00
- **Dark Green**: #00CC00
- **Neon Green**: #39FF14

## 📄 Pages

- **Home**: Landing page with hero, services, stats, and more
- **About Us**: Company information and values
- **Services**: Individual service pages (Backend, Frontend, AI/LLM, IoT, No-Code, Custom Software)
- **Internship Program**: Program details, tracks, timeline, and application form
- **Verify Intern**: Certificate verification system
- **Case Studies**: Project showcases
- **Blog**: Blog listing and individual posts
- **Contact Us**: Contact form and information

## 🔧 Configuration

### Environment Variables

Create a `.env` file for API endpoints (when backend is ready):

```env
VITE_API_URL=https://api.internlift.com
```

## 📝 License

Copyright © 2024 Internlift India Technology. All rights reserved.

## 🚀 Deployment

This project is configured for CI/CD with GitHub Actions and can be deployed to:

- **Vercel** (Recommended) - See `QUICK_START_DEPLOYMENT.md`
- **GitHub Pages** - See `DEPLOYMENT_GUIDE.md`
- **Netlify** - See `DEPLOYMENT_GUIDE.md`

### Quick Deploy (Easiest Method)

**Option 1: Vercel Built-in Integration (Recommended - No Setup Needed)**
1. Go to [vercel.com](https://vercel.com) → Add New Project
2. Import from GitHub → Select your repository
3. Deploy! Automatic deployments on every push

**Option 2: GitHub Actions (Requires Setup)**
1. Set up secrets (see `SETUP_SECRETS.md`)
2. Push code to GitHub
3. Automatic deployment via GitHub Actions

### CI/CD Workflows

- **CI**: Runs on every push/PR - builds and tests
- **Deploy**: Automatically deploys on push to `main` branch

### Troubleshooting

- **Vercel token error?** → See `SETUP_SECRETS.md`
- **GitHub Pages error?** → See `GITHUB_PAGES_SETUP.md`
- **General deployment?** → See `DEPLOYMENT_GUIDE.md`

## ⚡ Performance Optimization (Mobile-first)

The following production-focused optimizations were applied to improve PageSpeed Insights/Lighthouse:

- **Render blocking reduced**
  - Deferred GTM/GA to idle and AdSense to user interaction in `index.html`
  - Added lightweight critical inline CSS for initial paint
  - Converted font loading to non-blocking pattern with preload + `media="print"` swap
- **Bundle splitting improved**
  - Route-level lazy loading in `src/App.jsx`
  - Kept home route eager to avoid route-fallback CLS regressions
  - Deferred telemetry (`@vercel/analytics`, `@vercel/speed-insights`) until idle
  - Updated Vite chunk strategy in `vite.config.js`
- **CLS and image stability**
  - Added explicit logo dimensions + responsive AVIF/WebP delivery in `src/components/common/Logo.jsx`
  - Removed above-the-fold Y-axis entry motion in `src/components/home/HeroSection.jsx` to reduce layout shift
  - Added reduced-motion handling in `src/index.css`
- **Caching and delivery**
  - Added long-lived immutable cache headers for assets/images/fonts in `vercel.json`
  - Kept HTML documents on revalidation cache policy
  - Added apex-to-www canonical redirect rule for better Search Console consistency
- **AdSense readiness**
  - Added `google-adsense-account` meta tag in `index.html`
  - Added `public/ads.txt`
  - Added image optimization script: `npm run optimize:images`

### Local Lighthouse Snapshot (mobile emulation)

- **Performance:** 77
- **Accessibility:** 96
- **Best Practices:** 96
- **SEO:** 92
- **FCP:** 1.9s
- **LCP:** 2.8s
- **TBT:** 700ms
- **CLS:** 0.004

### Next Suggested Improvements

- Convert remaining large raster assets (beyond logo) to AVIF/WebP and apply `picture/srcset`.
- Keep third-party scripts consent-gated in production if legal/compliance requires explicit opt-in.
- Re-run PSI on the production domain after deploy and re-submit Search Console validation.

## 📞 Contact

- **Email**: support@internlift.com
- **Phone**: +91 9430814605
- **Website**: www.internlift.com
- **Address**: 64/4, 1st Floor, Gopal Reddy Building, G S Palya Road, Konapana Agrahara, Electronics City, Bengaluru, Karnataka – 560100

## 🏢 MSME Registration

**UDYAM-KR-03-0578695**
