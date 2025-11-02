import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, User, ShoppingCart } from 'lucide-react'
import { Navigation } from './Navigation'
import { useBreakpoint } from '../../design-system'

/**
 * Header Component - Global navigation header
 * Contains Logo, main navigation, utility icons (search, account, cart)
 * Sticky header support
 */
export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { isMobile } = useBreakpoint()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-[#FFFEF6] border-b-2 border-[#459361] shadow-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            aria-label="Cast & Grey Botanical - Home"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#459361] rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl">🌿</span>
              </div>
              <div className="hidden md:block">
                <h1
                  className="text-xl md:text-2xl font-bold text-[#459361]"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  Cast & Grey
                </h1>
              </div>
            </div>
          </Link>

          {/* Main Navigation */}
          <Navigation />

          {/* Utility Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search */}
            <div className="relative">
              {isMobile ? (
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-[#459361] hover:opacity-80 transition-opacity"
                  aria-label="Search"
                  aria-expanded={searchOpen}
                >
                  <Search size={20} />
                </button>
              ) : (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="px-3 py-1.5 border border-[#848484] rounded-lg text-[14.6px] text-[#111111] focus:outline-none focus:border-[#459361] w-40"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  />
                  <button
                    type="submit"
                    className="ml-2 p-2 text-[#459361] hover:opacity-80 transition-opacity"
                    aria-label="Submit search"
                  >
                    <Search size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Account */}
            <Link
              to="/account"
              className="p-2 text-[#459361] hover:opacity-80 transition-opacity"
              aria-label="Account"
              data-nav-link="account"
            >
              <User size={20} />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-[#459361] hover:opacity-80 transition-opacity"
              aria-label="Shopping cart"
              data-nav-link="cart"
            >
              <ShoppingCart size={20} />
              {/* Cart count badge (optional) */}
              {/* <span className="absolute top-0 right-0 w-4 h-4 bg-[#E85C41] text-white text-xs rounded-full flex items-center justify-center">
                0
              </span> */}
            </Link>
          </div>
        </div>

        {/* Mobile search box */}
        {isMobile && searchOpen && (
          <div className="pb-4 border-t border-[#848484]/20 mt-4 pt-4">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, services, articles..."
                className="flex-1 px-3 py-2 border border-[#848484] rounded-lg text-[14.6px] text-[#111111] focus:outline-none focus:border-[#459361]"
                style={{ fontFamily: 'Archivo, sans-serif' }}
                autoFocus
              />
              <button
                type="submit"
                className="p-2 text-[#459361]"
                aria-label="Submit search"
              >
                <Search size={20} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false)
                  setSearchQuery('')
                }}
                className="p-2 text-[#848484]"
                aria-label="Close search"
              >
                ✕
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

