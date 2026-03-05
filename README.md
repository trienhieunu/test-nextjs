# NextJS Starter 🚀

A modern, beautiful, and production-ready Next.js starter template with TypeScript, Tailwind CSS, and stunning animations.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

- 🎨 **Modern UI** - Beautiful gradient backgrounds, glass effects, and smooth animations
- 🌙 **Dark Mode** - Fully functional dark/light mode toggle with persistence
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **TypeScript** - Full type safety for bug-free development
- 🎯 **Optimized** - Built with Next.js 15 App Router for best performance
- 🎭 **Animations** - Smooth floating, pulse, and gradient animations
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🚀 **Production Ready** - Optimized for deployment

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/trienhieunu/test-nextjs.git

# Navigate to the project
cd test-nextjs

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Project Structure

```
test-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Features.tsx    # Features section
│       ├── Stats.tsx       # Statistics section
│       ├── CTA.tsx         # Call-to-action section
│       ├── Footer.tsx      # Footer component
│       └── ThemeToggle.tsx # Dark/light mode toggle
├── public/                 # Static assets
├── package.json
└── tsconfig.json
```

## 🚀 Deploy

Deploy instantly with [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/trienhieunu/test-nextjs)

## 🎨 Customization

### Colors

Edit `src/app/globals.css` to customize the color palette:

```css
:root {
  --primary: 142 76% 36%;  /* Emerald */
  --secondary: 240 4.8% 95.9%;
  /* ... */
}
```

### Animations

Modify animation speeds in `src/app/globals.css`:

```css
.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hiếu Vũ** - [trienhieunu](https://github.com/trienhieunu)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for beautiful icons
- [shadcn/ui](https://ui.shadcn.com/) for design inspiration

---

Made with ❤️ by trienhieunu
