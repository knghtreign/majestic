import React, { useState } from 'react';
import { MajesticConcept, MajesticPalette } from '../types';
import { PRESET_REALMS } from '../data/presetRealms';
import { MAJESTIC_PALETTES } from '../data/palettes';
import { Shuffle, Palette, Type, Sliders, Sparkles, X, Check, Copy, Code } from 'lucide-react';

interface GeneratorDeckProps {
  concept: MajesticConcept;
  onSelectConcept: (concept: MajesticConcept) => void;
  onRandomize: () => void;
  onClose: () => void;
  onUpdatePalette: (palette: MajesticPalette) => void;
  onUpdateFonts: (headerFont: string) => void;
}

export const GeneratorDeck: React.FC<GeneratorDeckProps> = ({
  concept,
  onSelectConcept,
  onRandomize,
  onClose,
  onUpdatePalette,
  onUpdateFonts
}) => {
  const [activeTab, setActiveTab] = useState<'presets' | 'palettes' | 'typography' | 'prompt'>('presets');
  const [copied, setCopied] = useState(false);

  const fontOptions = [
    { name: 'Cinzel (Imperial Display)', fontClass: 'font-cinzel' },
    { name: 'Cormorant (High Luxury Serif)', fontClass: 'font-cormorant' },
    { name: 'Syne (Futuristic Cyber)', fontClass: 'font-syne' },
    { name: 'Playfair (Editorial Classical)', fontClass: 'font-playfair' }
  ];

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(concept.designPromptSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="fixed top-20 right-4 sm:right-6 z-50 w-full max-w-md glass-card rounded-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 backdrop-blur-2xl animate-in slide-in-from-right duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
            <Sliders className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-white">
              Realm Generator Studio
            </h3>
            <span className="text-[10px] text-slate-400 font-mono block">
              Active: {concept.brandName} • {concept.palette.name}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Primary Randomize Button */}
      <button
        onClick={onRandomize}
        className="w-full mb-5 py-3 rounded-xl text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] active:scale-95"
      >
        <Shuffle className="w-4 h-4" />
        <span>Generate Random Majestic Realm</span>
      </button>

      {/* Studio Sub-Tabs */}
      <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-white/5 border border-white/10 mb-4 text-[10px] font-mono tracking-wider uppercase text-slate-300">
        <button
          onClick={() => setActiveTab('presets')}
          className={`py-1.5 rounded-lg transition-colors ${activeTab === 'presets' ? 'bg-[#d4af37]/20 text-[#d4af37] font-bold' : 'hover:text-white'}`}
        >
          Presets
        </button>
        <button
          onClick={() => setActiveTab('palettes')}
          className={`py-1.5 rounded-lg transition-colors ${activeTab === 'palettes' ? 'bg-[#d4af37]/20 text-[#d4af37] font-bold' : 'hover:text-white'}`}
        >
          Palettes
        </button>
        <button
          onClick={() => setActiveTab('typography')}
          className={`py-1.5 rounded-lg transition-colors ${activeTab === 'typography' ? 'bg-[#d4af37]/20 text-[#d4af37] font-bold' : 'hover:text-white'}`}
        >
          Type
        </button>
        <button
          onClick={() => setActiveTab('prompt')}
          className={`py-1.5 rounded-lg transition-colors ${activeTab === 'prompt' ? 'bg-[#d4af37]/20 text-[#d4af37] font-bold' : 'hover:text-white'}`}
        >
          Spec
        </button>
      </div>

      {/* Tab Content */}
      <div className="max-h-64 overflow-y-auto pr-1 space-y-2">
        {activeTab === 'presets' && (
          <div className="space-y-2">
            {PRESET_REALMS.map((realm) => (
              <div
                key={realm.id}
                onClick={() => onSelectConcept(realm)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  concept.id === realm.id
                    ? 'bg-[#d4af37]/15 border-[#d4af37]/60 text-white'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div>
                  <span className={`text-sm font-bold block ${realm.headerFont}`}>
                    {realm.brandName}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block">
                    {realm.industryArchetype}
                  </span>
                </div>
                {concept.id === realm.id && (
                  <Check className="w-4 h-4 text-[#d4af37]" />
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'palettes' && (
          <div className="space-y-2">
            {MAJESTIC_PALETTES.map((pal) => (
              <div
                key={pal.id}
                onClick={() => onUpdatePalette(pal)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  concept.palette.id === pal.id
                    ? 'bg-[#d4af37]/15 border-[#d4af37]/60 text-white'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full border border-white/30"
                    style={{ backgroundColor: pal.accentHex }}
                  />
                  <span className="text-xs font-semibold">{pal.name}</span>
                </div>
                {concept.palette.id === pal.id && (
                  <Check className="w-4 h-4 text-[#d4af37]" />
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'typography' && (
          <div className="space-y-2">
            {fontOptions.map((f) => (
              <div
                key={f.fontClass}
                onClick={() => onUpdateFonts(f.fontClass)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  concept.headerFont === f.fontClass
                    ? 'bg-[#d4af37]/15 border-[#d4af37]/60 text-white'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <span className={`text-sm ${f.fontClass}`}>{f.name}</span>
                {concept.headerFont === f.fontClass && (
                  <Check className="w-4 h-4 text-[#d4af37]" />
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'prompt' && (
          <div className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-3">
            <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest block">
              Current Realm Art-Direction Spec
            </span>
            <p className="text-xs font-mono text-slate-300 leading-relaxed bg-white/5 p-2 rounded-lg border border-white/5">
              {concept.designPromptSummary}
            </p>
            <button
              onClick={handleCopyPrompt}
              className="w-full py-2 rounded-lg text-[10px] font-mono tracking-widest uppercase bg-white/10 hover:bg-white/20 text-slate-200 flex items-center justify-center gap-1.5 border border-white/15"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Design Prompt'}</span>
            </button>
          </div>
        )}
      </div>

    </aside>
  );
};
