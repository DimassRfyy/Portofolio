import React, { useState } from 'react';
import { Terminal, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...portfolioData.skills.map(s => s.category)];

  const allSkills = portfolioData.skills.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  const displayedSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-8 sm:py-14 md:py-18 bg-canvas">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Signature Mint Color Block */}
        <div className="bg-block-mint text-ink rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 border border-black/10 shadow-sm relative overflow-hidden">
          
          {/* Header */}
          <div className="max-w-3xl mb-5 sm:mb-7">
            <span className="eyebrow-mono bg-white/70 px-2.5 py-0.5 rounded-full text-black inline-block mb-3 border border-black/10">
              // 02. TECHNICAL SKILLS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ink tracking-tight">
              Tech Stack & Capabilities
            </h2>
          </div>

          {/* Category Pill Toggles */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white/80 text-black hover:bg-white border border-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid - Simple icon + name on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {displayedSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-black/10 hover:border-black/30 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex items-center sm:flex-col sm:items-stretch sm:justify-between gap-2.5 sm:gap-0 group"
              >
                <div className="flex items-center sm:items-start justify-between sm:mb-3 shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-surface-soft border border-hairline flex items-center justify-center p-1.5 sm:p-2 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <Terminal size={17} className="text-black" />
                    )}
                  </div>
                  {/* Badge hidden on mobile */}
                  <span className="hidden sm:inline-block caption-mono text-[10px] px-2 py-0.5 rounded-full bg-surface-soft border border-hairline text-neutral-600 font-medium">
                    {skill.level}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-xs sm:text-sm text-black tracking-tight truncate sm:whitespace-normal mb-0 sm:mb-0.5">
                    {skill.name}
                  </h3>
                  {/* Highlight text hidden on mobile */}
                  <p className="hidden sm:block text-[10px] sm:text-xs font-mono text-neutral-500 line-clamp-1">
                    {skill.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Stack Note */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-black/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-700 gap-3">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-black" />
              <span>Clean Code & Semantic Web Standards</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-black inline-block"></span>
              <span>Coding + AI-Powered Agility</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
