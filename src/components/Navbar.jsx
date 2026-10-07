import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          scrolled ? 'border-hairline shadow-sm py-3' : 'border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
              DR
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-ink text-sm sm:text-base tracking-tight group-hover:text-black">
                <span className="sm:hidden">{portfolioData.personal.shortName} Rafi</span>
                <span className="hidden sm:inline">{portfolioData.personal.name}</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-semantic-success animate-pulse inline-block"></span>
                Open for work
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-soft/80 border border-hairline px-3 py-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-neutral-600 hover:text-black hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioData.personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-secondary text-sm py-2 px-4 flex items-center gap-2"
              title="View CV on Google Drive"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="btn-pill-primary text-sm py-2 px-5 flex items-center gap-2"
            >
              <Send size={14} />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-surface-soft border border-hairline text-ink transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden animate-fade-in" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-14 right-3 left-3 bg-white rounded-2xl p-5 shadow-2xl border border-hairline flex flex-col gap-3 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-ink hover:bg-surface-soft'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={15} className="opacity-70" />
                </a>
              ))}
            </div>

            <div className="pt-2.5 border-t border-hairline flex flex-col gap-2">
              <a
                href={portfolioData.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-secondary w-full justify-center py-2.5 text-xs font-semibold"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="btn-pill-primary w-full justify-center py-2.5 text-xs font-semibold"
              >
                <Send size={14} />
                <span>Let's Talk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
