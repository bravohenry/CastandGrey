import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { PlantCare } from './pages/PlantCare'
import { Article } from './pages/Article'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FAQs } from './pages/FAQs'
import { Search } from './pages/Search'

/**
 * App Component - Main routing configuration
 * Clean and minimal routing setup
 */
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/products/:handle" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:type/:id" element={<ServiceDetail />} />
          <Route path="/plant-care" element={<PlantCare />} />
          <Route path="/plant-care/:category/:article" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
