import React from 'react';
import { MajesticConcept } from '../types';
import { Sparkles, ArrowDown, ChevronRight, Compass } from 'lucide-react';

interface HeroSectionProps {
  concept: MajesticConcept;
  onOpenInquiry: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  concept,
  onOpenInquiry
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Background Image Container with Cinematic Gradient Masks */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={concept.heroImageUrl}
          alt={concept.brandName}
          className="w-full h-full object-cover object-center filter brightness-75 scale-105 animate-pulse-subtle transition-all duration-1000"
        />
        {/* Deep Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-[#050508]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-transparent to-[#050508]" />
        
        {/* Soft Radial Accent Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-25 pointer-events-none"
          style={{ backgroundColor: concept.palette.accentHex }}
        />
      </div>

      {/* Decorative Golden Accent Lines */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 flex justify-between pointer-events-none z-10 opacity-30">
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#d4af37] to-transparent" />
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </div>

      {/* Central Content Column */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8 my-auto">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/15 text-[10px] font-mono tracking-[0.35em] uppercase text-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          <span>EST. {concept.established} • {concept.tagline}</span>
        </div>

        {/* Hero Headline with Metallic Gradient */}
        <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] ${concept.headerFont}`}>
          <span className={concept.palette.textMetallicClass}>
            {concept.heroHeadline}
          </span>
        </h1>

        {/* Hero Subhead */}
        <p className="text-base sm:text-xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
          {concept.heroSubhead}
        </p>

        {/* Call to Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            {concept.primaryCtaText}
          </button>

          <a
            href="#showcase"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase glass-card text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
          >
            <span>{concept.secondaryCtaText}</span>
            <ChevronRight className="w-4 h-4 text-[#d4af37]" />
          </a>
        </div>

        {/* Origin & Motif Metadata */}
        <div className="pt-12 flex items-center justify-center gap-8 text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400 border-t border-white/10 max-w-lg mx-auto">
          <div>
            <span className="text-[#d4af37] block font-bold">SALON ORIGIN</span>
            <span>{concept.originLocation}</span>
          </div>
          <div className="w-[1px] h-6 bg-white/15" />
          <div>
            <span className="text-[#d4af37] block font-bold">VISUAL MOTIF</span>
            <span>{concept.visualMotif}</span>
          </div>
        </div>

      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-400 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] font-mono uppercase tracking-widest text-[#d4af37]">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#d4af37]" />
      </div>

    </section>
  );
};
