import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function InteractivePlayground() {
  const [stickers, setStickers] = useState([
    { id: 1, text: "Clean Architecture ⚡", color: "bg-block-lime", rotate: "-rotate-2", votes: 42 },
    { id: 2, text: "Coding + AI Synergy ⚡🤖", color: "bg-block-lilac", rotate: "rotate-2", votes: 45 },
    { id: 3, text: "Responsible Vibe Coding 🤖", color: "bg-block-mint", rotate: "-rotate-1", votes: 64 },
    { id: 4, text: "Pixel Perfect Figma 🎨", color: "bg-block-cream", rotate: "rotate-1", votes: 29 },
    { id: 5, text: "Ship Early, Ship Often 🚀", color: "bg-block-coral", rotate: "-rotate-2", votes: 47 },
  ]);

  const handleVote = (id) => {
    confetti({
      particleCount: 20,
      spread: 45,
      origin: { y: 0.8 }
    });

    setStickers(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, votes: s.votes + 1 };
      }
      return s;
    }));
  };

  return (
    <section className="py-8 sm:py-12 bg-canvas">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <div className="bg-surface-soft rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-hairline relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <span className="eyebrow-mono bg-white px-2.5 py-0.5 rounded-full text-black inline-block mb-2.5 border border-hairline">
              // FIGJAM STICKY COLLAGE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-1.5">
              Leave a stamp on the board!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Tap any sticky note below to drop confetti and upvote the vibe.
            </p>
          </div>

          {/* Sticky Notes Collage */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4">
            {stickers.map((s) => (
              <div
                key={s.id}
                onClick={() => handleVote(s.id)}
                className={`${s.color} ${s.rotate} text-black p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-black/10 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer select-none max-w-[200px] sm:max-w-xs group active:scale-95`}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-black/20 group-hover:bg-black/50 transition-colors"></span>
                  <span className="caption-mono text-[10px] bg-white/70 px-1.5 py-0.5 rounded-full font-medium">
                    +{s.votes}
                  </span>
                </div>
                <p className="font-bold text-xs sm:text-sm tracking-tight mb-2">
                  {s.text}
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-700">
                  <span>Tap to stamp</span>
                  <span>❤️</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
