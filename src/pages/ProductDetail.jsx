import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PageHeader } from '../components/common/Hero'
import { ProductCard } from '../components/common/ProductCard'
import { ReviewGrid } from '../components/common/ReviewCarousel'
import { Heart, ShoppingCart, Share2, Droplets, Sun, Wind, Shield } from 'lucide-react'

/**
 * ProductDetail 页面 - 产品详情页
 * 展示单个产品的详细信息
 */
export function ProductDetail() {
  const { handle } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)

  // 模拟产品数据
  const product = {
    handle: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    price: 45,
    compareAtPrice: null,
    images: [null, null, null], // Placeholder images
    description: 'The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a stunning tropical plant known for its large, glossy leaves with distinctive splits. Perfect for bringing a touch of the jungle to your home.',
    longDescription: 'Native to the tropical forests of Central America, the Monstera Deliciosa is a fast-growing climbing plant that can reach impressive sizes indoors. Its iconic fenestrated leaves develop as the plant matures, creating a dramatic focal point in any room.',
    badges: [{ label: 'Best Seller', type: 'new' }],
    careTraits: {
      light: 'Bright Indirect',
      lightDetail: 'Thrives in bright, indirect light. Can tolerate some direct morning sun.',
      water: 'Weekly',
      waterDetail: 'Water when top 2 inches of soil are dry. About once per week in summer, less in winter.',
      soil: 'Well-draining',
      soilDetail: 'Use a well-draining potting mix with peat moss and perlite.',
      petSafe: false,
      petSafeDetail: 'Toxic to cats and dogs if ingested. Keep out of reach of pets.'
    },
    size: {
      pot: '6 inch',
      height: '12-18 inches'
    },
    inStock: true,
    sku: 'MON-DEL-001',
    rating: 4.8,
    reviewCount: 124
  }

  const reviews = [
    {
      rating: 5,
      comment: 'This Monstera is absolutely gorgeous! It arrived in perfect condition and has already put out two new leaves. Love it!',
      author: 'Emily Rodriguez',
      date: 'November 2025'
    },
    {
      rating: 5,
      comment: 'Healthy plant, well-packaged. The care instructions were super helpful for a beginner like me.',
      author: 'James Wilson',
      date: 'October 2025'
    },
    {
      rating: 4,
      comment: 'Beautiful plant! Slightly smaller than expected but growing well. Great customer service.',
      author: 'Sarah Kim',
      date: 'October 2025'
    }
  ]

  const relatedProducts = [
    {
      handle: 'pothos-golden',
      name: 'Golden Pothos',
      price: 22,
      image: null,
      rating: 4.9,
      reviewCount: 156
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
  ]

  const careArticles = [
    { title: 'Complete Monstera Care Guide', href: '/plant-care/monstera-guide' },
    { title: 'How to Propagate Monstera', href: '/plant-care/monstera-propagation' }
  ]

  return (
    <div>
      <PageHeader
        title={product.name}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Plants', href: '/shop/plants' },
          { label: product.name }
        ]}
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden mb-4">
                {product.images[selectedImage] ? (
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-400">
                    Product Image
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-stone-100 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-green-600' : 'border-transparent'
                    }`}
                  >
                    {img ? (
                      <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
                        {index + 1}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Badges */}
              {product.badges && (
                <div className="flex gap-2 mb-4">
                  {product.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                {product.name}
              </h1>

              <p className="text-lg text-stone-600 italic mb-4">{product.scientificName}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-stone-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-stone-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {product.compareAtPrice ? (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-red-600">${product.price}</span>
                    <span className="text-xl text-stone-500 line-through">${product.compareAtPrice}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-stone-900">${product.price}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-stone-700 mb-6 leading-relaxed">{product.description}</p>

              {/* Size Info */}
              <div className="bg-stone-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-stone-900 mb-2">Size Information</h3>
                <div className="flex gap-6 text-sm text-stone-600">
                  <div>
                    <span className="font-medium">Pot Size:</span> {product.size.pot}
                  </div>
                  <div>
                    <span className="font-medium">Plant Height:</span> {product.size.height}
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-6">
                <div className="flex items-center border border-stone-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-stone-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 border-x border-stone-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-stone-50 transition-colors"
                  >
                    +
                  </button>
                </div>

                <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors font-semibold">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-3 border border-stone-300 rounded-md hover:bg-stone-50 transition-colors"
                >
                  <Heart size={20} className={isLiked ? 'fill-red-500 text-red-500' : 'text-stone-600'} />
                </button>

                <button className="p-3 border border-stone-300 rounded-md hover:bg-stone-50 transition-colors">
                  <Share2 size={20} className="text-stone-600" />
                </button>
              </div>

              {/* Local Delivery Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">
                  <span className="font-semibold">Free local delivery</span> on orders over $100 • Same-day available
                </p>
              </div>

              {/* SKU & Stock */}
              <div className="text-sm text-stone-600 space-y-1">
                <p>SKU: {product.sku}</p>
                <p className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </p>
              </div>
            </div>
          </div>

          {/* Care Traits */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">Care Requirements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <CareTraitCard
                icon={Sun}
                title="Light"
                value={product.careTraits.light}
                detail={product.careTraits.lightDetail}
              />
              <CareTraitCard
                icon={Droplets}
                title="Water"
                value={product.careTraits.water}
                detail={product.careTraits.waterDetail}
              />
              <CareTraitCard
                icon={Wind}
                title="Soil"
                value={product.careTraits.soil}
                detail={product.careTraits.soilDetail}
              />
              <CareTraitCard
                icon={Shield}
                title="Pet Safety"
                value={product.careTraits.petSafe ? 'Pet Safe' : 'Not Pet Safe'}
                detail={product.careTraits.petSafeDetail}
                warning={!product.careTraits.petSafe}
              />
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mt-16 max-w-4xl">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">About This Plant</h2>
            <p className="text-stone-700 leading-relaxed">{product.longDescription}</p>
          </div>

          {/* Related Care Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Learn More</h2>
            <div className="flex flex-wrap gap-4">
              {careArticles.map((article, index) => (
                <Link
                  key={index}
                  to={article.href}
                  className="px-6 py-3 bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors font-medium"
                >
                  {article.title} →
                </Link>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">Customer Reviews</h2>
            <ReviewGrid reviews={reviews} columns={3} />
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.handle} product={relatedProduct} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * CareTraitCard 组件 - 护理特征卡片
 */
function CareTraitCard({ icon: Icon, title, value, detail, warning }) {
  return (
    <div className={`rounded-lg p-6 ${warning ? 'bg-red-50 border border-red-200' : 'bg-stone-50 border border-stone-200'}`}>
      <div className={`inline-flex p-3 rounded-lg mb-4 ${warning ? 'bg-red-100' : 'bg-white'}`}>
        <Icon size={24} className={warning ? 'text-red-600' : 'text-green-600'} />
      </div>
      <h3 className="font-semibold text-stone-900 mb-2">{title}</h3>
      <p className="font-medium text-stone-700 mb-2">{value}</p>
      <p className="text-sm text-stone-600">{detail}</p>
    </div>
  )
}

