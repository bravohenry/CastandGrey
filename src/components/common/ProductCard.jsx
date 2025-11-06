import { Link } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import placeholderPlant from '../../assets/placeholders/product-plant.svg'
import placeholderService from '../../assets/placeholders/service-generic.svg'

/**
 * ProductCard 组件 - 产品卡片
 * 用于 Shop 页面的产品展示
 */
export function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border border-stone-200 hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <Link to={`/products/${product.handle}`} className="block relative aspect-square overflow-hidden bg-stone-100">
        <img
          src={product.image || placeholderPlant}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badges?.map((badge) => (
            <span
              key={badge.label}
              className={`
                px-2 py-1 rounded text-xs font-semibold uppercase
                ${badge.type === 'new' ? 'bg-green-600 text-white' : ''}
                ${badge.type === 'sale' ? 'bg-red-600 text-white' : ''}
                ${badge.type === 'pet-safe' ? 'bg-blue-600 text-white' : ''}
                ${badge.type === 'rare' ? 'bg-purple-600 text-white' : ''}
              `}
            >
              {badge.label}
            </span>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
            className="p-2 bg-white rounded-full shadow-md hover:bg-stone-50 transition-colors"
            aria-label="Add to favorites"
          >
            <Heart size={18} className={isLiked ? 'fill-red-500 text-red-500' : 'text-stone-600'} />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/products/${product.handle}`}>
          <h3 className="font-semibold text-stone-900 mb-1 hover:text-green-700 transition-colors">
            {product.name}
          </h3>
        </Link>

        {product.scientificName && (
          <p className="text-sm text-stone-500 italic mb-2">{product.scientificName}</p>
        )}

        {/* Care Traits */}
        {product.careTraits && (
          <div className="flex gap-2 mb-3 text-xs text-stone-600">
            {product.careTraits.light && <span>☀️ {product.careTraits.light}</span>}
            {product.careTraits.water && <span>💧 {product.careTraits.water}</span>}
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-4">
          <div>
            {product.compareAtPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-red-600">${product.price}</span>
                <span className="text-sm text-stone-500 line-through">${product.compareAtPrice}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-stone-900">${product.price}</span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault()
              // Add to cart logic
            }}
            className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-stone-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-stone-300'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-stone-600">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * ServiceCard 组件 - 服务卡片
 * 用于 Services 页面的服务展示
 */
export function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Service Image */}
      <div className="aspect-[16/9] bg-stone-100 overflow-hidden">
        <img
          src={service.image || placeholderService}
          alt={service.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Service Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-900 mb-2">{service.name}</h3>
        <p className="text-stone-600 mb-4">{service.description}</p>

        {/* Details */}
        <div className="space-y-2 mb-6 text-sm text-stone-700">
          {service.price && (
            <div className="flex justify-between">
              <span className="text-stone-600">Price:</span>
              <span className="font-semibold">{service.price}</span>
            </div>
          )}
          {service.duration && (
            <div className="flex justify-between">
              <span className="text-stone-600">Duration:</span>
              <span className="font-semibold">{service.duration}</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <Link
          to={service.bookingLink}
          className="block w-full text-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-semibold"
        >
          Book This Service
        </Link>
      </div>
    </div>
  )
}
