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
      title: 'Approachable Expertise',
      description: 'Friendly, reliable mentorship rooted in Emily\'s hands-on plant knowledge for Savannah\'s unique climate.'
    },
    {
      icon: Heart,
      title: 'Quiet Radiance',
      description: 'Approachable aesthetics and everyday beauty curated for real homes, shops, and gifting moments.'
    },
    {
      icon: Users,
      title: 'Community Roots',
      description: 'Woman-owned and Baldwin Park based, we exist to attract and serve our Savannah neighbors.'
    },
    {
      icon: Award,
      title: 'Empowered Plant Owners',
      description: 'Practical education, detailed resources, and services that transform plant anxiety into confident care.'
    }
  ]

  const awards = [
    {
      year: 'Since 2019',
      title: 'Only woman-owned houseplant boutique in Savannah',
      organization: 'Nestled between The Stacks Bookstore and Goodfortune Market on Waters Ave.'
    },
    {
      year: 'Mondays',
      title: 'Hand-delivered plant gifting & local delivery',
      organization: 'Serving Savannah, Pooler, Wilmington Island, Tybee Island, and nearby communities.'
    },
    {
      year: 'Education',
      title: 'Savannah-specific plant care mentorship',
      organization: 'In-home consultations, detailed write-ups, and an extensive plant care library.'
    }
  ]

  const reviews = [
    {
      rating: 5,
      comment: 'Emily is truly Savannah\'s plant fairy-godmother. She listens, teaches, and leaves me with a care plan that feels doable.',
      author: 'Chelsea W.',
      date: 'March 2024'
    },
    {
      rating: 5,
      comment: 'The shop radiates warmth. Whether I need a pet-safe plant or a gift, I always leave feeling supported and inspired.',
      author: 'Maggie W.',
      date: 'February 2024'
    },
    {
      rating: 5,
      comment: 'Their in-home consultation credited to potting fees was a game changer. My office plants are thriving—and so am I.',
      author: 'Brian J.',
      date: 'January 2024'
    }
  ]

  const pressFeatures = [
    {
      outlet: 'Customer Love',
      headline: '"Cast & Grey is the jewel of the neighborhood—thoughtful, calming, and always ready to help."',
      date: 'Baldwin Park Resident'
    },
    {
      outlet: 'Consultation Client',
      headline: '"Emily removed all the guesswork. Her write-up made caring for my plants feel like second nature."',
      date: 'In-Home Visit'
    },
    {
      outlet: 'Workshop Guest',
      headline: '"Approachable aesthetics, practical wisdom, and a community that cheers you on."',
      date: 'Plant Care Class'
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
            Savannah&apos;s nurturing houseplant boutique, turning plant anxiety into the joy of confident care
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
                  Cast & Grey Botanical opened in 2019 as Emily Hinners&apos; answer to Savannah plant lovers who wanted more than a transactional shop. She envisioned a place where approachable aesthetics, practical education, and joyful community support all live under one canopy.
                </p>
                <p 
                  className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  Our boutique sits on Waters Ave., between The Stacks Bookstore and Goodfortune Market, with rotating vignettes of houseplants, planters, locally made gifts, and tools. Every display is curated for real Savannah homes, with pet-safe picks, low-light heroes, and statement foliage ready for gifting or in-home installs.
                </p>
                <p 
                  className="text-[14.6px] leading-[28.8px] tracking-[0.6px] text-[rgba(69,147,97,0.75)]"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  Emily leads plants, operations, and customer care while Nate supports design and storytelling. Together they deliver one-on-one coaching, in-home consultations, Monday local deliveries, plant rentals, and an ever-growing plant care library designed to build confident, skilled plant parents across Savannah.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - 精致卡片 */}
      <section id="mission" className="py-32 bg-[#459361] border-t-2 border-[#FFFEF6]">
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
                Attract and serve the Savannah community through approachable aesthetics and practical education that makes plant care feel welcoming.
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
                Empower people to share the joy of houseplant care by building confident, stable skills—one nurturing interaction at a time.
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
            Neighborhood Highlights
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
            Community Voices
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
            Visit us Tuesday through Saturday, 11am-6pm at 2411 Waters Ave. Our team is ready with personalized guidance, cheerful gifting, and the resources you need to keep every plant thriving.
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
