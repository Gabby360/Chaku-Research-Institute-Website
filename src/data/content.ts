import {
  NavItem,
  ImpactMetric,
  Pillar,
  Capability,
  FarmerStory,
  OrgInfo,
  TeamMember,
  Program,
  Publication,
  FormField
} from '../types';

export const ORG_NAME = "Chaku Research Institute";

export const DARK_HERO_ROUTES = [
  '/',
  '/about',
  '/our-work',
  '/impact',
  '/media',
  '/get-involved',
  '/donate'
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Impact', href: '/impact' },
  { label: 'Media & Publications', href: '/media' },
];

export const QUICK_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Impact', href: '/impact' },
  { label: 'Media & Publications', href: '/media' },
];

export const ACTION_LINKS: NavItem[] = [
  { label: 'Support our mission', href: '/get-involved' },
  { label: 'Partner with us', href: '/get-involved' },
  { label: 'Donate to the Institute', href: '/donate' },
];

export const HOME_METRICS: ImpactMetric[] = [
  { id: 'daily-income', icon: 'ri-coins-line', value: 40, suffix: '%', label: 'Current daily farmer income' },
  { id: 'income-growth', icon: 'ri-arrow-up-double-line', value: 0, suffix: '$XX', label: 'Farmer income growth increase through Chaku Research interventions' },
  { id: 'farm-losses', icon: 'ri-percent-line', value: 20, suffix: '%', label: 'Percentage increase' },
  { id: 'smallholder-farms', icon: 'ri-global-line', value: 50, suffix: 'M+', label: 'Smallholder farms across sub-Saharan Africa' },
];

export const CHALLENGES = ['Farm', 'Data gap', 'Crop loss', 'Poor market access', 'Lost income'];
export const SOLUTIONS = ['Data', 'Training', 'Technology', 'Better decisions', 'Better markets', 'Long-term prosperity'];

export const PILLARS: Pillar[] = [
  {
    icon: 'ri-database-2-line',
    title: 'Digital Records & Data',
    description: 'Digitalized farmer records that streamline communication and create accurate, reliable identification.'
  },
  {
    icon: 'ri-graduation-cap-line',
    title: 'Training & Onboarding',
    description: 'In-person onboarding and continuous skill-building so farmers get the most from every tool.'
  },
  {
    icon: 'ri-sun-cloud-line',
    title: 'Weather & Climate Insights',
    description: 'Real-time weather alerts via calls or SMS help farmers act before conditions turn.'
  },
  {
    icon: 'ri-award-line',
    title: 'Certification & Market Access',
    description: 'Support to meet USDA and GlobalG.A.P. standards, opening the door to export markets.'
  }
];

export const CAPABILITIES: Capability[] = [
  { icon: 'ri-map-pin-2-line', label: 'Farm mapping & boundaries' },
  { icon: 'ri-line-chart-line', label: 'Yield prediction & planning' },
  { icon: 'ri-route-line', label: 'Traceability from farm to buyer' },
  { icon: 'ri-file-text-line', label: 'Digital farmer records' }
];

export const FARMER_STORY_DOKU: FarmerStory = {
  eyebrow: 'FARMER STORY',
  title: 'Meet Mr Doku',
  intro: 'One of thousands of farming families building a new economic future with the Chaku Foundation.',
  quote: 'I never had formal training in farming, but with Chaku I now understand my farm in a way I never did before. I can see what my harvest is likely to be worth, plan ahead, and make better decisions for my family. For the first time, the land feels significantly profitable—and it is changing our future.',
  name: 'Mr Stephen Doku',
  meta: 'Smallholder plantain farmer · Somanya, Ghana · Chaku partner since 2022',
  image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1000&q=80'
};

export const ORGANIZATIONS: OrgInfo[] = [
  {
    icon: 'ri-building-2-line',
    name: 'Chaku Foods',
    tag: 'For-profit company',
    text: 'Chaku Foods is a for profit company that has developed an AI/ML crop yield prediction technology called Chaku Tech. This technology maps smallholder farms, predicts harvest volumes, and optimizes supply chain routes so raw crops can reach processing facilities with minimal loss.'
  },
  {
    icon: 'ri-seedling-line',
    name: 'Chaku Research Institute',
    tag: 'Nonprofit organization (501c3)',
    text: 'Chaku Research Institute is a 501c3 nonprofit organization that works directly with smallholder farming communities in Africa. The Institute provides on-the-ground training, digitalizes farmer records, supports certification, and connects farmers to high-value markets.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Nikki Okrah', role: 'Founder & CEO', focus: 'Leadership & Vision' },
  { name: 'Randy Mensah', role: 'Operations', focus: 'Field Research & Operations' },
  { name: 'Israel Tetteh', role: 'Technology & Field Lead', focus: 'Agritech & Field Training' }
];

