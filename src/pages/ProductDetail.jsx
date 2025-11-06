import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ProductCard } from '../components/common/ProductCard'
import { ReviewGrid } from '../components/common/ReviewCarousel'
import { Heart, ShoppingCart, Share2, Droplets, Sun, Wind, Shield } from 'lucide-react'
import { Button } from '../design-system'

/**
 * ProductDetail 页面 - 产品详情页
 * 日本美学：留白、克制、精致
 * 完全使用设计系统
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
    description: 'Our Monstera Deliciosa is a neighborhood favorite - lush, fenestrated foliage with the approachable care Cast & Grey is known for.',
    longDescription: 'Grown for Savannah homes, this Monstera arrives with fresh soil and a detailed care card written by Emily. Expect generous, glossy leaves, steady growth, and lots of coaching on how to stake, prune, and style it so it becomes the quiet focal point of your space.',
    badges: [{ label: 'Savannah Favorite', type: 'new' }],
    careTraits: {
      light: 'Bright, filtered light',
      lightDetail: 'Position near bright windows with sheer curtains or a few feet back from sunny exposures. Morning sun is welcome; shield from harsh afternoon rays.',
      water: 'Every 7-10 days',
      waterDetail: 'Water when the top third of soil feels dry. Expect weekly watering in summer and slower sips in cooler months.',
      soil: 'Chunky aroid mix',
      soilDetail: 'We pot in our airy mix of bark, perlite, and coco coir so roots stay buoyant and happy.',
      petSafe: false,
      petSafeDetail: 'Not pet-safe. Keep away from curious cats, dogs, and little ones or opt for our pet-safe collection instead.'
    },
    size: {
      pot: '6 inch nursery pot',
      height: '18-24 inches tall'
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
    { title: 'Monstera Care Checklist for Savannah', href: '/plant-care/monstera-guide' },
    { title: 'Monstera Propagation Basics', href: '/plant-care/monstera-propagation' }
  ]

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
              <li>
                <Link to="/shop" className="hover:text-[#459361] transition-colors">Shop</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/shop/plants" className="hover:text-[#459361] transition-colors">Plants</Link>
              </li>
              <li>/</li>
              <li className="text-[#111111]">{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Main Section - 克制的布局 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div>
              <motion.div 
                className="aspect-square bg-[rgba(69,147,97,0.05)] rounded-[12px] overflow-hidden mb-6"
                style={{ boxShadow: '0px 8px 0px rgba(132, 132, 132, 0.9)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {product.images[selectedImage] ? (
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-[14.6px] tracking-[0.6px] text-[rgba(69,147,97,0.4)]"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    Product Image
                  </div>
                )}
              </motion.div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-[rgba(69,147,97,0.05)] rounded-[12px] overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-[#459361]' : 'border-transparent'
                    }`}
                    style={{ boxShadow: selectedImage === index ? '0px 4px 0px rgba(132, 132, 132, 0.9)' : 'none' }}
                  >
                    {img ? (
                      <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center text-[13px] tracking-[0.6px] text-[rgba(69,147,97,0.4)] font-bold"
                        style={{ fontFamily: 'Archivo, sans-serif' }}
                      >
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
                <div className="flex gap-2 mb-6">
                  {product.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[rgba(69,147,97,0.1)] text-[#459361] rounded-full text-[11px] leading-[18px] tracking-[0.7px] uppercase font-bold"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              )}

              <h1 
                className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-3"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                {product.name}
              </h1>

              <p 
                className="text-[15.6px] leading-[24.5px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] italic mb-6"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {product.scientificName}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-[20px] ${i < Math.floor(product.rating) ? 'text-[#ff9800]' : 'text-[rgba(69,147,97,0.2)]'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span 
                  className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-8">
                {product.compareAtPrice ? (
                  <div className="flex items-center gap-4">
                    <span 
                      className="text-[40px] leading-[1.2] font-bold tracking-[0.72px] text-[#f44336]"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      ${product.price}
                    </span>
                    <span 
                      className="text-[28.8px] leading-[1.2] tracking-[0.72px] text-[rgba(69,147,97,0.5)] line-through"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      ${product.compareAtPrice}
                    </span>
                  </div>
                ) : (
                  <span 
                    className="text-[40px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111]"
                    style={{ fontFamily: 'Petrona, serif' }}
                  >
                    ${product.price}
                  </span>
                )}
              </div>

              {/* Description */}
              <p 
                className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] mb-8"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {product.description}
              </p>

              {/* Size Info */}
              <div 
                className="bg-[rgba(69,147,97,0.05)] border-2 border-[rgba(69,147,97,0.1)] rounded-[12px] p-6 mb-8"
              >
                <h3 
                  className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-3"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Size Information
                </h3>
                <div 
                  className="flex gap-8 text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  <div>
                    <span className="font-bold">Pot Size:</span> {product.size.pot}
                  </div>
                  <div>
                    <span className="font-bold">Plant Height:</span> {product.size.height}
                  </div>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div 
                  className="flex items-center border-2 border-[#459361] rounded-[12px] overflow-hidden"
                  style={{ boxShadow: '0px 4px 0px rgba(132, 132, 132, 0.9)' }}
                >
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-5 py-4 hover:bg-[rgba(69,147,97,0.05)] transition-colors text-[20px] font-bold text-[#459361]"
                  >
                    −
                  </button>
                  <span 
                    className="px-8 py-4 border-x-2 border-[#459361] text-[15.6px] tracking-[0.6px] font-bold"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-5 py-4 hover:bg-[rgba(69,147,97,0.05)] transition-colors text-[20px] font-bold text-[#459361]"
                  >
                    +
                  </button>
                </div>

                <button 
                  className="flex-1 flex items-center justify-center gap-3 bg-[#459361] text-[#FFFEF6] border-2 border-[#459361] px-8 py-4 rounded-[12px] hover:bg-[#3a7a51] transition-colors text-[13.6px] leading-[18.2px] tracking-[0.6px] font-bold uppercase"
                  style={{ 
                    fontFamily: 'Archivo, sans-serif',
                    boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)'
                  }}
                >
                  <ShoppingCart size={20} strokeWidth={1.5} />
                  ADD TO CART
                </button>

                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-4 border-2 border-[#459361] rounded-[12px] hover:bg-[rgba(69,147,97,0.05)] transition-colors"
                  style={{ boxShadow: '0px 4px 0px rgba(132, 132, 132, 0.9)' }}
                >
                  <Heart size={20} className={isLiked ? 'fill-[#f44336] text-[#f44336]' : 'text-[#459361]'} strokeWidth={1.5} />
                </button>

                <button 
                  className="p-4 border-2 border-[#459361] rounded-[12px] hover:bg-[rgba(69,147,97,0.05)] transition-colors"
                  style={{ boxShadow: '0px 4px 0px rgba(132, 132, 132, 0.9)' }}
                >
                  <Share2 size={20} className="text-[#459361]" strokeWidth={1.5} />
                </button>
              </div>

              {/* Local Delivery Info */}
              <div 
                className="bg-[rgba(69,147,97,0.1)] border-2 border-[#459361] rounded-[12px] p-6 mb-8"
              >
                <p 
                  className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[#459361]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  <span className="font-bold">Free local delivery</span> on orders over $100 • Same-day available
                </p>
              </div>

              {/* SKU & Stock */}
              <div 
                className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] space-y-1"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                <p>SKU: {product.sku}</p>
                <p className={product.inStock ? 'text-[#459361] font-bold' : 'text-[#f44336] font-bold'}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </p>
              </div>
            </div>
          </div>

          {/* Care Traits - 精致的护理卡片 */}
          <div className="mt-32">
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-16 text-center"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Care Requirements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Detailed Description - 克制的排版 */}
          <div className="mt-32 max-w-4xl mx-auto">
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-8 text-center"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              About This Plant
            </h2>
            <p 
              className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] text-center"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {product.longDescription}
            </p>
          </div>

          {/* Related Care Articles */}
          <div className="mt-32">
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-12 text-center"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Learn More
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {careArticles.map((article, index) => (
                <Link key={index} to={article.href}>
                  <Button variant="primary" size="default">
                    {article.title.toUpperCase()}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-32">
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-16 text-center"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Customer Reviews
            </h2>
            <ReviewGrid reviews={reviews} columns={3} />
          </div>

          {/* Related Products */}
          <div className="mt-32">
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-16 text-center"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
 * CareTraitCard 组件 - 护理特征卡片，设计系统样式
 */
function CareTraitCard({ icon: Icon, title, value, detail, warning }) {
  return (
    <div 
      className={`rounded-[12px] p-8 ${
        warning 
          ? 'bg-[rgba(244,67,54,0.05)] border-2 border-[rgba(244,67,54,0.3)]' 
          : 'bg-[#FFFEF6] border-2 border-[#459361]'
      }`}
      style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
    >
      <div className={`inline-flex p-3 rounded-[12px] mb-6 ${warning ? 'bg-[rgba(244,67,54,0.1)]' : 'bg-[rgba(69,147,97,0.1)]'}`}>
        <Icon size={24} className={warning ? 'text-[#f44336]' : 'text-[#459361]'} strokeWidth={1.5} />
      </div>
      <h3 
        className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2"
        style={{ fontFamily: 'Petrona, serif' }}
      >
        {title}
      </h3>
      <p 
        className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[#111111] font-bold mb-3"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        {value}
      </p>
      <p 
        className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        {detail}
      </p>
    </div>
  )
}
