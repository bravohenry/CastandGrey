import { Link } from 'react-router-dom'
import { PageHeader } from '../components/common/Hero'
import { Droplets, Sun, Wind, AlertCircle, Search } from 'lucide-react'

/**
 * PlantCare 页面 - 植物护理教育中心
 * 包含植物信息中心和护理指南
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
    <div>
      <PageHeader
        title="Plant Care Hub"
        description="Everything you need to keep your plants healthy and thriving"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Plant Care' }
        ]}
      />

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            <input
              type="text"
              placeholder="Search for plant care tips..."
              className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-stone-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Icon size={24} className="text-green-600" />
                    </div>
                    <h3 className="font-semibold text-stone-900">{category.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href}
                          className="text-stone-600 hover:text-green-600 transition-colors flex items-center justify-between group"
                        >
                          <span>{item.name}</span>
                          {item.count && (
                            <span className="text-xs text-stone-400 group-hover:text-green-500">
                              {item.count}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            Popular Care Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGuides.map((guide, index) => (
              <GuideCard key={index} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            Quick Care Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Shop CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Plant Journey?</h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Browse our collection of easy-care plants perfect for beginners, or explore our full catalog.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/shop/easy-care"
              className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
            >
              Shop Easy-Care Plants
            </Link>
            <Link
              to="/shop/pet-safe"
              className="px-8 py-3 bg-white text-stone-900 rounded-md hover:bg-stone-100 transition-colors font-semibold"
            >
              Shop Pet-Safe Plants
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * GuideCard 组件 - 指南卡片
 */
function GuideCard({ guide }) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700'
  }

  return (
    <Link
      to={guide.href}
      className="group bg-white rounded-lg border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video bg-stone-100 overflow-hidden">
        {guide.image ? (
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400">
            Guide Image
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[guide.difficulty]}`}>
            {guide.difficulty}
          </span>
        </div>
        <h3 className="font-semibold text-stone-900 mb-2 group-hover:text-green-700 transition-colors">
          {guide.title}
        </h3>
        <p className="text-sm text-stone-600 line-clamp-2">{guide.description}</p>
      </div>
    </Link>
  )
}

/**
 * TipCard 组件 - 快速提示卡片
 */
function TipCard({ title, tip }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-stone-200">
      <h3 className="font-semibold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-600">{tip}</p>
    </div>
  )
}

