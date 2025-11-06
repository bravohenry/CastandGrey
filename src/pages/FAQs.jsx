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
          question: 'Do you ship orders?',
          answer: 'We do not ship plants or products. Choose local delivery for our Monday routes or select in-store pickup during shop hours.'
        },
        {
          question: 'When do local deliveries happen and what do they cost?',
          answer: 'Deliveries run every Monday. Savannah addresses are $5; Pooler, Garden City, Port Wentworth, Wilmington Island, Tybee Island, Richmond Hill, and Bloomingdale range from $10-$15. Large plants may incur an additional fee.'
        },
        {
          question: 'How do I send a gift?',
          answer: 'Select "Ship" at checkout (that signals local delivery), enter the recipient\'s address, and add your gift message. Emily will email to confirm the Monday drop-off window.'
        }
      ]
    },
    {
      category: 'Returns & Policies',
      questions: [
        {
          question: 'What is your plant return policy?',
          answer: 'All plant sales are final. If a plant leaves with a pest, let us know within seven days with the original Cast & Grey tag so we can make it right.'
        },
        {
          question: 'Can I return planters, tools, or gifts?',
          answer: 'Unused merchandise can be exchanged or returned with a receipt. Please email hello@castandgrey.com to start the process.'
        },
        {
          question: 'What if something arrives damaged?',
          answer: 'Email photos the same day and we will take care of you. Delivery fees are refunded if the damage occurred in transit.'
        }
      ]
    },
    {
      category: 'Plant Care Support',
      questions: [
        {
          question: 'Do purchases include care instructions?',
          answer: 'Yes. Every plant leaves with a handwritten or printed care card and a link to our Cast & Grey Plant Care Library for deeper guidance.'
        },
        {
          question: 'Can I ask for help after I take a plant home?',
          answer: 'Absolutely. Email photos and your questions to hello@castandgrey.com and we will troubleshoot with you during store hours.'
        },
        {
          question: 'Do you have pet-safe options?',
          answer: 'Our dedicated Pet-Safe Collection and plant tags highlight ASPCA-referenced varieties that are safer for curious pets.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'How do in-home consultations work?',
          answer: 'Consultations are $30 per hour with a one-hour minimum. Emily assesses lighting, recommends plants, and sends a written plan. The fee is credited toward follow-up services booked within 30 days.'
        },
        {
          question: 'Can I bring my own plants for repotting?',
          answer: 'We ask that personal plants stay home. Book an in-home repotting visit and we will bring soil, tools, and a tidy setup.'
        },
        {
          question: 'Do you offer plant rentals?',
          answer: 'Yes. Rentals start at $150 with a 50% of retail rate for up to 72 hours. Please allow at least three weeks to plan your event or photo shoot.'
        },
        {
          question: 'What are your in-store potting fees?',
          answer: 'For plants purchased at Cast & Grey, repotting ranges from $6-$30 depending on pot size, and planter drilling is a flat $10 for ceramic pots.'
        }
      ]
    },
    {
      category: 'Products & Availability',
      questions: [
        {
          question: 'How often do new plants arrive?',
          answer: 'Our selection rotates frequently and includes beginner-friendly, low-light, pet-safe, and rare plants. Follow @castandgreybotanical for the latest arrivals.'
        },
        {
          question: 'Can you source a specific plant?',
          answer: 'Send us an email with your wish list. While availability varies, we love hunting for special plants and will keep you updated.'
        },
        {
          question: 'Do you carry locally made gifts?',
          answer: 'Yes. Discover art, jewelry, candles, cards, and accessories crafted by Savannah makers—perfect for pairing with plant deliveries.'
        }
      ]
    },
    {
      category: 'Account & Payments',
      questions: [
        {
          question: 'How do I get in touch?',
          answer: 'Email is the best way to reach us: hello@castandgrey.com. We respond Tuesday through Saturday, 11am-6pm.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'American Express, Apple Pay, Diners Club, Discover, Mastercard, Shop Pay, and Visa are accepted. In-store, we also accept cash.'
        },
        {
          question: 'Do I need an account to shop?',
          answer: 'No account is required to check out. Creating one simply makes it easier to manage orders and delivery details.'
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
