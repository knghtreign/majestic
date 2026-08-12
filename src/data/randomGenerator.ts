import { MajesticConcept } from '../types';
import { MAJESTIC_PALETTES } from './palettes';

const RANDOM_BRANDS = [
  {
    name: 'VORTEX',
    tagline: 'HYPER-DIMENSIONAL QUANTUM COMPUTING & METAMATERIALS',
    archetype: 'Quantum Supercomputing & Sub-Atomic Engineering',
    established: '2032',
    origin: 'Zurich • CERN Science Complex',
    headline: 'Where Matter Re-Imagines Itself.',
    subhead: 'Sub-atomic metamaterial fabrication and quantum lattice supercomputers engineered for planetary simulation.',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1600&auto=format&fit=crop',
    showcaseTitle: 'The Vortex Quantum Lattice Matrix',
    showcaseSubhead: 'Operating at 0.01 Kelvin with 100,000 logical qubits cooled by liquid helium circulation.',
    showcaseImg: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop',
    font: 'font-syne'
  },
  {
    name: 'LUMINA',
    tagline: 'IMPERIAL ARCHITECTURAL GLASS & CINEMATIC SANCTUARIES',
    archetype: 'Ultra-Luxury Glass & Kinetic Architectural Lighting',
    established: '1904',
    origin: 'Murano • Venice • Milan',
    headline: 'Light Sculpted in Crystal.',
    subhead: 'Monumental blown glass installations and smart photo-reactive facades for private estates and royal residences.',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop',
    showcaseTitle: 'The Murano Grand Chandelier',
    showcaseSubhead: 'Composing 3,400 hand-blown prismatic glass teardrops containing fiber-optic golden filaments.',
    showcaseImg: 'https://images.unsplash.com/photo-1543198278-e7b8f95c52c6?q=80&w=1600&auto=format&fit=crop',
    font: 'font-cinzel'
  },
  {
    name: 'KINETICUS',
    tagline: 'HYPER-YACHT HYDROFOIL & NAVAL AERODYNAMICS',
    archetype: 'Next-Generation Naval Architecture & Hydrofoil Craft',
    established: '2019',
    origin: 'Monaco • Saint-Tropez',
    headline: 'Gliding Over Oceans at Mach 0.2.',
    subhead: 'Carbon-composite hydrofoil mega-yachts that fly smoothly above turbulent sea swells with zero hydrodynamic friction.',
    imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1600&auto=format&fit=crop',
    showcaseTitle: 'The Kineticus M100 Hydrofoil',
    showcaseSubhead: 'A 100-foot stealth yacht lifting completely out of the ocean at 60 knots on active titanium hydrofoils.',
    showcaseImg: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    font: 'font-syne'
  },
  {
    name: 'AETHERIA',
    tagline: 'STRATOSPHERIC SKY VILLAS & ZERO-EMISSION AIRSHIPS',
    archetype: 'Luxury Aeronautical Airships & Floating Habitats',
    established: '2030',
    origin: 'Geneva • Lake Como',
    headline: 'Silence at 20,000 Feet.',
    subhead: 'Solar-hydrogen powered airships offering silent, vibration-free cruises over snow-capped Alps and tropical archipelagos.',
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1600&auto=format&fit=crop',
    showcaseTitle: 'The Aetheria Cloud Mansion',
    showcaseSubhead: 'Floating 500-meter luxury cruiser with open-air garden deck and glass floor observatory.',
    showcaseImg: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1600&auto=format&fit=crop',
    font: 'font-cormorant'
  }
];

