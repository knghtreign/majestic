import React from 'react';
import { CollectionItem, JournalArticle, MajesticConcept } from '../types';
import { X, Sparkles, Calendar, Clock, Award, CheckCircle } from 'lucide-react';

interface ArtifactModalProps {
  concept: MajesticConcept;
  item: CollectionItem | JournalArticle | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ArtifactModal: React.FC<ArtifactModalProps> = ({
  concept,
  item,
  onClose,
  onInquire
}) => {
  if (!item) return null;

  const isCollection = 'specifications' in item;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl glass-card rounded-3xl border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Top Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37]">
              {isCollection ? 'Artifact Inspection' : 'Journal Dispatch'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-950">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
          </div>

          <div className="space-y-3">
            <h2 className={`text-2xl sm:text-4xl font-bold text-white tracking-tight ${concept.headerFont}`}>
              {item.title}
            </h2>

            {!isCollection && 'date' in item && (
              <div className="flex items-center gap-4 text-xs font-mono text-[#d4af37] uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {item.readTime}
                </span>
              </div>
            )}

            <p className="text-sm font-light text-slate-300 leading-relaxed">
              {isCollection ? item.description : ('content' in item ? item.content : item.excerpt)}
            </p>
          </div>

          {/* If Collection Item: Show Specifications */}
          {isCollection && (
            <div className="space-y-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block">
                Technical Dossier & Provenance
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {(item as CollectionItem).specifications.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-white mt-1 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {(item as CollectionItem).extendedDetails && (
                <p className="text-xs font-light text-slate-400 italic leading-relaxed pt-2">
                  "{(item as CollectionItem).extendedDetails}"
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="p-6 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            {concept.brandName} Private Vault Collection
          </span>

          <button
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all"
          >
            Request Private Allocation
          </button>
        </div>

      </div>
    </div>
  );
};
