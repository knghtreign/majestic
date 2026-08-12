import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Radio } from 'lucide-react';

interface AudioAmbienceProps {
  paletteAccent: string;
}

export const AudioAmbience: React.FC<AudioAmbienceProps> = ({ paletteAccent }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscsRef = useRef<OscillatorNode[]>([]);

  const toggleAudio = () => {
    if (isPlaying) {
      // Fade out and stop
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          oscsRef.current.forEach(osc => {
            try { osc.stop(); } catch {}
          });
          oscsRef.current = [];
          audioCtxRef.current?.suspend();
          setIsPlaying(false);
        }, 600);
      }
    } else {
      // Start audio
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioCtx();
        }
        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        const ctx = audioCtxRef.current;
        const mainGain = ctx.createGain();
        mainGain.gain.setValueAtTime(0.001, ctx.currentTime);
        mainGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 2.5); // Soft fade in

        // Lowpass filter for smooth ambient warmth
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(420, ctx.currentTime);

        // Warm majestic chord frequencies (A432 base: A2, E3, A3, C#4, E4)
        const freqs = [108.0, 162.0, 216.0, 271.8, 324.0];
        const newOscs: OscillatorNode[] = [];

        freqs.forEach((f) => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          // Subtle LFO detune for lush chorus shimmer
          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.15 + Math.random() * 0.1, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          osc.connect(filter);
          osc.start();
          newOscs.push(osc);
        });

        filter.connect(mainGain);
        mainGain.connect(ctx.destination);

        gainNodeRef.current = mainGain;
        oscsRef.current = newOscs;
        setIsPlaying(true);
      } catch (err) {
        console.error('Audio initialization error:', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      oscsRef.current.forEach(osc => {
        try { osc.stop(); } catch {}
      });
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 border ${
        isPlaying
          ? 'bg-amber-500/10 border-amber-500/40 text-amber-200 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
          : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
      }`}
      title="Toggle Celestial Ambient Soundscape"
    >
      {isPlaying ? (
        <>
          <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Ambience On</span>
          <Volume2 className="w-3.5 h-3.5 text-amber-400" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span>Ambience Muted</span>
        </>
      )}
    </button>
  );
};
