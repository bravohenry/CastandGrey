import { motion } from 'framer-motion'
import { Button } from '../../design-system'

/**
 * Hero Component - Reusable banner section
 * Supports image or video background, title and CTA button
 */
export const Hero = ({
  title,
  subtitle,
  image,
  video,
  ctaText,
  ctaLink,
  parallax = false,
  className = '',
}) => {
  return (
    <motion.section
      className={`relative w-full h-[500px] md:h-[600px] overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background image or video */}
      <div className="absolute inset-0 bg-[#848484]">
        {video ? (
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : image ? (
          <img
            src={image}
            alt={title || 'Hero image'}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#848484] flex items-center justify-center text-[#FFFEF6] text-4xl">
            Hero Image Placeholder
          </div>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      {/* Content area */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 md:px-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl"
        >
          {title && (
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFEF6] mb-5"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className="text-lg md:text-xl text-[#FFFEF6] mb-8"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {subtitle}
            </p>
          )}
          {ctaText && (
            <Button
              variant="onDark"
              size="lg"
              onClick={() => ctaLink && (window.location.href = ctaLink)}
            >
              {ctaText}
            </Button>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}

