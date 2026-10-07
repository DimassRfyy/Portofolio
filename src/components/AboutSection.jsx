import React from 'react';
import { Layers, Server, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-black" />,
      title: "Fullstack Architecture",
      description: "Designing structured databases, secure APIs, and reliable backend services paired with fast, responsive frontend interfaces."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-black" />,
      title: "Coding + AI Synergy",
      description: "Leveraging modern AI tooling alongside deep engineering fundamentals to accelerate development, improve code quality, and solve complex problems."
    },
    {
      icon: <Layers className="w-5 h-5 text-black" />,
      title: "Real-World Experience",
      description: "Proven track record delivering solutions across public sector digital services (Diskominfo Jatim), web platforms, and production news portals."
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-14 md:py-18 bg-canvas">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Signature Lilac Color Block Section */}
        <div className="bg-block-lilac text-ink rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 border border-black/10 shadow-sm relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>

          {/* Section Header */}
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="eyebrow-mono bg-white/70 px-2.5 py-0.5 rounded-full text-black inline-block mb-3 border border-black/10">
              // 01. ABOUT ME
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ink tracking-tight mb-4 sm:mb-4">
              Background & Engineering Focus
            </h2>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
              {personal.bio}
            </p>
          </div>

          {/* Three Sticky Note Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-black/10 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-soft border border-hairline flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Callout Ribbon inside Color Block */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-semantic-success animate-pulse shrink-0"></span>
              <p className="text-xs sm:text-sm font-medium text-black">
                Currently open for freelance projects, internships, and fullstack junior/mid developer positions.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-pill-primary text-xs sm:text-sm whitespace-nowrap shrink-0 group self-end sm:self-auto"
            >
              <span>Discuss an Idea</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
