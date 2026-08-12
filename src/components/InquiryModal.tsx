import React, { useState } from 'react';
import { MajesticConcept } from '../types';
import { X, Sparkles, Send, CheckCircle, Shield } from 'lucide-react';

interface InquiryModalProps {
  concept: MajesticConcept;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ concept, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    salonLocation: concept.originLocation.split('•')[0].trim(),
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl glass-card rounded-3xl border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden my-auto p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37] block">
              Private Audience Request
            </span>
            <h2 className={`text-2xl font-bold text-white tracking-wide mt-1 ${concept.headerFont}`}>
              {concept.brandName} Salon Protocol
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className={`text-2xl font-bold text-white ${concept.headerFont}`}>
              Protocol Transmitted
            </h3>
            <p className="text-xs font-light text-slate-300 max-w-md mx-auto leading-relaxed">
              Your inquiry has been dispatched to the {formData.salonLocation} private audience director. An invitation courier will initiate contact within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-8 py-3 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              Return to Realm
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-1">
                  Full Name / Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alexander Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-1">
                  Private Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="vance@sovereign.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-white text-xs focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-1">
                Preferred Salon Residence
              </label>
              <select
                value={formData.salonLocation}
                onChange={(e) => setFormData({ ...formData, salonLocation: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-white/15 text-white text-xs focus:outline-none focus:border-[#d4af37]"
              >
                <option value="Geneva">Geneva Private Salon</option>
                <option value="Tokyo">Tokyo Ginza Tower</option>
                <option value="London">London Mayfair Sanctuary</option>
                <option value="New York">New York Fifth Avenue</option>
                <option value="Orbital">Orbital Station L2</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-1">
                Specific Commission / Allocation Request
              </label>
              <textarea
                rows={3}
                placeholder="Detail your desired timepieces, bio-architecture specs, or bespoke perfume commissions..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 text-white text-xs focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Encrypted Transmission</span>
              </div>

              <button
                type="submit"
                className="px-7 py-3 rounded-full text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all flex items-center gap-2"
              >
                <span>Dispatch Protocol</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
