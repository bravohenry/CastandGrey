import { PageHeader } from '../components/common/Hero'
import { ReviewGrid } from '../components/common/ReviewCarousel'
import { Award, Heart, Users, Leaf } from 'lucide-react'
import storePhoto from '../assets/Cast & Grey Botanical Bkg_files/storepicture.jpg'

/**
 * About 页面 - 关于我们
 * 展示品牌故事、使命、愿景和社会证明
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
    <div>
      <PageHeader
        title="About Cast & Grey"
        description="Bringing nature into urban life with premium plants and expert care"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
      />

      {/* Story Section with Parallax Effect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-stone-100 rounded-lg overflow-hidden">
              <img
                src={storePhoto}
                alt="Cast & Grey Store"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Cast & Grey began in 2020 with a simple mission: to make high-quality plants and
                  expert botanical knowledge accessible to everyone in our urban community.
                </p>
                <p>
                  What started as a small corner shop has grown into a beloved destination for plant
                  enthusiasts, beginners, and everyone in between. We've helped thousands of people
                  bring the joy and benefits of plants into their homes and offices.
                </p>
                <p>
                  Today, we're proud to offer not just plants, but a complete plant care experience –
                  from our carefully curated selection to our expert services and educational resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Mission</h2>
              <p className="text-stone-700 leading-relaxed">
                To inspire and enable people to live greener, healthier lives by providing
                exceptional plants, expert guidance, and sustainable practices.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Vision</h2>
              <p className="text-stone-700 leading-relaxed">
                To become the most trusted botanical partner for urban dwellers, creating a
                world where everyone has access to the beauty and benefits of plants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / USP */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icon size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-stone-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Awards & Nominations */}
      <section id="nominations" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            Awards & Recognition
          </h2>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-stone-200 flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award size={28} className="text-yellow-600" />
                </div>
                <div>
                  <div className="text-sm text-stone-500 mb-1">{award.year}</div>
                  <h3 className="font-semibold text-stone-900 mb-1">{award.title}</h3>
                  <p className="text-stone-600">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            In the Press
          </h2>

          <div className="space-y-6">
            {pressFeatures.map((press, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-6 py-2">
                <p className="text-sm text-green-600 font-semibold mb-1">{press.outlet}</p>
                <h3 className="font-semibold text-stone-900 mb-1">{press.headline}</h3>
                <p className="text-sm text-stone-500">{press.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            What Our Customers Say
          </h2>

          <ReviewGrid reviews={reviews} columns={3} />
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-stone-300 mb-8">
            Experience the Cast & Grey difference in person. Our knowledgeable team is ready to help
            you find the perfect plants for your space.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  )
}

