import React, { useState } from 'react';
import { CollectionItem, MajesticConcept } from '../types';
import { Eye, Sparkles, Lock, ArrowUpRight } from 'lucide-react';

interface CollectionGridProps {
  concept: MajesticConcept;
  onSelectItem: (item: CollectionItem) => void;
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({ concept, onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(concept.collection.map((i) => i.category.toLowerCase())))];

  const filteredItems = activeCategory === 'all'
    ? concept.collection
    : concept.collection.filter((i) => i.category.toLowerCase() === activeCategory);

  return (
    <section id="collection" className="relative py-28 border-t border-white/5 bg-[#07070B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#d4af37] block mb-2 font-bold">
              04 • Private Allocation Vault
            </span>
            <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${concept.headerFont}`}>
              <span className={concept.palette.textMetallicClass}>Sovereign Artifacts</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-widest uppercase">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#d4af37] text-slate-950 font-bold border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-white/10 border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Collection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group cursor-pointer p-6 rounded-2xl glass-card border border-white/10 hover:border-[#d4af37]/60 transition-all duration-500 space-y-6 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Image Frame */}
                <div className="relative h-64 rounded-xl overflow-hidden bg-slate-950 border border-white/10">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070B] via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-slate-950/80 border border-white/20 text-[#d4af37] backdrop-blur-md">
                    {item.rarity}
                  </span>

                  <div className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className={`text-xl font-bold text-white tracking-wide group-hover:text-[#d4af37] transition-colors ${concept.headerFont}`}>
                    {item.title}
                  </h3>

                  <p className="text-xs font-light text-slate-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Specifications preview */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#d4af37] uppercase tracking-widest">
                <span>Inspect Dossier</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
