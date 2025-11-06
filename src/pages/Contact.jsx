import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContactForm } from '../components/common/ContactForm'
import storePhoto from '../assets/Cast & Grey Botanical Bkg_files/storepicture.jpg'

/**
 * Contact 页面 - 联系我们
 * 日本美学：留白、克制、精致
 * 完全使用设计系统
 */
export function Contact() {
  const storeInfo = {
    address: '2411 Waters Ave., Savannah, GA 31404',
    email: 'hello@castandgrey.com',
    hours: [
      { days: 'Tuesday - Saturday', time: '11:00 AM - 6:00 PM' },
      { days: 'Sunday - Monday', time: 'Closed' }
    ],
    delivery: 'Local deliveries run on Mondays across Savannah, Pooler, Garden City, Port Wentworth, Wilmington Island, Tybee Island, Richmond Hill, and Bloomingdale.'
  }

  const faqs = [
    {
      question: 'Do you offer shipping?',
      answer: 'We do not ship plants or products. Select local delivery at checkout for Monday drop-offs, or choose in-store pickup during shop hours.'
    },
    {
      question: 'What is your return policy?',
      answer: 'All plant sales are final. If a plant leaves with a pest, let us know within seven days with your Cast & Grey tag. Defective merchandise can be exchanged with a receipt.'
    },
    {
      question: 'Can I bring my own plants for repotting?',
      answer: 'We kindly ask that personal plants stay home. Book an in-home repotting appointment and we will bring soil, tools, and expertise to you.'
    },
    {
      question: 'How do I book a consultation or service?',
      answer: 'Email hello@castandgrey.com or use the contact form below with your goals, timeline, and location. We reply during store hours to confirm details.'
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
              <li className="text-[#111111]">Contact</li>
            </ol>
          </nav>
          
          <h1 
            className="text-[48px] lg:text-[64px] leading-[1.1] font-bold tracking-[0.72px] text-[#111111] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Contact Us
          </h1>
          
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] max-w-2xl"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            We respond via email during shop hours. Visit the boutique, send a note, or schedule a service—whatever helps you feel confident with your plants.
          </p>
        </div>
      </section>

      {/* Store Hero Image - 克制的展示 */}
      <section className="py-20 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <motion.div 
            className="aspect-[21/9] rounded-[12px] overflow-hidden"
            style={{ boxShadow: '0px 8px 0px rgba(132, 132, 132, 0.9)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={storePhoto}
              alt="Cast & Grey Storefront"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map - 精致的排版 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 
                className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-12"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Visit Our Store
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[rgba(69,147,97,0.1)] rounded-[12px] flex items-center justify-center">
                    <MapPin size={24} className="text-[#459361]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 
                      className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Address
                    </h3>
                    <address 
                      className="not-italic text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      {storeInfo.address}
                      <br />
                      Between The Stacks Bookstore and Goodfortune Market
                    </address>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[rgba(69,147,97,0.1)] rounded-[12px] flex items-center justify-center">
                    <Mail size={24} className="text-[#459361]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 
                      className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${storeInfo.email}`}
                      className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      {storeInfo.email}
                    </a>
                    <p 
                      className="text-[13px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.6)] mt-2"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      We reply during store hours. No phone line—email is the best way to reach us.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[rgba(69,147,97,0.1)] rounded-[12px] flex items-center justify-center">
                    <Truck size={24} className="text-[#459361]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 
                      className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Local Delivery
                    </h3>
                    <p 
                      className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      {storeInfo.delivery}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-[rgba(69,147,97,0.1)] rounded-[12px] flex items-center justify-center">
                    <Clock size={24} className="text-[#459361]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 
                      className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-3"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Store Hours
                    </h3>
                    <ul 
                      className="space-y-2 text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      {storeInfo.hours.map((schedule, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{schedule.days}</span>
                          <span className="font-bold ml-4">{schedule.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div>
              <h2 
                className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-12"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Find Us
              </h2>
              <div 
                className="aspect-square bg-[rgba(69,147,97,0.05)] border-2 border-[#459361] rounded-[12px] overflow-hidden"
                style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-6 text-[#459361]" strokeWidth={1.5} />
                    <p 
                      className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Interactive Map
                    </p>
                    <p 
                      className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      2411 Waters Ave., Savannah, GA 31404
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center px-8 py-4 bg-[#459361] text-[#FFFEF6] border-2 border-[#459361] rounded-[12px] hover:bg-[#3a7a51] transition-colors text-[13.6px] leading-[18.2px] tracking-[0.6px] font-bold uppercase"
                style={{ 
                  fontFamily: 'Archivo, sans-serif',
                  boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)'
                }}
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Preview - 克制的FAQ */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-16 text-center"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/faqs"
                className="inline-block text-[13.6px] leading-[18.2px] tracking-[0.6px] font-bold text-[rgba(255,254,246,0.9)] hover:text-[#FFFEF6] transition-colors border-b-2 border-[rgba(255,254,246,0.3)] hover:border-[#FFFEF6]"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                VIEW ALL FAQS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - 精致的表单 */}
      <section id="form" className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-6 text-center"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Send Us a Message
            </h2>
            <p
              className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] mb-12 text-center"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Have a question? We typically respond within 24 hours.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * FAQAccordion 组件 - FAQ 手风琴，设计系统样式
 */
function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="bg-[#FFFEF6] border-2 border-[#FFFEF6] rounded-[12px] overflow-hidden"
      style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
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
