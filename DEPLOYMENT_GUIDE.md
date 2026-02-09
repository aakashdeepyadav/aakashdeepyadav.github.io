# 🚀 Deployment Guide - Your Portfolio

Your portfolio is **production-ready**. Here's how to deploy it in 5 minutes.

---

## Option 1: **Vercel** (Recommended - Free + Fast)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio v1"
git remote add origin https://github.com/aakashdeepyadav/portfolio
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Import from GitHub → Select your portfolio repo
4. Click "Deploy"
5. Done! 🎉

**Your site will be live at:** `yourname-portfolio.vercel.app`

---

## Option 2: **Netlify** (Also free, simple)

### Step 1: Build the project

```bash
npm run build
```

### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `dist/` folder
3. Done! 🎉

**Your site will be live at:** `some-random-name.netlify.app`

---

## Option 3: **Custom Domain** (Optional but 🔥)

### After deploying to Vercel/Netlify:

1. Buy a domain: [namecheap.com](https://namecheap.com), [godaddy.com](https://godaddy.com)
2. In Vercel/Netlify settings → add custom domain
3. Update DNS records (instructions will be provided)

**Your portfolio will be at:** `aakashdeepyadav.dev` (or whatever you choose)

---

## 📋 Pre-Deployment Checklist

✅ **Build passes locally**

```bash
npm run build
```

✅ **All links work**

- GitHub links ✓
- LinkedIn links ✓
- Email link ✓
- Resume download ✓

✅ **Responsive design tested**

- Desktop (1920px) ✓
- Tablet (768px) ✓
- Mobile (375px) ✓

✅ **No errors in console**

```bash
npm run dev
# Open DevTools → Console → No red errors ✓
```

---

## 🔍 After Deployment

### 1. Test your live site

- Visit your deployed URL
- Click all buttons
- Download resume
- Test on mobile

### 2. Share it

- Add to LinkedIn
- Update GitHub bio
- Send to recruiters

### 3. Monitor it

- Add Google Analytics (optional)
- Monitor for broken links
- Keep GitHub updated

---

## 📊 Optional: Add Google Analytics

### Step 1: Create Google Analytics account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property
3. Get your Tracking ID (looks like: `G-XXXXXXXXXX`)

### Step 2: Add to your portfolio

Add this to `src/main.tsx`:

```tsx
// Google Analytics
if (import.meta.env.PROD) {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "YOUR_TRACKING_ID");
}
```

### Step 3: Rebuild and deploy

```bash
npm run build
# Deploy as usual
```

---

## 🎯 My Recommendation

1. **Deploy on Vercel** (0-copy, auto-deploys from GitHub)
2. **Buy a custom domain** ($10/year on Namecheap)
3. **Point domain to Vercel**
4. **Add to LinkedIn** and start applying!

---

## ❓ Troubleshooting

**Build fails?**

```bash
npm install
npm run build
```

**Resume PDF not downloading?**

- Make sure `public/resume.pdf` exists
- Check file is readable: `ls -la public/resume.pdf`

**Site looks different after deploy?**

- Clear browser cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+F5

**Custom domain not working?**

- DNS can take 24-48 hours to propagate
- Check Vercel/Netlify settings for DNS configuration

---

## 📞 Support

- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify docs: [netlify.com/docs](https://netlify.com/docs)
- Vite docs: [vitejs.dev](https://vitejs.dev)

---

**You've got this! 🚀**

Your portfolio is ready to impress recruiters. Go ship it!
