import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // WIB is UTC+7
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' WIB');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-canvas border-t border-hairline py-10 sm:py-14 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 pb-8 sm:pb-10 border-b border-hairline">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                  DR
                </span>
                <span className="text-xl font-bold text-black tracking-tight">
                  {portfolioData.personal.name}
                </span>
              </div>
              <p className="text-sm text-neutral-600 max-w-sm leading-relaxed mb-6">
                Fullstack Developer combining robust engineering fundamentals with modern AI workflows to craft thoughtful digital experiences.
              </p>
            </div>

            {/* Live Clock Widget */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-soft border border-hairline text-xs font-mono text-neutral-600 w-fit">
              <span className="w-2 h-2 rounded-full bg-semantic-success animate-pulse"></span>
              <span>Kota Bekasi, ID: {time || 'Loading...'}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <h4 className="caption-mono text-neutral-400 font-semibold mb-4">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-black transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="caption-mono text-neutral-400 font-semibold mb-4">
                CONNECT
              </h4>
              <div className="flex items-center gap-2 mb-6">
                <a
                  href="https://github.com/DimassRfyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon-circle"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-dimas-rafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon-circle"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="https://wa.me/6282130869378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon-circle"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon size={18} />
                </a>
                <a
                  href="https://www.instagram.com/dimass_rfyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon-circle"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="btn-pill-secondary text-xs py-2 px-4 flex items-center justify-between w-full group"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Muhammad Dimas Rafi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 19, Tailwind CSS & Figma Editorial Design System
          </p>
        </div>
      </div>
    </footer>
  );
}
