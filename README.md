# Abdoul Nuru - Modern Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, minimalist design inspired by contemporary portfolios
- 🚀 Built with React 18 and TypeScript for type safety
- 💨 Fast development with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- ⚡ Performance optimized

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd modern-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Main navigation component
│   ├── Hero.tsx         # Hero section with intro
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills and expertise
│   ├── Projects.tsx     # Featured projects
│   └── Contact.tsx      # Contact form and info
├── App.tsx              # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Customization

### Personal Information

Update the following components with your personal information:

1. **Hero.tsx** - Update name, title, and description
2. **About.tsx** - Update about text and experience
3. **Skills.tsx** - Update skills and technologies
4. **Projects.tsx** - Replace with your actual projects
5. **Contact.tsx** - Update contact information

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Fonts in `src/index.css`
- Animations in `tailwind.config.js`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Update the navigation in `Navigation.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).
