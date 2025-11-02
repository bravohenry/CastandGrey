import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Hero 组件 - 可复用的页面顶部横幅
 * 支持图片、视频、渐变背景和 CTA 按钮
 */
export function Hero({
  title,
  subtitle,
  image,
  video,
  height = 'large', // 'small' | 'medium' | 'large' | 'full'
  overlay = 'dark', // 'none' | 'light' | 'dark'
  align = 'center', // 'left' | 'center' | 'right'
  cta,
  children
}) {
  const heightClasses = {
    small: 'h-64',
    medium: 'h-96',
    large: 'h-[500px]',
    full: 'h-screen'
  }

  const overlayClasses = {
    none: '',
    light: 'bg-white/30',
    dark: 'bg-black/40'
  }

  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Media */}
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-stone-100" />
      )}

      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col gap-6 max-w-3xl mx-auto ${alignClasses[align]}`}
        >
          {title && (
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${overlay === 'dark' ? 'text-white' : 'text-stone-900'}`}>
              {title}
            </h1>
          )}

          {subtitle && (
            <p className={`text-lg md:text-xl ${overlay === 'dark' ? 'text-white/90' : 'text-stone-700'}`}>
              {subtitle}
            </p>
          )}

          {children}

          {cta && (
            <div className="flex flex-wrap gap-4 mt-4">
              {cta.map((button, index) => (
                <Link
                  key={index}
                  to={button.href}
                  className={`
                    px-8 py-3 rounded-md font-semibold transition-all
                    ${button.variant === 'secondary'
                      ? 'bg-white text-stone-900 hover:bg-stone-100'
                      : 'bg-green-600 text-white hover:bg-green-700'
                    }
                  `}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/**
 * PageHeader 组件 - 简单的页面标题区域
 */
export function PageHeader({ title, description, breadcrumbs }) {
  return (
    <section className="bg-stone-50 border-b border-stone-200 py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-stone-600">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-stone-900 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-stone-900">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg text-stone-600 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

