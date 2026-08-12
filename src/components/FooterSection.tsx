import React from 'react';
import { MajesticConcept } from '../types';
import { ArrowUpRight, Shield, Compass } from 'lucide-react';

interface FooterSectionProps {
  concept: MajesticConcept;
  onOpenInquiry: () => void;
  onToggleGeneratorDeck: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  concept,
  onOpenInquiry,
  onToggleGeneratorDeck
}) => {
  return (
    <footer className="relative border-t border-white/10 bg-[#040407] pt-24 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Final CTA Banner */}
        <div className="p-10 sm:p-16 rounded-3xl glass-card border border-white/15 relative overflow-hidden text-center space-y-6">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[140px] opacity-20 pointer-events-none"
            style={{ backgroundColor: concept.palette.accentHex }}
          />

          <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#d4af37] block font-bold">
            07 • Final Invitation
          </span>

          <h2 className={`text-4xl sm:text-6xl font-bold text-white tracking-tight ${concept.headerFont}`}>
            {concept.finalCtaHeadline}
          </h2>

          <p className="text-sm font-light text-slate-300 max-w-xl mx-auto leading-relaxed">
            {concept.finalCtaSubhead}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-9 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all"
            >
              {concept.finalCtaButton}
            </button>

            <button
              onClick={onToggleGeneratorDeck}
              className="px-7 py-4 rounded-full text-xs font-semibold tracking-[0.2em] uppercase glass-card text-white hover:bg-white/10 transition-all border border-white/20"
            >
              Open Realm Generator Studio
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t border-white/10">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className={`text-2xl font-bold tracking-[0.2em] text-white uppercase ${concept.headerFont}`}>
                {concept.brandName}
              </span>
            </div>
            <p className="text-xs font-light text-slate-400 max-w-sm leading-relaxed">
              {concept.philosophyStatement}
            </p>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest pt-2">
              Provenance: {concept.originLocation} • EST. {concept.established}
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono text-white uppercase tracking-widest block font-bold">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#story" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Showcase</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono text-white uppercase tracking-widest block font-bold">
              Salons
            </span>
            <ul className="space-y-2 text-xs font-light">
              <li>Geneva • Private Atelier</li>
              <li>Tokyo • Ginza Sanctuary</li>
              <li>London • Mayfair Suite</li>
              <li>Orbital • Station L2</li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-white uppercase tracking-widest block font-bold">
              Encrypted Dispatch
            </span>
            <p className="text-xs font-light text-slate-400">
              Receive confidential monographs on horology, bio-architecture, and astronomical discoveries.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="private@sovereign.com"
                className="w-full px-3 py-2 rounded-lg bg-white/[0.03] border border-white/15 text-xs text-white focus:outline-none focus:border-[#d4af37]"
              />
              <button className="px-3 py-2 rounded-lg bg-[#d4af37] text-black text-xs font-bold uppercase hover:bg-[#e5c05b]">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-slate-400">
          <div>
            © MMXXVI {concept.brandName} Interstellar & High Artistry. All rights reserved.
          </div>
          <div className="line-decorative w-48 hidden sm:block" />
          <div className="flex items-center gap-6">
            <span>Transmission Encrypted</span>
            <span>AES-256</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
