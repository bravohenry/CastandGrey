import { Header } from './Header'
import { Footer } from './Footer'

/**
 * Layout Component - Wraps pages with Header and Footer
 */
export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFEF6]">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

