import { useState } from 'react'
import { PageHeader } from '../components/common/Hero'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ContactForm } from '../components/common/ContactForm'
import storePhoto from '../assets/Cast & Grey Botanical Bkg_files/storepicture.jpg'

/**
 * Contact 页面 - 联系我们
 * 包含商店位置、联系方式、地图和联系表单
 */
export function Contact() {
  const storeInfo = {
    address: '123 Botanical Avenue, Green District, CA 90210',
    phone: '(555) 123-4567',
    email: 'hello@castandgrey.com',
    hours: [
      { days: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
      { days: 'Saturday', time: '10:00 AM - 6:00 PM' },
      { days: 'Sunday', time: '11:00 AM - 5:00 PM' }
    ]
  }

  const faqs = [
    {
      question: 'Do you offer same-day delivery?',
      answer: 'Yes! For orders placed before 2 PM, we offer same-day local delivery within a 10-mile radius.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day plant health guarantee. If your plant isn\'t thriving, bring it back with the original receipt for a replacement or refund.'
    },
    {
      question: 'Do I need an appointment for in-store services?',
      answer: 'Walk-ins are welcome for quick services like repotting. For in-home consultations, please book an appointment online or call us.'
    },
    {
      question: 'Are all your plants pet-safe?',
      answer: 'We carry both pet-safe and non-pet-safe plants. All plants are clearly labeled in-store and online. Check out our Pet-Safe Collection for safe options.'
    }
  ]

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Visit us, call, or send us a message."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]}
      />

      {/* Store Hero Image */}
      <section className="py-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="aspect-[21/9] bg-stone-100 rounded-lg overflow-hidden">
            <img
              src={storePhoto}
              alt="Cast & Grey Storefront"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Visit Our Store</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Address</h3>
                    <address className="not-italic text-stone-600">
                      {storeInfo.address}
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${storeInfo.phone}`}
                      className="text-stone-600 hover:text-green-600 transition-colors"
                    >
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${storeInfo.email}`}
                      className="text-stone-600 hover:text-green-600 transition-colors"
                    >
                      {storeInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">Store Hours</h3>
                    <ul className="space-y-1 text-stone-600">
                      {storeInfo.hours.map((schedule, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{schedule.days}</span>
                          <span className="font-medium ml-4">{schedule.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Find Us</h2>
              <div className="aspect-square bg-stone-200 rounded-lg overflow-hidden">
                {/* Placeholder for map - In production, integrate Google Maps or similar */}
                <div className="w-full h-full flex items-center justify-center text-stone-500">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4 text-stone-400" />
                    <p>Interactive Map</p>
                    <p className="text-sm mt-2">123 Botanical Avenue</p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Preview */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/faqs"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              View All FAQs →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="form" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 text-center">
            Send Us a Message
          </h2>
          <p className="text-stone-600 mb-8 text-center">
            Have a question? We typically respond within 24 hours.
          </p>

          <ContactForm />
        </div>
      </section>
    </div>
  )
}

/**
 * FAQAccordion 组件 - FAQ 手风琴
 */
function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
      >
        <h3 className="font-semibold text-stone-900 pr-4">{question}</h3>
        <span className="text-green-600 text-2xl flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-stone-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

