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
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-28 flex flex-col justify-between items-center bg-grid-pattern border-b border-zinc-200/80 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Decorative soft purple blocks placed along the grid */}
      <div 
        className="absolute top-24 left-[12%] w-16 h-16 bg-purple-500/10 border border-purple-400/20 rounded-sm pointer-events-none hidden sm:block" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-[10%] w-16 h-16 bg-purple-600/10 border border-purple-400/20 rounded-sm pointer-events-none hidden md:block" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-28 left-[18%] w-16 h-16 bg-purple-400/10 border border-purple-300/20 rounded-sm pointer-events-none hidden lg:block" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 left-[6%] w-16 h-16 bg-purple-500/5 border border-purple-300/10 rounded-sm pointer-events-none hidden xl:block" 
        aria-hidden="true" 
      />

      {/* Floating vertical social buttons on the left (Wide Desktop) */}
      <aside 
        className="hidden xl:flex fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-md shadow-zinc-900/5"
        aria-label="Social media channels"
      >
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-zinc-600 hover:text-purple-600 hover:bg-purple-50 transition-all group relative"
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
          className="p-2 rounded-full text-zinc-600 hover:text-purple-600 hover:bg-purple-50 transition-all group relative"
          aria-label="LinkedIn profile"
        >
          <Linkedin className="w-4 h-4" />
          <span className="absolute left-full ml-3 px-2 py-1 rounded bg-zinc-900 text-white text-[10px] font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
            LinkedIn
          </span>
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="p-2 rounded-full text-zinc-600 hover:text-purple-600 hover:bg-purple-50 transition-all group relative"
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center relative z-10 text-center py-6 sm:py-10">
        
        {/* Subtle Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-2xs mb-6 sm:mb-8"
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
          className="relative mb-6 sm:mb-8 group"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-zinc-200 to-purple-200/60 shadow-lg shadow-purple-500/5">
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
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </span>
        </motion.div>

        {/* Balanced, Strong Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 max-w-3xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.08]">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-base sm:text-xl text-zinc-700 font-medium tracking-tight max-w-2xl mx-auto leading-snug pt-1">
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
          className="flex flex-wrap items-center justify-center gap-3 pt-7 sm:pt-8"
        >
          <button
            id="hero-explore-work-btn"
            onClick={onExploreProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 hover:bg-purple-700 text-white font-medium text-sm transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <span>Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            id="hero-get-in-touch-btn"
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:border-purple-300 hover:text-purple-700 font-medium text-sm transition-all shadow-2xs active:scale-95"
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
          className="flex flex-wrap items-center justify-center gap-2.5 pt-8 sm:pt-10 text-xs text-zinc-500"
        >
          <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 font-mono-meta">
            SRM University-AP · 2nd Year
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 font-mono-meta">
            C, C++, Python, Java
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 font-mono-meta">
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
