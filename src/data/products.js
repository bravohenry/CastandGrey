// Mock Product Data

export const products = [
  {
    id: '1',
    handle: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    price: 45.00,
    category: 'plants',
    badges: ['Pet-Safe', 'Low-light'],
    careTraits: {
      light: 'Bright indirect',
      water: 'Weekly',
      soil: 'Well-draining',
      petSafe: true,
    },
    size: {
      pot: '6 inch',
      height: '12-18 inches',
    },
    description: 'The classic Swiss cheese plant, easy to care for and perfect for beginners.',
    images: [],
  },
  {
    id: '2',
    handle: 'snake-plant',
    name: 'Snake Plant',
    price: 28.00,
    category: 'plants',
    badges: ['Pet-Safe', 'Low-maintenance', 'Low-light'],
    careTraits: {
      light: 'Low to bright',
      water: 'Bi-weekly',
      soil: 'Well-draining',
      petSafe: true,
    },
    size: {
      pot: '5 inch',
      height: '10-15 inches',
    },
    description: 'One of the toughest houseplants, requiring almost no care.',
    images: [],
  },
  {
    id: '3',
    handle: 'pothos-golden',
    name: 'Golden Pothos',
    price: 22.00,
    category: 'plants',
    badges: ['Pet-Safe', 'Low-maintenance'],
    careTraits: {
      light: 'Medium to bright',
      water: 'Weekly',
      soil: 'Well-draining',
      petSafe: true,
    },
    size: {
      pot: '4 inch',
      height: '8-12 inches',
    },
    description: 'Perfect for hanging baskets, grows quickly and is easy to propagate.',
    images: [],
  },
  {
    id: '4',
    handle: 'ceramic-planter-white',
    name: 'White Ceramic Planter',
    price: 35.00,
    category: 'planters',
    badges: [],
    description: 'Modern minimalist white ceramic planter with drainage holes.',
    images: [],
  },
  {
    id: '5',
    handle: 'watering-can-copper',
    name: 'Copper Watering Can',
    price: 42.00,
    category: 'tools',
    badges: ['Best Seller'],
    description: 'Elegant copper watering can perfect for indoor plant care.',
    images: [],
  },
  {
    id: '6',
    handle: 'potting-mix-premium',
    name: 'Premium Potting Mix',
    price: 18.00,
    category: 'soil',
    badges: ['Best Seller'],
    description: 'Premium nutrient-rich soil suitable for most indoor plants.',
    images: [],
  },
]

export const categories = [
  { id: 'plants', name: 'Plants', slug: 'plants' },
  { id: 'tools', name: 'Tools', slug: 'tools' },
  { id: 'planters', name: 'Planters', slug: 'planters' },
  { id: 'soil', name: 'Soil', slug: 'soil' },
  { id: 'others', name: 'Others', slug: 'others' },
]

export const filters = {
  bestSellers: true,
  seasonal: false,
  lowMaintenance: false,
  indoorOutdoor: 'indoor',
  decoration: false,
  price: null,
  size: null,
}
