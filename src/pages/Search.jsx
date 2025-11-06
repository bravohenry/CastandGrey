import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from '../components/common/ProductCard'
import { Link } from 'react-router-dom'
import { Search as SearchIcon, X } from 'lucide-react'
import { Button } from '../design-system'

/**
 * Search 页面 - 搜索结果页
 * 日本美学：留白、克制、精致
 * 完全使用设计系统
 */
export function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  // 模拟搜索结果
  const searchResults = {
    products: [
      {
        handle: 'monstera-deliciosa',
        name: 'Monstera Deliciosa',
        price: 45,
        image: null,
        rating: 4.8,
        reviewCount: 124
      },
      {
        handle: 'snake-plant',
        name: 'Snake Plant',
        price: 28,
        image: null,
        badges: [{ label: 'Pet Safe', type: 'pet-safe' }],
        rating: 4.9,
        reviewCount: 98
      }
    ],
    services: [
      {
        name: 'In-Home Consultation',
        description: 'One-on-one coaching with a lighting assessment, write-up, and optional repotting',
        price: 'From $75',
        href: '/services/in-home'
      }
    ],
    articles: [
      {
        title: 'Savannah Watering Rhythm',
        excerpt: 'Seasonal watering schedules tailored to our coastal humidity...',
        category: 'Plant Care',
        href: '/plant-care/monstera-guide'
      },
      {
        title: 'Pet-Safe Plant Pairings',
        excerpt: 'Create beautiful vignettes that stay safe for curious pets and kids...',
        category: 'Plant Care',
        href: '/plant-care/pet-safe'
      }
    ]
  }

  const tabs = [
    { id: 'all', label: 'All Results', count: 5 },
    { id: 'products', label: 'Products', count: 2 },
    { id: 'services', label: 'Services', count: 1 },
    { id: 'articles', label: 'Articles', count: 2 }
  ]

  const filteredResults = activeTab === 'all' ? searchResults : { [activeTab]: searchResults[activeTab] }

  return (
    <div className="bg-[#FFFEF6]">
      {/* Page Header - 精致排版 */}
      <section className="bg-[#FFFEF6] border-b-2 border-[#459361] py-20">
        <div className="px-[50px] lg:px-[246px]">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[13px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold" style={{ fontFamily: 'Archivo, sans-serif' }}>
              <li>
                <Link to="/" className="hover:text-[#459361] transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-[#111111]">Search</li>
            </ol>
          </nav>
          
          <h1 
            className="text-[48px] lg:text-[64px] leading-[1.1] font-bold tracking-[0.72px] text-[#111111] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Search
          </h1>
          
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] max-w-2xl"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Explore plants, services, and Savannah-specific care guides from Cast & Grey
          </p>
        </div>
      </section>

      {/* Search Bar - 精致的搜索框 */}
      <section className="py-12 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-4xl mx-auto">
          <div className="relative">
            <SearchIcon 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-[rgba(69,147,97,0.5)]" 
              size={20} 
              strokeWidth={1.5}
            />
            <input
              type="text"
              placeholder="Search for plants, services, or care guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-16 py-5 border-2 border-[#459361] rounded-[12px] focus:outline-none focus:ring-0 bg-[#FFFEF6] text-[14.6px] tracking-[0.6px] text-[#111111] placeholder:text-[rgba(69,147,97,0.5)]"
              style={{ 
                fontFamily: 'Archivo, sans-serif',
                boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)'
              }}
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-[rgba(69,147,97,0.5)] hover:text-[#459361] transition-colors"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            )}
          </div>

          {/* Popular Searches */}
          {!searchQuery && (
            <div className="mt-6">
              <p 
                className="text-[13px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold mb-3"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Popular searches:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Local delivery', 'Pet-safe plant list', 'In-home consultation', 'Humidity hacks'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-4 py-2 bg-[rgba(69,147,97,0.1)] text-[#459361] rounded-full text-[13px] leading-[18px] tracking-[0.6px] font-bold hover:bg-[rgba(69,147,97,0.15)] transition-colors"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {searchQuery && (
        <>
          {/* Tabs - 克制的标签栏 */}
          <section className="bg-[#FFFEF6] border-b-2 border-[#459361]">
            <div className="px-[50px] lg:px-[246px]">
              <nav className="flex gap-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      py-5 px-2 border-b-4 whitespace-nowrap transition-colors text-[13.6px] leading-[18.2px] tracking-[0.6px] font-bold uppercase
                      ${activeTab === tab.id
                        ? 'border-[#459361] text-[#459361]'
                        : 'border-transparent text-[rgba(69,147,97,0.5)] hover:text-[#459361]'
                      }
                    `}
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {tab.label} <span className="text-[11px]">({tab.count})</span>
                  </button>
                ))}
              </nav>
            </div>
          </section>

          {/* Results - 精致的结果展示 */}
          <section className="py-32 bg-[#FFFEF6]">
            <div className="px-[50px] lg:px-[246px]">
              <p 
                className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] mb-16"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Showing results for "<span className="font-bold text-[#111111]">{searchQuery}</span>"
              </p>

              <div className="space-y-20">
                {/* Products */}
                {(activeTab === 'all' || activeTab === 'products') && filteredResults.products && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 
                      className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#111111] mb-10"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {filteredResults.products.map((product) => (
                        <ProductCard key={product.handle} product={product} />
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Services */}
                {(activeTab === 'all' || activeTab === 'services') && filteredResults.services && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h2 
                      className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#111111] mb-10"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Services
                    </h2>
                    <div className="space-y-6">
                      {filteredResults.services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="block bg-[#FFFEF6] border-2 border-[#459361] rounded-[12px] p-8 hover:border-[#459361] transition-all"
                          style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
                        >
                          <h3 
                            className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2"
                            style={{ fontFamily: 'Petrona, serif' }}
                          >
                            {service.name}
                          </h3>
                          <p 
                            className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] mb-3"
                            style={{ fontFamily: 'Archivo, sans-serif' }}
                          >
                            {service.description}
                          </p>
                          <p 
                            className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[#459361] font-bold"
                            style={{ fontFamily: 'Archivo, sans-serif' }}
                          >
                            {service.price}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Articles */}
                {(activeTab === 'all' || activeTab === 'articles') && filteredResults.articles && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 
                      className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#111111] mb-10"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Articles & Guides
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredResults.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.href}
                          className="block bg-[#FFFEF6] border-2 border-[#459361] rounded-[12px] p-8 hover:border-[#459361] transition-all"
                          style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
                        >
                          <span 
                            className="inline-block px-3 py-1 bg-[rgba(69,147,97,0.1)] text-[#459361] text-[11px] leading-[18px] tracking-[0.7px] rounded-full uppercase font-bold mb-4"
                            style={{ fontFamily: 'Archivo, sans-serif' }}
                          >
                            {article.category}
                          </span>
                          <h3 
                            className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2"
                            style={{ fontFamily: 'Petrona, serif' }}
                          >
                            {article.title}
                          </h3>
                          <p 
                            className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                            style={{ fontFamily: 'Archivo, sans-serif' }}
                          >
                            {article.excerpt}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Empty State / CTA - 精致的空状态 */}
      {!searchQuery && (
        <section className="py-32 bg-[#FFFEF6]">
          <div className="px-[50px] lg:px-[246px] text-center max-w-3xl mx-auto">
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-8"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Start Your Search
            </h2>
            <p 
              className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] mb-12"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Looking for something specific? Try searching for a plant name, care guide, or service above.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/shop">
                <Button variant="primary" size="lg">
                  BROWSE SHOP
                </Button>
              </Link>
              <Link to="/plant-care">
                <Button variant="secondary" size="lg">
                  CARE GUIDES
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
