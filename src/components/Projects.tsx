import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, ArrowRight, FileText, MapPin, Code2, Search, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const trackFlow = PROJECTS.find((p) => p.id === 'trackflow') || PROJECTS[0];
  const invoiceGen = PROJECTS.find((p) => p.id === 'invoice-generator');
  const localGuide = PROJECTS.find((p) => p.id === 'local-guide');
  const portfolioProj = PROJECTS.find((p) => p.id === 'portfolio');

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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-xs font-mono-meta font-semibold text-purple-700 uppercase tracking-widest">
                05 / Selected Work
              </span>
            </div>

            <h2
              id="work-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4 leading-tight"
            >
              Things I've Built<span className="text-purple-600">.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Real projects built to explore practical software workflows, link tracking data architectures, and client-side utilities.
            </p>
          </div>

          <a
            href="https://github.com/jayanarasimha275"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-purple-700 transition-colors pb-1 border-b border-zinc-300 hover:border-purple-600 self-start sm:self-end"
          >
            <span>All repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Case Studies Container */}
        <div className="space-y-12 sm:space-y-16">

          {/* ============================================================ */}
          {/* 01 — TRACKFLOW (FEATURED PROJECT) */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-3xl border border-zinc-200/90 shadow-2xs hover:border-purple-300 hover:shadow-sm transition-all overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Visual Column */}
              <div className="lg:col-span-7 bg-[#fafafc] p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-zinc-200/80 flex flex-col justify-between">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 text-xs font-mono-meta text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <span className="ml-2 text-zinc-600 truncate max-w-[180px] sm:max-w-none">trackflow-dashboard.vercel.app</span>
                  </div>
                  <span className="text-purple-700 font-semibold flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                    Live Deployment
                  </span>
                </div>

                {/* Visual Representation */}
                <div className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-6 shadow-2xs group-hover:border-purple-200 transition-all">
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5">
                    <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100">
                      <span className="text-[10px] font-mono-meta text-purple-700 uppercase block font-semibold mb-0.5">
                        Routing
                      </span>
                      <span className="text-sm sm:text-base font-bold text-zinc-900 block">
                        Active
                      </span>
                      <span className="text-[10px] text-zinc-500">Live Traffic</span>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100">
                      <span className="text-[10px] font-mono-meta text-purple-700 uppercase block font-semibold mb-0.5">
                        Offers
                      </span>
                      <span className="text-sm sm:text-base font-bold text-zinc-900 block">
                        Campaigns
                      </span>
                      <span className="text-[10px] text-zinc-500">Configured</span>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100">
                      <span className="text-[10px] font-mono-meta text-purple-700 uppercase block font-semibold mb-0.5">
                        Backend
                      </span>
                      <span className="text-sm sm:text-base font-bold text-zinc-900 block truncate">
                        linktrackback
                      </span>
                      <span className="text-[10px] text-zinc-500">Routing Logic</span>
                    </div>
                  </div>

                  {/* Workflow list */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-zinc-200">
                      <span className="font-semibold text-zinc-800">Campaign / Offer Workflow</span>
                      <span className="text-zinc-500 font-mono-meta text-[10px]">Telemetry Engine</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-zinc-200/70 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                        <span className="font-medium text-zinc-900 truncate">Affiliate Referral Path A</span>
                      </div>
                      <span className="text-purple-700 font-mono-meta text-[10px] font-semibold shrink-0">Active Route</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-zinc-200/70 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-zinc-400 shrink-0" />
                        <span className="font-medium text-zinc-900 truncate">Campaign Link Tracker B</span>
                      </div>
                      <span className="text-zinc-500 font-mono-meta text-[10px] shrink-0">Parameter Logged</span>
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
              <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-zinc-100">
                    <span className="font-mono-meta text-xs font-bold text-purple-700 tracking-wider">
                      01 / Featured Project
                    </span>
                    <span className="text-[11px] font-semibold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                      {trackFlow.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-1.5 tracking-tight">
                    {trackFlow.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-purple-700 mb-4">
                    {trackFlow.subtitle}
                  </p>

                  <p className="text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                    {trackFlow.description}
                  </p>

                  <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                    Engineered with live offer management and dashboard telemetry, paired with a dedicated GitHub backend repository (<span className="text-zinc-800 font-medium font-mono-meta">linktrackback</span>) for link routing logic.
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {trackFlow.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-mono-meta text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-zinc-100 flex flex-wrap items-center gap-3">
                  {trackFlow.liveUrl && (
                    <a
                      id="trackflow-live-link"
                      href={trackFlow.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-all shadow-2xs active:scale-95"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:border-purple-300 hover:text-purple-700 font-semibold text-xs transition-all active:scale-95 shadow-2xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Backend</span>
                    </a>
                  )}

                  <button
                    id="trackflow-overview-btn"
                    onClick={() => onSelectProject(trackFlow)}
                    className="text-xs text-zinc-500 hover:text-purple-700 transition-colors ml-auto flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 02 — INVOICE GENERATOR */}
          {/* ============================================================ */}
          {invoiceGen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-3xl border border-zinc-200/90 shadow-2xs hover:border-purple-300 hover:shadow-sm transition-all overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual Column: Invoice Receipt Graphic */}
                <div className="lg:col-span-7 bg-[#fafafc] p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-zinc-200/80 flex flex-col justify-between">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 text-xs font-mono-meta text-zinc-500">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold text-zinc-700">Receipt #INV-2026-08</span>
                    </div>
                    <span className="text-purple-700 font-semibold flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Print &amp; PDF Ready
                    </span>
                  </div>

                  {/* Visual: Simulated Invoice Sheet */}
                  <div className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-6 shadow-2xs group-hover:border-purple-200 transition-all font-sans text-xs">
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-100">
                      <div>
                        <span className="text-[10px] font-mono-meta text-zinc-400 uppercase tracking-wider block">Billed To</span>
                        <span className="font-bold text-zinc-900">Client / Organization</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono-meta text-zinc-400 uppercase tracking-wider block">Date</span>
                        <span className="font-mono-meta text-zinc-600">Calculated Dynamically</span>
                      </div>
                    </div>

                    {/* Table-like row */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-[11px] font-mono-meta text-zinc-400 pb-1 border-b border-zinc-100">
                        <span>Description</span>
                        <span>Amount</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-800 font-medium py-1">
                        <span>Development &amp; Interface Engineering</span>
                        <span className="font-mono-meta font-bold text-zinc-900">$1,200.00</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-800 font-medium py-1">
                        <span>Responsive UI System &amp; Testing</span>
                        <span className="font-mono-meta font-bold text-zinc-900">$450.00</span>
                      </div>
                    </div>

                    {/* Summary Totals */}
                    <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between text-zinc-500">
                        <span>Subtotal</span>
                        <span className="font-mono-meta">$1,650.00</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-500">
                        <span>Tax / Calculations</span>
                        <span className="font-mono-meta">Auto Computed</span>
                      </div>
                      <div className="flex items-center justify-between font-bold text-zinc-950 pt-1.5 border-t border-zinc-200">
                        <span>Total Balance</span>
                        <span className="font-mono-meta text-purple-700 font-black text-sm">$1,650.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="pt-6 flex items-center justify-between text-xs text-zinc-500 font-mono-meta">
                    <span>Dynamic DOM Updates · Real-Time Calculation</span>
                    <span className="text-purple-700 font-semibold">Utility App</span>
                  </div>
                </div>

                {/* Information Column */}
                <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-zinc-100">
                      <span className="font-mono-meta text-xs font-bold text-zinc-400 tracking-wider">
                        02 / Utility Project
                      </span>
                      <span className="text-[11px] font-semibold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                        {invoiceGen.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-1.5 tracking-tight">
                      {invoiceGen.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-purple-700 mb-4">
                      {invoiceGen.subtitle}
                    </p>

                    <p className="text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                      {invoiceGen.description}
                    </p>

                    <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                      Developed to solve the common need for fast, clean billing documents. Features dynamic item additions, automatic tax calculations, and print-ready formatting.
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {invoiceGen.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-mono-meta text-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-5 border-t border-zinc-100 flex flex-wrap items-center gap-3">
                    {invoiceGen.githubUrl && (
                      <a
                        href={invoiceGen.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-2xs active:scale-95"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject(invoiceGen)}
                      className="text-xs text-zinc-500 hover:text-purple-700 transition-colors ml-auto flex items-center gap-1 font-medium cursor-pointer"
                    >
                      <span>Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* 03 — LOCAL GUIDE */}
          {/* ============================================================ */}
          {localGuide && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-3xl border border-zinc-200/90 shadow-2xs hover:border-purple-300 hover:shadow-sm transition-all overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual Column: Discovery Directory Preview */}
                <div className="lg:col-span-7 bg-[#fafafc] p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-zinc-200/80 flex flex-col justify-between">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 text-xs font-mono-meta text-zinc-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold text-zinc-700">Nearby Place &amp; Service Explorer</span>
                    </div>
                    <span className="text-purple-700 font-semibold">Discovery UI</span>
                  </div>

                  {/* Visual: Search and Place Cards */}
                  <div className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-6 shadow-2xs group-hover:border-purple-200 transition-all font-sans text-xs space-y-3">
                    
                    {/* Fake search bar */}
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-400">
                      <Search className="w-3.5 h-3.5" />
                      <span className="text-zinc-400 font-normal">Search regional spots, amenities, study hubs...</span>
                    </div>

                    {/* Filter pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                      <span className="px-2.5 py-1 rounded-full bg-purple-600 text-white text-[10px] font-semibold shrink-0">All Locations</span>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-medium shrink-0">Essential Services</span>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-medium shrink-0">Campus Spots</span>
                    </div>

                    {/* Spot cards */}
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-zinc-900 block">SRM University-AP Campus Hub</span>
                          <span className="text-[10px] text-zinc-500">Amaravati / Mangalagiri Region</span>
                        </div>
                        <span className="text-[10px] font-mono-meta text-purple-700 font-semibold bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                          Education &amp; Core
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/70 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-zinc-900 block">Regional Transit &amp; Service Centers</span>
                          <span className="text-[10px] text-zinc-500">Accessible Commute &amp; Utilities</span>
                        </div>
                        <span className="text-[10px] font-mono-meta text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                          Active Transit
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Caption */}
                  <div className="pt-6 flex items-center justify-between text-xs text-zinc-500 font-mono-meta">
                    <span>Categorized Exploration Views · Responsive Cards</span>
                    <span className="text-purple-700 font-semibold">Place Discovery</span>
                  </div>
                </div>

                {/* Information Column */}
                <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-zinc-100">
                      <span className="font-mono-meta text-xs font-bold text-zinc-400 tracking-wider">
                        03 / Exploration Project
                      </span>
                      <span className="text-[11px] font-semibold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                        {localGuide.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-1.5 tracking-tight">
                      {localGuide.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-purple-700 mb-4">
                      {localGuide.subtitle}
                    </p>

                    <p className="text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                      {localGuide.description}
                    </p>

                    <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                      Created as an exploratory interface to help users find local spots, services, and community amenities with clean card layouts and intuitive interaction states.
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {localGuide.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-mono-meta text-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-5 border-t border-zinc-100 flex items-center">
                    <button
                      onClick={() => onSelectProject(localGuide)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-2xs active:scale-95 cursor-pointer"
                    >
                      <span>Explore Case Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* 04 — PERSONAL PORTFOLIO */}
          {/* ============================================================ */}
          {portfolioProj && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-3xl border border-zinc-200/90 shadow-2xs hover:border-purple-300 hover:shadow-sm transition-all overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual Column: Code & Architecture Preview */}
                <div className="lg:col-span-7 bg-[#fafafc] p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-zinc-200/80 flex flex-col justify-between">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 text-xs font-mono-meta text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold text-zinc-700">jaya-portfolio / Architecture</span>
                    </div>
                    <span className="text-purple-700 font-semibold">React 19 + TypeScript</span>
                  </div>

                  {/* Visual: Code structure & Architecture preview */}
                  <div className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-6 shadow-2xs group-hover:border-purple-200 transition-all font-mono-meta text-xs space-y-3">
                    <div className="p-3 rounded-xl bg-zinc-900 text-zinc-100 text-[11px] leading-relaxed overflow-hidden">
                      <span className="text-zinc-500">// Editorial Portfolio Architecture</span>
                      <p className="mt-1 text-purple-300">import <span className="text-white">&#123; PERSONAL_INFO, PROJECTS &#125;</span> from <span className="text-emerald-300">'./data'</span>;</p>
                      <p className="text-zinc-300 mt-1">const <span className="text-yellow-300">Portfolio</span> = () =&gt; &#123;</p>
                      <p className="pl-3 text-zinc-400">CGPA: <span className="text-emerald-400">9.10</span>, Degree: <span className="text-purple-300">'B.Tech CSE'</span>,</p>
                      <p className="pl-3 text-zinc-400">Focus: <span className="text-purple-300">'Practical Software &amp; UI/UX Craft'</span></p>
                      <p className="text-zinc-300">&#125;;</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200/70">
                        <span className="text-zinc-400 block text-[10px]">Styling</span>
                        <span className="font-bold text-zinc-900">Tailwind CSS 4</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200/70">
                        <span className="text-zinc-400 block text-[10px]">Motion</span>
                        <span className="font-bold text-zinc-900">Reduced-Motion Safe</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="pt-6 flex items-center justify-between text-xs text-zinc-500 font-mono-meta">
                    <span>Clean Code Architecture · Verified Achievements</span>
                    <span className="text-purple-700 font-semibold">Web Showcase</span>
                  </div>
                </div>

                {/* Information Column */}
                <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-zinc-100">
                      <span className="font-mono-meta text-xs font-bold text-zinc-400 tracking-wider">
                        04 / Portfolio Project
                      </span>
                      <span className="text-[11px] font-semibold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                        {portfolioProj.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-1.5 tracking-tight">
                      {portfolioProj.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-purple-700 mb-4">
                      {portfolioProj.subtitle}
                    </p>

                    <p className="text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                      {portfolioProj.description}
                    </p>

                    <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                      Designed with an editorial, typography-first aesthetic. Emphasizes honest academic storytelling, verified technical skills, generous whitespace, and subtle interactions.
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {portfolioProj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-[11px] font-mono-meta text-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-5 border-t border-zinc-100 flex flex-wrap items-center gap-3">
                    {portfolioProj.githubUrl && (
                      <a
                        href={portfolioProj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-2xs active:scale-95"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProject(portfolioProj)}
                      className="text-xs text-zinc-500 hover:text-purple-700 transition-colors ml-auto flex items-center gap-1 font-medium cursor-pointer"
                    >
                      <span>Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
