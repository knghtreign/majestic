import React from 'react';
import { MajesticConcept } from '../types';
import { Compass, Sparkles, Shield, Award } from 'lucide-react';

interface PhilosophySectionProps {
  concept: MajesticConcept;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ concept }) => {
  return (
    <section id="story" className="relative py-28 border-t border-white/5 bg-[#050508] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#d4af37] block font-bold">
            01 • The Sovereign Manifesto
          </span>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight text-white ${concept.headerFont}`}>
            A Legacy Written in Gold and Starlight
          </h2>
          <div className="line-decorative w-32 mx-auto mt-4" />
        </div>

        {/* Editorial Quote Box */}
        <div className="relative p-8 sm:p-14 rounded-3xl glass-card border border-white/10 max-w-4xl mx-auto text-center space-y-6 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5 font-serif text-9xl pointer-events-none select-none">
            “
          </div>
          
          <p className={`text-xl sm:text-3xl italic font-light text-slate-200 leading-relaxed font-serif`}>
            {concept.editorialQuote}
          </p>

          <div className="pt-2 flex items-center justify-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37]">
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>{concept.brandName} Master Atelier Directives</span>
          </div>
        </div>

        {/* Philosophy Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concept.philosophyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-card border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 space-y-4 hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] text-xs font-mono font-bold group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                0{idx + 1}
              </div>

              <h3 className={`text-xl font-bold text-white tracking-wide ${concept.headerFont}`}>
                {pillar.title}
              </h3>

              <p className="text-xs font-light text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
