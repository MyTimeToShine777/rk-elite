export type ServiceItem = {
  slug: string
  title: string
  summary: string
  details: string[]
  image: string
  metric: string
}

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export const heroStats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '4', label: 'Construction verticals' },
  { value: '7', label: 'Structured delivery stages' },
]

export const commandMetrics = [
  { label: 'Projects delivered', value: '50+', unit: 'BUILDS' },
  { label: 'Service verticals', value: '04', unit: 'SECTORS' },
  { label: 'Delivery stages', value: '07', unit: 'PHASES' },
]

export const strengths = [
  'Professional Team',
  'Transparent Pricing',
  'Reliable Execution',
  'Customer-Focused Approach',
]

export const services: ServiceItem[] = [
  {
    slug: 'residential',
    title: 'Residential Construction',
    summary: 'We build strong and modern homes designed for comfort, durability, and long-term value.',
    details: ['Individual Houses', 'Villas', 'Duplex Homes', 'Apartment Construction'],
    image: '/images/residential-hero.jpg',
    metric: 'Live residential delivery command',
  },
  {
    slug: 'commercial',
    title: 'Commercial Construction',
    summary: 'Professional commercial spaces designed to support growing businesses.',
    details: ['Office Buildings', 'Retail Shops', 'Showrooms', 'Commercial Complexes'],
    image: '/images/commercial-office.jpg',
    metric: 'Operational commercial build systems',
  },
  {
    slug: 'industrial',
    title: 'Industrial Construction',
    summary: 'Durable industrial structures built for operational efficiency and long-term performance.',
    details: ['Warehouses', 'Factories', 'Industrial Units', 'Storage Buildings'],
    image: '/images/industrial-warehouse.jpg',
    metric: 'Industrial structure deployment',
  },
  {
    slug: 'turnkey',
    title: 'Turnkey Construction',
    summary: 'Complete project solutions handled from approval to planning to final delivery with one team and zero hassle.',
    details: ['Approvals', 'Planning & Design', 'Cost Estimation', 'Construction Execution', 'Finishing', 'Final Delivery'],
    image: '/images/planning-blueprint.jpg',
    metric: 'End-to-end managed execution',
  },
]

export const whyChooseUs = [
  'Experienced Construction Team',
  'Quality Materials',
  'Transparent Project Costing',
  'Professional Supervision',
  'On-Time Execution',
  'End-to-End Project Support',
]

export const processSteps = [
  {
    id: '01',
    title: 'Consultation',
    body: 'Understanding your requirements and project goals before any build decisions are made.',
  },
  {
    id: '02',
    title: 'Approval',
    body: 'Handling all required permissions and clearances through a structured workflow.',
  },
  {
    id: '03',
    title: 'Planning & Design',
    body: 'Structural design and technical planning aligned with execution needs.',
  },
  {
    id: '04',
    title: 'Cost Estimation',
    body: 'Clear and transparent budget planning before construction begins.',
  },
  {
    id: '05',
    title: 'Construction Execution',
    body: 'Professional supervision and quality monitoring during active construction.',
  },
  {
    id: '06',
    title: 'CCTV Surveillance',
    body: 'Live updates to the client throughout the build with improved site visibility.',
  },
  {
    id: '07',
    title: 'Final Delivery',
    body: 'Completion, finishing, and handover of the project with confidence.',
  },
]

export const projectCategories = [
  {
    title: 'Private Residences',
    description: 'Contemporary homes, villas, and duplexes shaped around comfort, durability, and long-term value.',
    image: '/images/residential-villa.jpg',
  },
  {
    title: 'Business Environments',
    description: 'Office buildings, retail shops, showrooms, and commercial complexes designed to support growing businesses.',
    image: '/images/commercial-office.jpg',
  },
  {
    title: 'Industrial Facilities',
    description: 'Warehouses, factories, industrial units, and storage buildings built for operational efficiency and long-term performance.',
    image: '/images/industrial-warehouse.jpg',
  },
]

export const values = [
  'Quality',
  'Integrity',
  'Reliability',
  'Commitment',
  'Customer Satisfaction',
  'On-Time Delivery',
  'Daily Updates',
]

export const differentiators = [
  'Dedicated Construction Team',
  'Structured Project Workflow',
  'Reliable Cost Planning',
  'Quality-Focused Execution',
  'Professional Communication',
  'Client-Centered Approach',
]

export const contactDetails = {
  phone: '8939595899',
  address: 'RK Tower, 10/1008 Mogappair East, EB Office Road, Chennai - 600037',
}
