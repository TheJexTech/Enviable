import type { LucideIcon } from "lucide-react";
import {
  Truck,
  Package,
  Bike,
  Fuel,
  UtensilsCrossed,
  Building2,
  Users,
  Globe2,
  HeartHandshake,
  Briefcase,
  Trophy,
  Mic,
  Newspaper,
  Radio,
  Award,
  Quote,
  Handshake,
  TrendingUp,
  Lightbulb,
  Target,
  Compass,
  ShieldCheck,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Site + navigation                                                          */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Chukwuemeka Ituma",
  role: "Founder & Chairman, Enviable Group",
  shortName: "Ituma",
  url: "https://chukwuemekaituma.com",
  tagline: "Building Businesses. Creating Opportunities. Driving Africa Forward.",
  description:
    "Chukwuemeka Ituma is the Founder and Chairman of Enviable Group, a diversified business ecosystem spanning transportation, logistics, energy, mobility, and technology across Africa.",
  email: "office@enviablegroup.com",
  phone: "+234 (0) 800 000 0000",
  location: "Lagos, Nigeria",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Impact", href: "#impact" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
] as const;

export const socials = [
  { label: "LinkedIn", href: "#", handle: "/chukwuemeka-ituma" },
  { label: "X / Twitter", href: "#", handle: "@chukwuemekaituma" },
  { label: "Instagram", href: "#", handle: "@chukwuemekaituma" },
  { label: "YouTube", href: "#", handle: "/enviablegroup" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Hero statistics                                                            */
/* -------------------------------------------------------------------------- */

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const heroStats: Stat[] = [
  { value: 5, suffix: "+", label: "Companies Built" },
  { value: 1500, suffix: "+", label: "People Empowered" },
  { value: 12, suffix: "+", label: "Years Leading" },
  { value: 6, suffix: "", label: "Industries Served" },
];

/* -------------------------------------------------------------------------- */
/*  About — founder story                                                      */
/* -------------------------------------------------------------------------- */

export type StoryBlock = {
  kicker: string;
  title: string;
  body: string;
};

export const aboutIntro =
  "From humble beginnings to the helm of a diversified business group, Chukwuemeka Ituma has spent his life turning bold ideas into enterprises that move people, power industries, and create opportunity across Africa.";

export const storyBlocks: StoryBlock[] = [
  {
    kicker: "Early Beginnings",
    title: "Roots that shaped a relentless work ethic",
    body: "Raised in a community where resourcefulness was a way of life, Chukwuemeka learned early that opportunity is rarely handed over — it is built. Those formative years instilled the discipline, curiosity, and resilience that would define his path.",
  },
  {
    kicker: "Entrepreneurial Drive",
    title: "Seeing solutions where others saw obstacles",
    body: "While many noticed only the gaps in Africa's transport and energy systems, Chukwuemeka saw markets waiting to be served. His instinct for spotting unmet needs became the engine behind every venture that followed.",
  },
  {
    kicker: "Challenges Overcome",
    title: "Building through adversity",
    body: "The road was anything but smooth — limited capital, infrastructure constraints, and the everyday realities of building in emerging markets. Each setback became a lesson, sharpening a leadership style grounded in patience, grit, and long-term thinking.",
  },
  {
    kicker: "First Venture",
    title: "One vehicle, one promise: reliability",
    body: "Enviable began with a simple commitment — to move people and goods dependably. That first transport operation proved a model could be both profitable and genuinely useful, laying the foundation for everything the group would become.",
  },
  {
    kicker: "Growth Journey",
    title: "From a single service to a diversified group",
    body: "Reinvesting profits and trust, Chukwuemeka expanded methodically — transport, logistics, mobility, energy, and technology — each new company strengthening the others into a resilient, interconnected ecosystem.",
  },
  {
    kicker: "Leadership Philosophy",
    title: "People first, performance always",
    body: "He leads with a conviction that durable businesses are built by empowered people. Investing in teams, raising standards, and rewarding ownership have become hallmarks of the Enviable culture.",
  },
  {
    kicker: "Future Vision",
    title: "An African enterprise with global standards",
    body: "Chukwuemeka's ambition reaches beyond today's portfolio: to build institutions that outlast their founder, set world-class benchmarks, and prove that excellence made in Africa can compete anywhere.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Timeline                                                                   */
/* -------------------------------------------------------------------------- */

export type Milestone = {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
};

export const milestones: Milestone[] = [
  {
    year: "2012",
    title: "The Starting Point",
    description:
      "Chukwuemeka enters the transport sector with a single operation, betting on reliability as a competitive advantage.",
    highlight: true,
  },
  {
    year: "2014",
    title: "Enviable Transport Services",
    description:
      "A growing fleet and a reputation for dependability formalise the flagship transport business.",
  },
  {
    year: "2016",
    title: "Expansion into Logistics",
    description:
      "Enviable Logistics Ltd launches to serve businesses with end-to-end movement of goods across regions.",
  },
  {
    year: "2018",
    title: "Last-Mile Mobility",
    description:
      "Enviable Tricycles brings affordable, accessible mobility to underserved communities and creates new livelihoods.",
  },
  {
    year: "2020",
    title: "Energy Enters the Portfolio",
    description:
      "Enviable Oil & Gas Ltd diversifies the group into the energy value chain, powering homes and enterprises.",
    highlight: true,
  },
  {
    year: "2023",
    title: "Technology & the Eatables App",
    description:
      "The group steps into technology with Eatables, a digital platform connecting people to food and commerce.",
  },
  {
    year: "Beyond",
    title: "Future Ambitions",
    description:
      "Scaling across African markets, deepening technology investment, and building institutions designed to endure.",
    highlight: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  Ecosystem — companies                                                      */
/* -------------------------------------------------------------------------- */

export type Company = {
  name: string;
  short: string;
  icon: LucideIcon;
  industry: string;
  description: string;
  impact: string;
  highlights: string[];
  website: string;
};

export const companies: Company[] = [
  {
    name: "Enviable Transport Services",
    short: "ETS",
    icon: Truck,
    industry: "Transportation",
    description:
      "The flagship of the group — moving people and goods with a reliability-first standard that started it all.",
    impact: "Thousands of journeys completed safely every month.",
    highlights: [
      "Reliable passenger & cargo movement",
      "Professionally managed fleet",
      "Coverage across key routes",
    ],
    website: "#",
  },
  {
    name: "Enviable Logistics Ltd",
    short: "ELL",
    icon: Package,
    industry: "Logistics & Supply Chain",
    description:
      "End-to-end logistics that keep businesses moving — from warehousing to last-mile delivery.",
    impact: "Powering supply chains for businesses of every size.",
    highlights: [
      "Distribution & haulage",
      "Warehousing solutions",
      "Business-grade reliability",
    ],
    website: "#",
  },
  {
    name: "Enviable Tricycles",
    short: "ET",
    icon: Bike,
    industry: "Urban Mobility",
    description:
      "Affordable, accessible last-mile mobility that connects communities and creates livelihoods.",
    impact: "Hundreds of independent earners enabled.",
    highlights: [
      "Last-mile connectivity",
      "Income opportunities",
      "Community access",
    ],
    website: "#",
  },
  {
    name: "Enviable Oil & Gas Ltd",
    short: "EOG",
    icon: Fuel,
    industry: "Energy",
    description:
      "Energy products and services that power homes, vehicles, and enterprises across the region.",
    impact: "Fuelling daily life and commerce.",
    highlights: [
      "Petroleum products",
      "Reliable energy supply",
      "Enterprise partnerships",
    ],
    website: "#",
  },
  {
    name: "Eatables App",
    short: "EAT",
    icon: UtensilsCrossed,
    industry: "Technology",
    description:
      "A digital platform connecting people to food and everyday commerce — the group's step into technology.",
    impact: "Bringing the ecosystem online for a new generation.",
    highlights: [
      "Food & commerce platform",
      "Mobile-first experience",
      "Vendor enablement",
    ],
    website: "#",
  },
];

/* -------------------------------------------------------------------------- */
/*  Impact statistics                                                          */
/* -------------------------------------------------------------------------- */

export type ImpactStat = Stat & { icon: LucideIcon; note: string };

export const impactStats: ImpactStat[] = [
  {
    icon: Building2,
    value: 5,
    suffix: "+",
    label: "Companies Built",
    note: "A diversified group across five industries.",
  },
  {
    icon: Users,
    value: 1500,
    suffix: "+",
    label: "Employees Empowered",
    note: "Careers and livelihoods created and sustained.",
  },
  {
    icon: HeartHandshake,
    value: 250000,
    suffix: "+",
    label: "Customers Served",
    note: "People moved, powered, and served.",
  },
  {
    icon: Globe2,
    value: 40,
    suffix: "+",
    label: "Communities Impacted",
    note: "Reaching towns and cities across regions.",
  },
  {
    icon: Trophy,
    value: 12,
    suffix: "+",
    label: "Years of Leadership",
    note: "Over a decade of building and scaling.",
  },
  {
    icon: Briefcase,
    value: 6,
    suffix: "",
    label: "Industries Served",
    note: "Transport, logistics, mobility, energy & tech.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Leadership philosophy                                                      */
/* -------------------------------------------------------------------------- */

export type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const leadQuote =
  "Africa does not need permission to lead. It needs builders willing to do the hard, patient work of creating value that lasts.";

export const principles: Principle[] = [
  {
    icon: Compass,
    title: "Vision Before Velocity",
    description:
      "Move with intent. Clarity of purpose outlasts the rush of momentum.",
  },
  {
    icon: Users,
    title: "Empower People",
    description:
      "Great businesses are built by people who feel ownership of the mission.",
  },
  {
    icon: Lightbulb,
    title: "Innovate Relentlessly",
    description:
      "Solve real problems with practical innovation, not novelty for its own sake.",
  },
  {
    icon: TrendingUp,
    title: "Build to Last",
    description:
      "Prioritise durable institutions over short-term wins.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity Always",
    description:
      "Trust is the currency that compounds across every venture.",
  },
  {
    icon: Target,
    title: "Impact at Scale",
    description:
      "Measure success by the opportunity created for others.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Media & recognition                                                        */
/* -------------------------------------------------------------------------- */

export type MediaItem = {
  type: string;
  icon: LucideIcon;
  title: string;
  outlet: string;
  date: string;
};

export const mediaItems: MediaItem[] = [
  {
    type: "Interview",
    icon: Mic,
    title: "Building a diversified business group in Africa",
    outlet: "Business Leaders Africa",
    date: "2024",
  },
  {
    type: "Press Feature",
    icon: Newspaper,
    title: "The entrepreneur scaling mobility and energy",
    outlet: "Enterprise Today",
    date: "2024",
  },
  {
    type: "Podcast",
    icon: Radio,
    title: "From one vehicle to a business ecosystem",
    outlet: "The Founders Room",
    date: "2023",
  },
  {
    type: "Speaking",
    icon: Mic,
    title: "Keynote: Driving Africa's economic future",
    outlet: "Africa Growth Summit",
    date: "2023",
  },
  {
    type: "Award",
    icon: Award,
    title: "Recognised for entrepreneurship & job creation",
    outlet: "Industry Excellence Awards",
    date: "2023",
  },
  {
    type: "Article",
    icon: Newspaper,
    title: "Why patient capital wins in emerging markets",
    outlet: "The Visionary Quarterly",
    date: "2022",
  },
];

/* -------------------------------------------------------------------------- */
/*  Gallery                                                                    */
/* -------------------------------------------------------------------------- */

export type GalleryItem = {
  id: number;
  category: string;
  title: string;
  span: "tall" | "wide" | "square";
};

export const galleryCategories = [
  "All",
  "Corporate Events",
  "Public Appearances",
  "Business Operations",
  "Community Projects",
  "Leadership Moments",
] as const;

export const galleryItems: GalleryItem[] = [
  { id: 1, category: "Corporate Events", title: "Annual Leadership Forum", span: "tall" },
  { id: 2, category: "Public Appearances", title: "Keynote Address", span: "wide" },
  { id: 3, category: "Business Operations", title: "Fleet Operations Review", span: "square" },
  { id: 4, category: "Community Projects", title: "Empowerment Initiative", span: "square" },
  { id: 5, category: "Leadership Moments", title: "Strategy Session", span: "tall" },
  { id: 6, category: "Industry Engagements", title: "Sector Roundtable", span: "wide" },
  { id: 7, category: "Corporate Events", title: "Group Milestone Celebration", span: "square" },
  { id: 8, category: "Public Appearances", title: "Panel Discussion", span: "square" },
  { id: 9, category: "Business Operations", title: "Site Inspection", span: "tall" },
  { id: 10, category: "Community Projects", title: "Youth Mentorship", span: "wide" },
];

/* -------------------------------------------------------------------------- */
/*  Partnerships & opportunities                                               */
/* -------------------------------------------------------------------------- */

export type Opportunity = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const opportunities: Opportunity[] = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Collaborate with a proven operator to enter or scale across African markets.",
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    description:
      "Explore co-investment in transport, logistics, energy, and technology.",
  },
  {
    icon: Building2,
    title: "Corporate Collaborations",
    description:
      "Joint programmes that combine reach, infrastructure, and execution.",
  },
  {
    icon: Briefcase,
    title: "Joint Ventures",
    description:
      "Build new ventures together with shared vision and disciplined operations.",
  },
  {
    icon: Mic,
    title: "Speaking Invitations",
    description:
      "Invite Chukwuemeka to share insights on entrepreneurship and African enterprise.",
  },
  {
    icon: Compass,
    title: "Advisory Opportunities",
    description:
      "Engage seasoned perspective on building and scaling diversified businesses.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                               */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Chukwuemeka combines rare vision with relentless execution. He builds businesses that genuinely move communities forward.",
    name: "Business Partner",
    title: "Managing Director, Strategic Partner",
  },
  {
    quote:
      "Few leaders understand operations and people as deeply as he does. The Enviable culture reflects his standards at every level.",
    name: "Industry Leader",
    title: "Chairman, Sector Association",
  },
  {
    quote:
      "Working with the Enviable team has been seamless and dependable. Reliability isn't a slogan here — it's the operating system.",
    name: "Valued Client",
    title: "Operations Lead, Enterprise Client",
  },
  {
    quote:
      "He invests in people first. The opportunities created here have changed the trajectory of so many careers, including mine.",
    name: "Team Member",
    title: "Regional Manager, Enviable Group",
  },
];

/* -------------------------------------------------------------------------- */
/*  Contact categories                                                         */
/* -------------------------------------------------------------------------- */

export const contactCategories = [
  "Partnership Inquiry",
  "Media Request",
  "Business Opportunity",
  "Speaking Engagement",
  "General Inquiry",
] as const;

export { Quote };
