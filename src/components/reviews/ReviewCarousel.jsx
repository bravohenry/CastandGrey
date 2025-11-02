import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

/**
 * ReviewCarousel Component - Review carousel display
 * Configurable display location (Home, About, Plant Care)
 */
export const ReviewCarousel = ({ reviews = [], autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!reviews || reviews.length === 0) {
    return null
  }

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  // Auto-play
  useEffect(() => {
    if (autoPlay && reviews.length > 1) {
      const timer = setInterval(nextReview, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, reviews.length])

  const currentReview = reviews[currentIndex]

  return (
    <section className="bg-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h2
          className="text-2xl md:text-3xl font-bold text-[#459361] mb-8 text-center"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          What Our Customers Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-[#459361] text-[#FFFEF6] p-8 md:p-12 rounded-lg"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < currentReview.rating ? 'fill-current' : 'text-[#FFFEF6]/40'}
                  />
                ))}
              </div>

              {/* Review content */}
              <p
                className="text-lg md:text-xl mb-6 leading-relaxed"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                "{currentReview.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <p
                  className="font-bold text-base"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  — {currentReview.author}
                </p>
                <p
                  className="text-sm opacity-80"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  {currentReview.date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          {reviews.length > 1 && (
            <>
              <button
                onClick={prevReview}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#FFFEF6] text-[#459361] p-2 rounded-full shadow-lg hover:bg-[#FFFEF6]/90 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#FFFEF6] text-[#459361] p-2 rounded-full shadow-lg hover:bg-[#FFFEF6]/90 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Indicators */}
          {reviews.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#459361] w-8'
                      : 'bg-[#848484]'
                  }`}
                  aria-label={`View review ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

