import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Droplets, Sun, Wind, AlertCircle, Search } from 'lucide-react'
import { Button } from '../design-system'

/**
 * PlantCare 页面 - 植物护理教育中心
 * 日本美学：留白、克制、精致
 * 完全使用设计系统
 */
export function PlantCare() {
  const categories = [
    {
      title: 'By Light Requirements',
      icon: Sun,
      items: [
        { name: 'Low Light Plants', href: '/plant-care/low-light', count: 24 },
        { name: 'Medium Light Plants', href: '/plant-care/medium-light', count: 38 },
        { name: 'Bright Light Plants', href: '/plant-care/bright-light', count: 45 }
      ]
    },
    {
      title: 'By Care Level',
      icon: Droplets,
      items: [
        { name: 'Easy Care', href: '/plant-care/easy-care', count: 56 },
        { name: 'Moderate Care', href: '/plant-care/moderate-care', count: 32 },
        { name: 'Advanced Care', href: '/plant-care/advanced-care', count: 19 }
      ]
    },
    {
      title: 'By Safety',
      icon: AlertCircle,
      items: [
        { name: 'Pet-Safe Plants', href: '/plant-care/pet-safe', count: 42 },
        { name: 'Air-Purifying Plants', href: '/plant-care/air-purifying', count: 28 }
      ]
    },
    {
      title: 'Common Issues',
      icon: Wind,
      items: [
        { name: 'Yellow Leaves', href: '/plant-care/yellow-leaves' },
        { name: 'Brown Tips', href: '/plant-care/brown-tips' },
        { name: 'Pest Control', href: '/plant-care/pest-control' },
        { name: 'Root Rot', href: '/plant-care/root-rot' }
      ]
    }
  ]

  const popularGuides = [
    {
      title: 'Complete Repotting Guide',
      description: 'Learn when and how to repot your plants for optimal growth',
      image: null,
      href: '/plant-care/repotting',
      difficulty: 'Beginner'
    },
    {
      title: 'Watering 101',
      description: 'Master the art of watering different types of plants',
      image: null,
      href: '/plant-care/watering',
      difficulty: 'Beginner'
    },
    {
      title: 'Propagation Techniques',
      description: 'Grow new plants from cuttings and divisions',
      image: null,
      href: '/plant-care/propagation',
      difficulty: 'Intermediate'
    },
    {
      title: 'Pest Identification & Treatment',
      description: 'Identify and eliminate common plant pests naturally',
      image: null,
      href: '/plant-care/pests',
      difficulty: 'Intermediate'
    }
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
              <li className="text-[#111111]">Plant Care</li>
            </ol>
          </nav>
          
          <h1 
            className="text-[48px] lg:text-[64px] leading-[1.1] font-bold tracking-[0.72px] text-[#111111] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Plant Care Hub
          </h1>
          
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] max-w-2xl"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Everything you need to keep your plants healthy and thriving
          </p>
        </div>
      </section>

      {/* Search Bar - 精致输入框 */}
      <section className="py-12 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-3xl mx-auto">
          <div className="relative">
            <Search 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-[rgba(69,147,97,0.5)]" 
              size={20} 
              strokeWidth={1.5}
            />
            <input
              type="text"
              placeholder="Search for plant care tips..."
              className="w-full pl-16 pr-6 py-5 border-2 border-[#459361] rounded-[12px] focus:outline-none focus:ring-0 bg-[#FFFEF6] text-[14.6px] tracking-[0.6px] text-[#111111] placeholder:text-[rgba(69,147,97,0.5)]"
              style={{ 
                fontFamily: 'Archivo, sans-serif',
                boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Categories - 精致分类卡片 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div 
                  key={index} 
                  className="bg-[#FFFEF6] border-2 border-[#459361] rounded-[12px] p-8"
                  style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={20} className="text-[#459361]" strokeWidth={1.5} />
                    <h3 
                      className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111]"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href}
                          className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors flex items-center justify-between group"
                          style={{ fontFamily: 'Archivo, sans-serif' }}
                        >
                          <span>{item.name}</span>
                          {item.count && (
                            <span className="text-[13px] text-[rgba(69,147,97,0.5)] group-hover:text-[#459361]">
                              {item.count}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Guides - 精致指南卡片 */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Popular Care Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularGuides.map((guide, index) => (
              <GuideCard key={index} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips - 克制的提示卡片 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-5xl mx-auto">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Quick Care Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TipCard
              title="Watering Wisdom"
              tip="Check soil moisture before watering. Stick your finger 2 inches deep – if it's dry, it's time to water!"
            />
            <TipCard
              title="Light Matters"
              tip="Most houseplants prefer bright, indirect light. Rotate your plants weekly for even growth."
            />
            <TipCard
              title="Humidity Help"
              tip="Group plants together or use a pebble tray to increase humidity, especially in winter."
            />
            <TipCard
              title="Feeding Schedule"
              tip="Feed during growing season (spring/summer) every 2-4 weeks. Reduce or stop in fall/winter."
            />
          </div>
        </div>
      </section>

      {/* Shop CTA - 精致的CTA */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] text-center">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-8"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Ready to Start Your Plant Journey?
          </h2>
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(255,254,246,0.9)] mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Browse our collection of easy-care plants perfect for beginners, or explore our full catalog.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/shop/easy-care">
              <Button variant="secondary" size="lg">
                SHOP EASY-CARE PLANTS
              </Button>
            </Link>
            <Link to="/shop/pet-safe">
              <Button variant="primary" size="lg">
                SHOP PET-SAFE PLANTS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * GuideCard 组件 - 指南卡片，设计系统样式
 */
function GuideCard({ guide }) {
  const difficultyColors = {
    Beginner: 'bg-[rgba(69,147,97,0.1)] text-[#459361]',
    Intermediate: 'bg-[rgba(255,193,7,0.1)] text-[#ff9800]',
    Advanced: 'bg-[rgba(244,67,54,0.1)] text-[#f44336]'
  }

  return (
    <Link
      to={guide.href}
      className="group bg-[#FFFEF6] border-2 border-[#FFFEF6] rounded-[12px] overflow-hidden hover:border-[#FFFEF6] transition-all"
      style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
    >
      <div className="aspect-video bg-[rgba(69,147,97,0.1)] overflow-hidden">
        {guide.image ? (
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center text-[13px] tracking-[0.6px] text-[rgba(69,147,97,0.4)]"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Guide Image
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          <span 
            className={`text-[11px] leading-[18px] tracking-[0.7px] px-3 py-1 rounded-full ${difficultyColors[guide.difficulty]} uppercase font-bold`}
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            {guide.difficulty}
          </span>
        </div>
        <h3 
          className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2 group-hover:text-[#459361] transition-colors"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          {guide.title}
        </h3>
        <p 
          className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] line-clamp-2"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          {guide.description}
        </p>
      </div>
    </Link>
  )
}

/**
 * TipCard 组件 - 快速提示卡片，设计系统样式
 */
function TipCard({ title, tip }) {
  return (
    <div 
      className="bg-[#FFFEF6] border-2 border-[#459361] rounded-[12px] p-8"
      style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
    >
      <h3 
        className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-4"
        style={{ fontFamily: 'Petrona, serif' }}
      >
        {title}
      </h3>
      <p 
        className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        {tip}
      </p>
    </div>
  )
}

