import { Link } from 'react-router-dom'
import { Hero } from '../components/hero/Hero'
import { Card, CardContent, CardTitle, CardDescription } from '../design-system'
import { ReviewCarousel } from '../components/reviews/ReviewCarousel'
import { ProductGrid } from '../components/shop/ProductGrid'
import { Button } from '../design-system'
import { products } from '../data/products'
import { getGeneralReviews } from '../data/reviews'

/**
 * Home / Landing Page
 */
export const Home = () => {
  const bestSellers = products.filter(p => p.badges?.includes('Best Seller')).slice(0, 4)
  const reviews = getGeneralReviews(3)

  return (
    <div className="min-h-screen bg-[#FFFEF6]">
      {/* Hero Banner */}
      <Hero
        title="Welcome to Cast & Grey Botanical"
        subtitle="Your favorite community indoor plant boutique"
        ctaText="Shop Now"
        ctaLink="/shop"
      />

      {/* Quick Access Tiles */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/shop">
              <Card variant="info" padding="lg" className="h-full text-center hover:scale-105 transition-transform">
                <CardContent>
                  <div className="text-4xl mb-4">🛍️</div>
                  <CardTitle variant="info">Shop</CardTitle>
                  <CardDescription>Browse our plant collection</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link to="/services">
              <Card variant="info" padding="lg" className="h-full text-center hover:scale-105 transition-transform">
                <CardContent>
                  <div className="text-4xl mb-4">🌱</div>
                  <CardTitle variant="info">Services</CardTitle>
                  <CardDescription>Book professional plant care</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link to="/plant-care">
              <Card variant="info" padding="lg" className="h-full text-center hover:scale-105 transition-transform">
                <CardContent>
                  <div className="text-4xl mb-4">📚</div>
                  <CardTitle variant="info">Plant Care</CardTitle>
                  <CardDescription>Learn plant care tips</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link to="/shop?category=gift-cards">
              <Card variant="info" padding="lg" className="h-full text-center hover:scale-105 transition-transform">
                <CardContent>
                  <div className="text-4xl mb-4">🎁</div>
                  <CardTitle variant="info">Gift Cards</CardTitle>
                  <CardDescription>Perfect plant gift</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-12 md:py-16 bg-[#FFFEF6]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#459361] mb-8 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Best Sellers
          </h2>
          <ProductGrid products={bestSellers} />
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="secondary" size="lg">
                Shop All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Highlights */}
      <section className="py-12 md:py-16 bg-[#459361] text-[#FFFEF6]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Local Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Petrona, serif' }}>Pickup</h3>
              <p style={{ fontFamily: 'Archivo, sans-serif' }}>In-store pickup available</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Petrona, serif' }}>Delivery</h3>
              <p style={{ fontFamily: 'Archivo, sans-serif' }}>Local delivery service</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🐾</div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Petrona, serif' }}>Pet-Safe</h3>
              <p style={{ fontFamily: 'Archivo, sans-serif' }}>Pet-safe plant selection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      {reviews.length > 0 && <ReviewCarousel reviews={reviews} />}

      {/* Final CTA Row */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg">
                Book Service
              </Button>
            </Link>
            <Link to="/plant-care">
              <Button variant="secondary" size="lg">
                Learn Plant Care
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