export const PROGRAMS: Program[] = [
  {
    id: 'onboarding',
    tag: 'Global Impact',
    icon: 'ri-user-add-line',
    title: 'Farmer Onboarding & Training',
    description: 'Chaku Research Institute digitalizes farmer records and conducts in-person training workshops in rural communities. Field teams teach farmers how to use yield prediction data, track harvest schedules, and apply sustainable agricultural practices.'
  },
  {
    id: 'mapping',
    tag: 'Global Impact',
    icon: 'ri-map-pin-2-line',
    title: 'Farm Geo-Mapping & Boundaries',
    description: 'Using GPS and remote sensing tools, field agents map farm boundaries and plot size. Accurately defined acres help farmers estimate yields, access financial products, and verify land use for sustainable certifications.'
  },
  {
    id: 'testing',
    tag: 'Global Impact',
    icon: 'ri-flask-line',
    title: 'Agritech Testing & Innovation',
    description: 'Chaku Tech serves as a field lab for agricultural data collection. By deploying ground sensors, satellite analytics, and mobile survey tools, we refine prediction algorithms for tropical crops and smallholder conditions.'
  },
  {
    id: 'market-access',
    tag: 'Global Impact',
    icon: 'ri-store-2-line',
    title: 'Market Access & Certification',
    description: 'We help smallholder farmers achieve quality standards and organic or fair-trade certifications required by premium buyers. Verified data lowers buyer risk and ensures farmers receive fair, transparent prices for their crops.'
  },
  {
    id: 'traceability',
    tag: 'Global Impact',
    icon: 'ri-route-line',
    title: 'Yield Traceability & Supply Chain',
    description: 'By connecting farm-level yield forecasts with regional logistics networks, we reduce post-harvest losses and ensure crops reach processing centers while fresh. Traceability builds trust across the entire food value chain.'
  }
];

export const IMPACT_COUNTER_GRID = [
  { id: 'farmers', value: '2,000+', label: 'Farmers Onboarded' },
  { id: 'acres', value: '10,000+', label: 'Acres of Farms Mapped' },
  { id: 'certified', value: '500+', label: 'Farmers Certified' },
  { id: 'trained', value: '300+', label: 'Farmers Trained' }
];

export const IMPACT_GLOSSARY: Record<string, string> = {
  "Farmers Onboarded": "Digitalized records and in-person onboarding across partner communities.",
  "Acres of Farms Mapped": "Geo-pin mapping of farm boundaries and crop acreage.",
  "Partner Communities Supported": "Rural farming clusters with active extension support.",
  "Agritech Testing Stations Online": "Ground data points collecting microclimate and crop health signals."
};

export const PUBLICATIONS: Publication[] = [
  {
    title: 'AI-Driven Yield Prediction for Smallholder Farming Systems',
    date: 'April 9, 2026',
    category: 'Research',
    image: 'https://readdy.ai/api/search-image?query=African%20agricultural%20researcher%20using%20a%20digital%20tablet%20in%20a%20lush%20green%20farm%20field%20collecting%20crop%20data%20scientific%20modern%20agritech%20concept&width=800&height=500&seq=1&orientation=landscape',
    summary: 'Abstract: Smallholder agricultural systems across Sub-Saharan Africa face significant yield variability due to fragmented land parcels, unpredictable weather, and limited access to real-time agronomic data. This paper evaluates the field performance of ChakuTech, an integrated artificial intelligence and machine learning framework designed to predict crop yields, map farm boundaries, and optimize supply chain routes for rural farming communities.'
  }
];

export const AFFILIATIONS = [
  {
    name: 'Harvard Innovation Labs',
    logo: '/images/partner-hi.svg'
  },
  {
    name: 'Harvard Business School',
    logo: '/images/partner-hbs.svg'
  }
];

export const PARTNERSHIP_FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'Full name', required: true, placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@organization.org' },
  { name: 'org', label: 'Organization / Company', required: false, placeholder: 'Organization name' },
  { name: 'type', label: 'Inquiry type', type: 'select', required: true, options: ['Partnership / Consortium', 'Funding / Grant', 'Research / Data', 'General Inquiry'] },
  { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Tell us about your organization and how you would like to collaborate...' }
];

export const NEWSLETTER_FORM_FIELDS: FormField[] = [
  { name: 'email', label: 'Email address', type: 'email', required: true, placeholder: 'you@example.com' }
];

export const DONATE_FORM_FIELDS: FormField[] = [
  { name: 'name', label: 'Full name', required: true, placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'tier', label: 'Pledge tier', type: 'select', required: true, options: ['$25 - Sponsor 1 Farmer Onboarding', '$50 - Map 5 Acres of Smallholder Land', '$100 - Fund 1 Community Workshop', '$500 - Support 1 Agritech Data Station', 'Custom Amount'] },
  { name: 'customAmount', label: 'Custom amount (if applicable)', required: false, placeholder: '$' },
  { name: 'message', label: 'Pledge note or dedicated message', type: 'textarea', required: false, placeholder: 'Any note or instructions for your gift...' }
];
