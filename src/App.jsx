import React from 'react';
import Navbar from './components/Navbar';
import MarqueeStrip from './components/MarqueeStrip';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificatesSection from './components/CertificatesSection';
import InteractivePlayground from './components/InteractivePlayground';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-accent-magenta selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 00. Hero Section */}
        <Hero />

        {/* Marquee Tech Ribbon */}
        <MarqueeStrip />

        {/* 01. About & Architecture (Lilac) */}
        <AboutSection />

        {/* 02. Skills & Capabilities (Mint) */}
        <SkillsSection />

        {/* 03. Experience & Journey (Navy) */}
        <ExperienceSection />

        {/* 04. Selected Works & Projects (Canvas & Coral) */}
        <ProjectsSection />

        {/* 05. Certificates & Verification (Cream) */}
        <CertificatesSection />

        {/* Interactive FigJam Sticky Note Collage */}
        <InteractivePlayground />

        {/* 06. Contact & Systems (Lime) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
