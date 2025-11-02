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
      name: 'In-Store Services',
      description: 'Visit our store for quick plant care services including repotting, pot drilling, and consultations.',
      price: 'From $15',
      duration: '15-30 minutes',
      bookingLink: '/services/in-store',
      image: null
    },
    {
      name: 'In-Home Consultation',
      description: 'Professional consultation at your home or office to help you choose and place plants perfectly.',
      price: 'From $75',
      duration: '1-2 hours',
      bookingLink: '/services/in-home',
      image: null
    },
    {
      name: 'Delivery & Installation',
      description: 'Local delivery and professional installation service for your plants and planters.',
      price: 'From $30',
      duration: 'Same day',
      bookingLink: '/services/delivery-rentals',
      image: null
    }
  ]

  const reviews = [
    {
      rating: 5,
      comment: 'The in-home consultation was worth every penny! They helped me transform my apartment into a green oasis.',
      author: 'Jessica Wang',
      date: 'October 2025'
    },
    {
      rating: 5,
      comment: 'Fast delivery and the installer was so careful with everything. Highly professional service!',
      author: 'Robert Kim',
      date: 'September 2025'
    },
    {
      rating: 5,
      comment: 'Got my plant repotted in-store and the team was amazing. Great expertise and friendly service.',
      author: 'Maria Lopez',
      date: 'September 2025'
    }
  ]

  const features = [
    {
      title: 'Expert Team',
      description: 'All our staff are trained horticulturists with years of experience'
    },
    {
      title: 'Flexible Scheduling',
      description: 'We work around your schedule with same-day and weekend availability'
    },
    {
      title: 'Satisfaction Guaranteed',
      description: 'Not happy? We\'ll make it right or refund your service fee'
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
            Professional plant care and consultation services tailored to your needs
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
              title="Choose Your Service"
              description="Select the service that best fits your needs from our three main offerings."
            />
            <Step
              number="2"
              title="Schedule a Time"
              description="Pick a convenient time slot that works with your schedule. We offer same-day and weekend appointments."
            />
            <Step
              number="3"
              title="Enjoy Expert Care"
              description="Our team arrives on time and provides professional service with a smile. We'll answer all your questions!"
            />
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                BOOK A SERVICE NOW
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
              question="Do I need to be home for delivery?"
              answer="For delivery services, yes. For in-store services, no appointment needed – just walk in during business hours!"
            />
            <FAQItem
              question="What's included in the in-home consultation?"
              answer="Our expert will assess your space, lighting, and lifestyle to recommend the perfect plants. We'll also provide care instructions and placement suggestions."
            />
            <FAQItem
              question="Can I cancel or reschedule?"
              answer="Yes! Cancel up to 24 hours before your appointment for a full refund. Rescheduling is always free."
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

