import { Link } from 'react-router-dom'
import { Card, CardContent, CardTitle, CardDescription } from '../design-system'
import { articles, articleCategories } from '../data/articles'

/**
 * Plant Care Page - Plant Info Hub and Articles
 */
export const PlantCare = () => {
  return (
    <div className="min-h-screen bg-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#459361] mb-6"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          Plant Care Hub
        </h1>
        <p
          className="text-lg text-[rgba(69,147,97,0.75)] mb-12"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          Everything you need to keep your plants healthy and thriving
        </p>

        {/* Plant Info Hub Categories */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-[#459361] mb-8"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {articleCategories.map((category) => (
              <Link key={category.id} to={`/plant-care/${category.slug}`}>
                <Card variant="info" padding="lg" className="text-center hover:scale-105 transition-transform">
                  <CardContent>
                    <CardTitle variant="info">{category.name}</CardTitle>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides & Articles */}
        <section>
          <h2
            className="text-3xl font-bold text-[#459361] mb-8"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Guides & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
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
      </div>
    </div>
  )
}

