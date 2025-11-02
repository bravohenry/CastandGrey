import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

/**
 * Footer 组件 - 全局页脚
 * 包含商店信息、联系方式、营业时间、支付方式、社交媒体链接和政策链接
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'All Plants', href: '/shop/plants' },
        { name: 'Best Sellers', href: '/shop/best-sellers' },
        { name: 'Pet-Safe Plants', href: '/shop/pet-safe' },
        { name: 'Tools & Accessories', href: '/shop/tools' },
        { name: 'Gift Cards', href: '/gift-cards' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'In-Store Services', href: '/services/in-store' },
        { name: 'In-Home Consultation', href: '/services/in-home' },
        { name: 'Delivery & Rentals', href: '/services/delivery-rentals' },
        { name: 'Book a Service', href: '/services' }
      ]
    },
    {
      title: 'Plant Care',
      links: [
        { name: 'Care Guides', href: '/plant-care/guides' },
        { name: 'Pet-Safe List', href: '/plant-care/pet-safe' },
        { name: 'Repotting Guide', href: '/plant-care/repotting' },
        { name: 'Troubleshooting', href: '/plant-care/troubleshooting' }
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Reviews', href: '/about#reviews' }
      ]
    }
  ]

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

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/castandgrey' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/castandgrey' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/castandgrey' }
  ]

  const paymentMethods = ['Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay']

  const policies = [
    { name: 'Shipping & Delivery', href: '/policies/shipping' },
    { name: 'Returns & Exchanges', href: '/policies/returns' },
    { name: 'Privacy Policy', href: '/policies/privacy' },
    { name: 'Terms of Service', href: '/policies/terms' }
  ]

  return (
    <footer className="bg-stone-50 border-t border-stone-200 mt-auto" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Store Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-stone-900 mb-4">Visit Us</h3>
            
            <div className="space-y-3 text-stone-600">
              <div className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 text-green-600 mt-0.5" />
                <address className="not-italic">{storeInfo.address}</address>
              </div>
              
              <div className="flex gap-3">
                <Phone size={20} className="flex-shrink-0 text-green-600" />
                <a href={`tel:${storeInfo.phone}`} className="hover:text-stone-900 transition-colors">
                  {storeInfo.phone}
                </a>
              </div>
              
              <div className="flex gap-3">
                <Mail size={20} className="flex-shrink-0 text-green-600" />
                <a href={`mailto:${storeInfo.email}`} className="hover:text-stone-900 transition-colors">
                  {storeInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex gap-2 items-center mb-3">
                <Clock size={20} className="text-green-600" />
                <h4 className="font-semibold text-stone-900">Store Hours</h4>
              </div>
              <ul className="space-y-1 text-sm text-stone-600">
                {storeInfo.hours.map((schedule, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{schedule.days}</span>
                    <span className="font-medium">{schedule.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-stone-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-stone-600 hover:text-stone-900 transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div>
              <p className="text-sm text-stone-600 mb-3 text-center md:text-left">Follow us</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-stone-900 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="w-full md:w-auto">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 md:w-64 px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-stone-200">
          <p className="text-sm text-stone-600 mb-3">Accepted Payment Methods</p>
          <div className="flex flex-wrap gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="h-8 px-4 bg-white border border-stone-200 rounded flex items-center justify-center text-xs font-medium text-stone-700"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-stone-100 border-t border-stone-200">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-600">
            <p>© {currentYear} Cast & Grey Botanical. All rights reserved.</p>
            
            <nav aria-label="Footer policies">
              <ul className="flex flex-wrap justify-center gap-4">
                {policies.map((policy, index) => (
                  <li key={policy.name}>
                    <Link to={policy.href} className="hover:text-stone-900 transition-colors">
                      {policy.name}
                    </Link>
                    {index < policies.length - 1 && (
                      <span className="ml-4 text-stone-400">|</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

