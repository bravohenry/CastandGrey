// Mock Plant Care Article Data

export const articles = [
  {
    id: '1',
    handle: 'pet-safe-plants-guide',
    title: 'Pet-Safe Plants: A Complete Guide',
    category: 'pet-safety',
    overview: 'Learn which plants are safe for pets and how to create a safe green space for your furry friends.',
    content: {
      intro: 'Having a pet and a plant-filled home don\'t have to conflict. This guide will help you choose the right plants to keep your pets safe.',
      steps: [
        {
          title: 'Choose Safe Plants',
          description: 'Select non-toxic plant varieties such as spider plants, Boston ferns, and certain palms.',
        },
        {
          title: 'Placement Matters',
          description: 'Place plants where pets can\'t easily reach them, or use hanging planters.',
        },
        {
          title: 'Monitor Behavior',
          description: 'Pay attention to your pet\'s interest in plants and remove or relocate plants if necessary.',
        },
      ],
      commonMistakes: [
        'Assuming all common plants are safe',
        'Ignoring pet behavior that might chew or play',
        'Not cleaning up fallen leaves promptly',
      ],
      toolSuggestions: [
        'Hanging planters',
        'Plant stands',
        'Pet-safe barriers',
      ],
    },
    petSafe: true,
    relatedProducts: ['1', '2', '3'],
  },
  {
    id: '2',
    handle: 'repotting-guide',
    title: 'How to Repot Your Plants: Step-by-Step',
    category: 'care-basics',
    overview: 'Learn how to properly repot your plants to ensure healthy growth.',
    content: {
      intro: 'Repotting is an important step in plant care. Proper repotting promotes plant growth and prevents root overcrowding.',
      steps: [
        {
          title: 'Choose the Right Time',
          description: 'The best time to repot is in spring when plants begin their new growth period.',
        },
        {
          title: 'Select the Right Pot',
          description: 'The new pot should be about 2-4 inches larger than the original pot and must have drainage holes.',
        },
        {
          title: 'Prepare the Soil',
          description: 'Use quality potting mix suitable for your plant type.',
        },
        {
          title: 'The Repotting Process',
          description: 'Gently remove the plant, check the roots, trim any rotten parts, then place in the new pot.',
        },
      ],
      commonMistakes: [
        'Choosing a pot that\'s too large when repotting',
        'Not checking root health',
        'Using the wrong soil type',
      ],
      toolSuggestions: [
        'New pots',
        'Quality potting mix',
        'Pruning tools',
      ],
    },
    petSafe: false,
    relatedProducts: ['4', '6'],
  },
  {
    id: '3',
    handle: 'low-light-plants',
    title: 'Best Low-Light Plants for Your Home',
    category: 'light-requirements',
    overview: 'Choose the perfect plants for low-light areas in your home.',
    content: {
      intro: 'Not every room has abundant natural light. These low-light plants can thrive in weaker lighting conditions.',
      steps: [
        {
          title: 'Understand Low-Light Needs',
          description: 'Low-light plants can typically grow away from windows but still need some indirect light.',
        },
        {
          title: 'Choose Suitable Varieties',
          description: 'Snake plants, ZZ plants, and certain ferns are ideal choices for low-light environments.',
        },
        {
          title: 'Care Considerations',
          description: 'Low-light plants typically need less water as they grow slower in lower light conditions.',
        },
      ],
      commonMistakes: [
        'Complete lack of light',
        'Overwatering',
        'Choosing plants that need bright light',
      ],
      toolSuggestions: [
        'Low-light plants',
        'Humidity meter',
        'Appropriate watering tools',
      ],
    },
    petSafe: false,
    relatedProducts: ['1', '2'],
  },
]

export const articleCategories = [
  { id: 'pet-safety', name: 'Pet Safety', slug: 'pet-safety' },
  { id: 'care-basics', name: 'Care Basics', slug: 'care-basics' },
  { id: 'light-requirements', name: 'Light Requirements', slug: 'light-requirements' },
  { id: 'watering', name: 'Watering', slug: 'watering' },
  { id: 'common-issues', name: 'Common Issues', slug: 'common-issues' },
]
