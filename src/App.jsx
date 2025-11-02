import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'
import { Services } from './pages/Services'
import { PlantCare } from './pages/PlantCare'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FAQs } from './pages/FAQs'
import { Search } from './pages/Search'

/**
 * App 主组件 - Cast & Grey Botanical
 * 极简路由配置，所有复杂度都委托给各个页面和组件
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          {/* Shop Routes */}
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:category" element={<Shop />} />
          <Route path="products/:handle" element={<ProductDetail />} />
          
          {/* Services Routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceType" element={<Services />} />
          
          {/* Plant Care Routes */}
          <Route path="plant-care" element={<PlantCare />} />
          <Route path="plant-care/:category" element={<PlantCare />} />
          <Route path="plant-care/:category/:article" element={<PlantCare />} />
          
          {/* Info Pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="search" element={<Search />} />
          
          {/* Utility Routes */}
          <Route path="cart" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Cart Page</h1></div>} />
          <Route path="account" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Account Page</h1></div>} />
          <Route path="gift-cards" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Gift Cards Page</h1></div>} />
          
          {/* Policy Routes */}
          <Route path="policies/shipping" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Shipping Policy</h1></div>} />
          <Route path="policies/returns" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Returns Policy</h1></div>} />
          <Route path="policies/privacy" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Privacy Policy</h1></div>} />
          <Route path="policies/terms" element={<div className="container mx-auto px-4 py-16"><h1 className="text-3xl font-bold">Terms of Service</h1></div>} />
          
          {/* 404 */}
          <Route path="*" element={
            <div className="container mx-auto px-4 py-24 text-center">
              <h1 className="text-4xl font-bold text-stone-900 mb-4">404 - Page Not Found</h1>
              <p className="text-stone-600 mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold">
                Return Home
              </a>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
