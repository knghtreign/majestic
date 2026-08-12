import { MajesticConcept } from '../types';
import { MAJESTIC_PALETTES } from './palettes';

export const PRESET_REALMS: MajesticConcept[] = [
  {
    id: 'auren-horology',
    brandName: 'AUREN',
    tagline: 'HIGH HOROLOGY & KINETIC TIME ENGINES',
    industryArchetype: 'Luxury Watchmaking & Kinetic Engineering',
    established: '1884',
    originLocation: 'Geneva • Val-de-Travers',
    philosophyStatement: 'Time is not a sequence of ticks; it is an architectural space where mechanical perfection meets gravity-defying tourbillon geometry.',
    editorialQuote: '“In the stillness between mechanical oscillations lies eternity. We do not measure seconds—we sculpt their passage.”',
    philosophyPillars: [
      { title: 'Quad-Axis Tourbillon', desc: 'Floating mechanical cage counteracting Earth’s gravitational vector with 0.0001s chronometric tolerance.' },
      { title: 'Forged Carbon-Saphir', desc: 'Synthesized at 3,200°C for absolute scratch-proof translucency and zero-mass wrist presence.' },
      { title: '1000-Hour Resonant Reserve', desc: 'Dual-barrel titanium mainspring storing kinetic force via micro-rotor plasma winding.' }
    ],
    palette: MAJESTIC_PALETTES[0], // Obsidian & Molten Gold
    headerFont: 'font-cinzel',
    bodyFont: 'font-sans',

    heroHeadline: 'Where Midnight Becomes Infinite.',
    heroSubhead: 'Architectural horology engineered for visionaries who command temporal momentum across continents and galaxies.',
    primaryCtaText: 'Reserve Private Audience',
    secondaryCtaText: 'Explore Timepiece Engine',
    heroImageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    visualMotif: 'Kinetic Gyroscope Rings',

    features: [
      {
        number: '01',
        title: 'Plasma Carbon Case',
        description: 'Monolithic case milled from aerospace forged carbon interwoven with 24k gold nanofibers.',
        iconName: 'Shield',
        metric: '0.003% Toler'
      },
      {
        number: '02',
        title: 'Orbital Escapement',
        description: 'Tri-axial escapement rotating continuously through celestial plane coordinates.',
        iconName: 'Compass',
        metric: '28,800 vph'
      },
      {
        number: '03',
        title: 'Chrono-Resonance',
        description: 'Acoustic sapphire gongs producing a harmonics chime tuned to 432 Hz natural frequency.',
        iconName: 'Activity',
        metric: '432 Hz Resonance'
      },
      {
        number: '04',
        title: 'Hyper-Sapphire Crystal',
        description: 'Double-domed anti-reflective sapphire crystal offering complete 360-degree mechanical transparency.',
        iconName: 'Maximize',
        metric: '9.5 Mohs'
      }
    ],

    showcaseTitle: 'The Grand Tourbillon Celestial',
    showcaseSubhead: 'A masterpiece of kinetic balance containing 684 hand-beveled components within a 42mm zero-friction frame.',
    showcaseImageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop',
    showcaseSpecs: [
      { label: 'Movement Calibre', value: 'AUR-9012 Quad-Rotor' },
      { label: 'Power Reserve', value: '1,200 Hours (50 Days)' },
      { label: 'Case Diameter', value: '42.5 mm Monobloc' },
      { label: 'Water Resistance', value: '300 Meters / 30 ATM' },
      { label: 'Complication', value: 'Planetary Sidereal Clock' }
    ],

    collection: [
      {
        id: 'aur-01',
        title: 'AUREN Sovereign Chrono',
        category: 'Grand Complication',
        year: '2026 Edition',
        description: 'Hand-engraved skeletonized movement encased in 18k Rose Gold with midnight sapphire dial plate.',
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Material', value: '18K Rose Gold & Carbon' },
          { label: 'Edition', value: 'Limited to 8 Pieces World' },
          { label: 'Strap', value: 'Hand-stitched Alligator Leather' }
        ],
        rarity: '1 of 8 Worldwide',
        extendedDetails: 'Each Sovereign Chrono requires over 1,400 hours of manual hand-finishing by master watchmakers in Geneva.'
      },
      {
        id: 'aur-02',
        title: 'AUREN Eclipse Monolith',
        category: 'High-Tech Ceramic',
        year: '2026 Edition',
        description: 'Ultra-dark obsidian ceramic case engineered to absorb 99.4% of ambient light reflection.',
        imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Material', value: 'Vantablack Ceramic' },
          { label: 'Movement', value: 'Flyback Chronograph' },
          { label: 'Lume', value: 'Super-LumiNova Grade X1' }
        ],
        rarity: '1 of 25 Worldwide',
        extendedDetails: 'Designed for deep space pilots and deep-ocean explorers who require instant legibility under pitch darkness.'
      },
      {
        id: 'aur-03',
        title: 'AUREN Celestial Orbit',
        category: 'Astronomical',
        year: '2026 Edition',
        description: 'Displays real-time star alignment of the Northern Hemisphere using a meteorite slice dial plate.',
        imageUrl: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Dial Material', value: '4.5-Billion-Year Gibeon Meteorite' },
          { label: 'Complication', value: 'Moonphase & Star Map' },
          { label: 'Bezel', value: 'Baguette Cut Diamonds' }
        ],
        rarity: '1 of 3 Masterpieces',
        extendedDetails: 'Includes a micro-engraved celestial chart calculated for exact star coordinates over Geneva at midnight.'
      }
    ],

    interactiveWidget: {
      type: 'horology',
      title: 'Kinetic Calibre Synthesizer',
      subtitle: 'Simulate mechanical balance, mainspring tension, and tourbillon rotation speeds.',
      options: [
        { id: 'mode-1', label: '28,800 VPH High-Beat', specValue: '0.001s/day', description: 'Standard chronometric precision mode for daily momentum.' },
        { id: 'mode-2', label: '36,000 VPH Resonance', specValue: '0.0002s/day', description: 'Dual-balance harmonic synchronization.' },
        { id: 'mode-3', label: 'Zero-G Orbital Cage', specValue: 'Absolute Zero', description: 'Gravitational cancellation across 4 axes.' }
      ]
    },

    journal: [
      {
        id: 'j-1',
        date: 'AUGUST 2026',
        title: 'The Art of the 4-Axis Tourbillon',
        excerpt: 'How our master watchmakers solved centrifugal force deflection using titanium micro-bearings.',
        tag: 'Engineering',
        readTime: '6 Min Read',
        content: 'When designing a tourbillon that rotates in four distinct dimensions, standard steel balance axles deform under shear stress. AUREN engineers developed a proprietary titanium carbide alloy that remains rigid up to 1,200°C.',
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'j-2',
        date: 'JULY 2026',
        title: 'Crafting Dial Plates from Cosmic Meteorites',
        excerpt: 'Unveiling Widmanstätten patterns forged inside dying asteroids millions of light-years away.',
        tag: 'Artisanship',
        readTime: '4 Min Read',
        content: 'The Widmanstätten pattern found in Gibeon meteorite cannot be replicated artificially in any terrestrial laboratory. Acid etching reveals crystalline nickel-iron ribbons formed over a billion years of cooling.',
        imageUrl: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000&auto=format&fit=crop'
      }
    ],

    metrics: [
      { label: 'Patents Filed', value: '42', unit: 'Global', detail: 'In mechanical chronometry' },
      { label: 'Crafting Hours', value: '1,400', unit: 'per piece', detail: 'By hand-beveling masters' },
      { label: 'Precision Rating', value: '±0.05s', unit: 'per day', detail: 'Certified chronometer' },
      { label: 'Global Private Salons', value: '7', unit: 'Locations', detail: 'By invitation only' }
    ],

    finalCtaHeadline: 'Enter Something Extraordinary.',
    finalCtaSubhead: 'Private viewing salons located in Geneva, Tokyo, London, and New York. Request private membership catalog.',
    finalCtaButton: 'Request Private Salons Access',

    designPromptSummary: 'Obsidian & Molten Gold theme featuring high horology, mechanical tourbillon architecture, serif typography, and golden particle atmosphere.'
  },
  {
    id: 'noctis-observatory',
    brandName: 'NOCTIS',
    tagline: 'ORBITAL QUANTUM OBSERVATORY & SPACE HAVEN',
    industryArchetype: 'Futuristic Deep Space Infrastructure & Quantum Research',
    established: '2088',
    originLocation: 'Lagrange Point L2 • Orbital Station',
    philosophyStatement: 'Humanity belongs among the stars. We build quantum optical telescopes and zero-gravity sanctuaries for celestial explorers.',
    editorialQuote: '“Looking into the dark is not staring into nothingness—it is gazing into the forge where light was born.”',
    philosophyPillars: [
      { title: 'Sub-Light Quantum Optics', desc: '100-meter liquid mirror telescopes capable of resolving exoplanet atmospheres in HD spectrum.' },
      { title: 'Artificial Gravity Hubs', desc: 'Toroidal habitats rotating at 2.4 RPM to generate 1.0G Earth-equivalent luxury living.' },
      { title: 'Solar Wind Plasma Shield', desc: 'Magnetosphere force fields insulating guests from cosmic ray ionization.' }
    ],
    palette: MAJESTIC_PALETTES[1], // Midnight Navy & Electric Blue
    headerFont: 'font-syne',
    bodyFont: 'font-sans',

    heroHeadline: 'Architecture for the Impossible.',
    heroSubhead: 'Experience orbital luxury and deep space deep-field research at Lagrange Point L2.',
    primaryCtaText: 'Initiate Orbital Flight',
    secondaryCtaText: 'Explore Deep-Field Telemetry',
    heroImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    visualMotif: 'Quantum Wavefront Rings',

    features: [
      {
        number: '01',
        title: 'Quantum Sensor Array',
        description: 'Detecting gravitational waves and dark matter perturbations in real time.',
        iconName: 'Sparkles',
        metric: '10^-21 Sensitivity'
      },
      {
        number: '02',
        title: 'Zero-G Observatory Dome',
        description: 'Complete 360-degree quartz crystal dome overlooking Earth and distant galaxy clusters.',
        iconName: 'Eye',
        metric: '100% Optical Clarity'
      },
      {
        number: '03',
        title: 'Ion Thruster Navigation',
        description: 'Silent, vibration-free position keeping for ultra-sharp astro-photography.',
        iconName: 'Zap',
        metric: 'Zero Vibration'
      },
      {
        number: '04',
        title: 'Atmospheric Synthesizer',
        description: 'Creating hyper-oxygenated mountain pine microclimates inside orbital suites.',
        iconName: 'Wind',
        metric: '99.9% Purity'
      }
    ],

    showcaseTitle: 'The Celestial Suite at L2',
    showcaseSubhead: 'Suspended 1.5 million kilometers beyond Earth, offering private observational quarters and stargazing balconies.',
    showcaseImageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop',
    showcaseSpecs: [
      { label: 'Distance from Earth', value: '1,500,000 km' },
      { label: 'Telescope Aperture', value: '45-Meter Segmented' },
      { label: 'Gravity Level', value: '1.0G Centrifugal' },
      { label: 'Orbital Velocity', value: '1,100 m/s' },
      { label: 'Capacity', value: '12 Guests Max' }
    ],

    collection: [
      {
        id: 'noc-01',
        title: 'Lagrange Orbital Villa',
        category: 'Private Residence',
        year: 'Module Alpha',
        description: 'Full-floor orbital suite featuring private quartz glass observation deck and zero-g hydrotherapy pool.',
        imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Floor Area', value: '420 m² Panoramic' },
          { label: 'Gravity Control', value: '0.0G to 1.2G Adjustable' },
          { label: 'View', value: 'Earth-Moon Transit Line' }
        ],
        rarity: 'Only 4 Habitat Pods',
        extendedDetails: 'Equipped with dedicated quantum communication beam to Earth with sub-second lag.'
      },
      {
        id: 'noc-02',
        title: 'Exoplanet Deep Explorer',
        category: 'Observation Shuttle',
        year: 'Vessel Bravo',
        description: 'Autonomous reconnaissance vessel for close-range comet trailing and asteroid belt surveys.',
        imageUrl: 'https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Propulsion', value: 'Magnetoplasmadynamic' },
          { label: 'Range', value: 'Jupiter Trojan System' },
          { label: 'Shielding', value: 'Multi-layer Graphene' }
        ],
        rarity: 'Exploration Class',
        extendedDetails: 'Includes private science lounge and AI astronomical co-pilot.'
      }
    ],

    interactiveWidget: {
      type: 'astronomy',
      title: 'Orbital Starlight Resonance',
      subtitle: 'Adjust quantum mirror focal length, spectrum frequency, and orbital position.',
      options: [
        { id: 'opt-1', label: 'Infrared Deep-Field', specValue: '12,000 nm', description: 'Piercing interstellar dust clouds to capture star nurseries.' },
        { id: 'opt-2', label: 'Gravitational Wave Sweep', specValue: '0.01 Hz', description: 'Monitoring black hole collision ripples.' },
        { id: 'opt-3', label: 'Exoplanet Atmosphere Filter', specValue: 'O2 & H2O Signatures', description: 'Analyzing biosignatures in Proxima Centauri b.' }
      ]
    },

    journal: [
      {
        id: 'noc-j1',
        date: 'JULY 2026',
        title: 'Resolving Water Vapor on Trappist-1e',
        excerpt: 'Our liquid mirror optical array detects atmospheric clouds on an alien world 40 light-years away.',
        tag: 'Astrophysics',
        readTime: '8 Min Read',
        content: 'By combining interferometry across three orbital telescopes, NOCTIS scientists synthesized an effective mirror diameter of 800 meters.',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
      }
    ],

    metrics: [
      { label: 'Altitude', value: '1.5M', unit: 'km', detail: 'Lagrange Point L2' },
      { label: 'Light Spectrum', value: '0.1-50', unit: 'microns', detail: 'UV to Far-Infrared' },
      { label: 'Atmospheric Purity', value: '100%', unit: 'Zero Dust', detail: 'Deep vacuum chamber' },
      { label: 'Stargazing Clarity', value: '∞', unit: 'No atmosphere', detail: 'Unbounded vision' }
    ],

    finalCtaHeadline: 'The Universe Awaits Your Presence.',
    finalCtaSubhead: 'Orbital shuttle departures scheduled monthly from Spaceport Cape Canaveral and Mojave.',
    finalCtaButton: 'Book Orbital Pass',

    designPromptSummary: 'Midnight Navy & Electric Blue quantum space theme with astronomical graphics, deep space imagery, and futuristic typography.'
  },
  {
    id: 'velor-botanical',
    brandName: 'VELOR',
    tagline: 'IMPERIAL BOTANICAL BIO-DOME & ETERNAL FLORA',
    industryArchetype: 'Luxury Bio-Architecture & Rare Botanical Conservation',
    established: '1822',
    originLocation: 'Kyoto Gardens • Scottish Highlands',
    philosophyStatement: 'We curate living architecture—ancient orchids, bioluminescent flora, and century-old bonsai suspended in micro-climate glass palaces.',
    editorialQuote: '“Nature does not hurry, yet everything is accomplished. We build sanctuaries where nature reigns supreme.”',
    philosophyPillars: [
      { title: 'Genetic Ancestry Preservation', desc: 'Preserving extinct pre-industrial plant species inside cryogenic amber vaults.' },
      { title: 'Hydro-Acoustic Bio-Resonance', desc: 'Exposing rare flora to sound waves tuned to 528 Hz to double blossom longevity.' },
      { title: 'Living Glass Sanctuaries', desc: 'Self-adjusting prism glass controlling UV spectrum and atmospheric humidity.' }
    ],
    palette: MAJESTIC_PALETTES[2], // Deep Emerald & Antique Gold
    headerFont: 'font-cormorant',
    bodyFont: 'font-sans',

    heroHeadline: 'Crafted Beyond the Ordinary.',
    heroSubhead: 'Living botanical architecture and private ecosystem conservatories for royalty and architectural collectors.',
    primaryCtaText: 'Request Conservatory Tour',
    secondaryCtaText: 'View Rare Flora Catalogue',
    heroImageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600&auto=format&fit=crop',
    visualMotif: 'Bioluminescent Leaf Fractals',

    features: [
      {
        number: '01',
        title: 'Climate Micro-Zoning',
        description: 'Simulating high-altitude cloud forests and tropical mist ecosystems within a single glass dome.',
        iconName: 'Droplets',
        metric: '±0.1% Humidity'
      },
      {
        number: '02',
        title: 'Bioluminescent Canopy',
        description: 'Nighttime garden illumination powered by genetically enhanced glowing flora.',
        iconName: 'Sun',
        metric: 'Natural Glow'
      },
      {
        number: '03',
        title: 'Imperial Bonsai Vault',
        description: 'Caring for living bonsai specimens dating back to the 16th century Edo period.',
        iconName: 'Trees',
        metric: '400+ Years Old'
      },
      {
        number: '04',
        title: 'Organic Air Filtration',
        description: 'Generating zero-particulate medical grade oxygen through dense jungle canopy layers.',
        iconName: 'Wind',
        metric: '100% Purity'
      }
    ],

    showcaseTitle: 'The Kyoto Imperial Glasshouse',
    showcaseSubhead: 'A 60-meter soaring bronze-framed sanctuary protecting 4,000 rare specimen species under climate-adaptive glass panels.',
    showcaseImageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop',
    showcaseSpecs: [
      { label: 'Dome Height', value: '62 Meters' },
      { label: 'Plant Species', value: '4,200 Collections' },
      { label: 'Oldest Specimen', value: '540-Year-Old Pine' },
      { label: 'Structural Frame', value: 'Antique Bronze & Titanium' },
      { label: 'Glass Clarity', value: '99.8% UV-Filtered Crystal' }
    ],

    collection: [
      {
        id: 'vel-01',
        title: 'The Queen Orchid Glass Sphere',
        category: 'Private Habitat',
        year: 'Custom Masterpiece',
        description: 'A 3-meter floating glass sphere housing the rare Black Ghost Orchid of Madagascar with automated fog misting.',
        imageUrl: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Dimensions', value: '3.2m Diameter' },
          { label: 'Misting System', value: 'Ultrasonic Rain Sensors' },
          { label: 'Lighting', value: 'Full Spectrum Sunlight Simulator' }
        ],
        rarity: '1 of 5 Worldwide',
        extendedDetails: 'Includes a dedicated remote botanical telemetry monitoring system connected directly to our head gardener in Kyoto.'
      },
      {
        id: 'vel-02',
        title: 'Bioluminescent Fern Conservatory',
        category: 'Estate Garden',
        year: 'Custom Masterpiece',
        description: 'Outdoor shaded garden path lined with natural glowing flora that illuminates automatically at dusk.',
        imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Illumination', value: 'Luciferin Enzymatic' },
          { label: 'Climate Range', value: 'Hardy Zone 5-11' },
          { label: 'Maintenance', value: 'Self-Sustaining Biome' }
        ],
        rarity: 'Custom Landscaping',
        extendedDetails: 'Creates a magical ethereal glow requiring zero electrical power or wiring.'
      }
    ],

    interactiveWidget: {
      type: 'botanical',
      title: 'Botanical Atmosphere Tuner',
      subtitle: 'Adjust canopy humidity, mist frequency, and light spectrum for optimum growth.',
      options: [
        { id: 'b-1', label: 'Cloud Forest Mist', specValue: '95% Humidity', description: 'Cool alpine misting for rare high-altitude orchids.' },
        { id: 'b-2', label: 'Imperial Japanese Garden', specValue: '65% Humidity', description: 'Gentle breeze and morning sun spectrum for centuries-old moss.' },
        { id: 'b-3', label: 'Bioluminescent Night', specValue: '450 nm Soft Blue', description: 'Triggering enzymatic glowing pathways in nocturnal leaves.' }
      ]
    },

    journal: [
      {
        id: 'v-j1',
        date: 'AUGUST 2026',
        title: 'Reviving the Extinct Golden Camellia',
        excerpt: 'How cryo-preserved seeds from 1840 blossomed into a thriving imperial canopy.',
        tag: 'Conservation',
        readTime: '5 Min Read',
        content: 'Using non-invasive embryo rescue techniques, our botanical research team resurrected the lost Golden Camellia of Guangxi.',
        imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop'
      }
    ],

    metrics: [
      { label: 'Specimens Preserved', value: '12,000+', unit: 'Rare Flora', detail: 'Living seed bank' },
      { label: 'Oldest Living Tree', value: '540', unit: 'Years', detail: 'Imperial Japanese Bonsai' },
      { label: 'Eco-System Purity', value: '100%', unit: 'Organic', detail: 'Zero artificial chemicals' },
      { label: 'Global Botanical Domes', value: '3', unit: 'Kyoto, Highlands, Alps', detail: 'Private sanctuaries' }
    ],

    finalCtaHeadline: 'Cultivate Eternal Nature.',
    finalCtaSubhead: 'Consult with our master landscape architects and master arborists to build your private glasshouse.',
    finalCtaButton: 'Inquire Bio-Dome Design',

    designPromptSummary: 'Deep Emerald & Antique Gold botanical theme with serene greenhouse photography, flourish accents, and editorial serifs.'
  },
  {
    id: 'solvane-perfumery',
    brandName: 'SOLVANE',
    tagline: 'MYTHICAL OLFACTORY ALCHEMY & IMPERIAL PERFUMERY',
    industryArchetype: 'Ultra-Luxury Haute Parfumerie & Rare Essences',
    established: '1792',
    originLocation: 'Grasse • Paris • Florence',
    philosophyStatement: 'Fragrance is invisible architecture. We distill aged Oud from wild Kalimantan trees, midnight-harvested May Roses, and ambergris aged by ocean tides.',
    editorialQuote: '“A perfume is a phantom poem written on the skin—remembered long after words fade into silence.”',
    philosophyPillars: [
      { title: 'Wild Kalimantan Oud', desc: 'Aged for 40 years in cedarwood barrels to achieve deep, resinous smoky complexity.' },
      { title: 'Midnight May Rose Harvest', desc: 'Hand-picked at 4:00 AM before dawn breaks to lock in delicate dewdrop volatile oils.' },
      { title: 'Bespoke Crystal Flacons', desc: 'Hand-blown Baccarat crystal flacons capped with 24k gold filigree stoppers.' }
    ],
    palette: MAJESTIC_PALETTES[3], // Burgundy & Champagne
    headerFont: 'font-playfair',
    bodyFont: 'font-sans',

    heroHeadline: 'Scent Whispered in Gold.',
    heroSubhead: 'Hand-distilled imperial perfumes crafted from rare botanical elixirs and centuries-old alchemy secrets.',
    primaryCtaText: 'Commission Bespoke Scent',
    secondaryCtaText: 'Discover Scent Pyramid',
    heroImageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1600&auto=format&fit=crop',
    visualMotif: 'Swirling Golden Vapor Rings',

    features: [
      {
        number: '01',
        title: 'Vintage Ambergris',
        description: 'Sun-cured ocean ambergris aged over 30 years for velvety sillage and magnetic warmth.',
        iconName: 'Sparkles',
        metric: '30-Year Aged'
      },
      {
        number: '02',
        title: 'Cold Enfleurage',
        description: 'Traditional 18th-century extraction capturing fragile floral accords without heat degradation.',
        iconName: 'Flower',
        metric: '100% Pure Extract'
      },
      {
        number: '03',
        title: '24K Gold Flacons',
        description: 'Individually numbered mouth-blown crystal decanters lined with gold leaf accents.',
        iconName: 'Award',
        metric: 'Hand Crafted'
      },
      {
        number: '04',
        title: 'Eternal Concentration',
        description: '35% pure parfum extract density yielding up to 36 hours of continuous skin longevity.',
        iconName: 'Clock',
        metric: '36-Hour Sillage'
      }
    ],

    showcaseTitle: 'L’Elixir Imperial N° 01',
    showcaseSubhead: 'A intoxicating blend of wild Kalimantan agarwood, night-blooming jasmine, and Madagascar vanilla pod resin.',
    showcaseImageUrl: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1600&auto=format&fit=crop',
    showcaseSpecs: [
      { label: 'Parfum Density', value: '38% Pure Extract' },
      { label: 'Key Accord', value: 'Vintage Oud & Midnight Rose' },
      { label: 'Flacon Material', value: 'Mouth-Blown Black Crystal' },
      { label: 'Maturation', value: 'Aged 18 Months in Oak' },
      { label: 'Batch Size', value: 'Strictly 50 Bottles/Year' }
    ],

    collection: [
      {
        id: 'sol-01',
        title: 'SOLVANE Nocturne Absolute',
        category: 'Haute Parfumerie',
        year: 'Reserve Vintage',
        description: 'Smoky iris, black leather, and dark cocoa absolute infused with wild incense resin from Oman.',
        imageUrl: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Top Notes', value: 'Black Pepper, Cardamom, Bergamot' },
          { label: 'Heart Notes', value: 'Florentine Iris, Midnight Rose' },
          { label: 'Base Notes', value: 'Vintage Oud, Leather, Benzoin' }
        ],
        rarity: '1 of 50 Flacons',
        extendedDetails: 'Packaged inside a hand-carved mahogany box lined with burgundy velvet and gold certificate.'
      },
      {
        id: 'sol-02',
        title: 'SOLVANE Imperial Solis',
        category: 'Solar Floral',
        year: 'Summer Vintage',
        description: 'Sunlit orange blossom, Tahitian gardenia, and warm ambergris inspired by Mediterranean royal palaces.',
        imageUrl: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1200&auto=format&fit=crop',
        specifications: [
          { label: 'Top Notes', value: 'Italian Neroli, Solar Mandarine' },
          { label: 'Heart Notes', value: 'Tahitian Gardenia, Ylang-Ylang' },
          { label: 'Base Notes', value: 'White Ambergris, Cedarwood' }
        ],
        rarity: 'Limited Harvest',
        extendedDetails: 'Each bottle contains 10,000 hand-harvested orange blossoms from Grasse.'
      }
    ],

    interactiveWidget: {
      type: 'perfume',
      title: 'Olfactory Pyramid Mixer',
      subtitle: 'Balance Top Notes, Heart Accords, and Base Sillage resins.',
      options: [
        { id: 'p-1', label: 'Imperial Oud & Incense', specValue: 'Deep Wood & Smoke', description: 'Rich, mysterious resinous depth for evening occasions.' },
        { id: 'p-2', label: 'Midnight May Rose', specValue: 'Floral Dew & Spice', description: 'Enchanting floral elegance harvested under starlight.' },
        { id: 'p-3', label: 'Solar Ambergris', specValue: 'Warm Velvet Skin', description: 'Luminous oceanic warmth with hints of golden vanilla.' }
      ]
    },

    journal: [
      {
        id: 's-j1',
        date: 'JUNE 2026',
        title: 'The Harvest at 4:00 AM in Grasse',
        excerpt: 'Why master perfumers gather May Roses before the first rays of sunlight hit the petals.',
        tag: 'Artisanship',
        readTime: '4 Min Read',
        content: 'Sunlight evaporates delicate monoterpenes. By harvesting in predawn mist, we capture the pure, ethereal dew-moist fragrance.',
        imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop'
      }
    ],

    metrics: [
      { label: 'Petals per Bottle', value: '10,000+', unit: 'Hand-picked', detail: 'May Roses from Grasse' },
      { label: 'Parfum Concentration', value: '38%', unit: 'Extract', detail: 'Highest industry standard' },
      { label: 'Aging Duration', value: '18', unit: 'Months', detail: 'In French Oak Barrels' },
      { label: 'Bespoke Atelier', value: '1', unit: 'Paris', detail: 'By personal appointment' }
    ],

    finalCtaHeadline: 'Wear Your Legacy.',
    finalCtaSubhead: 'Schedule a private consultation at our Paris atelier to synthesize your one-of-a-kind signature perfume formula.',
    finalCtaButton: 'Book Perfumer Consultation',

    designPromptSummary: 'Burgundy & Champagne luxury perfume aesthetic with warm lighting, crystal glassware, and elegant editorial typography.'
  }
];
