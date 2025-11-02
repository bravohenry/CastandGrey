import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Button } from '../design-system'

/**
 * FAQs 页面 - 常见问题
 * 日本美学：留白、克制、精致
 * 完全使用设计系统
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
              <li className="text-[#111111]">FAQs</li>
            </ol>
          </nav>
          
          <h1 
            className="text-[48px] lg:text-[64px] leading-[1.1] font-bold tracking-[0.72px] text-[#111111] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Frequently Asked Questions
          </h1>
          
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] max-w-2xl"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* Search - 精致的搜索框 */}
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
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-5 border-2 border-[#459361] rounded-[12px] focus:outline-none focus:ring-0 bg-[#FFFEF6] text-[14.6px] tracking-[0.6px] text-[#111111] placeholder:text-[rgba(69,147,97,0.5)]"
              style={{ 
                fontFamily: 'Archivo, sans-serif',
                boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)'
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQs by Category - 克制的布局 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-5xl mx-auto">
          {filteredCategories.length > 0 ? (
            <div className="space-y-20">
              {filteredCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 
                    className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#111111] mb-8"
                    style={{ fontFamily: 'Petrona, serif' }}
                  >
                    {category.category}
                  </h2>

                  <div className="space-y-6">
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
            <div className="text-center py-20">
              <p 
                className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#111111] mb-6"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                No results found
              </p>
              <Button variant="primary" size="default" onClick={() => setSearchTerm('')}>
                CLEAR SEARCH
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA - 精致的CTA */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] text-center max-w-3xl mx-auto">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Still Have Questions?
          </h2>
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(255,254,246,0.9)] mb-12"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                CONTACT US
              </Button>
            </Link>
            <a href="tel:(555)123-4567">
              <Button variant="primary" size="lg">
                CALL US: (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * FAQItem 组件 - 单个 FAQ 条目，设计系统样式
 */
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div 
      className="bg-[#FFFEF6] border-2 border-[#459361] rounded-[12px] overflow-hidden"
      style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-8 text-left hover:bg-[rgba(69,147,97,0.02)] transition-colors"
      >
        <h3 
          className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] pr-6"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          {question}
        </h3>
        <span className="text-[#459361] text-[32px] flex-shrink-0 leading-none">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="px-8 pb-8 border-t-2 border-[rgba(69,147,97,0.1)]">
          <p 
            className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] pt-6"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  )
}
