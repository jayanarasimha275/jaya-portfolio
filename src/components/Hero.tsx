import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] sm:min-h-screen pt-24 sm:pt-32 pb-14 sm:pb-18 flex flex-col justify-between items-center bg-grid-pattern border-b border-zinc-200/80 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Decorative soft purple blocks placed along the grid */}
      <div 
        className="absolute top-24 left-[12%] w-16 h-16 bg-purple-500/10 border border-purple-400/20 rounded-md pointer-events-none hidden sm:block" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-[10%] w-16 h-16 bg-purple-600/10 border border-purple-400/20 rounded-md pointer-events-none hidden md:block" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-28 left-[18%] w-16 h-16 bg-purple-400/10 border border-purple-300/20 rounded-md pointer-events-none hidden lg:block" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 left-[6%] w-16 h-16 bg-purple-500/5 border border-purple-300/15 rounded-md pointer-events-none hidden xl:block" 
        aria-hidden="true" 
      />

      {/* Floating vertical social buttons on the left (Wide Desktop) */}
      <aside 
        className="hidden xl:flex fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        aria-label="Social media channels"
      >
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-zinc-600 hover:text-purple-600 hover:bg-purple-50 hover:-translate-y-0.5 transition-all group relative"
          aria-label="GitHub profile"
        >
          <Github className="w-4 h-4" />
          <span className="absolute left-full ml-3 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
            GitHub
          </span>
        </a>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-zinc-600 hover:text-purple-600 hover:bg-purple-50 hover:-translate-y-0.5 transition-all group relative"
          aria-label="LinkedIn profile"
        >
          <Linkedin className="w-4 h-4" />
          <span className="absolute left-full ml-3 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
            LinkedIn
          </span>
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="p-2.5 rounded-full text-zinc-600 hover:text-purple-600 hover:bg-purple-50 hover:-translate-y-0.5 transition-all group relative"
          aria-label="Send direct email"
        >
          <Mail className="w-4 h-4" />
          <span className="absolute left-full ml-3 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
            Email Me
          </span>
        </a>

        <div className="w-[1px] h-6 bg-zinc-200 mt-1" />
      </aside>

      {/* Main Content Area: Balanced Editorial Composition */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center relative z-10 text-center py-4 sm:py-6">
        
        {/* Subtle Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] mb-5 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-zinc-800 tracking-tight">
            {PERSONAL_INFO.status}
          </span>
          <span className="text-zinc-300">·</span>
          <span className="text-xs font-mono-meta text-purple-700 font-medium">
            SRM University-AP
          </span>
        </motion.div>

        {/* Refined Portrait: Elegant circular frame with subtle shadow & ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-5 sm:mb-6 group"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-zinc-200 to-purple-200/60 shadow-lg shadow-purple-500/5">
            <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white relative">
              <img
                src="/me.png"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/profile1.jpg';
                }}
              />
            </div>
          </div>
          {/* Subtle online indicator */}
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </span>
        </motion.div>

        {/* Balanced, Strong Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2.5 max-w-3xl"
        >
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-zinc-950 tracking-tight leading-[1.1]">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-base sm:text-lg text-zinc-700 font-semibold tracking-tight max-w-2xl mx-auto leading-snug pt-0.5">
            {PERSONAL_INFO.role} · Exploring Software Engineering &amp; UI/UX
          </p>

          <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto leading-relaxed font-normal pt-1">
            {PERSONAL_INFO.tagline}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-3 pt-6 sm:pt-7"
        >
          <button
            id="hero-explore-work-btn"
            onClick={onExploreProjects}
            className="inline-flex items-center gap-2 px-5.5 py-2.5 rounded-full bg-zinc-950 hover:bg-purple-700 hover:-translate-y-0.5 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs hover:shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            id="hero-get-in-touch-btn"
            href="#contact"
            className="inline-flex items-center gap-2 px-5.5 py-2.5 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:border-purple-300 hover:text-purple-700 hover:-translate-y-0.5 font-semibold text-xs sm:text-sm transition-all shadow-2xs active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-purple-600" />
          </a>
        </motion.div>

        {/* Quick Meta Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 pt-6 sm:pt-7 text-xs text-zinc-600"
        >
          <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 font-mono-meta text-[11px] shadow-2xs">
            SRM University-AP · 2nd Year
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 font-mono-meta text-[11px] shadow-2xs">
            C, C++, Python, Java
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 font-mono-meta text-[11px] shadow-2xs">
            Web &amp; UI/UX Craft
          </span>
        </motion.div>

        {/* Mobile social links banner */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-8 pt-6 border-t border-zinc-200/80 text-xs font-medium text-zinc-600 w-full max-w-xs">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-300">·</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-300">·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-purple-600 flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
