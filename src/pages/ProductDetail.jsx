import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { getReviewsByProductId } from '../data/reviews'
import { CareTraits } from '../components/shop/CareTraits'
import { ReviewCarousel } from '../components/reviews/ReviewCarousel'
import { Button } from '../design-system'

/**
 * Product Detail Page
 */
export const ProductDetail = () => {
  const { handle } = useParams()
  const product = products.find(p => p.handle === handle)
  const reviews = product ? getReviewsByProductId(product.id) : []

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FFFEF6] flex items-center justify-center">
        <p className="text-lg text-[#459361]">Product not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Media Gallery */}
          <div className="bg-[#848484] h-96 rounded-lg flex items-center justify-center text-[#FFFEF6]">
            Product Image Placeholder
          </div>

          {/* Product Info */}
          <div>
            <h1
              className="text-4xl font-bold text-[#459361] mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              {product.name}
            </h1>
            <p
              className="text-3xl font-bold text-[#459361] mb-6"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              ${product.price.toFixed(2)} USD
            </p>
            <p
              className="text-[14.6px] leading-relaxed text-[rgba(69,147,97,0.75)] mb-6"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {product.description}
            </p>

            {/* Care Traits */}
            {product.careTraits && (
              <div className="mb-6">
                <CareTraits traits={product.careTraits} />
              </div>
            )}

            {/* Size Info */}
            {product.size && (
              <div className="mb-6">
                <p
                  className="text-sm font-bold text-[#111111] mb-2"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Size
                </p>
                <p
                  className="text-sm text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  Pot: {product.size.pot} | Height: {product.size.height}
                </p>
              </div>
            )}

            {/* Local Delivery Info */}
            <div className="mb-6 p-4 bg-[#FFFEF6] border-2 border-[#459361] rounded-lg">
              <p
                className="text-sm font-bold text-[#459361] mb-1"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Local Delivery Available
              </p>
              <p
                className="text-xs text-[rgba(69,147,97,0.75)]"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                We deliver within 30 km radius. Same day or next day delivery available.
              </p>
            </div>

            {/* Add to Cart Button */}
            <Button variant="primary" size="lg" className="w-full mb-4">
              Add to Cart
            </Button>

            {/* Related Care Articles */}
            {product.careTraits && (
              <div>
                <p
                  className="text-sm text-[rgba(69,147,97,0.75)] mb-2"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  <a href="/plant-care" className="hover:underline font-bold">
                    Learn care tips for this plant →
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Shop Accessories */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold text-[#459361] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Shop Accessories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.filter(p => p.category === 'tools' || p.category === 'planters').slice(0, 4).map(item => (
              <div key={item.id} className="bg-[#848484] h-32 rounded-lg flex items-center justify-center text-[#FFFEF6] text-sm">
                {item.name}
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        {reviews.length > 0 && (
          <section>
            <h2
              className="text-2xl font-bold text-[#459361] mb-6"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Customer Reviews
            </h2>
            <ReviewCarousel reviews={reviews} />
          </section>
        )}
      </div>
    </div>
  )
}

