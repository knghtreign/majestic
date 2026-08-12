import React from 'react';
import { MajesticConcept } from '../types';
import { Sparkles, Check, ArrowUpRight } from 'lucide-react';

interface FeaturedShowcaseSectionProps {
  concept: MajesticConcept;
  onOpenInquiry: () => void;
}

export const FeaturedShowcaseSection: React.FC<FeaturedShowcaseSectionProps> = ({
  concept,
  onOpenInquiry
}) => {
  return (
    <section id="showcase" className="relative py-28 border-t border-white/5 bg-[#07070B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#d4af37] block mb-2 font-bold">
              02 • The Crown Jewel
            </span>
            <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${concept.headerFont}`}>
              <span className={concept.palette.textMetallicClass}>Masterpiece Feature</span>
            </h2>
          </div>
          <p className="text-sm font-light text-slate-400 max-w-md leading-relaxed">
            {concept.showcaseSubhead}
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Frame with Glass Card Shadow */}
          <div className="lg:col-span-7 relative group">
            <div className="relative h-[420px] sm:h-[520px] rounded-3xl overflow-hidden border border-white/15 glass-card shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img
                src={concept.showcaseImageUrl}
                alt={concept.showcaseTitle}
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card border border-white/20 backdrop-blur-md">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#d4af37] block">
                  CROWN ALLOCATION
                </span>
                <h3 className={`text-2xl font-bold text-white mt-1 ${concept.headerFont}`}>
                  {concept.showcaseTitle}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Specification Dossier */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] block">
                Technical Dossier
              </span>
              <h3 className={`text-3xl font-bold text-white tracking-wide ${concept.headerFont}`}>
                {concept.showcaseTitle}
              </h3>
              <p className="text-xs font-light text-slate-300 leading-relaxed">
                Meticulously calibrated in low-gravity vacuum chambers to achieve absolute structural harmony.
              </p>
            </div>

            {/* Spec Rows */}
            <div className="space-y-3 pt-2">
              {concept.showcaseSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors text-xs font-mono"
                >
                  <span className="text-slate-400 uppercase tracking-widest">{spec.label}</span>
                  <span className="text-[#d4af37] font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenInquiry}
                className="w-full py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Private Allocation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
