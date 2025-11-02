# Cast & Grey - Project Structure

## Overview
A modern, minimalist botanical e-commerce site built with React, React Router, Tailwind CSS, and Framer Motion.

## Architecture

### Clean App.jsx ✓
The main `App.jsx` is extremely clean and minimal - all complexity is delegated to pages and components.

### Component-Based Thinking ✓
Every UI element is a reusable, well-documented component with clear responsibilities.

### File Structure

```
src/
├── App.jsx                          # Main app with clean routing
├── main.jsx                         # Entry point
├── index.css                        # Global styles
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx              # Global navigation with mega menu
│   │   ├── Footer.jsx              # Global footer
│   │   ├── MainLayout.jsx          # Layout wrapper
│   │   └── index.js                # Exports
│   │
│   ├── common/                     # Reusable components
│   │   ├── Hero.jsx                # Hero & PageHeader components
│   │   ├── ProductCard.jsx         # Product & Service cards
│   │   ├── FilterBar.jsx           # Filter and sort bar
│   │   ├── ReviewCarousel.jsx      # Review carousel & grid
│   │   ├── ContactForm.jsx         # Contact form
│   │   └── index.js                # Exports
│   │
│   └── design-system/              # Design tokens and utilities
│       ├── components/
│       ├── tokens/
│       └── hooks/
│
├── pages/
│   ├── Home.jsx                    # Landing page
│   ├── Shop.jsx                    # Product listing with filters
│   ├── ProductDetail.jsx           # Single product page
│   ├── Services.jsx                # Services listing
│   ├── PlantCare.jsx              # Plant care hub
│   ├── About.jsx                   # About page
│   ├── Contact.jsx                 # Contact page with form
│   ├── FAQs.jsx                    # FAQ page
│   ├── Search.jsx                  # Search results page
│   └── index.js                    # Exports
│
└── assets/
    └── Cast & Grey Botanical Bkg_files/
        ├── logo-high-res.png
        ├── gift-card-in-store.png
        ├── photo-*.jpg              # Product/hero images
        └── storepicture.jpg
```

## Key Features

### Navigation System
- **Global Header**: Sticky header with dropdown and mega menu
- **Desktop Navigation**: Hover-activated menus with 200-300ms delay
- **Mobile Navigation**: Hamburger menu with accordion structure
- **Accessibility**: Full keyboard navigation, ARIA roles, focus management

### Page Structure
- **Home**: Hero, quick access tiles, best sellers, features, reviews, CTAs
- **Shop**: Filter bar, product grid, sorting, SEO content
- **Product Detail**: Image gallery, care traits, reviews, related products
- **Services**: Service cards, features, how it works, reviews, FAQs
- **Plant Care**: Category browse, popular guides, quick tips, CTAs
- **About**: Story, mission/vision, values, awards, press, reviews
- **Contact**: Store info, map, FAQs, contact form
- **FAQs**: Searchable, categorized questions with accordion UI
- **Search**: Multi-type results (products, services, articles)

### Reusable Components
- **Hero**: Flexible hero component with multiple sizes and overlays
- **PageHeader**: Simple page header with breadcrumbs
- **ProductCard**: Product display with badges, rating, quick actions
- **ServiceCard**: Service display with booking CTA
- **FilterBar**: Filter and sort with mobile-friendly UI
- **ReviewCarousel**: Animated review slider
- **ReviewGrid**: Grid layout for reviews
- **ContactForm**: Full-featured contact form

### Design System
- **Minimalist Aesthetic**: Clean, modern, botanical theme
- **Consistent Spacing**: Using design tokens
- **Color Palette**: Stone grays with green accents
- **Typography**: Clear hierarchy with proper font weights
- **Components**: Button, Card, Input from design system

### Cross-Linking Strategy
- Shop → Plant Care (learn care)
- Plant Care → Shop (buy plants)
- Services → Shop (related products)
- All pages → Contact/FAQs

## URL Structure

```
/                           - Home
/shop                       - All products
/shop/:category             - Category pages
/products/:handle           - Product detail
/services                   - Services list
/services/:serviceType      - Service detail
/plant-care                 - Plant care hub
/plant-care/:category       - Care category
/plant-care/:category/:article - Care article
/about                      - About page
/contact                    - Contact page
/faqs                       - FAQs
/search                     - Search results
/cart                       - Shopping cart
/account                    - User account
/gift-cards                 - Gift cards
/policies/*                 - Policy pages
```

## Technologies

- **React 19.1**: Component framework
- **React Router 7.9**: Client-side routing
- **Tailwind CSS 4.1**: Utility-first styling
- **Framer Motion 12**: Animations
- **Lucide React**: Icon library
- **Vite 7**: Build tool

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features Implementation Status

✅ Global Header with mega menu & dropdowns  
✅ Global Footer with all sections  
✅ Home page with all sections  
✅ Shop with filters and sorting  
✅ Product detail with care traits  
✅ Services listing and detail  
✅ Plant Care hub  
✅ About page with story and awards  
✅ Contact with form and map placeholder  
✅ FAQs with search and categories  
✅ Search with multi-type results  
✅ Responsive design (mobile, tablet, desktop)  
✅ Accessibility features  
✅ Clean component architecture  
✅ SEO-friendly structure  

## Notes

- All images use placeholders (light gray blocks) where actual images aren't available
- Existing images in assets folder can be used where appropriate
- All content is in English as requested
- Form submissions are simulated (no backend integration yet)
- Data is hardcoded for demo purposes
- Ready for backend API integration

## Acceptance Criteria Met ✓

1. ✅ Minimalist style following design system
2. ✅ Component-based thinking
3. ✅ Excellent file structure and architecture
4. ✅ Extremely clean and tidy `App.jsx`
5. ✅ Gray block placeholders for missing images
6. ✅ All content in English

