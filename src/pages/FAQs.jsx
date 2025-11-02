import { useState } from 'react'
import { PageHeader } from '../components/common/Hero'
import { Search } from 'lucide-react'

/**
 * FAQs 页面 - 常见问题
 * 集中展示所有常见问题
 */
export function FAQs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const faqCategories = [
    {
      category: 'Orders & Delivery',
      questions: [
        {
          question: 'Do you offer same-day delivery?',
          answer: 'Yes! For orders placed before 2 PM, we offer same-day local delivery within a 10-mile radius. Orders placed after 2 PM will be delivered the next business day.'
        },
        {
          question: 'What are the delivery fees?',
          answer: 'Delivery fees vary based on distance: $10 for orders within 5 miles, $15 for 5-10 miles, and $20 for 10-15 miles. Free delivery on orders over $100.'
        },
        {
          question: 'Can I pick up my order in-store?',
          answer: 'Absolutely! Select "Store Pickup" at checkout. We\'ll notify you when your order is ready, typically within 2 hours during business hours.'
        },
        {
          question: 'Do you ship nationwide?',
          answer: 'Currently, we only offer local delivery and in-store pickup. We\'re working on expanding our shipping options in the future.'
        }
      ]
    },
    {
      category: 'Returns & Guarantees',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day plant health guarantee. If your plant isn\'t thriving despite following our care instructions, bring it back with the original receipt and packaging for a replacement or full refund.'
        },
        {
          question: 'What if my plant arrives damaged?',
          answer: 'Please contact us within 24 hours with photos. We\'ll arrange for a replacement or full refund immediately, including any delivery fees.'
        },
        {
          question: 'Can I return planters or tools?',
          answer: 'Yes, unused planters, tools, and accessories can be returned within 30 days with receipt for a full refund or exchange.'
        }
      ]
    },
    {
      category: 'Plant Care',
      questions: [
        {
          question: 'How do I know how much to water my plant?',
          answer: 'Each plant comes with specific care instructions. Generally, check the soil moisture by inserting your finger 2 inches deep. If it\'s dry, it\'s time to water. Visit our Plant Care Hub for detailed guides.'
        },
        {
          question: 'What should I do if my plant has yellow leaves?',
          answer: 'Yellow leaves can indicate overwatering, underwatering, or nutrient deficiency. Check our troubleshooting guide or bring your plant to our store for a free consultation.'
        },
        {
          question: 'Do you offer plant care consultations?',
          answer: 'Yes! Every purchase includes a free 15-minute consultation. We also offer in-home consultations starting at $75. Book online or call us to schedule.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'What in-store services do you offer?',
          answer: 'We offer repotting ($15-30), pot drilling ($10), plant health checks (free), and consultations. No appointment needed for quick services.'
        },
        {
          question: 'How does the in-home consultation work?',
          answer: 'Our expert will visit your space to assess lighting, humidity, and your lifestyle. We\'ll recommend perfect plants and placement. Consultations start at $75 for up to 2 hours.'
        },
        {
          question: 'Can I cancel or reschedule a service?',
          answer: 'Yes! Cancel or reschedule up to 24 hours before your appointment for no charge. Cancellations within 24 hours are subject to a 50% fee.'
        }
      ]
    },
    {
      category: 'Products',
      questions: [
        {
          question: 'How do I know if a plant is pet-safe?',
          answer: 'All our plants are clearly labeled. Look for the "Pet Safe" badge online or ask our staff in-store. We also have a dedicated Pet-Safe Collection.'
        },
        {
          question: 'What sizes do your plants come in?',
          answer: 'We offer plants in various pot sizes from 4" to 14". Product descriptions include both pot diameter and approximate plant height.'
        },
        {
          question: 'Do you sell gift cards?',
          answer: 'Yes! Physical and digital gift cards are available in any amount from $25 to $500. They never expire and can be used for products or services.'
        },
        {
          question: 'Can I request a specific plant variety?',
          answer: 'Absolutely! Contact us with your request. While we can\'t guarantee availability, we\'ll do our best to source it for you.'
        }
      ]
    },
    {
      category: 'Account & Payments',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, and Google Pay. In-store, we also accept cash.'
        },
        {
          question: 'Do I need an account to shop?',
          answer: 'No, you can checkout as a guest. However, creating an account lets you track orders, save favorites, and earn rewards points.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard encryption and never store your full credit card information. All transactions are processed through secure payment gateways.'
        }
      ]
    }
  ]

  // 过滤 FAQs
  const filteredCategories = faqCategories.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter((cat) => cat.questions.length > 0)

  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products and services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQs' }
        ]}
      />

      {/* Search */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {filteredCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl font-bold text-stone-900 mb-6">
                    {category.category}
                  </h2>

                  <div className="space-y-4">
                    {category.questions.map((faq, qIndex) => {
                      const globalIndex = `${catIndex}-${qIndex}`
                      return (
                        <FAQItem
                          key={qIndex}
                          question={faq.question}
                          answer={faq.answer}
                          isOpen={openIndex === globalIndex}
                          onToggle={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-stone-600 mb-4">No results found</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-stone-600 mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
            >
              Contact Us
            </a>
            <a
              href="tel:(555)123-4567"
              className="px-8 py-3 border border-stone-300 text-stone-700 rounded-md hover:bg-stone-50 transition-colors font-semibold"
            >
              Call Us: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * FAQItem 组件 - 单个 FAQ 条目
 */
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
      >
        <h3 className="font-semibold text-stone-900 pr-4">{question}</h3>
        <span className="text-green-600 text-2xl flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-stone-100">
          <p className="text-stone-600 pt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

