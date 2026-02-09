# 🚀 Modern Portfolio - Aakash Deep Yadav

A stunning, modern, and fully responsive portfolio website built with the latest web technologies. Showcasing projects, skills, experience, and more!

## ✨ Features

### 🎨 Design & UX

- **Modern Glass Morphism UI** with gradient accents
- **Fully Responsive Design** - works perfectly on mobile, tablet, and desktop
- **Smooth Animations** powered by Framer Motion with staggered reveals
- **Dark Theme** with custom gradient backgrounds for a premium look
- **Smooth Scrolling** with anchor navigation

### 📱 Sections Included

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About** - Professional background and career summary
3. **Skills** - Organized by category with tech stack overview
4. **Projects** - Featured projects with detailed descriptions, achievements, and links
5. **Experience** - Training, certifications, and key achievements
6. **Education** - Academic background and credentials
7. **Contact** - Contact information and message form
8. **Footer** - Links and social media connections

### 🛠️ Tech Stack

**Frontend:**

- React 19 with TypeScript
- Vite (lightning-fast build tool)
- Tailwind CSS v4 (utility-first CSS)
- Framer Motion (advanced animations)
- Lucide React (beautiful icons)

**Development:**

- ESLint for code quality
- TypeScript for type safety
- Hot Module Replacement (HMR) for instant updates

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

The portfolio runs on `http://localhost:5173` by default when using `npm run dev`.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation header with mobile menu
│   ├── Hero.tsx          # Hero/landing section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Featured projects
│   ├── Experience.tsx    # Training & achievements
│   ├── Education.tsx     # Education history
│   ├── Contact.tsx       # Contact form & info
│   └── Footer.tsx        # Footer section
├── App.tsx               # Main App component
├── main.tsx              # Entry point
└── index.css             # Global styles with Tailwind

tailwind.config.js        # Tailwind CSS configuration
postcss.config.js         # PostCSS configuration
vite.config.ts            # Vite configuration
```

## 🎯 Customization

### Colors & Theme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#3b82f6',
      accentLight: '#60a5fa',
    },
  },
}
```

### Add Your Own Content

- Update component content directly in `src/components/`
- Add your own images to `src/assets/`
- Modify colors, spacing, and animations in Tailwind classes

### Form Integration

The contact form is a placeholder. To make it functional:

1. Create a backend API endpoint
2. Update the `handleSubmit` function in `Contact.tsx`
3. Add form validation and error handling

## 📊 Performance

- **Fast Load Times**: Vite's optimized builds
- **Optimized CSS**: Tailwind's tree-shaking removes unused styles
- **Smooth Animations**: 60 FPS animations with Framer Motion
- **Mobile Optimized**: Responsive design ensures great UX on all devices

## 🔗 Links Configuration

Update these in the components:

- **GitHub**: `https://github.com/aakashdeepyadav`
- **LinkedIn**: `https://linkedin.com/in/aakashdeepyadav`
- **Email**: `aakashdeepyadav106@gmail.com`

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This uses the `gh-pages` package configured in package.json

### Deploy to Other Platforms

The portfolio builds to a static `dist/` folder that can be deployed to:

- Vercel
- Netlify
- AWS S3
- GitHub Pages
- Any static hosting service

## 🎓 Learning Resources

This portfolio demonstrates:

- Modern React patterns with TypeScript
- Component-based architecture
- CSS-in-JS styling with Tailwind
- Animation libraries (Framer Motion)
- Responsive design principles
- Form handling in React
- SEO-friendly structure

## 📝 License

Free to use and modify for personal projects.

---

**Made with ❤️ using modern web technologies**

Questions? Feel free to reach out on LinkedIn or via email!
