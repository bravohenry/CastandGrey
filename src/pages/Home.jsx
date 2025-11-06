import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Hero } from '../components/common/Hero'
import { ProductCard } from '../components/common/ProductCard'
import { ReviewCarousel } from '../components/common/ReviewCarousel'
import { Button } from '../design-system'
import { Truck, Heart, Shield, Leaf, MapPin, Clock, Mail } from 'lucide-react'
import storepicture from '../assets/Cast & Grey Botanical Bkg_files/storepicture.jpg'
import photo2634 from '../assets/Cast & Grey Botanical Bkg_files/photo-2634.jpg'

/**
 * Home 页面 - 主页/着陆页
 * 日本美学：留白、克制、精致、呼吸感
 * 完全使用设计系统
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
      comment: 'Emily turned my plant anxiety into confidence in one visit. She mapped the light in my apartment and left me with a step-by-step care plan that actually fits my routine.',
      author: 'Addison R.',
      verified: true,
      date: 'March 2024'
    },
    {
      rating: 5,
      comment: 'The Monday delivery feels like a concierge service—plants arrive potted, labeled, and with personalized notes. It\'s the most thoughtful local gifting option in Savannah.',
      author: 'Jared T.',
      verified: true,
      date: 'February 2024'
    },
    {
      rating: 5,
      comment: 'Every time I walk into Cast & Grey I learn something new. Emily\'s calm coaching and practical tips make plant care feel joyful instead of overwhelming.',
      author: 'Priya L.',
      verified: true,
      date: 'January 2024'
    }
  ]

  const features = [
    {
      icon: Truck,
      title: 'Monday Local Delivery',
      description: 'Hand-delivered across Savannah with updates from Emily every step of the way'
    },
    {
      icon: Leaf,
      title: 'Savannah-Specific Mentorship',
      description: 'Practical coaching tailored to our coastal climate and your exact light levels'
    },
    {
      icon: Heart,
      title: 'Woman-Owned Community Hub',
      description: 'The neighborhood boutique where approachable aesthetics meets warm, dependable care'
    },
    {
      icon: Shield,
      title: 'Confidence-Building Resources',
      description: 'Comprehensive plant care library, pet-safe lists, and troubleshooting plans'
    }
  ]

  return (
    <div className="bg-[#FFFEF6]">
      {/* Hero Section - 简洁克制，强调留白 */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={storepicture}
            alt="Cast & Grey Botanical storefront in Savannah"
            className="w-full h-full object-cover"
          />
          {/* Subtle scrim for legibility (very light) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/12 to-black/24" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(1200px 500px at 50% 50%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.10) 45%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.00) 100%)'
            }}
          />
        </div>

        {/* Content - 精致排版 */}
        <div className="relative z-10 px-[50px] lg:px-[246px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Kicker */}
            <p 
              className="text-[12.5px] leading-[18px] tracking-[0.6px] text-[rgba(255,254,246,0.88)] uppercase font-bold mb-3"
              style={{ fontFamily: 'Archivo, sans-serif', textShadow: '0 1px 6px rgba(0,0,0,0.28)' }}
            >
              Savannah • Houseplant Boutique
            </p>
            <h1 
              className="text-[56px] lg:text-[72px] leading-[1.1] font-bold tracking-[0.72px] text-[#FFFEF6] mb-8"
              style={{ fontFamily: 'Petrona, serif', textShadow: '0 3px 14px rgba(0,0,0,0.45)' }}
            >
              Savannah&apos;s Plant Fairy-Godmother
            </h1>
            <p 
              className="text-[15px] leading-[28px] tracking-[0.4px] text-[rgba(255,254,246,0.92)] max-w-2xl mx-auto mb-10"
              style={{ fontFamily: 'Archivo, sans-serif', textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}
            >
              Approachable aesthetics. Practical plant care. For Savannah homes.
            </p>
            
            {/* CTA Buttons - 使用设计系统 */}
            <div className="flex flex-wrap gap-5 justify-center">
              <Link to="/shop/plants">
                <Button variant="onDark" size="lg">
                  SHOP PLANTS
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="lg">
                  SERVICES
                </Button>
              </Link>
            </div>

            {/* Hero Meta - condensed single line */}
            <p 
              className="mt-6 text-[13px] leading-[20px] tracking-[0.4px] inline-block px-3 py-1 rounded-full bg-[rgba(0,0,0,0.18)] text-[rgba(255,254,246,0.92)]"
              style={{ fontFamily: 'Archivo, sans-serif', backdropFilter: 'blur(2px)' }}
            >
              Tue–Sat 11:00–18:00 · 2411 Waters Ave · Local Delivery Mon · hello@castandgrey.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Access - 极简网格，大量留白 */}
      <section className="py-24 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <QuickAccessTile
              title="Shop the Collection"
              description="Rotating plants, planters, and local gifts"
              href="/shop/plants"
            />
            <QuickAccessTile
              title="Schedule Services"
              description="Repotting, consults, delivery & rentals"
              href="/services"
            />
            <QuickAccessTile
              title="Explore Plant Care"
              description="Savannah-specific guides & resources"
              href="/plant-care"
            />
            <QuickAccessTile
              title="Send a Gift"
              description="Handwritten notes with every delivery"
              href="/gift-cards"
            />
          </div>
        </div>
      </section>

      {/* Best Sellers - 简洁标题，克制排版 */}
      <section className="py-32 bg-[#FFFEF6] border-t-2 border-[#459361]">
        <div className="px-[50px] lg:px-[246px]">
          {/* 标题区域 - 精致排版 */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Community Favorites
            </h2>
            <p 
              className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Beloved picks our Savannah neighbors can&apos;t stop raving about
            </p>
          </div>

          {/* 产品网格 - 留白充足 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {bestSellers.map((product) => (
              <ProductCard key={product.handle} product={product} />
            ))}
          </div>

          {/* View All Link - 克制的交互 */}
          <div className="text-center">
            <Link 
              to="/shop/best-sellers"
              className="inline-block text-[13.6px] leading-[18.2px] tracking-[0.6px] font-bold text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors border-b-2 border-[rgba(69,147,97,0.3)] hover:border-[#459361]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* Features - 极简图标，精致排版 */}
      <section className="py-32 bg-[#459361]">
        <div className="px-[50px] lg:px-[246px]">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Why Neighbors Choose Cast & Grey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* 极简图标 - 仅线条 */}
                  <div className="mb-6">
                    <Icon size={40} className="mx-auto text-[#FFFEF6] opacity-90" strokeWidth={1.5} />
                  </div>
                  
                  {/* 标题 */}
                  <h3 
                    className="text-[19.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#FFFEF6] mb-3"
                    style={{ fontFamily: 'Petrona, serif' }}
                  >
                    {feature.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p 
                    className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(255,254,246,0.75)]"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews - 留白充足，精致排版 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          {/* 标题区域 */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              What Our Customers Say
            </h2>
            <p 
              className="text-[13px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Loved by Savannah plant parents
            </p>
          </div>

          {/* 评论轮播 */}
          <div className="max-w-4xl mx-auto">
            <ReviewCarousel reviews={reviews} />
          </div>
        </div>
      </section>

      {/* CTA Row - 极简三栏，精致边框 */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CTABlock
              title="Discover the Shop"
              description="Browse rotating plants, planters, tools, and locally made gifts curated for Savannah spaces"
              href="/shop"
              buttonText="Explore Shop"
            />
            <CTABlock
              title="Plan a Service"
              description="Invite the plant bar to your home or book in-store repotting, delivery, or event rentals"
              href="/services"
              buttonText="View Services"
            />
            <CTABlock
              title="Study the Plant Library"
              description="Dive into Savannah-specific plant care guides, pet-safe lists, and troubleshooting tips"
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
 * QuickAccessTile 组件 - 极简卡片，精致边框
 */
function QuickAccessTile({ title, description, href }) {
  return (
    <Link
      to={href}
      className="group relative block"
    >
      {/* 卡片容器 - 使用设计系统的边框和阴影 */}
      <motion.div
        className="relative aspect-square bg-[#FFFEF6] border border-[rgba(69,147,97,0.25)] rounded-[12px] overflow-hidden"
        style={{
          boxShadow: '0 1px 0 rgba(17,17,17,0.06)'
        }}
        whileHover={{ 
          boxShadow: '0 2px 0 rgba(17,17,17,0.08)',
          y: 2
        }}
        transition={{ duration: 0.2 }}
      >
        {/* 内容 - 居中排版 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <h3 
            className="text-[24px] leading-[32px] font-bold tracking-[0.72px] text-[#111111] mb-2"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            {title}
          </h3>
          <p 
            className="text-[13px] leading-[18px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] uppercase font-bold"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            {description}
          </p>
        </div>

        {/* Hover 装饰线 */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#459361] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </motion.div>
    </Link>
  )
}

/**
 * CTABlock 组件 - 极简 CTA，精致排版
 */
function CTABlock({ title, description, href, buttonText }) {
  return (
    <div className="text-center py-12 border-2 border-[#FFFEF6] rounded-[12px] px-8">
      <h3 
        className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#FFFEF6] mb-4"
        style={{ fontFamily: 'Petrona, serif' }}
      >
        {title}
      </h3>
      <p 
        className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(255,254,246,0.75)] mb-8 min-h-[58px]"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        {description}
      </p>
      <Link to={href}>
        <Button variant="onDark" size="default">
          {buttonText.toUpperCase()}
        </Button>
      </Link>
    </div>
  )
}

/**
 * InfoPill 组件 - 顶部信息条小卡片
 */
function InfoPill({ icon: Icon, title, text }) {
  return (
    <div 
      className="flex items-center gap-4 bg-white border border-stone-200 rounded-[10px] px-5 py-4"
      style={{ boxShadow: '0 1px 0 rgba(17,17,17,0.06)' }}
    >
      <div className="w-9 h-9 rounded-[9px] flex items-center justify-center bg-[rgba(69,147,97,0.08)]">
        <Icon size={20} className="text-[#459361]" strokeWidth={1.5} />
      </div>
      <div>
        <p 
          className="text-[12.5px] leading-[18px] tracking-[0.6px] text-[rgba(69,147,97,0.8)] uppercase font-bold"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          {title}
        </p>
        <p 
          className="text-[14px] leading-[22px] tracking-[0.4px] text-[#111111]"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

/**
 * HeroMeta & Separator - 极简信息点（图标+文本）
 */
function HeroMeta({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[rgba(255,255,255,0.12)] text-[rgba(255,254,246,0.95)]">
      <Icon size={16} className="opacity-90" />
      <span className="text-[13px] tracking-[0.4px]" style={{ fontFamily: 'Archivo, sans-serif' }}>{label}</span>
    </span>
  )
}

function SeparatorDot() {
  return <span className="text-[rgba(255,254,246,0.6)]">•</span>
}
