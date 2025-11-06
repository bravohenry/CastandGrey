import { motion } from 'framer-motion'
import { ServiceCard } from '../components/common/ProductCard'
import { ReviewGrid } from '../components/common/ReviewCarousel'
import { Link } from 'react-router-dom'
import { Button } from '../design-system'

/**
 * Services 页面 - 服务列表页
 * 日本美学：留白、克制、精致
 * 完全使用设计系统
 */
export function Services() {
  const services = [
    {
      name: 'In-Store Plant Bar',
      description: 'Drop in for repotting, planter drilling, plant matchmaking, and quick troubleshooting with Emily.',
      price: 'Repotting $6-$30 / Drilling $10',
      duration: 'Available Tuesday-Saturday, 11am-6pm',
      bookingLink: '/services/in-store',
      image: null
    },
    {
      name: 'In-Home Consultation & Repotting',
      description: 'One-on-one coaching in your space with a write-up, lighting assessment, and optional on-the-spot repotting.',
      price: '$30/hr + repotting fees (1-hour minimum, credited toward follow-up services)',
      duration: '60 minutes minimum',
      bookingLink: '/services/in-home',
      image: null
    },
    {
      name: 'Local Delivery & Plant Rentals',
      description: 'Monday deliveries across Savannah plus curated rentals for events, staging, and photo shoots.',
      price: 'Delivery $5-$15 / Rentals $150+ (50% of retail up to 72 hours)',
      duration: 'Mondays for delivery / Rentals by appointment',
      bookingLink: '/services/delivery-rentals',
      image: null
    }
  ]

  const reviews = [
    {
      rating: 5,
      comment: 'Emily&apos;s in-home consultation gave me a full lighting map, plant recommendations, and a follow-up email with everything in writing. Worth every penny.',
      author: 'Lauren P.',
      date: 'March 2024'
    },
    {
      rating: 5,
      comment: 'The Monday delivery is legendary. Plants arrive secured, tagged, and with care notes—my clients think I have a plant concierge.',
      author: 'Marcus H.',
      date: 'February 2024'
    },
    {
      rating: 5,
      comment: 'Repotting at the plant bar is so joyful. Emily drills planters, refreshes soil, and teaches as she works.',
      author: 'Samantha D.',
      date: 'January 2024'
    }
  ]

  const features = [
    {
      title: 'Mentorship-First Approach',
      description: 'Every service includes practical coaching and a written plan so you feel confident long after we pack up.'
    },
    {
      title: 'Materials Included',
      description: 'We bring the soil, tools, and planter know-how. You bring the plants and your questions.'
    },
    {
      title: 'Savannah Logistics',
      description: 'Monday delivery routes and flexible appointment windows keep your projects on schedule.'
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
              <li className="text-[#111111]">Services</li>
            </ol>
          </nav>
          
          <h1 
            className="text-[48px] lg:text-[64px] leading-[1.1] font-bold tracking-[0.72px] text-[#111111] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Plant Care Services
          </h1>
          
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] max-w-2xl"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            From in-store repotting to in-home consultations and Monday deliveries, we nurture confident plant care for Savannah homes and businesses
          </p>
        </div>
      </section>

      {/* Services Grid - 大量留白 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features - 精致卡片 */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Why Book With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#FFFEF6] border-2 border-[#FFFEF6] rounded-[12px] p-8 text-center"
                style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
              >
                <h3 
                  className="text-[19.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-4"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - 克制的流程 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-4xl mx-auto">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            How It Works
          </h2>

          <div className="space-y-12">
            <Step
              number="1"
              title="Share Your Plant Goals"
              description="Tell us about your space, lighting, lifestyle, and any plant anxieties—we love the details."
            />
            <Step
              number="2"
              title="Receive a Custom Plan"
              description="We confirm your booking, outline pricing, and prepare the materials and recommendations you need."
            />
            <Step
              number="3"
              title="Relax While We Work"
              description="We handle the repotting, placement, delivery, or rentals—then leave you with a clear, confidence-building care recap."
            />
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                REQUEST A CONSULTATION
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews - 精致排版 */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Customer Reviews
          </h2>

          <ReviewGrid reviews={reviews} columns={3} />
        </div>
      </section>

      {/* FAQs Preview - 克制的FAQ */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-4xl mx-auto">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-16 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Common Questions
          </h2>

          <div className="space-y-6">
            <FAQItem
              question="Can I bring plants from home to the shop for repotting?"
              answer="We love getting our hands in soil, but we ask that personal plants stay at home. Book an in-home repotting appointment and we will bring the tools, soil, and expertise to you."
            />
            <FAQItem
              question="How do Monday deliveries work?"
              answer={'Choose "Ship" at checkout (that signals local delivery), enter the recipient\'s address, and Emily will email from hello@castandgrey.com to confirm the Monday timeframe. We coordinate safe drop-offs if no one is home.'}
            />
            <FAQItem
              question="Is my consultation fee applied to future services?"
              answer="Absolutely. The $30 per hour consultation fee is credited toward any follow-up services—like repotting, installs, or plant sourcing—booked within 30 days."
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/faqs"
              className="inline-block text-[13.6px] leading-[18.2px] tracking-[0.6px] font-bold text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors border-b-2 border-[rgba(69,147,97,0.3)] hover:border-[#459361]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              VIEW ALL FAQS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Step 组件 - 流程步骤，精致设计
 */
function Step({ number, title, description }) {
  return (
    <div className="flex gap-8">
      <div 
        className="flex-shrink-0 w-16 h-16 bg-[#459361] text-[#FFFEF6] border-2 border-[#FFFEF6] rounded-full flex items-center justify-center font-bold text-[28.8px]"
        style={{ 
          fontFamily: 'Petrona, serif',
          boxShadow: '0px 4px 0px rgba(132, 132, 132, 0.9)'
        }}
      >
        {number}
      </div>
      <div>
        <h3 
          className="text-[19.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-3"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          {title}
        </h3>
        <p 
          className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

/**
 * FAQItem 组件 - FAQ 条目，设计系统样式
 */
function FAQItem({ question, answer }) {
  return (
    <div 
      className="bg-[#FFFEF6] border-2 border-[#459361] rounded-[12px] p-8"
      style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
    >
      <h3 
        className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-3"
        style={{ fontFamily: 'Petrona, serif' }}
      >
        {question}
      </h3>
      <p 
        className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
        style={{ fontFamily: 'Archivo, sans-serif' }}
      >
        {answer}
      </p>
    </div>
  )
}
