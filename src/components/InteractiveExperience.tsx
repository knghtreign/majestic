import React, { useState } from 'react';
import { MajesticConcept } from '../types';
import { Sliders, Sparkles, Check, Zap, Cpu, RefreshCw } from 'lucide-react';

interface InteractiveExperienceProps {
  concept: MajesticConcept;
}

export const InteractiveExperience: React.FC<InteractiveExperienceProps> = ({ concept }) => {
  const widget = concept.interactiveWidget;
  const [selectedOptionId, setSelectedOptionId] = useState<string>(widget.options[0]?.id || 'opt-0');
  const [intensity, setIntensity] = useState<number>(75);
  const [resonanceIndex, setResonanceIndex] = useState<number>(0.48);

  const selectedOpt = widget.options.find((o) => o.id === selectedOptionId) || widget.options[0];

  const handleTune = () => {
    setResonanceIndex(Number((0.3 + Math.random() * 0.6).toFixed(2)));
  };

  return (
    <section id="experience" className="relative py-28 border-t border-white/5 bg-[#050508] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ backgroundColor: concept.palette.accentHex }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#d4af37] block font-bold">
            05 • Interactive Synthesis
          </span>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${concept.headerFont}`}>
            <span className={concept.palette.textMetallicClass}>{widget.title}</span>
          </h2>
          <p className="text-sm font-light text-slate-400 leading-relaxed">
            {widget.subtitle}
          </p>
        </div>

        {/* Interactive Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl glass-card space-y-6 border border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37]">
                  Operational Modes
                </span>
                <Sliders className="w-4 h-4 text-slate-400" />
              </div>

              {/* Mode Selection Options */}
              <div className="space-y-3">
                {widget.options.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => {
                      setSelectedOptionId(opt.id);
                      handleTune();
                    }}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      selectedOptionId === opt.id
                        ? 'bg-[#d4af37]/10 border-[#d4af37]/50 text-white shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider block text-white">
                        {opt.label}
                      </span>
                      <span className="text-[11px] font-mono text-[#d4af37] block mt-1">
                        Frequency: {opt.specValue}
                      </span>
                      <p className="text-xs font-light text-slate-400 mt-1 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border shrink-0 ${
                      selectedOptionId === opt.id
                        ? 'bg-[#d4af37] border-[#d4af37] text-black'
                        : 'border-white/20 text-transparent'
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Intensity Slider */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono tracking-widest text-slate-400 uppercase">
                  <span>Harmonic Output Amplitude</span>
                  <span className="text-[#d4af37] font-bold">{intensity}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={intensity}
                  onChange={(e) => {
                    setIntensity(Number(e.target.value));
                    handleTune();
                  }}
                  className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

            </div>
          </div>

          {/* Visual Simulation Display (Right 6 Cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative glass-card w-full max-w-md h-[460px] rounded-[160px] border border-white/10 flex flex-col items-center justify-center p-2 relative overflow-hidden shadow-2xl">
              
              {/* Background Glow Ring */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${concept.palette.accentHex} 0%, transparent 70%)`
                }}
              />

              {/* Pulsing Concentric Rings */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-white/5 animate-pulse" />
              <div className="absolute w-[260px] h-[260px] rounded-full border border-white/10" />

              {/* Inner Pill Chamber */}
              <div className="w-[90%] h-[92%] rounded-[150px] overflow-hidden border border-white/10 flex flex-col items-center justify-center bg-[#07070D] p-8 text-center relative z-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37]">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400 block mb-1">
                      Luminosity & Resonance
                    </span>
                    <div className="text-5xl font-light text-[#d4af37] font-serif tracking-tight">
                      {resonanceIndex}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                    <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase block">
                      Active Configuration
                    </span>
                    <span className="text-xs font-semibold text-white tracking-wider block mt-0.5">
                      {selectedOpt?.label}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono block mt-1">
                      Output: {(intensity * 12.4).toFixed(0)} Terahertz
                    </span>
                  </div>

                  <button
                    onClick={handleTune}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3 text-[#d4af37]" />
                    <span>Re-Calibrate Pulse</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
