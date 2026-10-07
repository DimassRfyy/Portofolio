import React from 'react';
import { X, Award, ExternalLink, Calendar } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden border border-black/20 shadow-2xl max-h-[92vh] flex flex-col animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-hairline bg-surface-soft">
          <div className="flex items-center gap-3">
            <span className="caption-mono px-2.5 py-1 rounded-full bg-black text-white text-[11px]">
              {certificate.badge || 'VERIFIED'}
            </span>
            <span className="text-xs font-mono text-neutral-600">
              {certificate.issuer}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-hairline flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col items-center bg-neutral-900/5">
          <div className="rounded-2xl overflow-hidden border border-hairline shadow-md max-h-[60vh] bg-white">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-[60vh] w-auto object-contain"
            />
          </div>

          <div className="mt-6 text-center max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
              {certificate.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-2">
              {certificate.description}
            </p>
            <span className="caption-mono text-xs text-neutral-500">
              Issued by {certificate.issuer} • {certificate.date}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-hairline bg-surface-soft flex items-center justify-between">
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-secondary text-xs py-2 px-4 flex items-center gap-1.5"
          >
            <span>Open High-Res File</span>
            <ExternalLink size={13} />
          </a>
          <button
            onClick={onClose}
            className="btn-pill-primary text-xs py-2 px-5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
