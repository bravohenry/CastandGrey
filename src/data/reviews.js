// Mock Review Data

export const reviews = [
  {
    id: '1',
    productId: '1',
    serviceId: null,
    author: 'Sarah M.',
    rating: 5,
    text: 'This Monstera is very healthy and well packaged. The customer service was very professional and gave me lots of care advice!',
    date: '2024-01-15',
  },
  {
    id: '2',
    productId: '2',
    serviceId: null,
    author: 'Mike T.',
    rating: 5,
    text: 'Perfect! This is the best snake plant I\'ve ever bought. It\'s growing beautifully in my office.',
    date: '2024-01-20',
  },
  {
    id: '3',
    serviceId: '1',
    productId: null,
    author: 'Emma L.',
    rating: 5,
    text: 'The in-store repotting service was amazing! The staff were very professional and my plant looks much healthier now.',
    date: '2024-02-01',
  },
  {
    id: '4',
    serviceId: '4',
    productId: null,
    author: 'David K.',
    rating: 5,
    text: 'The home consultation service exceeded expectations. They helped me design a perfect plant layout.',
    date: '2024-02-10',
  },
  {
    id: '5',
    productId: null,
    serviceId: null,
    author: 'Lisa P.',
    rating: 5,
    text: 'The entire shopping experience was excellent! From website navigation to product delivery, everything was perfect.',
    date: '2024-02-15',
  },
  {
    id: '6',
    productId: '3',
    serviceId: null,
    author: 'John D.',
    rating: 4,
    text: 'The Golden Pothos is growing well and the packaging was good. The only minor issue was delivery time was slightly longer than expected.',
    date: '2024-02-20',
  },
]

// Get reviews by product ID
export const getReviewsByProductId = (productId) => {
  return reviews.filter(review => review.productId === productId)
}

// Get reviews by service ID
export const getReviewsByServiceId = (serviceId) => {
  return reviews.filter(review => review.serviceId === serviceId)
}

// Get general reviews (for homepage, etc.)
export const getGeneralReviews = (limit = 3) => {
  return reviews.filter(review => !review.productId && !review.serviceId).slice(0, limit)
}
