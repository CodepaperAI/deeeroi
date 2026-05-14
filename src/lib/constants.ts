export const SITE = {
  name: 'Deeroi Constructions',
  tagline: 'Building Your Dreams Into Reality',
  description: 'Full-service construction and renovation company specializing in commercial and residential projects. Trusted by Walmart, Tim Hortons, Five Guys, and more.',
  url: 'https://www.deeroiconstructions.com',
  email: 'deeroi.info@gmail.com',
  phone: '+1 (647) 824-0001',
  address: '16 Regan Road, Brampton, ON, L7A 1C1',
  owner: 'Deepanshu Oberoi',
  since: 2018,
  social: {
    instagram: 'https://www.instagram.com/deeroiconstructions',
    facebook: 'https://www.facebook.com/deeroiconstructions',
  },
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Residential', href: '/residential' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
] as const;

export const BRAND_LOGOS = [
  { name: 'Walmart', src: '/images/brands/walmart.svg' },
  { name: 'Tim Hortons', src: '/images/brands/tim-hortons.svg' },
  { name: 'Five Guys', src: '/images/brands/five-guys.svg' },
  { name: 'Meridian Bank', src: '/images/brands/meridian.svg' },
] as const;

export const SERVICES = {
  commercial: [
    {
      title: 'Restaurant Build-Outs',
      description: 'Complete restaurant construction from empty shell to fully finished, turnkey operation.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Office Renovations',
      description: 'Modern office spaces designed for productivity and brand identity.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Retail Stores',
      description: 'Retail environments built to franchise specifications and brand standards.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Institutional Projects',
      description: 'College facilities, banks, and institutional builds to code and on schedule.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85',
    },
  ],
  residential: [
    {
      title: 'Custom Home Builds',
      description: 'From foundation to final finish — your dream home built to perfection.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Basement Construction',
      description: 'Complete basement builds — framing, electrical, plumbing, and finishing.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Garden Suites',
      description: 'Standalone garden suite builds for rental income or extended family.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Kitchen & Bath Renovations',
      description: 'Modern kitchen and bathroom upgrades that transform your living space.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85',
    },
  ],
} as const;

export const PORTFOLIO_PROJECTS = [
  {
    slug: 'the-echo-project',
    title: 'The Echo Project',
    type: 'commercial' as const,
    category: 'Restaurant Build-Out',
    description: 'Complete restaurant construction from empty shell to fully operational dining space.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    slug: 'the-brightline-project',
    title: 'The Brightline Project',
    type: 'commercial' as const,
    category: 'Office Renovation',
    description: 'Modern office transformation for a financial services firm.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    slug: 'the-atlas-project',
    title: 'The Atlas Project',
    type: 'residential' as const,
    category: 'Custom Home Build',
    description: 'A stunning custom home built from foundation to final finish.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    slug: 'washroom-upgrade',
    title: 'Washroom Upgrade',
    type: 'residential' as const,
    category: 'Bathroom Renovation',
    description: 'Premium washroom renovation with modern finishes and fixtures.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85',
    images: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85',
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Restaurant Franchise Owner',
    company: 'Tim Hortons Location',
    quote: 'Deeroi delivered our franchise build-out on time and within budget. Their attention to brand standards was exceptional.',
    rating: 5,
  },
  {
    name: 'Commercial Client',
    company: 'Retail Store Owner',
    quote: 'From concept to completion, the Deeroi team managed every detail. Our new retail space exceeded expectations.',
    rating: 5,
  },
  {
    name: 'Homeowner',
    company: 'Brampton, ON',
    quote: 'Our basement renovation was completed beautifully. The craftsmanship and communication throughout the project were outstanding.',
    rating: 5,
  },
] as const;
