import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'
import { Button } from '../design-system'

/**
 * Article Page - Plant care article detail
 */
export const Article = () => {
  const { category, article } = useParams()
  const articleData = articles.find(a => a.handle === article && a.category === category)

  if (!articleData) {
    return (
      <div className="min-h-screen bg-[#FFFEF6] flex items-center justify-center">
        <p className="text-lg text-[#459361]">Article not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-8">
          {articleData.petSafe && (
            <span className="inline-block px-3 py-1 bg-[#459361] text-[#FFFEF6] text-sm font-bold rounded mb-4">
              Pet-Safe
            </span>
          )}
          <h1
            className="text-4xl md:text-5xl font-bold text-[#459361] mb-4"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            {articleData.title}
          </h1>
          <p
            className="text-lg text-[rgba(69,147,97,0.75)]"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            {articleData.overview}
          </p>
        </div>

        {/* Content */}
        <article className="prose max-w-none">
          <div className="bg-[#FFFEF6] border-2 border-[#459361] rounded-lg p-8 mb-8">
            <p
              className="text-[14.6px] leading-relaxed text-[rgba(69,147,97,0.75)] mb-6"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {articleData.content.intro}
            </p>

            {/* Steps */}
            {articleData.content.steps && (
              <div className="mb-8">
                <h2
                  className="text-2xl font-bold text-[#459361] mb-4"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Step-by-Step Guide
                </h2>
                <div className="space-y-4">
                  {articleData.content.steps.map((step, index) => (
                    <div key={index} className="border-l-4 border-[#459361] pl-4">
                      <h3
                        className="text-lg font-bold text-[#111111] mb-2"
                        style={{ fontFamily: 'Petrona, serif' }}
                      >
                        {index + 1}. {step.title}
                      </h3>
                      <p
                        className="text-[14.6px] text-[rgba(69,147,97,0.75)]"
                        style={{ fontFamily: 'Archivo, sans-serif' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Mistakes */}
            {articleData.content.commonMistakes && (
              <div className="mb-8">
                <h2
                  className="text-2xl font-bold text-[#459361] mb-4"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Common Mistakes to Avoid
                </h2>
                <ul className="space-y-2">
                  {articleData.content.commonMistakes.map((mistake, index) => (
                    <li
                      key={index}
                      className="text-[14.6px] text-[rgba(69,147,97,0.75)] flex items-start gap-2"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      <span className="text-[#459361]">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tool Suggestions */}
            {articleData.content.toolSuggestions && (
              <div className="mb-8">
                <h2
                  className="text-2xl font-bold text-[#459361] mb-4"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Recommended Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {articleData.content.toolSuggestions.map((tool, index) => (
                    <Link key={index} to="/shop">
                      <span className="inline-block px-4 py-2 bg-[#459361] text-[#FFFEF6] text-sm font-bold rounded hover:bg-[#459361]/90 transition-colors">
                        {tool}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/shop">
            <Button variant="primary" size="lg">
              Shop Tools
            </Button>
          </Link>
          {articleData.petSafe && (
            <Link to="/shop?filter=pet-safe">
              <Button variant="secondary" size="lg">
                Find Pet-Safe Plants
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

