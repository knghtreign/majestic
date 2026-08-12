import React, { useState } from 'react';
import { MajesticConcept, CollectionItem, JournalArticle, MajesticPalette } from './types';
import { PRESET_REALMS } from './data/presetRealms';
import { generateRandomMajesticRealm } from './data/randomGenerator';

import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { FeaturedShowcaseSection } from './components/FeaturedShowcaseSection';
import { SignatureFeaturesSection } from './components/SignatureFeaturesSection';
import { CollectionGrid } from './components/CollectionGrid';
import { InteractiveExperience } from './components/InteractiveExperience';
import { JournalSection } from './components/JournalSection';
import { MetricsSection } from './components/MetricsSection';
import { GeneratorDeck } from './components/GeneratorDeck';
import { ArtifactModal } from './components/ArtifactModal';
import { InquiryModal } from './components/InquiryModal';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [concept, setConcept] = useState<MajesticConcept>(PRESET_REALMS[0]);
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<CollectionItem | JournalArticle | null>(null);

  const handleRandomize = () => {
    const newRealm = generateRandomMajesticRealm();
    setConcept(newRealm);
  };

  const handleSelectConcept = (newConcept: MajesticConcept) => {
    setConcept(newConcept);
  };

  const handleUpdatePalette = (newPalette: MajesticPalette) => {
    setConcept((prev) => ({
      ...prev,
      palette: newPalette
    }));
  };

  const handleUpdateFonts = (headerFont: string) => {
    setConcept((prev) => ({
      ...prev,
      headerFont
    }));
  };

  return (
    <div className={`min-h-screen ${concept.palette.bgDark} text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 relative overflow-x-hidden transition-colors duration-700`}>
      {/* Particle Atmosphere Canvas */}
      <ParticleCanvas color={concept.palette.particleColor} density={40} />

      {/* Main Navigation */}
      <Navbar
        concept={concept}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onToggleGeneratorDeck={() => setIsDeckOpen(!isDeckOpen)}
        isDeckOpen={isDeckOpen}
      />

      {/* Hero Section */}
      <HeroSection
        concept={concept}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onExploreClick={() => {}}
      />

      {/* Section 1: Philosophy & Heritage */}
      <PhilosophySection concept={concept} />

      {/* Section 2: Immersive Masterpiece Showcase */}
      <FeaturedShowcaseSection
        concept={concept}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Section 3: Signature Engineering Features */}
      <SignatureFeaturesSection concept={concept} />

      {/* Section 4: Collection Grid */}
      <CollectionGrid
        concept={concept}
        onSelectItem={(item) => setSelectedArtifact(item)}
      />

      {/* Section 5: Interactive Synthesis Console */}
      <InteractiveExperience concept={concept} />

      {/* Section 6: Metrics & Facts */}
      <MetricsSection concept={concept} />

      {/* Section 7: Journal & Chronicle */}
      <JournalSection
        concept={concept}
        onSelectArticle={(article) => setSelectedArtifact(article)}
      />

      {/* Footer Section & Final CTA */}
      <FooterSection
        concept={concept}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onToggleGeneratorDeck={() => setIsDeckOpen(true)}
      />

      {/* Realm Generator Studio Deck (Slideover Control Panel) */}
      {isDeckOpen && (
        <GeneratorDeck
          concept={concept}
          onSelectConcept={handleSelectConcept}
          onRandomize={handleRandomize}
          onClose={() => setIsDeckOpen(false)}
          onUpdatePalette={handleUpdatePalette}
          onUpdateFonts={handleUpdateFonts}
        />
      )}

      {/* Artifact / Journal Modal */}
      {selectedArtifact && (
        <ArtifactModal
          concept={concept}
          item={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
          onInquire={() => setIsInquiryOpen(true)}
        />
      )}

      {/* Private Audience Inquiry Modal */}
      {isInquiryOpen && (
        <InquiryModal
          concept={concept}
          onClose={() => setIsInquiryOpen(false)}
        />
      )}
    </div>
  );
}
