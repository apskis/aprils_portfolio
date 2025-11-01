# April Parker's Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and shadcn/ui components.

## 🎨 Features

- **Modern UI Components**: Built with shadcn/ui for accessible, customizable components
- **Custom Color Palette**: Unique design featuring Ivory, Desert Sun, and Tiffany Blue
- **Responsive Design**: Fully responsive across all devices using Tailwind CSS v4
- **Type-Safe**: Complete TypeScript implementation
- **Multiple Pages**: Home, About, Blog, Social, FAQ, and Contact pages
- **Interactive Elements**: Accordions, forms, cards, and smooth transitions

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── components/         # Shared components
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── social/            # Social page
│   └── page.tsx           # Home page
├── components/ui/         # shadcn/ui components
├── lib/                   # Utility functions
└── public/                # Static assets

```

## 🎨 Color Palette

- **Ivory**: `#D8D9D0` - Background
- **Black**: `#111410` - Primary text
- **Desert Sun**: `#D18C30` - Primary accent
- **Tiffany Blue**: `#2897B0` - Secondary accent

## 📝 Available Pages

- **Home** (`/`) - Portfolio showcase with profile sidebar
- **About** (`/about`) - Detailed information and journey
- **Blog** (`/blog`) - Blog posts and articles
- **Social** (`/social`) - Social media links and newsletter
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Contact form and information

## 🔧 Customization

The portfolio uses shadcn/ui components which are fully customizable. All components can be found in `components/ui/` and can be modified to suit your needs.

Color scheme can be adjusted in `app/globals.css` by modifying the CSS variables.

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is open source and available under the MIT License.
