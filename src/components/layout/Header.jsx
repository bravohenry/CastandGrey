import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from '../../assets/CastAndGrey_Logo.avif'

/**
 * Header 组件 - 全局导航系统
 * 包含品牌标志、主导航、下拉菜单、mega menu 和工具栏
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isSticky, setIsSticky] = useState(false)
  const dropdownTimeout = useRef(null)
  const location = useLocation()

  // 监听滚动实现 sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 路由变化时关闭移动端菜单
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const handleMouseEnter = (menuKey) => {
    clearTimeout(dropdownTimeout.current)
    setActiveDropdown(menuKey)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 250)
  }

  // 导航配置
  const navigation = {
    shop: {
      label: 'Shop',
      type: 'mega',
      content: {
        categories: [
          { name: 'All Plants', href: '/shop/plants' },
          { name: 'Planters & Vessels', href: '/shop/planters' },
          { name: 'Tools & Supplies', href: '/shop/tools' },
          { name: 'Soils & Amendments', href: '/shop/soil' },
          { name: 'Gifts & Local Goods', href: '/shop/gifts' },
          { name: 'Services & Workshops', href: '/services' }
        ],
        intents: [
          { name: 'Beginner-Friendly', href: '/shop/beginner-friendly' },
          { name: 'Low-Light Heroes', href: '/shop/low-light' },
          { name: 'Pet-Safe Plants', href: '/shop/pet-safe' },
          { name: 'Statement Plants', href: '/shop/statement' },
          { name: 'Ready-to-Gift', href: '/shop/gifts' },
          { name: 'Plant Rentals', href: '/services/delivery-rentals' }
        ],
        promo: {
          title: 'Monday Local Delivery',
          subtitle: 'Hand-delivered across Savannah with handwritten notes upon request.',
          href: '/shop',
          image: null
        }
      }
    },
    services: {
      label: 'Services',
      type: 'dropdown',
      content: [
        { name: 'In-Store Plant Bar', href: '/services/in-store' },
        { name: 'In-Home Consultations', href: '/services/in-home' },
        { name: 'Delivery & Rentals', href: '/services/delivery-rentals' }
      ],
      cta: { label: 'Request a Consultation', href: '/contact#form' }
    },
    plantCare: {
      label: 'Plant Care',
      type: 'dropdown',
      content: [
        { name: 'Plant Care Library', href: '/plant-care' },
        { name: 'Light & Placement Guides', href: '/plant-care/low-light' },
        { name: 'Pet-Safe Collection', href: '/plant-care/pet-safe', badge: 'Popular' },
        { name: 'Troubleshooting Center', href: '/plant-care/troubleshooting' }
      ]
    },
    about: {
      label: 'About Us',
      type: 'dropdown',
      content: [
        { name: 'Our Story', href: '/about' },
        { name: 'Mission & Values', href: '/about#mission' },
        { name: 'Community Voices', href: '/about#reviews' },
        { name: 'Neighborhood Highlights', href: '/about#nominations' }
      ]
    },
    contact: {
      label: 'Contact',
      type: 'dropdown',
      content: [
        { name: 'Store Info & Map', href: '/contact' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Service Request Form', href: '/contact#form' }
      ]
    }
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300
        ${isSticky ? 'shadow-md' : 'shadow-sm'}
      `}
      role="banner"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Cast & Grey Home">
            <img src={logoImage} alt="Cast & Grey" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {Object.entries(navigation).map(([key, item]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-stone-700 hover:text-stone-900 font-medium transition-colors"
                  data-nav-link={key}
                  aria-expanded={activeDropdown === key}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown/Mega Menu */}
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden"
                      role="menu"
                    >
                      {item.type === 'mega' ? (
                        <MegaMenu content={item.content} />
                      ) : (
                        <DropdownMenu content={item.content} cta={item.cta} />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Utilities */}
          <div className="flex items-center gap-4">
            <Link to="/search" className="text-stone-700 hover:text-stone-900 transition-colors" aria-label="Search">
              <Search size={20} />
            </Link>
            <Link to="/account" className="text-stone-700 hover:text-stone-900 transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-stone-700 hover:text-stone-900 transition-colors relative" aria-label="Shopping Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-stone-700 hover:text-stone-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu navigation={navigation} onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

/**
 * Mega Menu 组件 - Shop 使用
 */
function MegaMenu({ content }) {
  return (
    <div className="w-screen max-w-5xl p-8 grid grid-cols-3 gap-8">
      {/* 分类列 */}
      <div>
        <h3 className="text-sm font-semibold text-stone-900 mb-4 uppercase tracking-wide">Categories</h3>
        <ul className="space-y-3">
          {content.categories.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-stone-700 hover:text-stone-900 transition-colors"
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 购物意图列 */}
      <div>
        <h3 className="text-sm font-semibold text-stone-900 mb-4 uppercase tracking-wide">Shop By</h3>
        <ul className="space-y-3">
          {content.intents.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-stone-700 hover:text-stone-900 transition-colors"
                role="menuitem"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 促销卡片 */}
      <div>
        <Link to={content.promo.href} className="block group">
          <div className="aspect-square bg-stone-200 rounded-lg mb-3 overflow-hidden">
            {content.promo.image ? (
              <img src={content.promo.image} alt={content.promo.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-stone-400">
                Promo Image
              </div>
            )}
          </div>
          <h4 className="font-semibold text-stone-900 group-hover:text-green-700 transition-colors">
            {content.promo.title}
          </h4>
          <p className="text-sm text-stone-600 mt-1">{content.promo.subtitle}</p>
        </Link>
      </div>
    </div>
  )
}

/**
 * Dropdown Menu 组件 - Services, Plant Care, About, Contact 使用
 */
function DropdownMenu({ content, cta }) {
  return (
    <div className="min-w-[240px] p-4">
      <ul className="space-y-2">
        {content.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className="flex items-center justify-between text-stone-700 hover:text-stone-900 hover:bg-stone-50 px-3 py-2 rounded-md transition-colors"
              role="menuitem"
            >
              <span>{item.name}</span>
              {item.badge && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {cta && (
        <div className="mt-4 pt-4 border-t border-stone-200">
          <Link
            to={cta.href}
            className="block text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  )
}

/**
 * Mobile Menu 组件
 */
function MobileMenu({ navigation, onClose }) {
  const [openAccordion, setOpenAccordion] = useState(null)

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="lg:hidden border-t border-stone-200 overflow-hidden"
    >
      <nav className="py-4 max-h-[70vh] overflow-y-auto">
        {Object.entries(navigation).map(([key, item]) => (
          <div key={key} className="border-b border-stone-100">
            <button
              onClick={() => setOpenAccordion(openAccordion === key ? null : key)}
              className="w-full flex items-center justify-between px-4 py-3 text-stone-700 hover:bg-stone-50"
            >
              <span className="font-medium">{item.label}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${openAccordion === key ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {openAccordion === key && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-3 bg-stone-50">
                    {item.type === 'mega' ? (
                      <>
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-stone-500 uppercase mb-2">Categories</p>
                          {item.content.categories.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block py-2 text-stone-700"
                              onClick={onClose}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-stone-500 uppercase mb-2">Shop By</p>
                          {item.content.intents.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block py-2 text-stone-700"
                              onClick={onClose}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        {item.content.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block py-2 text-stone-700"
                            onClick={onClose}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                        {item.cta && (
                          <Link
                            to={item.cta.href}
                            className="block mt-3 text-center bg-green-600 text-white px-4 py-2 rounded-md"
                            onClick={onClose}
                          >
                            {item.cta.label}
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Mobile Quick CTAs */}
        <div className="px-4 py-4 space-y-2">
          <Link
            to="/services"
            className="block text-center bg-green-600 text-white px-4 py-3 rounded-md font-medium"
            onClick={onClose}
          >
            Book a Service
          </Link>
          <Link
            to="/shop/pet-safe"
            className="block text-center border border-green-600 text-green-600 px-4 py-3 rounded-md font-medium"
            onClick={onClose}
          >
            Pet-Safe Plants
          </Link>
        </div>
      </nav>
    </motion.div>
  )
}
