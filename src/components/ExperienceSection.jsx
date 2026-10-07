import React, { useState } from 'react';
import { Smartphone, Code2, Globe, Award, Calendar, ArrowRight, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ExperienceModal from './ExperienceModal';

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState(null);
  const { experiences } = portfolioData;

  const getExpIcon = (exp, idx) => {
    const role = (exp.role || '').toLowerCase();
    if (role.includes('mobile')) {
      return <Smartphone className="w-5 h-5 text-block-lime" />;
    }
    if (role.includes('laravel')) {
      return <Code2 className="w-5 h-5 text-block-coral" />;
    }
    if (role.includes('web specialist') || role.includes('web')) {
      return <Globe className="w-5 h-5 text-block-mint" />;
    }
    if (role.includes('bootcamp') || role.includes('participant')) {
      return <Award className="w-5 h-5 text-block-lilac" />;
    }
    return <Briefcase className="w-5 h-5 text-block-lime" />;
  };

  return (
    <section id="experience" className="py-8 sm:py-14 md:py-18 bg-canvas">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Signature Navy Color Block Section */}
        <div className="bg-block-navy text-inverse-ink rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 border border-white/10 shadow-xl relative overflow-hidden">
          
          {/* Subtle cosmic glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-magenta/10 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-block-lime/10 rounded-full blur-3xl pointer-events-none -ml-10 -mb-10"></div>

          {/* Section Header */}
          <div className="max-w-3xl mb-6 sm:mb-8 relative z-10">
            <span className="eyebrow-mono bg-white/10 text-white px-2.5 py-0.5 rounded-full inline-block mb-3 border border-white/20">
              // 03. WORK EXPERIENCE
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              Professional & Internship Experience
            </h2>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-3.5 sm:space-y-5 relative z-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedExp(exp)}
                className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/30 transition-all hover:bg-white/[0.08] flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-6 cursor-pointer group"
              >
                <div className="flex items-start gap-3 sm:gap-4 flex-1">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    {getExpIcon(exp, idx)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-block-lime transition-colors">
                        {exp.role}
                      </h3>
                      {/* Period Badge on mobile (compact inline) */}
                      <span className="caption-mono text-neutral-300 text-[10px] sm:hidden bg-white/10 px-2 py-0.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-base text-block-lime/90 font-medium mt-0.5">
                      {exp.organization}
                    </p>

                    {/* Desktop Description only (hidden on mobile to keep section clean) */}
                    <p className="hidden sm:block text-neutral-300 text-xs sm:text-sm leading-relaxed mt-2 max-w-2xl font-light">
                      {exp.description}
                    </p>

                    {/* Mobile Detail Button Trigger */}
                    <div className="sm:hidden mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-block-lime font-medium flex items-center gap-1 group-hover:underline">
                        <span>Lihat Detail</span>
                        <ArrowRight size={12} />
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {exp.location}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-3">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Period Badge & Click prompt */}
                <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-neutral-400" />
                    <span className="caption-mono text-neutral-300 text-[11px]">
                      {exp.period}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 group-hover:text-white flex items-center gap-1 transition-colors">
                    <span>Lihat Detail</span>
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Experience Detail Modal */}
      {selectedExp && (
        <ExperienceModal
          exp={selectedExp}
          onClose={() => setSelectedExp(null)}
        />
      )}
    </section>
  );
}
