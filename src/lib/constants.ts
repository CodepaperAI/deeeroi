export const SITE = {
  name: 'Deeroi Constructions',
  tagline: 'Building Your Dreams Into Reality',
  description:
    'Full-service construction and renovation company specializing in commercial and residential projects across Ontario, including restaurants, retail, institutions, banks, and homes.',
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
  { name: 'Meridian Bank', src: '/images/brands/meridian.svg' },
  { name: 'CIMT College', src: '/images/brands/cimt.svg' },
  { name: '7 Spice', src: '/images/brands/7-spice.svg' },
  { name: 'Mehfil', src: '/images/brands/mehfil.svg' },
  { name: 'Bombay Club', src: '/images/brands/bombay-club.svg' },
  { name: 'Royal Garden', src: '/images/brands/royal-garden.svg' },
  { name: 'King 22', src: '/images/brands/king-22.svg' },
] as const;

export const SERVICES = {
  commercial: [
    {
      title: 'Restaurant Build-Outs',
      description:
        'Turnkey dining rooms, bars, lounges, feature walls, counters, millwork, lighting, and finish packages.',
      image: '/images/projects/mehfil-etobicoke-1.jpg',
    },
    {
      title: 'Office & Institutional Renovations',
      description:
        'Clean, durable, code-conscious work for schools, offices, training centres, and professional spaces.',
      image: '/images/projects/cimt-scarborough-3.jpg',
    },
    {
      title: 'Retail Store Renovations',
      description:
        'Retail environments built around customer flow, brand standards, durable finishes, and clean handover.',
      image: '/images/projects/walmart-nb-1.jpg',
    },
    {
      title: 'Bank & Franchise Interiors',
      description:
        'Commercial renovations with coordinated trades, tight timelines, and polished public-facing spaces.',
      image: '/images/projects/meridian-bank-port-elgin-1.jpg',
    },
  ],
  residential: [
    {
      title: 'Custom Home Construction',
      description:
        'Ground-up and major exterior work with premium residential detailing from first impression to final walkthrough.',
      image: '/images/projects/18972-mississauga-rd-caledon-3.jpg',
    },
    {
      title: 'Home Renovations',
      description:
        'Interior upgrades, feature walls, fireplaces, living spaces, dining rooms, and whole-home finish refreshes.',
      image: '/images/projects/house-ug-braidwood-3.jpg',
    },
    {
      title: 'Kitchen Renovations',
      description:
        'Custom cabinetry, counters, islands, backsplashes, lighting, and finish selections installed with care.',
      image: '/images/projects/kitchen-upgrade-4.jpg',
    },
    {
      title: 'Bathroom Renovations',
      description:
        'Luxury washrooms with glass showers, tile, vanities, lighting, waterproofing, and refined finish work.',
      image: '/images/projects/washroom-ug-himanshu-2.jpg',
    },
  ],
} as const;

export type PortfolioProject = {
  slug: string;
  title: string;
  type: 'commercial' | 'residential';
  category: string;
  location: string;
  description: string;
  image: string;
  images: readonly string[];
  highlights: readonly string[];
};

