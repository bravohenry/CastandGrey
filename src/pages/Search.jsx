import { useState } from 'react'
import { PageHeader } from '../components/common/Hero'
import { ProductCard } from '../components/common/ProductCard'
import { Link } from 'react-router-dom'
import { Search as SearchIcon, X } from 'lucide-react'

/**
 * Search 页面 - 搜索结果页
 * 展示跨产品、服务和文章的搜索结果
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
        description: 'Professional consultation at your home or office',
        price: 'From $75',
        href: '/services/in-home'
      }
    ],
    articles: [
      {
        title: 'Complete Monstera Care Guide',
        excerpt: 'Learn everything about caring for your Monstera Deliciosa...',
        category: 'Plant Care',
        href: '/plant-care/monstera-guide'
      },
      {
        title: 'Pet-Safe Plant List',
        excerpt: 'A comprehensive guide to plants that are safe for cats and dogs...',
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
    <div>
      <PageHeader
        title="Search"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Search' }
        ]}
      />

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            <input
              type="text"
              placeholder="Search for plants, services, or care guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border-2 border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-lg"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Popular Searches */}
          {!searchQuery && (
            <div className="mt-4">
              <p className="text-sm text-stone-600 mb-2">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Monstera', 'Pet-safe plants', 'Low light', 'Repotting guide'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm hover:bg-stone-200 transition-colors"
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
          {/* Tabs */}
          <section className="bg-white border-b border-stone-200">
            <div className="container mx-auto px-4 lg:px-8">
              <nav className="flex gap-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      py-4 px-2 border-b-2 whitespace-nowrap transition-colors
                      ${activeTab === tab.id
                        ? 'border-green-600 text-green-600 font-semibold'
                        : 'border-transparent text-stone-600 hover:text-stone-900'
                      }
                    `}
                  >
                    {tab.label} <span className="text-sm">({tab.count})</span>
                  </button>
                ))}
              </nav>
            </div>
          </section>

          {/* Results */}
          <section className="py-12 bg-stone-50">
            <div className="container mx-auto px-4 lg:px-8">
              <p className="text-stone-600 mb-8">
                Showing results for "<span className="font-semibold">{searchQuery}</span>"
              </p>

              <div className="space-y-12">
                {/* Products */}
                {(activeTab === 'all' || activeTab === 'products') && filteredResults.products && (
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-6">Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {filteredResults.products.map((product) => (
                        <ProductCard key={product.handle} product={product} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Services */}
                {(activeTab === 'all' || activeTab === 'services') && filteredResults.services && (
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-6">Services</h2>
                    <div className="space-y-4">
                      {filteredResults.services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="block bg-white rounded-lg p-6 border border-stone-200 hover:shadow-lg transition-shadow"
                        >
                          <h3 className="font-semibold text-stone-900 mb-2">{service.name}</h3>
                          <p className="text-stone-600 mb-3">{service.description}</p>
                          <p className="text-green-600 font-semibold">{service.price}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Articles */}
                {(activeTab === 'all' || activeTab === 'articles') && filteredResults.articles && (
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-6">Articles & Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredResults.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.href}
                          className="block bg-white rounded-lg p-6 border border-stone-200 hover:shadow-lg transition-shadow"
                        >
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded mb-3">
                            {article.category}
                          </span>
                          <h3 className="font-semibold text-stone-900 mb-2">{article.title}</h3>
                          <p className="text-stone-600 text-sm">{article.excerpt}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

