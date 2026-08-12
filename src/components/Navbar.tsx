import React, { useState, useEffect } from 'react';
import { MajesticConcept } from '../types';
import { Sparkles, Sliders, Menu, X, Compass, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  concept: MajesticConcept;
  onOpenInquiry: () => void;
  onToggleGeneratorDeck: () => void;
  isDeckOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  concept,
  onOpenInquiry,
  onToggleGeneratorDeck,
  isDeckOpen
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050508]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Origin */}
        <div className="flex items-center gap-4">
          <a href="#" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all">
              <div className="w-full h-full bg-[#050508] rounded-full flex items-center justify-center">
                <span className="text-[#d4af37] font-serif font-bold text-sm tracking-tighter">
                  {concept.brandName.charAt(0)}
                </span>
              </div>
            </div>

            <div>
              <span className={`text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase block ${concept.headerFont}`}>
                {concept.brandName}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase block -mt-1">
                {concept.originLocation.split('•')[0]}
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-[0.2em] uppercase text-slate-300">
          <a href="#story" className="hover:text-[#d4af37] transition-colors font-medium">Philosophy</a>
          <a href="#showcase" className="hover:text-[#d4af37] transition-colors font-medium">Showcase</a>
          <a href="#features" className="hover:text-[#d4af37] transition-colors font-medium">Engineering</a>
          <a href="#collection" className="hover:text-[#d4af37] transition-colors font-medium">Collection</a>
          <a href="#experience" className="hover:text-[#d4af37] transition-colors font-medium">Interactive</a>
          <a href="#journal" className="hover:text-[#d4af37] transition-colors font-medium">Chronicle</a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Realm Generator Toggle */}
          <button
            onClick={onToggleGeneratorDeck}
            className={`px-3.5 py-2 rounded-full text-[11px] font-mono uppercase tracking-widest flex items-center gap-2 border transition-all duration-300 ${
              isDeckOpen
                ? 'bg-[#d4af37] text-slate-950 font-bold border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.5)]'
                : 'glass-card text-white hover:bg-white/10 border-white/20'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Generator Studio</span>
          </button>

          {/* Private Audience CTA */}
          <button
            onClick={onOpenInquiry}
            className="hidden md:flex px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 transform active:scale-95"
          >
            Inquire
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050508]/95 backdrop-blur-2xl border-b border-white/10 py-6 px-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 text-xs font-mono uppercase tracking-widest text-slate-300">
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">Philosophy</a>
            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">Showcase</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">Engineering</a>
            <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">Collection</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">Interactive</a>
            <a href="#journal" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5">Chronicle</a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950"
          >
            Private Audience Inquiry
          </button>
        </div>
      )}
    </nav>
  );
};
