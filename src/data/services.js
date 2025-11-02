// Mock Service Data

export const services = [
  {
    id: '1',
    type: 'in-store',
    title: 'In-Store Repotting',
    description: 'Professional repotting service for your plants at our store.',
    scope: 'Includes selecting the right pot and soil, repotting, and care advice.',
    price: 25.00,
    duration: '30-45 minutes',
    faqs: [
      {
        question: 'Do I need to book in advance?',
        answer: 'Yes, we recommend booking ahead to ensure time slot availability.',
      },
      {
        question: 'Do I need to bring my own pot?',
        answer: 'No, we provide a variety of pot sizes to choose from.',
      },
    ],
  },
  {
    id: '2',
    type: 'in-store',
    title: 'Pot Drilling',
    description: 'Add drainage holes to your pots to prevent root rot.',
    scope: 'Using professional tools to drill appropriate drainage holes in the bottom of pots.',
    price: 15.00,
    duration: '15-20 minutes',
    faqs: [
      {
        question: 'Can all materials be drilled?',
        answer: 'Ceramic, terracotta, and plastic materials can all be drilled. Glass requires special handling.',
      },
    ],
  },
  {
    id: '3',
    type: 'in-store',
    title: 'Quick Consultation',
    description: '15-minute quick consultation to answer your plant care questions.',
    scope: 'Diagnose plant issues and provide care advice and solutions.',
    price: 10.00,
    duration: '15 minutes',
    faqs: [
      {
        question: 'Can I purchase recommended products after consultation?',
        answer: 'Absolutely, we will recommend suitable products based on your plant needs.',
      },
    ],
  },
  {
    id: '4',
    type: 'in-home',
    title: 'Home Consultation',
    description: 'Comprehensive plant environment assessment at home or office.',
    scope: 'Evaluate light, humidity, space layout, and create personalized plant solutions.',
    price: 150.00,
    duration: '90 minutes',
    faqs: [
      {
        question: 'What areas do you serve?',
        answer: 'We cover the city and surrounding areas within 30 km radius.',
      },
    ],
  },
  {
    id: '5',
    type: 'in-home',
    title: 'Installation Service',
    description: 'Professional team installation and plant arrangement.',
    scope: 'Plant purchase, moving, installation and arrangement for optimal visual effect.',
    price: 200.00,
    duration: '2-3 hours',
    faqs: [
      {
        question: 'Does the price include plant purchase?',
        answer: 'The price includes installation service only. Plants need to be purchased separately.',
      },
    ],
  },
  {
    id: '6',
    type: 'delivery-rentals',
    title: 'Local Delivery',
    description: 'Local delivery service, safely delivered to your door.',
    scope: 'Professional packaging and transport to ensure plants are not damaged during shipping.',
    price: 20.00,
    duration: 'Same day or next day',
    faqs: [
      {
        question: 'What are the delivery times?',
        answer: 'We deliver on weekdays and weekends, typically within 24-48 hours of order placement.',
      },
    ],
  },
  {
    id: '7',
    type: 'delivery-rentals',
    title: 'Event Rentals',
    description: 'Short-term plant rental service for events and occasions.',
    scope: 'Event decoration plant rentals, including transport, setup, and pickup.',
    price: 300.00,
    duration: '3-7 days',
    faqs: [
      {
        question: 'What is the minimum rental period?',
        answer: 'Minimum 3 days, suitable for various events and occasions.',
      },
    ],
  },
]

export const serviceTypes = [
  { id: 'in-store', name: 'In-Store', slug: 'in-store' },
  { id: 'in-home', name: 'In-Home', slug: 'in-home' },
  { id: 'delivery-rentals', name: 'Delivery & Rentals', slug: 'delivery-rentals' },
]
