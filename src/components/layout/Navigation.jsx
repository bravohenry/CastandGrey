import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useBreakpoint } from '../../design-system'
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react'
import { Button } from '../../design-system'

/**
 * Navigation Component - Global navigation system
 * Contains dropdown menus, mega menu, mobile hamburger menu
 */
export const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { isMobile } = useBreakpoint()
  const navigate = useNavigate()
  const dropdownTimeoutRef = useRef(null)

  // Handle dropdown display
  const handleMouseEnter = (menu) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(menu)
  }

  // Handle dropdown delayed close
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 250)
  }

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  // Keyboard navigation support
  const handleKeyDown = (e, menu) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveDropdown(activeDropdown === menu ? null : menu)
    } else if (e.key === 'Escape') {
      setActiveDropdown(null)
      setMobileMenuOpen(false)
    }
  }

  // Shop Mega Menu
  const ShopMegaMenu = () => (
    <div className="absolute left-0 w-full bg-[#FFFEF6] border-t-2 border-[#459361] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column: Categories */}
          <div>
            <h4
              className="font-bold text-[#111111] mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Categories
            </h4>
            <nav>
              <ul className="space-y-2" role="menu">
                {[
                  { name: 'Plants', link: '/shop/plants' },
                  { name: 'Tools', link: '/shop/tools' },
                  { name: 'Planters', link: '/shop/planters' },
                  { name: 'Soil', link: '/shop/soil' },
                  { name: 'Others', link: '/shop/others' },
                ].map((item) => (
                  <li key={item.name} role="menuitem">
                    <Link
                      to={item.link}
                      className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Second column: Shopping intents */}
          <div>
            <h4
              className="font-bold text-[#111111] mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Shop By
            </h4>
            <nav>
              <ul className="space-y-2" role="menu">
                {[
                  { name: 'Best Sellers', link: '/shop?filter=best-sellers' },
                  { name: 'Seasonal', link: '/shop?filter=seasonal' },
                  { name: 'Low-maintenance', link: '/shop?filter=low-maintenance' },
                  { name: 'Low-light', link: '/shop?filter=low-light' },
                  { name: 'Pet-safe', link: '/shop?filter=pet-safe' },
                  { name: 'Indoor/Outdoor', link: '/shop?filter=indoor-outdoor' },
                ].map((item) => (
                  <li key={item.name} role="menuitem">
                    <Link
                      to={item.link}
                      className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Third column: Promotion image */}
          <div>
            <div className="bg-[#848484] h-48 rounded-lg flex items-center justify-center text-[#FFFEF6]">
              <span>Promotion Image</span>
            </div>
            <p
              className="mt-4 text-center text-[14.6px] text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              Winter Plant Sale
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  // Services Dropdown
  const ServicesDropdown = () => (
    <div className="absolute left-0 bg-[#FFFEF6] border-2 border-[#459361] rounded-lg shadow-lg z-50 min-w-[280px] py-4">
      <nav>
        <ul className="space-y-2 px-4" role="menu">
          <li role="menuitem">
            <Link
              to="/services/in-store"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              In-Store
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/services/in-home"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              In-Home
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/services/delivery-rentals"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Delivery & Rentals
            </Link>
          </li>
        </ul>
      </nav>
      <div className="px-4 pt-4 border-t border-[#848484]/30">
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            navigate('/services')
            setActiveDropdown(null)
          }}
          className="w-full"
        >
          Book a Service
        </Button>
      </div>
    </div>
  )

  // Plant Care Dropdown
  const PlantCareDropdown = () => (
    <div className="absolute left-0 bg-[#FFFEF6] border-2 border-[#459361] rounded-lg shadow-lg z-50 min-w-[240px] py-4">
      <nav>
        <ul className="space-y-2 px-4" role="menu">
          <li role="menuitem">
            <Link
              to="/plant-care"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Plant Info Hub
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/plant-care/articles"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Articles
            </Link>
          </li>
          <li className="pt-2 border-t border-[#848484]/30 mt-2">
            <Link
              to="/plant-care?filter=pet-safe"
              className="text-[14.6px] font-bold text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Pet-safe List
            </Link>
          </li>
          <li>
            <Link
              to="/plant-care/articles/repotting-guide"
              className="text-[14.6px] font-bold text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Repotting Guide
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )

  // About Dropdown
  const AboutDropdown = () => (
    <div className="absolute left-0 bg-[#FFFEF6] border-2 border-[#459361] rounded-lg shadow-lg z-50 min-w-[220px] py-4">
      <nav>
        <ul className="space-y-2 px-4" role="menu">
          <li role="menuitem">
            <Link
              to="/about#story"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Our Story
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/about#mission"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Mission/Vision/USP
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/about#reviews"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Reviews & Press
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/about#nominations"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Nominations
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )

  // Contact Dropdown
  const ContactDropdown = () => (
    <div className="absolute left-0 bg-[#FFFEF6] border-2 border-[#459361] rounded-lg shadow-lg z-50 min-w-[220px] py-4">
      <nav>
        <ul className="space-y-2 px-4" role="menu">
          <li role="menuitem">
            <Link
              to="/contact#store-info"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Store Info & Map
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/faqs"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              FAQs
            </Link>
          </li>
          <li role="menuitem">
            <Link
              to="/contact#form"
              className="text-[14.6px] text-[rgba(69,147,97,0.75)] hover:text-[#459361] hover:underline block py-2"
              style={{ fontFamily: 'Archivo, sans-serif' }}
              onClick={() => setActiveDropdown(null)}
            >
              Contact Form
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )

  return (
    <>
      {/* Desktop Navigation */}
      {!isMobile && (
        <nav
          className="hidden md:flex items-center gap-6"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link
            to="/shop"
            className="relative text-[14.6px] font-bold text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors"
            style={{ fontFamily: 'Archivo, sans-serif' }}
            onMouseEnter={() => handleMouseEnter('shop')}
            onMouseLeave={handleMouseLeave}
            onKeyDown={(e) => handleKeyDown(e, 'shop')}
            data-nav-link="shop"
          >
            Shop
            <ChevronDown className="inline-block ml-1 w-4 h-4" />
            <AnimatePresence>
              {activeDropdown === 'shop' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => handleMouseEnter('shop')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ShopMegaMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          <Link
            to="/services"
            className="relative text-[14.6px] font-bold text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors"
            style={{ fontFamily: 'Archivo, sans-serif' }}
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
            onKeyDown={(e) => handleKeyDown(e, 'services')}
            data-nav-link="services"
          >
            Services
            <ChevronDown className="inline-block ml-1 w-4 h-4" />
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ServicesDropdown />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          <Link
            to="/plant-care"
            className="relative text-[14.6px] font-bold text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors"
            style={{ fontFamily: 'Archivo, sans-serif' }}
            onMouseEnter={() => handleMouseEnter('plant-care')}
            onMouseLeave={handleMouseLeave}
            onKeyDown={(e) => handleKeyDown(e, 'plant-care')}
            data-nav-link="plant-care"
          >
            Plant Care
            <ChevronDown className="inline-block ml-1 w-4 h-4" />
            <AnimatePresence>
              {activeDropdown === 'plant-care' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => handleMouseEnter('plant-care')}
                  onMouseLeave={handleMouseLeave}
                >
                  <PlantCareDropdown />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          <Link
            to="/about"
            className="relative text-[14.6px] font-bold text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors"
            style={{ fontFamily: 'Archivo, sans-serif' }}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
            onKeyDown={(e) => handleKeyDown(e, 'about')}
            data-nav-link="about"
          >
            About Us
            <ChevronDown className="inline-block ml-1 w-4 h-4" />
            <AnimatePresence>
              {activeDropdown === 'about' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <AboutDropdown />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          <Link
            to="/contact"
            className="relative text-[14.6px] font-bold text-[rgba(69,147,97,0.75)] hover:text-[#459361] transition-colors"
            style={{ fontFamily: 'Archivo, sans-serif' }}
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
            onKeyDown={(e) => handleKeyDown(e, 'contact')}
            data-nav-link="contact"
          >
            Contact
            <ChevronDown className="inline-block ml-1 w-4 h-4" />
            <AnimatePresence>
              {activeDropdown === 'contact' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => handleMouseEnter('contact')}
                  onMouseLeave={handleMouseLeave}
                >
                  <ContactDropdown />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </nav>
      )}

      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#459361]"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-y-0 left-0 w-80 bg-[#FFFEF6] border-r-2 border-[#459361] shadow-xl z-50 overflow-y-auto"
              >
                <div className="p-5">
                  <div className="flex justify-between items-center mb-6">
                    <Link
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-bold text-[#459361]"
                      style={{ fontFamily: 'Petrona, serif' }}
                    >
                      Cast & Grey
                    </Link>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 text-[#459361]"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <nav className="space-y-2">
                    {/* Mobile menu items - Accordion structure */}
                    <MobileMenuItem
                      title="Shop"
                      items={[
                        { name: 'All Products', link: '/shop' },
                        { name: 'Plants', link: '/shop/plants' },
                        { name: 'Tools', link: '/shop/tools' },
                        { name: 'Planters', link: '/shop/planters' },
                        { name: 'Soil', link: '/shop/soil' },
                      ]}
                      onClose={() => setMobileMenuOpen(false)}
                    />
                    <MobileMenuItem
                      title="Services"
                      items={[
                        { name: 'In-Store', link: '/services/in-store' },
                        { name: 'In-Home', link: '/services/in-home' },
                        { name: 'Delivery & Rentals', link: '/services/delivery-rentals' },
                      ]}
                      cta="Book a Service"
                      ctaLink="/services"
                      onClose={() => setMobileMenuOpen(false)}
                    />
                    <MobileMenuItem
                      title="Plant Care"
                      items={[
                        { name: 'Plant Info Hub', link: '/plant-care' },
                        { name: 'Articles', link: '/plant-care/articles' },
                        { name: 'Pet-safe List', link: '/plant-care?filter=pet-safe' },
                        { name: 'Repotting Guide', link: '/plant-care/articles/repotting-guide' },
                      ]}
                      onClose={() => setMobileMenuOpen(false)}
                    />
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-[14.6px] font-bold text-[#459361] border-b border-[#848484]/20"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-[14.6px] font-bold text-[#459361] border-b border-[#848484]/20"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}

// Mobile menu item component (Accordion)
const MobileMenuItem = ({ title, items, cta, ctaLink, onClose }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border-b border-[#848484]/20">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center py-3 text-[14.6px] font-bold text-[#459361]"
        style={{ fontFamily: 'Archivo, sans-serif' }}
        aria-expanded={expanded}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <nav className="pl-4 pb-3">
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      onClick={onClose}
                      className="block text-[13px] text-[rgba(69,147,97,0.75)] hover:text-[#459361]"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {cta && (
                <div className="mt-3">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      if (ctaLink) {
                        window.location.href = ctaLink
                      }
                      onClose()
                    }}
                    className="w-full"
                  >
                    {cta}
                  </Button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

