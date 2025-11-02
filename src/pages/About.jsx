import { Hero } from '../components/hero/Hero'
import { Card, CardContent, CardTitle, CardDescription } from '../design-system'

/**
 * About Us Page - Brand story, mission, vision, USP, reviews & press, nominations
 */
export const About = () => {
  return (
    <div className="min-h-screen bg-[#FFFEF6]">
      {/* Hero with parallax image */}
      <Hero
        title="About Cast & Grey"
        subtitle="Your trusted plant care partner"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        {/* Our Story */}
        <section id="story" className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#459361] mb-6"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Our Story
          </h2>
          <p
            className="text-[14.6px] leading-relaxed text-[rgba(69,147,97,0.75)] mb-4"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Cast & Grey Botanical was founded with a simple mission: to bring the joy
            of plants into every home. What started as a small neighborhood plant shop
            has grown into a beloved community hub for plant lovers.
          </p>
          <p
            className="text-[14.6px] leading-relaxed text-[rgba(69,147,97,0.75)]"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            We believe that plants have the power to transform spaces and improve lives.
            That's why we're committed to providing not just beautiful plants, but
            comprehensive care guidance and expert services.
          </p>
        </section>

        {/* Mission, Vision, USP */}
        <section id="mission" className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#459361] mb-8"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Mission, Vision & Unique Selling Proposition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="info" padding="lg">
              <CardContent>
                <CardTitle variant="info">Mission</CardTitle>
                <CardDescription>
                  To make plant care accessible and enjoyable for everyone, fostering
                  connections between people and nature.
                </CardDescription>
              </CardContent>
            </Card>
            <Card variant="info" padding="lg">
              <CardContent>
                <CardTitle variant="info">Vision</CardTitle>
                <CardDescription>
                  To become the premier destination for plant enthusiasts, known for
                  exceptional service and plant expertise.
                </CardDescription>
              </CardContent>
            </Card>
            <Card variant="emphasized" padding="lg">
              <CardContent>
                <CardTitle variant="product">Our USP</CardTitle>
                <CardDescription variant="product">
                  Expert in-store and in-home services combined with comprehensive
                  plant care education, ensuring your plants thrive.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reviews & Press */}
        <section id="reviews" className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#459361] mb-8"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Reviews & Press
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="info" padding="lg">
              <CardContent>
                <CardTitle variant="info">Featured Review</CardTitle>
                <CardDescription>
                  "Cast & Grey Botanical is more than just a plant shop - it's a
                  community resource. The team's expertise and passion for plants is
                  unmatched." - Local Magazine
                </CardDescription>
              </CardContent>
            </Card>
            <Card variant="info" padding="lg">
              <CardContent>
                <CardTitle variant="info">Press Coverage</CardTitle>
                <CardDescription>
                  Featured in Botanical Weekly, Home & Garden Magazine, and recognized
                  as "Best Plant Shop" by City Living Awards 2024.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nominations */}
        <section id="nominations">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#459361] mb-8"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            Awards & Nominations
          </h2>
          <ul
            className="space-y-2 text-[14.6px] text-[rgba(69,147,97,0.75)]"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            <li>• Best Plant Shop - City Living Awards 2024</li>
            <li>• Outstanding Customer Service - Local Business Association 2023</li>
            <li>• Community Impact Award - Botanical Society 2023</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