export function generateRandomMajesticRealm(): MajesticConcept {
  const brand = RANDOM_BRANDS[Math.floor(Math.random() * RANDOM_BRANDS.length)];
  const palette = MAJESTIC_PALETTES[Math.floor(Math.random() * MAJESTIC_PALETTES.length)];

  return {
    id: `generated-${Date.now()}`,
    brandName: brand.name,
    tagline: brand.tagline,
    industryArchetype: brand.archetype,
    established: brand.established,
    originLocation: brand.origin,
    philosophyStatement: `${brand.name} was forged on the radical belief that true luxury demands absolute mastery of physics, material elegance, and unyielding aesthetic discipline.`,
    editorialQuote: `“We do not follow trends; we define the structural paradigms that future generations will marvel at.”`,
    philosophyPillars: [
      { title: 'Zero-Tolerance Precision', desc: 'Every tolerance engineered to micro-millimeter perfection in vacuum environments.' },
      { title: 'Exotic Monolithic Materials', desc: 'Utilizing carbon-graphene weaves, aerospace titanium, and hand-polished sapphires.' },
      { title: 'Unrivaled Sillage & Presence', desc: 'Creating an indelible signature across space, time, and human perception.' }
    ],
    palette,
    headerFont: brand.font,
    bodyFont: 'font-sans',

    heroHeadline: brand.headline,
    heroSubhead: brand.subhead,
    primaryCtaText: 'Commission Private Artifact',
    secondaryCtaText: 'Explore Engineering Dossier',
    heroImageUrl: brand.imageUrl,
    visualMotif: 'Hyperbolic Geometry Spheres',

    features: [
      {
        number: '01',
        title: 'Aerospace Monocoque',
        description: 'Single-piece carbon titanium frame yielding unyielding structural rigidity.',
        iconName: 'Shield',
        metric: '10x Strength'
      },
      {
        number: '02',
        title: 'Quantum Sensor Net',
        description: 'Real-time telemetry and self-healing thermal regulation across all subsystems.',
        iconName: 'Cpu',
        metric: '0.001ms Response'
      },
      {
        number: '03',
        title: 'Prismatic Mirror Core',
        description: 'Refracting ambient light into golden diffraction patterns across all surfaces.',
        iconName: 'Sun',
        metric: '99.9% Optical'
      },
      {
        number: '04',
        title: 'Silent Kinetic Drive',
        description: 'Magnetically levitated motors operating in total acoustic quietude.',
        iconName: 'Zap',
        metric: '< 1dB Acoustic'
      }
    ],

    showcaseTitle: brand.showcaseTitle,
    showcaseSubhead: brand.showcaseSubhead,
    showcaseImageUrl: brand.showcaseImg,
    showcaseSpecs: [
      { label: 'Structural Core', value: 'Titanium-Graphene Composite' },
      { label: 'Operating Efficiency', value: '99.8% Thermal Coefficient' },
      { label: 'Crafting Time', value: '2,200 Manual Hours' },
      { label: 'Allocation', value: 'Strictly 3 Units World' },
      { label: 'Provenance', value: brand.origin }
    ],

    collection: [
      {
        id: 'gen-01',
        title: `${brand.name} Alpha Sovereign`,
        category: 'Custom Commission',
        year: '2026 Edition',
        description: 'Custom bespoke creation individually tailored for private collectors.',
        imageUrl: brand.imageUrl,
        specifications: [
          { label: 'Serial Number', value: '001 / 003' },
          { label: 'Material', value: 'Forged Platinum & Carbon' },
          { label: 'Warranty', value: 'Lifetime Bespoke Service' }
        ],
        rarity: '1 of 3 Worldwide',
        extendedDetails: 'Hand-crafted by senior master engineers with individually hallmarked provenance certification.'
      },
      {
        id: 'gen-02',
        title: `${brand.name} Horizon Matrix`,
        category: 'Limited Series',
        year: '2026 Edition',
        description: 'Experimental prototype engineered for peak performance and visual grandeur.',
        imageUrl: brand.showcaseImg,
        specifications: [
          { label: 'Finish', value: 'Hand-Polished Black Sapphire' },
          { label: 'Weight', value: 'Ultra-Lightweight Alloy' },
          { label: 'Authentication', value: 'Quantum Cryptographic Chip' }
        ],
        rarity: '1 of 5 Worldwide',
        extendedDetails: 'Integrates an embedded quantum encrypted NFC token verifying origin authenticity.'
      }
    ],

    interactiveWidget: {
      type: 'horology',
      title: `${brand.name} Core Simulator`,
      subtitle: 'Tune internal resonance frequencies, power output, and material stress factors.',
      options: [
        { id: 'g-1', label: 'Maximum Efficiency Mode', specValue: '99.9% Output', description: 'Optimized energy distribution across quantum circuits.' },
        { id: 'g-2', label: 'Overdrive Resonance', specValue: '200% Frequency', description: 'Harmonic boost for intense performance conditions.' },
        { id: 'g-3', label: 'Stealth Atmosphere', specValue: '0 dB Noise', description: 'Total acoustic dampening and dark mode operation.' }
      ]
    },

    journal: [
      {
        id: 'gen-j1',
        date: 'AUGUST 2026',
        title: `Pioneering the Next Era at ${brand.name}`,
        excerpt: 'An inside look into our high-security research laboratory and material testing facility.',
        tag: 'Innovation',
        readTime: '5 Min Read',
        content: `At ${brand.name}, research is not an auxiliary department—it is our core identity. Over 60% of our annual budget funds radical material engineering.`,
        imageUrl: brand.imageUrl
      }
    ],

    metrics: [
      { label: 'Patents Awarded', value: '58', unit: 'Global', detail: 'In advanced physics' },
      { label: 'Crafting Precision', value: '0.001', unit: 'mm', detail: 'Laser tolerance' },
      { label: 'Global Private Salons', value: '5', unit: 'Capitals', detail: 'By invitation' },
      { label: 'Annual Output', value: '< 10', unit: 'Units', detail: 'Extreme rarity' }
    ],

    finalCtaHeadline: 'Step Into the Realm.',
    finalCtaSubhead: `Request a private audience with the ${brand.name} director of client commissions.`,
    finalCtaButton: 'Inquire Private Allocation',

    designPromptSummary: `${palette.name} theme for ${brand.name} with ${brand.archetype} styling, metallic typography, and particle atmosphere.`
  };
}
