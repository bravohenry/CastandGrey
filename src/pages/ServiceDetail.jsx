import { useParams } from 'react-router-dom'
import { services } from '../data/services'
import { getReviewsByServiceId } from '../data/reviews'
import { ReviewCarousel } from '../components/reviews/ReviewCarousel'
import { Button } from '../design-system'

/**
 * Service Detail Page
 */
export const ServiceDetail = () => {
  const { type, id } = useParams()
  const service = services.find(s => s.id === id && s.type === type)
  const reviews = service ? getReviewsByServiceId(service.id) : []

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FFFEF6] flex items-center justify-center">
        <p className="text-lg text-[#459361]">Service not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#459361] mb-6"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          {service.title}
        </h1>

        <div className="bg-[#FFFEF6] border-2 border-[#459361] rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p
                className="text-sm font-bold text-[#459361] mb-2"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Price
              </p>
              <p
                className="text-2xl font-bold text-[#459361]"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                ${service.price.toFixed(2)}
              </p>
            </div>
            <div>
              <p
                className="text-sm font-bold text-[#459361] mb-2"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                Duration
              </p>
              <p
                className="text-lg text-[rgba(69,147,97,0.75)]"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {service.duration}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <p
              className="text-sm font-bold text-[#459361] mb-2"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Description
            </p>
            <p
              className="text-[14.6px] leading-relaxed text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {service.description}
            </p>
          </div>

          <div className="mb-6">
            <p
              className="text-sm font-bold text-[#459361] mb-2"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              What's Included
            </p>
            <p
              className="text-[14.6px] leading-relaxed text-[rgba(69,147,97,0.75)]"
              style={{ fontFamily: 'Archivo, sans-serif' }}
            >
              {service.scope}
            </p>
          </div>

          <Button variant="primary" size="lg" className="w-full">
            Book Service
          </Button>
        </div>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-8">
            <h2
              className="text-2xl font-bold text-[#459361] mb-4"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-[#FFFEF6] border-2 border-[#459361] rounded-lg p-4">
                  <p
                    className="font-bold text-[#111111] mb-2 text-sm"
                    style={{ fontFamily: 'Petrona, serif' }}
                  >
                    {faq.question}
                  </p>
                  <p
                    className="text-sm text-[rgba(69,147,97,0.75)]"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        {reviews.length > 0 && (
          <section>
            <h2
              className="text-2xl font-bold text-[#459361] mb-6"
              style={{ fontFamily: 'Petrona, serif' }}
            >
              Customer Reviews
            </h2>
            <ReviewCarousel reviews={reviews} />
          </section>
        )}
      </div>
    </div>
  )
}

