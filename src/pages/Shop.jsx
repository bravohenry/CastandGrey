import { useState } from 'react'
import { PageHeader } from '../components/common/Hero'
import { ProductCard } from '../components/common/ProductCard'
import { FilterBar } from '../components/common/FilterBar'

/**
 * Shop 页面 - 产品列表页
 * 展示所有产品，支持筛选和排序
 */
export function Shop() {
  // 模拟产品数据
  const allProducts = [
    {
      handle: 'monstera-deliciosa',
      name: 'Monstera Deliciosa',
      scientificName: 'Monstera deliciosa',
      price: 45,
      image: null,
      badges: [{ label: 'Best Seller', type: 'new' }],
      careTraits: { light: 'Bright Indirect', water: 'Weekly' },
      rating: 4.8,
      reviewCount: 124,
      category: 'plants',
      petSafe: false,
      lightLevel: 'bright'
    },
    {
      handle: 'snake-plant',
      name: 'Snake Plant',
      scientificName: 'Sansevieria trifasciata',
      price: 28,
      image: null,
      badges: [{ label: 'Pet Safe', type: 'pet-safe' }],
      careTraits: { light: 'Low Light', water: 'Bi-weekly' },
      rating: 4.9,
      reviewCount: 98,
      category: 'plants',
      petSafe: true,
      lightLevel: 'low'
    },
    {
      handle: 'fiddle-leaf-fig',
      name: 'Fiddle Leaf Fig',
      scientificName: 'Ficus lyrata',
      price: 65,
      image: null,
      badges: [{ label: 'Popular', type: 'new' }],
      careTraits: { light: 'Bright Indirect', water: 'Weekly' },
      rating: 4.6,
      reviewCount: 87,
      category: 'plants',
      petSafe: false,
      lightLevel: 'bright'
    },
    {
      handle: 'pothos-golden',
      name: 'Golden Pothos',
      scientificName: 'Epipremnum aureum',
      price: 22,
      image: null,
      badges: [{ label: 'Low Maintenance', type: 'new' }],
      careTraits: { light: 'Low-Medium', water: 'Weekly' },
      rating: 4.9,
      reviewCount: 156,
      category: 'plants',
      petSafe: false,
      lightLevel: 'medium'
    },
    {
      handle: 'peace-lily',
      name: 'Peace Lily',
      scientificName: 'Spathiphyllum',
      price: 32,
      image: null,
      badges: [{ label: 'Pet Safe', type: 'pet-safe' }],
      careTraits: { light: 'Low Light', water: 'Weekly' },
      rating: 4.7,
      reviewCount: 76,
      category: 'plants',
      petSafe: true,
      lightLevel: 'low'
    },
    {
      handle: 'ceramic-planter-white',
      name: 'White Ceramic Planter',
      price: 18,
      image: null,
      category: 'planters',
      rating: 4.5,
      reviewCount: 42
    },
    {
      handle: 'pruning-shears',
      name: 'Professional Pruning Shears',
      price: 24,
      image: null,
      category: 'tools',
      rating: 4.8,
      reviewCount: 67
    },
    {
      handle: 'organic-potting-mix',
      name: 'Organic Potting Mix',
      price: 15,
      image: null,
      category: 'soil',
      rating: 4.9,
      reviewCount: 134
    }
  ]

  // 过滤器配置
  const filters = [
    {
      id: 'category',
      label: 'Category',
      options: [
        { value: 'plants', label: 'Plants' },
        { value: 'tools', label: 'Tools' },
        { value: 'planters', label: 'Planters' },
        { value: 'soil', label: 'Soil' }
      ]
    },
    {
      id: 'petSafe',
      label: 'Pet Safe',
      options: [
        { value: 'true', label: 'Pet Safe Only' },
        { value: 'false', label: 'All Plants' }
      ]
    },
    {
      id: 'lightLevel',
      label: 'Light Level',
      options: [
        { value: 'low', label: 'Low Light' },
        { value: 'medium', label: 'Medium Light' },
        { value: 'bright', label: 'Bright Light' }
      ]
    },
    {
      id: 'price',
      label: 'Price Range',
      options: [
        { value: '0-25', label: 'Under $25' },
        { value: '25-50', label: '$25 - $50' },
        { value: '50+', label: '$50+' }
      ]
    }
  ]

  // 排序选项
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A to Z' },
    { value: 'rating', label: 'Highest Rated' }
  ]

  const [activeFilters, setActiveFilters] = useState({})
  const [activeSort, setActiveSort] = useState('featured')

  const handleFilterChange = (filterId, value) => {
    setActiveFilters((prev) => {
      if (value === null) {
        const newFilters = { ...prev }
        delete newFilters[filterId]
        return newFilters
      }
      return { ...prev, [filterId]: value }
    })
  }

  const handleClearAll = () => {
    setActiveFilters({})
  }

  // 应用过滤和排序
  let filteredProducts = allProducts.filter((product) => {
    if (activeFilters.category && product.category !== activeFilters.category) {
      return false
    }
    if (activeFilters.petSafe === 'true' && !product.petSafe) {
      return false
    }
    if (activeFilters.lightLevel && product.lightLevel !== activeFilters.lightLevel) {
      return false
    }
    if (activeFilters.price) {
      const [min, max] = activeFilters.price.split('-').map((v) => (v === '+' ? Infinity : parseInt(v)))
      if (product.price < min || product.price > max) {
        return false
      }
    }
    return true
  })

  // 排序
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (activeSort) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      case 'rating':
        return (b.rating || 0) - (a.rating || 0)
      default:
        return 0
    }
  })

  return (
    <div>
      <PageHeader
        title="Shop"
        description="Discover our curated collection of plants, tools, and accessories"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop' }
        ]}
      />

      <FilterBar
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
        sortOptions={sortOptions}
        activeSort={activeSort}
        onSortChange={setActiveSort}
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-stone-600">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.handle} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-stone-600 mb-4">No products found</p>
              <button
                onClick={handleClearAll}
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-12 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Premium Plants & Botanical Accessories
          </h2>
          <div className="prose prose-stone max-w-none text-stone-600">
            <p>
              Welcome to Cast & Grey's curated plant shop. We specialize in bringing the beauty of
              nature into urban spaces with our carefully selected collection of indoor plants,
              planters, tools, and accessories.
            </p>
            <p>
              Every plant in our collection is hand-selected for quality and comes with detailed
              care instructions. Whether you're a seasoned plant parent or just starting your
              botanical journey, we have something perfect for your space.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

