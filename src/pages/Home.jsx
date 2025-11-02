import { Link } from 'react-router-dom'
import { Hero } from '../components/common/Hero'
import { ProductCard } from '../components/common/ProductCard'
import { ReviewCarousel } from '../components/common/ReviewCarousel'
import { Truck, Heart, Shield, Leaf } from 'lucide-react'
import photo2633 from '../assets/Cast & Grey Botanical Bkg_files/photo-2633.jpg'
import photo2634 from '../assets/Cast & Grey Botanical Bkg_files/photo-2634.jpg'

/**
 * Home 页面 - 主页/着陆页
 * 介绍品牌并提供快速访问入口
 */
export function Home() {
  // 模拟数据
  const bestSellers = [
    {
      handle: 'monstera-deliciosa',
      name: 'Monstera Deliciosa',
      scientificName: 'Monstera deliciosa',
      price: 45,
      image: null,
      badges: [{ label: 'Best Seller', type: 'new' }],
      careTraits: { light: 'Bright Indirect', water: 'Weekly' },
      rating: 4.8,
      reviewCount: 124
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
      reviewCount: 98
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
      reviewCount: 87
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
      reviewCount: 156
    }
  ]

  const reviews = [
    {
      rating: 5,
      comment: 'Absolutely love my new Monstera! It arrived in perfect condition and the care instructions were so helpful. The team at Cast & Grey really knows their plants.',
      author: 'Sarah Martinez',
      verified: true,
      date: 'October 2025'
    },
    {
      rating: 5,
      comment: 'The in-home consultation service was amazing. They helped me choose the perfect plants for my apartment and even potted them for me. Highly recommend!',
      author: 'Michael Chen',
      verified: true,
      date: 'October 2025'
    },
    {
      rating: 5,
      comment: 'Best plant shop in the city! The staff is knowledgeable, the selection is incredible, and the prices are fair. My apartment has never looked better.',
      author: 'Emma Johnson',
      verified: true,
      date: 'September 2025'
    }
  ]

  const features = [
    {
      icon: Truck,
      title: 'Local Delivery',
      description: 'Fast and careful delivery to your doorstep'
    },
    {
      icon: Leaf,
      title: 'Plant Health Guarantee',
      description: '30-day guarantee on all plants'
    },
    {
      icon: Heart,
      title: 'Pet-Safe Options',
      description: 'Curated selection of pet-friendly plants'
    },
    {
      icon: Shield,
      title: 'Expert Care Support',
      description: 'Free consultation with every purchase'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Bring Nature Home"
        subtitle="Premium plants, expert care, and personalized service for urban plant lovers"
        image={photo2633}
        height="large"
        overlay="dark"
        cta={[
          { label: 'Shop Plants', href: '/shop/plants' },
          { label: 'Book a Service', href: '/services', variant: 'secondary' }
        ]}
      />

      {/* Quick Access Tiles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickAccessTile
              title="Shop Plants"
              description="Explore our curated collection"
              href="/shop/plants"
              image={null}
            />
            <QuickAccessTile
              title="Book Services"
              description="Professional plant care"
              href="/services"
              image={null}
            />
            <QuickAccessTile
              title="Plant Care"
              description="Learn from our guides"
              href="/plant-care"
              image={null}
            />
            <QuickAccessTile
              title="Gift Cards"
              description="Perfect for plant lovers"
              href="/gift-cards"
              image={null}
            />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                Best Sellers
              </h2>
              <p className="text-stone-600">Our most loved plants</p>
            </div>
            <Link
              to="/shop/best-sellers"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.handle} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Local Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            Why Choose Cast & Grey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icon size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
            What Our Customers Say
          </h2>
          <p className="text-stone-600 text-center mb-12">
            Rated 4.9/5 from over 500 reviews
          </p>

          <div className="max-w-4xl mx-auto">
            <ReviewCarousel reviews={reviews} />
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <section className="py-16 bg-stone-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CTABlock
              title="Shop Now"
              description="Browse our full collection of plants and accessories"
              href="/shop"
              buttonText="Explore Shop"
            />
            <CTABlock
              title="Book Service"
              description="Get professional help with plant care and installation"
              href="/services"
              buttonText="View Services"
            />
            <CTABlock
              title="Learn Plant Care"
              description="Access our comprehensive plant care guides"
              href="/plant-care"
              buttonText="Read Guides"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * QuickAccessTile 组件 - 快速访问瓷砖
 */
function QuickAccessTile({ title, description, href, image }) {
  return (
    <Link
      to={href}
      className="group relative aspect-square rounded-lg overflow-hidden bg-stone-100 hover:shadow-xl transition-shadow"
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200" />
      )}

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </Link>
  )
}

/**
 * CTABlock 组件 - CTA 区块
 */
function CTABlock({ title, description, href, buttonText }) {
  return (
    <div className="bg-stone-800 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-stone-300 mb-6">{description}</p>
      <Link
        to={href}
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
      >
        {buttonText}
      </Link>
    </div>
  )
}

