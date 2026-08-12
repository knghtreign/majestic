import React from 'react';
import { MajesticConcept } from '../types';

interface MetricsSectionProps {
  concept: MajesticConcept;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ concept }) => {
  return (
    <section className="relative py-20 border-t border-white/5 bg-[#050508] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {concept.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-card border border-white/10 text-center space-y-2 group hover:border-[#d4af37]/40 transition-colors"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400 block">
                {metric.label}
              </span>
              <div className="text-4xl sm:text-5xl font-light font-serif text-[#d4af37] tracking-tight">
                {metric.value} <span className="text-xs font-sans text-slate-300 font-normal">{metric.unit}</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest pt-1">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
