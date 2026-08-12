export interface MajesticPalette {
  id: string;
  name: string;
  bgDark: string;
  surfaceDark: string;
  accent: string;
  accentHex: string;
  textMetallicClass: string;
  borderGlow: string;
  radialGlow: string;
  particleColor: string;
  badgeBg: string;
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  specifications: SpecificationItem[];
  rarity: string;
  extendedDetails?: string;
}

export interface JournalArticle {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  content: string;
  imageUrl: string;
}

export interface MetricItem {
  label: string;
  value: string;
  unit: string;
  detail: string;
}

export interface PhilosophyPillar {
  title: string;
  desc: string;
}

export interface SignatureFeature {
  number: string;
  title: string;
  description: string;
  iconName: string;
  metric: string;
}

export interface InteractiveOption {
  id: string;
  label: string;
  specValue: string;
  description: string;
}

export interface InteractiveWidget {
  type: 'horology' | 'astronomy' | 'botanical' | 'perfume';
  title: string;
  subtitle: string;
  options: InteractiveOption[];
}

export interface MajesticConcept {
  id: string;
  brandName: string;
  tagline: string;
  industryArchetype: string;
  established: string;
  originLocation: string;
  philosophyStatement: string;
  editorialQuote: string;
  philosophyPillars: PhilosophyPillar[];
  palette: MajesticPalette;
  headerFont: string;
  bodyFont: string;

  heroHeadline: string;
  heroSubhead: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  heroImageUrl: string;
  visualMotif: string;

  features: SignatureFeature[];

  showcaseTitle: string;
  showcaseSubhead: string;
  showcaseImageUrl: string;
  showcaseSpecs: SpecificationItem[];

  collection: CollectionItem[];

  interactiveWidget: InteractiveWidget;

  journal: JournalArticle[];

  metrics: MetricItem[];

  finalCtaHeadline: string;
  finalCtaSubhead: string;
  finalCtaButton: string;

  designPromptSummary: string;
}
