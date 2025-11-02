import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { FilterBar } from '../components/shop/FilterBar'
import { ProductGrid } from '../components/shop/ProductGrid'
import { products, categories } from '../data/products'

/**
 * Shop Page - Main shop page with filters and product grid
 */
export const Shop = () => {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const [activeFilters, setActiveFilters] = useState({
    bestSellers: searchParams.get('filter') === 'best-sellers',
    petSafe: searchParams.get('filter') === 'pet-safe',
    lowMaintenance: searchParams.get('filter') === 'low-maintenance',
  })

  let filteredProducts = products

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category)
  }

  // Apply active filters
  if (activeFilters.bestSellers) {
    filteredProducts = filteredProducts.filter(p => p.badges?.includes('Best Seller'))
  }
  if (activeFilters.petSafe) {
    filteredProducts = filteredProducts.filter(p => p.careTraits?.petSafe)
  }
  if (activeFilters.lowMaintenance) {
    filteredProducts = filteredProducts.filter(p => p.badges?.includes('Low-maintenance'))
  }

  const handleFilterChange = (filterName) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName],
    }))
  }

  const handleSortChange = (sortValue) => {
    // Implement sorting logic
    console.log('Sort by:', sortValue)
  }

  const currentCategory = category ? categories.find(c => c.slug === category) : null

  return (
    <div className="min-h-screen bg-[#FFFEF6] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Title and Intro */}
        <div className="mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#459361] mb-4"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            {currentCategory ? currentCategory.name : 'Shop'}
          </h1>
          {currentCategory && (
            <p
              className="text-lg text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Browse our selection of {currentCategory.name.toLowerCase()}
            </p>
          )}
        </div>

        {/* Filter Bar */}
        <FilterBar
          filters={activeFilters}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />

        {/* SEO Text Block */}
        <div className="mt-16 pt-12 border-t-2 border-[#848484]/30">
          <div className="max-w-3xl">
            <h2
              className="text-2xl font-bold text-[#459361] mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              About Our Products
            </h2>
            <p
              className="text-[14.6px] leading-relaxed text-[rgba(69,147,97,0.75)] mb-4"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              At Cast & Grey Botanical, we carefully curate our plant selection to ensure
              each plant is healthy, well-cared for, and ready to thrive in your home. All
              our plants come with detailed care instructions and our team is always here
              to help with any questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

