import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * FAQs Page - Centralized FAQ system
 */
export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 'shipping',
      category: 'Shipping & Delivery',
      questions: [
        {
          q: 'What are your shipping options?',
          a: 'We offer local delivery within 30 km radius. Delivery typically takes 24-48 hours. We also offer in-store pickup.',
        },
        {
          q: 'How much does delivery cost?',
          a: 'Local delivery is $20. Free delivery on orders over $100.',
        },
      ],
    },
    {
      id: 'pickup',
      category: 'Pickup & Store',
      questions: [
        {
          q: 'Can I pick up my order in-store?',
          a: 'Yes, in-store pickup is available. You will receive an email when your order is ready.',
        },
        {
          q: 'What are your store hours?',
          a: 'Monday-Friday: 9 AM - 6 PM, Saturday: 10 AM - 5 PM, Sunday: 11 AM - 4 PM.',
        },
      ],
    },
    {
      id: 'returns',
      category: 'Returns & Exchanges',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 14-day return policy for unopened products. Plants must be returned in healthy condition.',
        },
        {
          q: 'Do you offer plant health guarantees?',
          a: 'Yes, we offer a 30-day health guarantee on all plants. If your plant shows signs of distress within 30 days, contact us.',
        },
      ],
    },
    {
      id: 'plant-care',
      category: 'Plant Care',
      questions: [
        {
          q: 'How do I know what size pot to use?',
          a: 'Generally, choose a pot that is 2-4 inches larger in diameter than the current pot. Our staff can help you choose the right size.',
        },
        {
          q: 'Which plants are pet-safe?',
          a: 'We have a wide selection of pet-safe plants. Look for the "Pet-Safe" badge on products or visit our Plant Care section for a complete list.',
        },
      ],
    },
  ]

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <div className="min-h-screen bg-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#459361] mb-12 text-center"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          {faqs.map((section, categoryIndex) => (
            <div key={section.id}>
              <h2
                className="text-2xl font-bold text-[#459361] mb-4"
                style={{ fontFamily: 'Petrona, serif' }}
              >
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`
                  const isOpen = openIndex === key

                  return (
                    <div
                      key={questionIndex}
                      className="bg-[#FFFEF6] border-2 border-[#459361] rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full flex justify-between items-center p-4 text-left"
                        style={{ fontFamily: 'Archivo, sans-serif' }}
                      >
                        <span className="font-bold text-[#111111] text-[14.6px] pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`text-[#459361] flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          size={20}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0">
                          <p
                            className="text-[14.6px] text-[rgba(69,147,97,0.75)] leading-relaxed"
                            style={{ fontFamily: 'Archivo, sans-serif' }}
                          >
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

