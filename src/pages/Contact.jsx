import { Hero } from '../components/hero/Hero'
import { MapEmbed } from '../components/common/MapEmbed'
import { ContactForm } from '../components/common/ContactForm'

/**
 * Contact Page - Store info, map, FAQs, and contact form
 */
export const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFFEF6]">
      {/* Hero with storefront image */}
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Map and Store Info */}
          <div>
            <MapEmbed />
            <div className="bg-[#FFFEF6] border-2 border-[#459361] rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-[#459361] mb-4"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Store Information
              </h2>
              <address
                className="text-[14.6px] leading-relaxed not-italic"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                <p className="mb-2 font-bold">Cast & Grey Botanical</p>
                <p className="mb-2">123 Plant Street</p>
                <p className="mb-2">Botanical District</p>
                <p className="mb-4">City, State 12345</p>
                <p className="mb-2">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+1234567890" className="hover:underline">
                    (123) 456-7890
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@castandgrey.com" className="hover:underline">
                    info@castandgrey.com
                  </a>
                </p>
              </address>
              <div className="mt-6 pt-6 border-t border-[#848484]/30">
                <h3
                  className="font-bold text-[#459361] mb-2"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Business Hours
                </h3>
                <dl
                  className="text-[14.6px] space-y-1"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  <div className="flex justify-between">
                    <dt>Mon - Fri:</dt>
                    <dd>9:00 AM - 6:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Saturday:</dt>
                    <dd>10:00 AM - 5:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday:</dt>
                    <dd>11:00 AM - 4:00 PM</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2
              className="text-2xl font-bold text-[#459361] mb-6"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