export const PORTFOLIO_PROJECTS = [
  {
    slug: 'mehfil-etobicoke',
    title: 'Mehfil Etobicoke',
    type: 'commercial',
    category: 'Restaurant Build-Out',
    location: 'Etobicoke, ON',
    description:
      'A polished restaurant interior with illuminated bar details, dark ceiling treatments, warm seating zones, and a hospitality-ready finish package.',
    image: '/images/projects/mehfil-etobicoke-1.jpg',
    images: [
      '/images/projects/mehfil-etobicoke-1.jpg',
      '/images/projects/mehfil-etobicoke-2.jpg',
      '/images/projects/mehfil-etobicoke-3.jpg',
    ],
    highlights: ['Bar and back-bar lighting', 'Custom wall features', 'Dining room finish work'],
  },
  {
    slug: 'seven-spice-brampton',
    title: '7 Spice Brampton',
    type: 'commercial',
    category: 'Restaurant Build-Out',
    location: 'Brampton, ON',
    description:
      'A vibrant restaurant space with statement lighting, branded wall art, banquet seating, and a premium front-of-house experience.',
    image: '/images/projects/7-spice-brampton-1.jpg',
    images: [
      '/images/projects/7-spice-brampton-1.jpg',
      '/images/projects/7-spice-brampton-2.jpg',
      '/images/projects/7-spice-brampton-3.jpg',
      '/images/projects/7-spice-brampton-4.jpg',
    ],
    highlights: ['Feature lighting', 'Exterior storefront', 'Dining and service areas'],
  },
  {
    slug: 'meridian-bank-port-elgin',
    title: 'Meridian Bank Port Elgin',
    type: 'commercial',
    category: 'Bank Renovation',
    location: 'Port Elgin, ON',
    description:
      'A clean, customer-facing financial branch renovation with reception finishes, lighting upgrades, and a professional interior handover.',
    image: '/images/projects/meridian-bank-port-elgin-1.jpg',
    images: [
      '/images/projects/meridian-bank-port-elgin-1.jpg',
      '/images/projects/meridian-bank-port-elgin-2.jpg',
    ],
    highlights: ['Reception millwork', 'Public-facing finishes', 'Professional office detailing'],
  },
  {
    slug: 'cimt-scarborough',
    title: 'CIMT Scarborough',
    type: 'commercial',
    category: 'Institutional Renovation',
    location: 'Scarborough, ON',
    description:
      'A bright training and office environment with classrooms, glass partitions, circulation areas, and durable institutional finishes.',
    image: '/images/projects/cimt-scarborough-3.jpg',
    images: [
      '/images/projects/cimt-scarborough-1.jpg',
      '/images/projects/cimt-scarborough-2.jpg',
      '/images/projects/cimt-scarborough-3.jpg',
    ],
    highlights: ['Classroom upgrades', 'Glass partitions', 'Durable high-traffic finishes'],
  },
  {
    slug: 'walmart-nb',
    title: 'Walmart New Brunswick',
    type: 'commercial',
    category: 'Retail Renovation',
    location: 'New Brunswick',
    description:
      'A retail renovation showing bright aisle conditions, clean washroom upgrades, and customer-facing finish quality at franchise scale.',
    image: '/images/projects/walmart-nb-1.jpg',
    images: [
      '/images/projects/walmart-nb-1.jpg',
      '/images/projects/walmart-nb-2.jpg',
      '/images/projects/walmart-nb-3.jpg',
    ],
    highlights: ['Retail floor finish work', 'Washroom improvements', 'High-traffic detailing'],
  },
  {
    slug: 'bombay-club-oakville',
    title: 'Bombay Club Oakville',
    type: 'commercial',
    category: 'Restaurant Bar Build-Out',
    location: 'Oakville, ON',
    description:
      'A dramatic bar and service counter build with stone textures, layered lighting, and a premium hospitality atmosphere.',
    image: '/images/projects/bombay-club-oakville-1.jpg',
    images: [
      '/images/projects/bombay-club-oakville-1.jpg',
      '/images/projects/bombay-club-oakville-2.jpg',
    ],
    highlights: ['Stone counter detailing', 'Back-bar finish work', 'Lighting coordination'],
  },
  {
    slug: 'barzilla',
    title: 'Barzilla',
    type: 'commercial',
    category: 'Bar & Lounge Build-Out',
    location: 'Ontario',
    description:
      'A lounge-forward interior with dark finishes, sculptural lighting, custom bar surfaces, and a moody entertainment feel.',
    image: '/images/projects/barzilla-3.jpg',
    images: [
      '/images/projects/barzilla-1.jpg',
      '/images/projects/barzilla-2.jpg',
      '/images/projects/barzilla-3.jpg',
    ],
    highlights: ['Custom bar surfaces', 'Pendant lighting', 'Dark luxury finish palette'],
  },
  {
    slug: 'mehfil-brampton',
    title: 'Mehfil Brampton',
    type: 'commercial',
    category: 'Restaurant Renovation',
    location: 'Brampton, ON',
    description:
      'A warm restaurant renovation with booth seating, bar upgrades, lighting details, and hospitality-grade interior finishes.',
    image: '/images/projects/mehfil-brampton-2.jpg',
    images: [
      '/images/projects/mehfil-brampton-1.jpg',
      '/images/projects/mehfil-brampton-2.jpg',
      '/images/projects/mehfil-brampton-3.jpg',
    ],
    highlights: ['Dining layout upgrades', 'Bar lighting', 'Ceiling and wall finish work'],
  },
  {
    slug: 'king-22-london',
    title: 'King 22 London',
    type: 'commercial',
    category: 'Restaurant Build-Out',
    location: 'London, ON',
    description:
      'A quick-service restaurant build-out with a branded storefront, counter area, wall graphics, and efficient customer flow.',
    image: '/images/projects/king22london-1.jpg',
    images: [
      '/images/projects/king22london-1.jpg',
      '/images/projects/king22london-2.jpg',
      '/images/projects/king22london-3.jpg',
    ],
    highlights: ['Exterior signage context', 'Counter and service area', 'Branded dining finishes'],
  },
  {
    slug: 'royal-garden-oakville',
    title: 'Royal Garden Oakville',
    type: 'commercial',
    category: 'Restaurant Renovation',
    location: 'Oakville, ON',
    description:
      'A restaurant renovation with storefront presence, interior partition detailing, and warm dining room finish work.',
    image: '/images/projects/royal-garden-oakville-1.jpg',
    images: [
      '/images/projects/royal-garden-oakville-1.jpg',
      '/images/projects/royal-garden-oakville-2.jpg',
    ],
    highlights: ['Storefront finish', 'Decorative partitions', 'Dining room details'],
  },
  {
    slug: 'punjab-land',
    title: 'Punjab Land Restaurant',
    type: 'commercial',
    category: 'Restaurant Renovation',
    location: 'Ontario',
    description:
      'A bright dining room renovation with patterned wall details, bar millwork, warm seating, and layered ceiling treatments.',
    image: '/images/projects/punjab-land-2.jpg',
    images: [
      '/images/projects/punjab-land-1.jpg',
      '/images/projects/punjab-land-2.jpg',
      '/images/projects/punjab-land-3.jpg',
    ],
    highlights: ['Dining room finishes', 'Bar and display millwork', 'Ceiling feature work'],
  },
  {
    slug: 'beeba-boys',
    title: 'Beeba Boys',
    type: 'commercial',
    category: 'Entertainment Lounge',
    location: 'Ontario',
    description:
      'A compact entertainment lounge with dark finishes, neon accents, feature lighting, and a strong brand atmosphere.',
    image: '/images/projects/beeba-boys-2.jpg',
    images: ['/images/projects/beeba-boys-1.jpg', '/images/projects/beeba-boys-2.jpg'],
    highlights: ['Feature wall lighting', 'Entertainment layout', 'Dark interior finishes'],
  },
  {
    slug: 'caledon-custom-residence',
    title: 'Caledon Custom Residence',
    type: 'residential',
    category: 'Custom Residence',
    location: 'Caledon, ON',
    description:
      'A residential project with strong exterior presence, driveway approach, landscape context, and a premium estate-style finish.',
    image: '/images/projects/18972-mississauga-rd-caledon-3.jpg',
    images: [
      '/images/projects/18972-mississauga-rd-caledon-1.jpg',
      '/images/projects/18972-mississauga-rd-caledon-2.jpg',
      '/images/projects/18972-mississauga-rd-caledon-3.jpg',
    ],
    highlights: ['Exterior presentation', 'Estate-style frontage', 'Residential finish coordination'],
  },
  {
    slug: 'braidwood-home-upgrade',
    title: 'Braidwood Home Upgrade',
    type: 'residential',
    category: 'Interior Upgrade',
    location: 'Ontario',
    description:
      'A residential interior upgrade with refreshed kitchen finishes, fireplace detailing, and a clean open-plan living area.',
    image: '/images/projects/house-ug-braidwood-3.jpg',
    images: [
      '/images/projects/house-ug-braidwood-1.jpg',
      '/images/projects/house-ug-braidwood-2.jpg',
      '/images/projects/house-ug-braidwood-3.jpg',
    ],
    highlights: ['Kitchen refresh', 'Fireplace feature', 'Open living area'],
  },
  {
    slug: 'vaughan-house-upgrade',
    title: 'Vaughan House Upgrade',
    type: 'residential',
    category: 'Home Renovation',
    location: 'Vaughan, ON',
    description:
      'A bright residential upgrade with white kitchen finishes, dining room improvements, and clean contemporary detailing.',
    image: '/images/projects/vaughan-house-upgrade-1.jpg',
    images: [
      '/images/projects/vaughan-house-upgrade-1.jpg',
      '/images/projects/vaughan-house-upgrade-2.jpg',
    ],
    highlights: ['Kitchen finish upgrades', 'Dining area refresh', 'Bright contemporary palette'],
  },
  {
    slug: 'kitchen-upgrade',
    title: 'Kitchen Upgrade',
    type: 'residential',
    category: 'Kitchen Renovation',
    location: 'Ontario',
    description:
      'A set of premium kitchen upgrades with custom cabinetry, island work, stone counters, lighting, and backsplash detailing.',
    image: '/images/projects/kitchen-upgrade-4.jpg',
    images: [
      '/images/projects/kitchen-upgrade-1.jpg',
      '/images/projects/kitchen-upgrade-2.jpg',
      '/images/projects/kitchen-upgrade-3.jpg',
      '/images/projects/kitchen-upgrade-4.jpg',
    ],
    highlights: ['Custom cabinetry', 'Stone counters', 'Island and lighting upgrades'],
  },
  {
    slug: 'marble-washroom-upgrade',
    title: 'Marble Washroom Upgrade',
    type: 'residential',
    category: 'Bathroom Renovation',
    location: 'Ontario',
    description:
      'A luxury bathroom renovation with marble-look surfaces, glass shower detailing, custom vanity work, and layered lighting.',
    image: '/images/projects/washroom-amrit-2.jpg',
    images: ['/images/projects/washroom-amrit-1.jpg', '/images/projects/washroom-amrit-2.jpg'],
    highlights: ['Glass shower enclosure', 'Marble-look tile', 'Vanity and mirror lighting'],
  },
  {
    slug: 'glass-shower-suite',
    title: 'Glass Shower Suite',
    type: 'residential',
    category: 'Bathroom Renovation',
    location: 'Ontario',
    description:
      'A refined washroom upgrade with glass shower walls, premium tile, double vanity detailing, and a bright spa-like finish.',
    image: '/images/projects/washroom-ug-himanshu-2.jpg',
    images: [
      '/images/projects/washroom-ug-himanshu-1.jpg',
      '/images/projects/washroom-ug-himanshu-2.jpg',
    ],
    highlights: ['Double vanity finish', 'Glass shower walls', 'Premium tile detailing'],
  },
] as const satisfies readonly PortfolioProject[];

export const TESTIMONIALS = [
  {
    name: 'Restaurant Franchise Owner',
    company: 'Hospitality Build-Out',
    quote:
      'Deeroi delivered our build-out with strong communication, clean finishes, and a team that understood how important opening day was.',
    rating: 5,
  },
  {
    name: 'Commercial Client',
    company: 'Retail Renovation',
    quote:
      'From planning to handover, the Deeroi team managed details carefully and kept the project moving without surprises.',
    rating: 5,
  },
  {
    name: 'Homeowner',
    company: 'Residential Renovation',
    quote:
      'The craftsmanship, finish quality, and walkthrough process made the renovation feel organized from start to finish.',
    rating: 5,
  },
] as const;
