import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, ArrowRight, Layers, FileSpreadsheet, MapPin } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const trackFlow = PROJECTS.find((p) => p.id === 'trackflow') || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => p.id !== 'trackflow');

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#fcfcfd] border-b border-zinc-200/80 relative"
      aria-labelledby="work-heading"
    >
      <span id="projects" className="sr-only" aria-hidden="true" />

      {/* Subtle decorative purple tile */}
      <div 
        className="absolute top-24 right-[10%] w-16 h-16 bg-purple-500/5 border border-purple-300/20 rounded-sm pointer-events-none hidden lg:block" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-xs font-bold tracking-[0.2em] text-purple-700 uppercase">
                Selected Work
              </span>
            </div>

            <h2
              id="work-heading"
              className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 mb-5 leading-none"
            >
              THINGS I'VE BUILT<span className="text-purple-600">.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Real projects built to explore practical software workflows, link tracking data architectures, and client-side utilities.
            </p>
          </div>

          <a
            href="https://github.com/jayanarasimha275"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-purple-600 transition-colors pb-1 border-b border-zinc-300 hover:border-purple-600 self-start sm:self-end"
          >
            <span>All repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ============================================================ */}
        {/* 01 — TRACKFLOW (FEATURED PROJECT - LARGE EDITORIAL PRESENTATION) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-zinc-200/90 shadow-sm hover:border-purple-300 transition-all overflow-hidden mb-16 sm:mb-20 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Column: Large Prominent View */}
            <div className="lg:col-span-7 bg-[#fafafc] p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-zinc-200/80 flex flex-col justify-between">
              
              {/* Browser-like window header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 text-xs font-mono-meta text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <span className="ml-2 text-zinc-600">trackflow-dashboard.vercel.app</span>
                </div>
                <span className="text-purple-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  Live Deployment
                </span>
              </div>

              {/* Mockup / Image Area */}
              <div className="rounded-2xl bg-white border border-zinc-200 p-6 shadow-xs relative overflow-hidden group-hover:shadow-md group-hover:border-purple-200 transition-all">
                {/* Visual Representation of TrackFlow's telemetry and offer management */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                    <span className="text-[10px] font-mono-meta text-purple-700 uppercase block font-semibold mb-0.5">
                      Routing
                    </span>
                    <span className="text-base font-bold text-zinc-900 block">
                      Active
                    </span>
                    <span className="text-[11px] text-zinc-500">Live Traffic</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                    <span className="text-[10px] font-mono-meta text-purple-700 uppercase block font-semibold mb-0.5">
                      Offers
                    </span>
                    <span className="text-base font-bold text-zinc-900 block">
                      Campaigns
                    </span>
                    <span className="text-[11px] text-zinc-500">Configured</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                    <span className="text-[10px] font-mono-meta text-purple-700 uppercase block font-semibold mb-0.5">
                      Backend
                    </span>
                    <span className="text-base font-bold text-zinc-900 block">
                      linktrackback
                    </span>
                    <span className="text-[11px] text-zinc-500">Routing Logic</span>
                  </div>
                </div>

                {/* Workflow list */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-zinc-200">
                    <span className="font-semibold text-zinc-800">Campaign / Offer Workflow</span>
                    <span className="text-zinc-500 font-mono-meta text-[11px]">Telemetry Engine</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-zinc-200/70 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      <span className="font-medium text-zinc-900">Affiliate Referral Path A</span>
                    </div>
                    <span className="text-purple-700 font-mono-meta text-[11px] font-semibold">Active Route</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-zinc-200/70 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-400" />
                      <span className="font-medium text-zinc-900">Campaign Link Tracker B</span>
                    </div>
                    <span className="text-zinc-500 font-mono-meta text-[11px]">Parameter Logged</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="pt-6 flex items-center justify-between text-xs text-zinc-500 font-mono-meta">
                <span>Vercel Client · Express Backend</span>
                <span className="text-purple-700 font-semibold">Featured Build</span>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-100">
                  <span className="font-display text-2xl font-black text-purple-600">
                    01 — TRACKFLOW
                  </span>
                  <span className="text-xs font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                    Featured Project
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 mb-2 tracking-tight">
                  {trackFlow.title}
                </h3>

                <p className="text-sm sm:text-base font-medium text-purple-700 mb-4">
                  {trackFlow.subtitle}
                </p>

                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                  Affiliate/link tracking dashboard focused on managing tracking data, offers and campaign-related workflows.
                </p>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-6">
                  Engineered with live offer management and dashboard functionality, paired with a dedicated GitHub backend repository (<span className="text-zinc-800 font-medium font-mono-meta">linktrackback</span>) for link routing logic.
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {trackFlow.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-mono-meta text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Clearly Distinguishable Live Demo vs Backend */}
              <div className="pt-6 border-t border-zinc-100 flex flex-wrap items-center gap-3.5">
                {trackFlow.liveUrl && (
                  <a
                    id="trackflow-live-link"
                    href={trackFlow.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-all shadow-sm active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {trackFlow.backendUrl && (
                  <a
                    id="trackflow-backend-link"
                    href={trackFlow.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:border-purple-400 hover:text-purple-700 font-semibold text-xs transition-all active:scale-95 shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Backend (GitHub)</span>
                  </a>
                )}

                <button
                  id="trackflow-overview-btn"
                  onClick={() => onSelectProject(trackFlow)}
                  className="text-xs text-zinc-500 hover:text-purple-600 transition-colors ml-auto flex items-center gap-1 font-medium cursor-pointer"
                >
                  <span>Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* REMAINING PROJECTS (LARGE EDITORIAL SECTIONS) */}
        {/* ============================================================ */}
        <div className="space-y-8">
          {secondaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/90 shadow-xs hover:border-purple-300 hover:shadow-md hover:shadow-purple-500/5 transition-all group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Number & Category */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-zinc-300 group-hover:text-purple-600 transition-colors">
                    0{idx + 2}
                  </span>
                  <span className="text-xs font-mono-meta text-purple-700 font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-7">
                  <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-3 tracking-tight group-hover:text-purple-900 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-[11px] font-mono-meta text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col items-start lg:items-end justify-between lg:justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-zinc-100">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-zinc-500 hover:text-purple-700 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 hover:bg-purple-700 text-white font-medium text-xs transition-all active:scale-95 shadow-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs transition-all active:scale-95 shadow-xs"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
