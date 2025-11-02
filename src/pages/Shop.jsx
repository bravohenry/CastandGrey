import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '../components/common/Hero'
import { ProductCard } from '../components/common/ProductCard'
import { FilterBar } from '../components/common/FilterBar'
import { Button } from '../design-system'

/**
 * Shop 页面 - 产品列表页
 * 日本美学：留白、网格、克制
 * 完全使用设计系统
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
    <div className="bg-[#FFFEF6]">
      {/* Page Header - 精致排版 */}
      <section className="bg-[#FFFEF6] border-b-2 border-[#459361] py-20">
        <div className="px-[50px] lg:px-[246px]">
          {/* Breadcrumbs - 克制的导航 */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[13px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold" style={{ fontFamily: 'Archivo, sans-serif' }}>
              <li>
                <a href="/" className="hover:text-[#459361] transition-colors">Home</a>
              </li>
              <li>/</li>
              <li className="text-[#111111]">Shop</li>
            </ol>
          </nav>
          
          {/* Title - 大标题，充足留白 */}
          <h1 
            className="text-[48px] lg:text-[64px] leading-[1.1] font-bold tracking-[0.72px] text-[#111111] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Shop
          </h1>
          
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] max-w-2xl"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Discover our curated collection of plants, tools, and accessories
          </p>
        </div>
      </section>

      {/* Filter Bar - 使用设计系统样式 */}
      <FilterBar
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
        sortOptions={sortOptions}
        activeSort={activeSort}
        onSortChange={setActiveSort}
      />

      {/* Product Grid - 大量留白 */}
      <section className="py-24 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          {/* Results Count - 精致的小标签 */}
          <div className="mb-12 flex items-center justify-between">
            <p 
              className="text-[13px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.handle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-32">
              <p 
                className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#111111] mb-6"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                No products found
              </p>
              <Button variant="primary" size="default" onClick={handleClearAll}>
                CLEAR ALL FILTERS
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* SEO Text Block - 精致排版 */}
      <section className="py-24 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-4xl mx-auto text-center">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-8"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Premium Plants & Botanical Accessories
          </h2>
          <div className="space-y-6">
            <p 
              className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(255,254,246,0.9)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Welcome to Cast & Grey's curated plant shop. We specialize in bringing the beauty of
              nature into urban spaces with our carefully selected collection of indoor plants,
              planters, tools, and accessories.
            </p>
            <p 
              className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(255,254,246,0.9)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
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

