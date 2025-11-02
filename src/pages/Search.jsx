import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ProductGrid } from '../components/shop/ProductGrid'
import { Card, CardContent, CardTitle, CardDescription } from '../design-system'
import { products } from '../data/products'
import { services } from '../data/services'
import { articles } from '../data/articles'

/**
 * Search Results Page - Smart search across products, services, and articles
 */
export const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  if (!query.trim()) {
    return (
      <div className="min-h-screen bg-[#FFFEF6] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h1
            className="text-4xl font-bold text-[#459361] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Search
          </h1>
          <p
            className="text-lg text-[rgba(69,147,97,0.75)]"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Enter a search term to find products, services, or articles.
          </p>
        </div>
      </div>
    )
  }

  // Simple search - filter by name, description, title
  const searchLower = query.toLowerCase()
  
  const productResults = products.filter(p => 
    p.name.toLowerCase().includes(searchLower) ||
    p.description?.toLowerCase().includes(searchLower)
  )

  const serviceResults = services.filter(s =>
    s.title.toLowerCase().includes(searchLower) ||
    s.description?.toLowerCase().includes(searchLower)
  )

  const articleResults = articles.filter(a =>
    a.title.toLowerCase().includes(searchLower) ||
    a.overview?.toLowerCase().includes(searchLower)
  )

  const hasResults = productResults.length > 0 || serviceResults.length > 0 || articleResults.length > 0

  return (
    <div className="min-h-screen bg-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#459361] mb-2"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          Search Results
        </h1>
        <p
          className="text-lg text-[rgba(69,147,97,0.75)] mb-8"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          Results for: <strong>"{query}"</strong>
        </p>

        {!hasResults ? (
          <div className="text-center py-12">
            <p
              className="text-lg text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              No results found for "{query}". Try a different search term.
            </p>
          </div>
        ) : (
          <>
            {/* Products */}
            {productResults.length > 0 && (
              <section className="mb-12">
                <h2
                  className="text-2xl font-bold text-[#459361] mb-6"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Products ({productResults.length})
                </h2>
                <ProductGrid products={productResults} />
              </section>
            )}

            {/* Services */}
            {serviceResults.length > 0 && (
              <section className="mb-12">
                <h2
                  className="text-2xl font-bold text-[#459361] mb-6"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Services ({serviceResults.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceResults.map((service) => (
                    <Link key={service.id} to={`/services/${service.type}/${service.id}`}>
                      <Card variant="info" padding="md" className="h-full hover:scale-105 transition-transform">
                        <CardContent>
                          <CardTitle variant="info">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                          <div className="mt-4 flex justify-between items-center">
                            <span
                              className="text-[#459361] font-bold"
                              style={{ fontFamily: 'Petrona, serif' }}
                            >
                              ${service.price.toFixed(2)}
                            </span>
                            <span
                              className="text-sm text-[rgba(69,147,97,0.75)]"
                              style={{ fontFamily: 'Archivo, sans-serif' }}
                            >
                              {service.duration}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Articles */}
            {articleResults.length > 0 && (
              <section className="mb-12">
                <h2
                  className="text-2xl font-bold text-[#459361] mb-6"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Articles ({articleResults.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articleResults.map((article) => (
                    <Link key={article.id} to={`/plant-care/${article.category}/${article.handle}`}>
                      <Card variant="info" padding="md" className="h-full hover:scale-105 transition-transform">
                        <CardContent>
                          <div className="flex items-center gap-2 mb-2">
                            {article.petSafe && (
                              <span className="px-2 py-1 bg-[#459361] text-[#FFFEF6] text-xs font-bold rounded">
                                Pet-Safe
                              </span>
                            )}
                          </div>
                          <CardTitle variant="info">{article.title}</CardTitle>
                          <CardDescription>{article.overview}</CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}

