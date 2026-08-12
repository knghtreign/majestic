import React from 'react';
import { MajesticConcept } from '../types';
import { Shield, Compass, Activity, Maximize, Sparkles, Eye, Zap, Wind, Droplets, Sun, Trees, Clock, Flower, Award, Cpu } from 'lucide-react';

interface SignatureFeaturesSectionProps {
  concept: MajesticConcept;
}

export const SignatureFeaturesSection: React.FC<SignatureFeaturesSectionProps> = ({ concept }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Shield': return <Shield className="w-5 h-5 text-[#d4af37]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#d4af37]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#d4af37]" />;
      case 'Maximize': return <Maximize className="w-5 h-5 text-[#d4af37]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#d4af37]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#d4af37]" />;
      case 'Wind': return <Wind className="w-5 h-5 text-[#d4af37]" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-[#d4af37]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#d4af37]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#d4af37]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#d4af37]" />;
      case 'Flower': return <Flower className="w-5 h-5 text-[#d4af37]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#d4af37]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#d4af37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="features" className="relative py-28 border-t border-white/5 bg-[#050508] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#d4af37] block font-bold">
            03 • Engineering Supremacy
          </span>
          <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight text-white ${concept.headerFont}`}>
            Signature Capabilities
          </h2>
          <p className="text-xs font-light text-slate-300 max-w-xl mx-auto leading-relaxed">
            Four foundational innovations driving the unmatched performance and physical presence of {concept.brandName}.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {concept.features.map((feat) => (
            <div
              key={feat.number}
              className="p-8 rounded-2xl glass-card border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500 space-y-6 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:bg-[#d4af37]/20 transition-colors">
                  {renderIcon(feat.iconName)}
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold tracking-widest">
                  {feat.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className={`text-lg font-bold text-white ${concept.headerFont}`}>
                  {feat.title}
                </h3>
                <p className="text-xs font-light text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#d4af37] uppercase tracking-widest">
                <span>RATING</span>
                <span className="font-bold">{feat.metric}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
