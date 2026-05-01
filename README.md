# Maua Corner 🌸

> Your Corner of Elegant Blooms — A luxury flower shop website for Maua Corner, Eldoret, Kenya.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 3.4**
- **TypeScript**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
cd MauaCorner
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/             # Next.js App Router pages
│   ├── layout.tsx   # Root layout (nav, footer, cart)
│   ├── page.tsx     # Homepage
│   ├── shop/        # Shop page with filterable products
│   ├── occasions/   # Occasion-based shopping
│   ├── about/       # About us page
│   ├── delivery/    # Delivery & pickup info
│   └── contact/     # Contact form & details
├── components/      # Reusable UI components
├── data/            # Static product & content data
├── styles/          # Global CSS with Tailwind
└── utils/           # Cart context, animations
```

## Key Features

- 🛒 Cart with WhatsApp checkout
- 📱 Fully responsive (mobile-first)
- 🔍 Product filtering by category, occasion, price
- 💬 Floating WhatsApp button
- ✨ Smooth scroll-reveal animations
- 🗺️ Google Maps embed
- 📸 Instagram feed teaser

## Future Integrations

- **M-Pesa**: Payment integration (see comments in Cart component)
- **Delivery API**: Real-time delivery tracking
- **CMS**: Connect to Sanity/Strapi for product management
- **Email**: Connect contact form to Resend/SendGrid

## Contact

- 📞 0726 155 188
- 📸 [@maua.corner](https://instagram.com/maua.corner)
- 📍 Shop T36, Rainbow Centre, next to Bandaptai, Eldoret

---

Built with ❤️ for Maua Corner.
