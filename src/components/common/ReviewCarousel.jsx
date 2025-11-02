import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ReviewCarousel 组件 - 评论轮播
 * 用于展示客户评论
 */
export function ReviewCarousel({ reviews, showRating = true }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  if (!reviews || reviews.length === 0) {
    return null
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 md:p-8 border border-stone-200"
          >
            {showRating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < reviews[currentIndex].rating
                          ? 'fill-yellow-500 text-yellow-500'
                          : 'text-stone-300'
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-stone-600">
                  {reviews[currentIndex].rating}/5
                </span>
              </div>
            )}

            <blockquote className="text-lg text-stone-700 mb-6 leading-relaxed">
              "{reviews[currentIndex].comment}"
            </blockquote>

            <div className="flex items-center gap-3">
              {reviews[currentIndex].avatar ? (
                <img
                  src={reviews[currentIndex].avatar}
                  alt={reviews[currentIndex].author}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
                  {reviews[currentIndex].author.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-semibold text-stone-900">
                  {reviews[currentIndex].author}
                </p>
                {reviews[currentIndex].verified && (
                  <p className="text-sm text-green-600">✓ Verified Customer</p>
                )}
                {reviews[currentIndex].date && (
                  <p className="text-sm text-stone-500">
                    {reviews[currentIndex].date}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {reviews.length > 1 && (
        <>
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-white rounded-full shadow-lg hover:bg-stone-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-white rounded-full shadow-lg hover:bg-stone-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-2 h-2 rounded-full transition-all
                  ${index === currentIndex ? 'bg-green-600 w-8' : 'bg-stone-300'}
                `}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/**
 * ReviewGrid 组件 - 评论网格展示
 */
export function ReviewGrid({ reviews, columns = 3 }) {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-6`}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 border border-stone-200 hover:shadow-lg transition-shadow"
        >
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < review.rating
                    ? 'fill-yellow-500 text-yellow-500'
                    : 'text-stone-300'
                }
              />
            ))}
          </div>

          <p className="text-stone-700 mb-4 line-clamp-4">
            {review.comment}
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
            {review.avatar ? (
              <img
                src={review.avatar}
                alt={review.author}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold text-sm">
                {review.author.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-semibold text-stone-900 text-sm">
                {review.author}
              </p>
              {review.date && (
                <p className="text-xs text-stone-500">{review.date}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

