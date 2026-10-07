import React from 'react';
import { X, ExternalLink, Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function ExperienceModal({ exp, onClose }) {
  if (!exp) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-black/20 shadow-2xl max-h-[90vh] flex flex-col animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-hairline bg-surface-soft">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
              <Briefcase size={18} />
            </div>
            <div>
              <span className="caption-mono text-neutral-500 text-[10px] block mb-1">
                WORK EXPERIENCE DETAILS
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-black tracking-tight leading-snug">
                {exp.role}
              </h2>
              <p className="text-sm font-semibold text-neutral-800">
                {exp.organization}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-hairline flex items-center justify-center hover:bg-black hover:text-white transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
          {/* Metadata badges & Links */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-surface-soft border border-hairline text-xs font-mono">
            <div className="flex flex-wrap items-center gap-3 text-neutral-600">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-black" />
                <span>{exp.period}</span>
              </span>
              {exp.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-black" />
                  <span>{exp.location}</span>
                </span>
              )}
            </div>

            {/* External Links: LinkedIn & Website */}
            <div className="flex items-center gap-2">
              {exp.linkedin && (
                <a
                  href={exp.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-full bg-white border border-hairline hover:bg-black hover:text-white transition-colors flex items-center gap-1 text-[11px] text-black"
                >
                  <LinkedinIcon size={12} />
                  <span>LinkedIn</span>
                </a>
              )}
              {exp.website && (
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-full bg-white border border-hairline hover:bg-black hover:text-white transition-colors flex items-center gap-1 text-[11px] text-black"
                >
                  <ExternalLink size={12} />
                  <span>Website</span>
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
              Overview
            </h4>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>

          {/* Key Responsibilities / Contributions */}
          {exp.responsibilities && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-black font-semibold mb-2.5">
                Key Responsibilities & Highlights
              </h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                    <CheckCircle2 size={15} className="text-semantic-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack / Tags */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full bg-surface-soft border border-hairline text-[11px] font-mono text-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-hairline bg-surface-soft/60 flex items-center justify-between">
          <span className="text-[11px] font-mono text-neutral-500">
            Esc to close
          </span>
          <button
            onClick={onClose}
            className="btn-pill-primary text-xs py-2 px-5"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
