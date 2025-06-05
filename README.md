# IslandTech App

A modern e-commerce web application built with Next.js, TypeScript, and Tailwind CSS, focused on performance, pixel-perfect design, and user experience.

## Demo

## Main Features

- Responsive layout and custom design system
- Reusable components (cards, sliders, sidebar, avatars, etc)
- Image optimization with Next.js
- Lazy loading for offscreen images
- Custom font integration (Inter)
- Modern visual effects (glassmorphism, gradients, overlays)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **State Management:** Zustand
- **Styling:** Tailwind CSS (with custom colors, fonts, and utilities)
- **UI Components:** Tailwind + Custom components
- **Image Optimization:** Next.js Image

## Project Structure

```
├── src/
│   ├── app/                # Pages and entrypoints
│   ├── components/         # Reusable components (ui, layout, etc)
│   ├── types/              # TypeScript types and constants
│   └── ...
├── public/                 # Static images and assets
├── tailwind.config.js      # Tailwind configuration
├── package.json
└── ...
```

## How to Run the Project

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/island-tech.git
cd island-tech
```

2. Install dependencies:

```bash
pnpm install
# or npm install
```

3. Start the development server:

```bash
pnpm dev
# or npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technical Decisions and Choices

- **Next.js:** Enables SSR, image optimization, modern routing, and excellent performance.
- **Tailwind CSS:** Makes it easy to create responsive layouts and a custom design system.
- **Zustand:** Simple and efficient state management for React apps.
- **Next/Image:** All images use Next.js Image for automatic optimization and lazy loading where appropriate.
- **Custom Fonts:** Inter from Google fonts, configured globally via Tailwind.
- **Componentization:** All visual elements are reusable components, making maintenance and design evolution easier.

## Useful Scripts

```bash
pnpm dev         # Run in development mode
pnpm build       # Production build
pnpm start       # Run production build
pnpm lint        # Lint check
pnpm test        # Run tests (if configured)
```

## Contributing

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'feat: new feature'`)
4. Push to your branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

MIT
