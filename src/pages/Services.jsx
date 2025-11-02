import { PageHeader } from '../components/common/Hero'
import { ServiceCard } from '../components/common/ProductCard'
import { ReviewGrid } from '../components/common/ReviewCarousel'
import { Link } from 'react-router-dom'

/**
 * Services 页面 - 服务列表页
 * 展示所有可预订的服务
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
    <div>
      <PageHeader
        title="Plant Care Services"
        description="Professional plant care and consultation services tailored to your needs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]}
      />

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            Why Book With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            How It Works
          </h2>

          <div className="space-y-8">
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

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold text-lg"
            >
              Book a Service Now
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            Customer Reviews
          </h2>

          <ReviewGrid reviews={reviews} columns={3} />
        </div>
      </section>

      {/* FAQs Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            Common Questions
          </h2>

          <div className="space-y-4">
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

          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Step 组件 - 流程步骤
 */
function Step({ number, title, description }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-stone-900 mb-2">{title}</h3>
        <p className="text-stone-600">{description}</p>
      </div>
    </div>
  )
}

/**
 * FAQItem 组件 - FAQ 条目
 */
function FAQItem({ question, answer }) {
  return (
    <div className="bg-stone-50 rounded-lg p-6">
      <h3 className="font-semibold text-stone-900 mb-2">{question}</h3>
      <p className="text-stone-600">{answer}</p>
    </div>
  )
}

