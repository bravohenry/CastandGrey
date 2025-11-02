import { motion } from 'framer-motion'
import { ReviewGrid } from '../components/common/ReviewCarousel'
import { Award, Heart, Users, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../design-system'
import storePhoto from '../assets/Cast & Grey Botanical Bkg_files/storepicture.jpg'

/**
 * About 页面 - 关于我们
 * 日本美学：留白、克制、精致
 * 完全使用设计系统
 */
export function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainable Sourcing',
      description: 'We partner with local growers and ethical suppliers to ensure our plants are sustainably grown.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide ongoing support for every plant you purchase.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We host workshops and events to build a thriving community of plant enthusiasts.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Every plant is inspected and comes with our 30-day health guarantee.'
    }
  ]

  const awards = [
    {
      year: '2025',
      title: 'Best Local Plant Shop',
      organization: 'City Magazine Readers\' Choice'
    },
    {
      year: '2024',
      title: 'Green Business Certification',
      organization: 'Sustainable Business Alliance'
    },
    {
      year: '2024',
      title: 'Top-Rated Service Provider',
      organization: 'Local Business Awards'
    }
  ]

  const reviews = [
    {
      rating: 5,
      comment: 'This is hands down the best plant shop in the city. The staff is incredibly knowledgeable and the plant selection is outstanding.',
      author: 'David Thompson',
      date: 'October 2025'
    },
    {
      rating: 5,
      comment: 'I\'ve been a customer for over a year and every experience has been wonderful. They truly care about plants and their customers.',
      author: 'Lisa Chen',
      date: 'September 2025'
    },
    {
      rating: 5,
      comment: 'The workshops they host are amazing! I\'ve learned so much about plant care and met great people in the community.',
      author: 'Marcus Williams',
      date: 'September 2025'
    }
  ]

  const pressFeatures = [
    {
      outlet: 'Green Living Magazine',
      headline: 'Cast & Grey: Bringing Botanical Beauty to Urban Spaces',
      date: 'October 2025'
    },
    {
      outlet: 'Local Business Journal',
      headline: 'How This Plant Shop is Growing Community Connections',
      date: 'September 2025'
    },
    {
      outlet: 'Home & Garden Daily',
      headline: 'The New Standard in Plant Retail',
      date: 'August 2025'
    }
  ]

  return (
    <div className="bg-[#FFFEF6]">
      {/* Page Header - 精致排版 */}
      <section className="bg-[#FFFEF6] border-b-2 border-[#459361] py-20">
        <div className="px-[50px] lg:px-[246px]">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[13px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold" style={{ fontFamily: 'Archivo, sans-serif' }}>
              <li>
                <Link to="/" className="hover:text-[#459361] transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-[#111111]">About</li>
            </ol>
          </nav>
          
          <h1 
            className="text-[48px] lg:text-[64px] leading-[1.1] font-bold tracking-[0.72px] text-[#111111] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            About Cast & Grey
          </h1>
          
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] max-w-2xl"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Bringing nature into urban life with premium plants and expert care
          </p>
        </div>
      </section>

      {/* Story Section - 克制的布局 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="aspect-[4/3] rounded-[12px] overflow-hidden"
              style={{ boxShadow: '0px 8px 0px rgba(132, 132, 132, 0.9)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={storePhoto}
                alt="Cast & Grey Store"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 
                className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-8"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Our Story
              </h2>
              <div className="space-y-6">
                <p 
                  className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  Cast & Grey began in 2020 with a simple mission: to make high-quality plants and
                  expert botanical knowledge accessible to everyone in our urban community.
                </p>
                <p 
                  className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  What started as a small corner shop has grown into a beloved destination for plant
                  enthusiasts, beginners, and everyone in between. We've helped thousands of people
                  bring the joy and benefits of plants into their homes and offices.
                </p>
                <p 
                  className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  Today, we're proud to offer not just plants, but a complete plant care experience –
                  from our carefully curated selection to our expert services and educational resources.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - 精致卡片 */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-[#FFFEF6] border-2 border-[#FFFEF6] rounded-[12px] p-12"
              style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
            >
              <h2 
                className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#111111] mb-6"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Our Mission
              </h2>
              <p 
                className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                To inspire and enable people to live greener, healthier lives by providing
                exceptional plants, expert guidance, and sustainable practices.
              </p>
            </div>

            <div 
              className="bg-[#FFFEF6] border-2 border-[#FFFEF6] rounded-[12px] p-12"
              style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
            >
              <h2 
                className="text-[28.8px] leading-[36px] font-bold tracking-[0.72px] text-[#111111] mb-6"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Our Vision
              </h2>
              <p 
                className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                To become the most trusted botanical partner for urban dwellers, creating a
                world where everyone has access to the beauty and benefits of plants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - 克制的排版 */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[rgba(69,147,97,0.1)] rounded-full mb-6">
                    <Icon size={28} className="text-[#459361]" strokeWidth={1.5} />
                  </div>
                  <h3 
                    className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-4"
                    style={{ fontFamily: 'Petrona, serif' }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Awards - 精致的奖项卡片 */}
      <section id="nominations" className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-5xl mx-auto">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Awards & Recognition
          </h2>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-[#FFFEF6] border-2 border-[#FFFEF6] rounded-[12px] p-8 flex items-center gap-8"
                style={{ boxShadow: '0px 6px 0px rgba(132, 132, 132, 0.9)' }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[rgba(255,193,7,0.15)] rounded-full flex items-center justify-center">
                  <Award size={28} className="text-[#ff9800]" strokeWidth={1.5} />
                </div>
                <div>
                  <div 
                    className="text-[13px] leading-[18px] tracking-[0.7px] text-[rgba(69,147,97,0.75)] uppercase font-bold mb-2"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {award.year}
                  </div>
                  <h3 
                    className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-1"
                    style={{ fontFamily: 'Petrona, serif' }}
                  >
                    {award.title}
                  </h3>
                  <p 
                    className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {award.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Features - 克制的布局 */}
      <section id="reviews" className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] max-w-5xl mx-auto">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            In the Press
          </h2>

          <div className="space-y-6">
            {pressFeatures.map((press, index) => (
              <div key={index} className="border-l-4 border-[#459361] pl-8 py-4">
                <p 
                  className="text-[13px] leading-[18px] tracking-[0.7px] text-[#459361] uppercase font-bold mb-2"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  {press.outlet}
                </p>
                <h3 
                  className="text-[15.6px] leading-[24.5px] font-bold tracking-[0.72px] text-[#111111] mb-2"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  {press.headline}
                </h3>
                <p 
                  className="text-[14.6px] leading-[24px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  {press.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews - 精致排版 */}
      <section className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px]">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#FFFEF6] mb-20 text-center"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            What Our Customers Say
          </h2>

          <ReviewGrid reviews={reviews} columns={3} />
        </div>
      </section>

      {/* Visit CTA - 精致的CTA */}
      <section className="py-32 bg-[#FFFEF6]">
        <div className="px-[50px] lg:px-[246px] text-center max-w-4xl mx-auto">
          <h2 
            className="text-[40px] lg:text-[48px] leading-[1.2] font-bold tracking-[0.72px] text-[#111111] mb-8"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Visit Us Today
          </h2>
          <p 
            className="text-[16px] leading-[32px] tracking-[0.6px] text-[rgba(69,147,97,0.75)] mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Experience the Cast & Grey difference in person. Our knowledgeable team is ready to help
            you find the perfect plants for your space.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              GET DIRECTIONS
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
