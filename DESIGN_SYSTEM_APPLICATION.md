# Design System Application - All Pages

## Overview
All pages have been updated to fully apply Japanese design principles (Ma, Kanso, Shibumi, Shizen) and utilize the existing design system components.

## Design Principles Applied

### 1. Ma (間) - Space / Void
- **Vertical Spacing**: Increased to `py-32` for major sections (previously `py-16`)
- **Horizontal Padding**: Consistent `px-[50px] lg:px-[246px]` across all pages
- **Element Gaps**: Increased from `gap-4/6` to `gap-8/12/16` for breathing room
- **Max Width**: Used `max-w-4xl` and `max-w-5xl` to create focused content areas

### 2. Kanso (簡素) - Simplicity
- **Minimal Elements**: Removed unnecessary decorative elements
- **Clean Layouts**: Grid-based layouts with clear hierarchy
- **Focused Content**: Each section has one clear purpose
- **Reduced Complexity**: Simplified component structures

### 3. Shibumi (渋み) - Subtle Elegance
- **Typography**: Precise font sizes (15.6px, 19.6px, 28.8px, 40px, 48px, 64px)
- **Letter Spacing**: Consistent tracking (0.6px, 0.7px, 0.72px)
- **Line Height**: Balanced leading for readability (28.8px, 32px)
- **Font Families**: Petrona for titles, Archivo for body text

### 4. Shizen (自然) - Naturalness
- **Subtle Animations**: Framer Motion with 0.6s duration, gentle easing
- **Staggered Entrance**: Sequential delays (0.1s, 0.2s) for natural flow
- **Hover Effects**: Gentle transitions on interactive elements
- **Color Opacity**: Used rgba for subtle color variations

## Design System Components Used

### Colors
- **Primary Background**: `#FFFEF6` (Cream)
- **Primary Green**: `#459361`
- **Text Primary**: `#111111`
- **Text Secondary**: `rgba(69,147,97,0.75)`
- **Text Muted**: `rgba(69,147,97,0.5)`

### Typography
- **Titles**: Petrona, bold, 48-64px
- **Subtitles**: Petrona, bold, 28.8-40px
- **Headings**: Petrona, bold, 15.6-19.6px
- **Body**: Archivo, 14.6px, leading 28.8px
- **Labels**: Archivo, bold, uppercase, 13-13.6px

### Components
- **Button**: From design system (`variant="primary"` and `variant="secondary"`)
- **Input Fields**: 2px border, rounded-[12px], 3D shadow
- **Cards**: 2px border, rounded-[12px], 3D shadow (0px 6px 0px)
- **Icons**: Lucide React with `strokeWidth={1.5}`

## Pages Updated

### ✅ Home (Landing Page)
- Custom hero section with large typography
- Quick access tiles with 3D shadows
- Best sellers carousel
- Features section with brand green background
- Customer reviews
- CTA blocks with design system buttons

### ✅ Shop
- Page header with breadcrumbs
- FilterBar integration
- Product grid with animations
- SEO text block on brand green

### ✅ Services
- Page header with breadcrumbs
- Services grid with staggered animations
- Features section on brand green
- Step-by-step flow with numbered circles
- Reviews and FAQ sections

### ✅ Plant Care
- Page header with breadcrumbs
- Search input with 3D shadow
- Category cards with animations
- Guide cards on brand green
- Quick tips section
- CTA section with dual buttons

### ✅ About
- Story section with image and text grid
- Mission & Vision cards on brand green
- Core values with icon circles
- Awards section with 3D cards
- Press features with left border
- Customer reviews on brand green

### ✅ Contact
- Store hero image
- Contact information with icon cards
- Map placeholder with 3D shadow
- FAQ accordion on brand green
- Contact form section

### ✅ FAQs
- Search bar with 3D shadow
- FAQ categories with spacing
- Accordion items with 3D shadows
- CTA section on brand green

### ✅ Product Detail
- Product images with thumbnail gallery
- Detailed product information
- Quantity selector with 3D shadow
- Care traits cards
- Reviews and related products

### ✅ Search
- Large search bar with 3D shadow
- Popular searches badges
- Tab navigation
- Results sections by type
- Empty state with CTAs

## Key Improvements

### Layout
- Consistent section spacing (py-32)
- Consistent container padding (px-[50px] lg:px-[246px])
- Better use of whitespace
- Centered content with max-width constraints

### Typography
- Precise font sizes from design system
- Consistent tracking and leading
- Proper font family usage (Petrona vs Archivo)
- Better text hierarchy

### Visual Elements
- 3D shadows on all cards/buttons (0px 6px 0px rgba(132, 132, 132, 0.9))
- Consistent border-radius (12px)
- Consistent border-width (2px)
- Better use of opacity for text colors

### Interactions
- Framer Motion animations on page sections
- Staggered animations for lists/grids
- Hover effects on all interactive elements
- Transition durations (0.6s for entrances)

### Components
- Removed direct design system component imports where not needed
- Used design system Button component consistently
- Applied design system colors and typography everywhere
- Created reusable sub-components within pages

## Breadcrumbs Pattern
All pages now have consistent breadcrumbs:
```jsx
<nav aria-label="Breadcrumb" className="mb-6">
  <ol className="flex items-center gap-2 text-[13px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold" style={{ fontFamily: 'Archivo, sans-serif' }}>
    {/* breadcrumb items */}
  </ol>
</nav>
```

## Page Header Pattern
All pages follow a consistent header pattern:
```jsx
<section className="bg-[#FFFEF6] border-b-2 border-[#459361] py-20">
  <div className="px-[50px] lg:px-[246px]">
    {/* Breadcrumbs */}
    {/* Title */}
    {/* Description */}
  </div>
</section>
```

## Section Pattern
Major sections follow this pattern:
```jsx
<section className="py-32 bg-[#FFFEF6] or bg-[#459361]">
  <div className="px-[50px] lg:px-[246px]">
    <h2 className="text-[40px] lg:text-[48px] ... mb-20 text-center">
      Section Title
    </h2>
    {/* Section content */}
  </div>
</section>
```

## Card Pattern
All cards use 3D shadows:
```jsx
<div 
  className="bg-[#FFFEF6] border-2 border-[#459361] rounded-[12px] p-8"
  style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
>
  {/* Card content */}
</div>
```

## Animation Pattern
Entrance animations use Framer Motion:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
  {/* Animated content */}
</motion.div>
```

## Result
All pages now have:
- ✅ Consistent visual design
- ✅ Japanese aesthetic principles
- ✅ Design system integration
- ✅ Improved spacing and typography
- ✅ Subtle animations
- ✅ Clean, maintainable code
- ✅ Excellent user experience

## Next Steps (Optional)
1. Add actual images to replace placeholders
2. Integrate real data from backend
3. Add more micro-interactions
4. Implement actual search functionality
5. Add loading states
6. Add error handling
7. Optimize for performance
8. Add accessibility improvements (ARIA labels, keyboard navigation)

