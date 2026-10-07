import React from 'react';
import { ArrowRight, Download, MessageSquare, Sparkles, Terminal, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20 overflow-hidden bg-canvas">
      {/* Background subtle grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Eyebrow Label - hidden on mobile */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-hairline mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-semantic-success animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-semantic-success -ml-4"></span>
              <span className="caption-mono text-ink text-[10px] sm:text-[11px] font-semibold tracking-wider">
                PORTFOLIO // FULLSTACK DEVELOPER
              </span>
            </div>

            {/* Display Headline - balanced scale */}
            <h1 className="display-xl text-ink font-light tracking-tight mb-4 sm:mb-5">
              Building scalable <span className="font-semibold underline decoration-block-lime decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">systems</span> & <br className="hidden sm:inline" />
              modern web <span className="font-semibold italic font-serif">experiences.</span>
            </h1>

            {/* Subhead / Lead copy */}
            <p className="subhead-editorial text-neutral-700 max-w-xl mb-6 sm:mb-8 leading-relaxed">
              Hi, I'm <strong className="font-semibold text-black">{personal.name}</strong>. A Fullstack Developer combining solid <span className="bg-block-mint/70 px-1.5 py-0.5 rounded font-mono text-xs sm:text-sm font-medium">Coding Foundations</span> with modern <span className="bg-block-pink/70 px-1.5 py-0.5 rounded font-mono text-xs sm:text-sm font-medium">AI Workflows</span> to build scalable, high-impact digital solutions.
            </p>

            {/* Action Buttons - compact inline wrap */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-pill-primary group"
              >
                <span>Explore Work</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-secondary flex items-center justify-center gap-1.5"
              >
                <Download size={15} />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-pill-magenta"
              >
                <Sparkles size={13} />
                <span>Available for Hire</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t border-hairline w-full">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <a
                  href="https://github.com/DimassRfyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-soft border border-hairline flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-dimas-rafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-soft border border-hairline flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="https://wa.me/6282130869378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-soft border border-hairline flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsappIcon size={16} />
                </a>
                <a
                  href="https://www.instagram.com/dimass_rfyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-soft border border-hairline flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>

              <div className="h-4 w-px bg-hairline hidden sm:block" />

              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                📍 {personal.location}
              </div>
            </div>

          </div>

          {/* Right Column: Compact Editorial Photo Frame & Figma Cursors */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-2 sm:py-4">
            
            {/* Playful Figma multiplayer cursor: Dimas (Dev) */}
            <div className="absolute -top-3 left-2 sm:-left-2 z-20 flex items-center gap-1 animate-float-slow pointer-events-none select-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
                <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z" fill="#000000" stroke="#ffffff" strokeWidth="1.5"/>
              </svg>
              <span className="bg-black text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm font-semibold">
                Dimas (Dev)
              </span>
            </div>

            {/* Playful Figma multiplayer cursor: Visitor */}
            <div className="absolute -bottom-2 right-2 sm:right-0 z-20 flex items-center gap-1 animate-float-slow [animation-delay:2s] pointer-events-none select-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
                <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z" fill="#ff3d8b" stroke="#ffffff" strokeWidth="1.5"/>
              </svg>
              <span className="bg-accent-magenta text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm font-semibold">
                Visitor 👋
              </span>
            </div>

            {/* Compact Pastel Block Canvas Frame */}
            <div className="relative w-full max-w-[230px] sm:max-w-[260px] md:max-w-[280px]">
              {/* Backing Pastel Block */}
              <div className="absolute inset-0 bg-block-lime rounded-2xl transform rotate-2 translate-x-1.5 translate-y-1.5 border border-black/10 transition-transform hover:rotate-1 duration-300"></div>

              {/* Main Photo Card */}
              <div className="relative bg-white rounded-2xl p-3 sm:p-3.5 border border-black shadow-lg overflow-hidden">
                <div className="relative rounded-xl overflow-hidden bg-surface-soft aspect-[4/5] flex items-end justify-center group">
                  <img
                    src="/images/pasfoto.png"
                    alt={personal.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Badges on image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white z-10">
                    <div>
                      <p className="font-semibold text-xs leading-tight">{personal.shortName}</p>
                      <p className="text-[10px] font-mono text-block-lime uppercase">Fullstack Dev</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono border border-white/30">
                      ID 🇮🇩
                    </span>
                  </div>
                </div>

                {/* Micro Sticky Note / Spec Tag */}
                <div className="mt-2.5 pt-2 border-t border-hairline flex items-center justify-between text-[11px] font-mono text-neutral-600">
                  <span className="flex items-center gap-1">
                    <Sparkles size={12} className="text-black" />
                    <span>Coding + AI</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Terminal size={12} className="text-black" />
                    <span>Available</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-10 pt-6 sm:mt-14 sm:pt-8 border-t border-hairline grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {personal.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="display-lg text-ink font-semibold tracking-tight text-2xl sm:text-3xl md:text-4xl">
                {stat.value}
              </span>
              <span className="caption-mono text-neutral-500 text-[10px] sm:text-[11px] mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
