import React, { useState } from 'react';
import { Eye, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState(null);
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-8 sm:py-14 md:py-18 bg-canvas">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Signature Cream Color Block Section */}
        <div className="bg-block-cream text-ink rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 border border-black/10 shadow-sm relative overflow-hidden">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-5 sm:mb-7">
            <span className="eyebrow-mono bg-white/70 px-2.5 py-0.5 rounded-full text-black inline-block mb-2 border border-black/10">
              // 05. CERTIFICATES
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ink tracking-tight">
              Licenses & Certifications
            </h2>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setActiveCert(cert)}
                className="bg-white rounded-xl sm:rounded-2xl border border-black/10 hover:border-black/30 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer flex flex-col group hover:-translate-y-0.5"
              >
                {/* Certificate Thumbnail Preview */}
                <div className="relative aspect-[4/3] bg-surface-soft overflow-hidden p-2.5 border-b border-hairline">
                  <div className="w-full h-full rounded-lg overflow-hidden border border-hairline bg-white shadow-inner relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = '/images/rakamin-certificate.png';
                      }}
                    />
                    
                    {/* Hover hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1 rounded-full bg-white text-black text-[11px] font-mono font-medium flex items-center gap-1.5 shadow-md">
                        <Eye size={12} /> View Certificate
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="caption-mono text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-surface-soft border border-hairline text-neutral-600">
                        {cert.issuer}
                      </span>
                      <span className="caption-mono text-[9px] sm:text-[10px] text-neutral-500">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-black tracking-tight mb-1 group-hover:text-black">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-hairline flex items-center justify-between">
                    <span className="text-[11px] font-mono text-black font-semibold flex items-center gap-1">
                      <CheckCircle size={12} className="text-semantic-success" />
                      <span>{cert.badge}</span>
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 group-hover:text-black transition-colors">
                      Inspect →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <CertificateModal
          certificate={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}
