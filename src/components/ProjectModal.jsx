import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden border border-black/20 shadow-2xl max-h-[90vh] flex flex-col animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-hairline bg-surface-soft">
          <div className="flex items-center gap-3">
            <span className="caption-mono px-2.5 py-1 rounded-full bg-black text-white text-[11px]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-500">
              PROJECT OVERVIEW
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

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Image preview */}
          <div className="rounded-2xl overflow-hidden border border-hairline bg-neutral-100 aspect-video relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/images/project2.png';
              }}
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
              {project.title}
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div className="bg-surface-soft rounded-2xl p-5 border border-hairline">
              <h4 className="font-mono text-xs uppercase tracking-wider text-black font-semibold mb-3 flex items-center gap-2">
                <Layers size={14} /> Key Architecture & Features
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                    <CheckCircle2 size={16} className="text-semantic-success shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white border border-black/15 text-xs font-mono font-medium text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-6 border-t border-hairline bg-surface-soft/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary text-sm py-2 px-5 flex items-center gap-2"
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-secondary text-sm py-2 px-5 flex items-center gap-2"
              >
                <GithubIcon size={15} />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
          >
            Close Esc
          </button>
        </div>
      </div>
    </div>
  );
}
