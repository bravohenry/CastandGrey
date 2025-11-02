import { Link } from 'react-router-dom'

/**
 * Footer Component - Website footer
 * Contains store address, contact info, business hours, payment methods, social media links, and policy links
 */
export const Footer = () => {
  return (
    <footer className="bg-[#459361] text-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Store Info */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Store Info
            </h3>
            <address
              className="text-[14.6px] leading-relaxed not-italic"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              <p className="mb-2">123 Plant Street</p>
              <p className="mb-2">Botanical District</p>
              <p className="mb-4">City, State 12345</p>
              <p className="mb-2">
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </p>
              <p>
                <a href="mailto:info@castandgrey.com" className="hover:underline">
                  info@castandgrey.com
                </a>
              </p>
            </address>
          </div>

          {/* Business Hours */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Hours
            </h3>
            <dl
              className="text-[14.6px] leading-relaxed"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              <div className="mb-2">
                <dt className="font-bold">Mon - Fri:</dt>
                <dd>9:00 AM - 6:00 PM</dd>
              </div>
              <div className="mb-2">
                <dt className="font-bold">Saturday:</dt>
                <dd>10:00 AM - 5:00 PM</dd>
              </div>
              <div>
                <dt className="font-bold">Sunday:</dt>
                <dd>11:00 AM - 4:00 PM</dd>
              </div>
            </dl>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Quick Links
            </h3>
            <nav>
              <ul
                className="space-y-2 text-[14.6px]"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                <li>
                  <Link to="/shop" className="hover:underline">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/plant-care" className="hover:underline">
                    Plant Care
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Policies and Social Media */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Policies
            </h3>
            <nav>
              <ul
                className="space-y-2 text-[14.6px] mb-6"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                <li>
                  <Link to="/faqs#shipping" className="hover:underline">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link to="/faqs#returns" className="hover:underline">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Payment Methods */}
            <div className="mb-4">
              <p
                className="text-sm font-bold mb-2"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Accepted Payments
              </p>
              <p
                className="text-[12px]"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Visa, Mastercard, Amex, PayPal
              </p>
            </div>

            {/* Social Media */}
            <div>
              <p
                className="text-sm font-bold mb-2"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Follow Us
              </p>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="hover:opacity-80">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-80">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" aria-label="Twitter" className="hover:opacity-80">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 border-t border-[#FFFEF6]/20 text-center text-sm"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          <p>© {new Date().getFullYear()} Cast & Grey Botanical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

