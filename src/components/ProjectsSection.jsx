import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const { projects } = portfolioData;

  const filters = ['All', 'Fullstack', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-10 sm:py-16 md:py-20 bg-canvas border-t border-hairline">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow-mono bg-surface-soft px-2.5 py-0.5 rounded-full text-black inline-block mb-4 border border-hairline">
              // 04. FEATURED PROJECTS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ink tracking-tight">
              Selected Works & Apps
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-surface-soft text-black hover:bg-neutral-200 border border-hairline'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-10 sm:mb-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-hairline hover:border-black/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-0.5"
            >
              {/* Image Frame */}
              <div 
                className="relative aspect-video overflow-hidden bg-surface-soft cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/images/project2.png';
                  }}
                />
                
                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="caption-mono bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] text-black border border-black/10 font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white text-black text-[11px] font-mono font-medium flex items-center gap-1.5 shadow-md">
                    <Eye size={13} /> Quick Preview
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black tracking-tight mb-1.5 group-hover:text-black">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full bg-surface-soft border border-hairline text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-3 border-t border-hairline flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-black hover:underline flex items-center gap-1"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight size={12} />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full hover:bg-surface-soft text-black transition-colors"
                          title="View on GitHub"
                        >
                          <GithubIcon size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full hover:bg-surface-soft text-black transition-colors"
                          title="Open Live Website"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub 30+ Repositories Banner */}
        <div className="bg-block-coral text-ink rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 shadow-sm">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-black/10 flex items-center justify-center shrink-0 shadow-sm">
              <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
                Looking for more open-source code?
              </h3>
              <p className="text-neutral-800 text-xs sm:text-sm mt-0.5">
                Explore 30+ repositories and web experiments on my GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/DimassRfyy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary whitespace-nowrap text-xs sm:text-sm py-2.5 px-5 shadow-sm self-end md:self-auto"
          >
            <span>Lihat 30+ di GitHub →</span>
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
