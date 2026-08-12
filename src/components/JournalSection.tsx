import React from 'react';
import { MajesticConcept, JournalArticle } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

interface JournalSectionProps {
  concept: MajesticConcept;
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ concept, onSelectArticle }) => {
  return (
    <section id="journal" className="relative py-28 border-t border-white/5 bg-[#07070B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#d4af37] block mb-2 font-bold">
              06 • The Chronicle
            </span>
            <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${concept.headerFont}`}>
              <span className={concept.palette.textMetallicClass}>Archives & Dispatches</span>
            </h2>
          </div>
          <p className="text-sm font-light text-slate-400 max-w-md leading-relaxed">
            Essays on architectural precision, materials science, and philosophy from our ateliers.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concept.journal.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="space-y-6">
                <div className="relative h-64 rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070B] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-slate-950/80 border border-white/20 text-[#d4af37] backdrop-blur-md">
                    {article.tag}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#d4af37]" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#d4af37]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors ${concept.headerFont}`}>
                    {article.title}
                  </h3>

                  <p className="text-xs font-light text-slate-300 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                <span>Read Dispatch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
