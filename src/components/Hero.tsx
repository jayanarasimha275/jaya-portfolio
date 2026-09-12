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

      {/* Floating vertical social buttons on the left (Desktop) */}
      <aside 
        className="hidden md:flex fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-md shadow-zinc-900/5"
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

      {/* Main Content Area: Editorial Poster Composition */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center relative z-10 text-center">
        
        {/* Subtle Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-xs mb-4 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-zinc-700 uppercase">
            SRM University-AP · 2nd Year B.Tech CSE
          </span>
        </motion.div>

        {/* Central Editorial Poster: Huge Typography Interacting with Center Portrait */}
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center my-4 sm:my-8">
          
          {/* Top Huge Heading Line */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-zinc-950 uppercase tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] select-none text-center"
          >
            I'M PALLA JAYA
          </motion.h1>

          {/* Centered Editorial Portrait Cutout (Border-free, subtle shadow, transparent gradient bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative -my-5 sm:-my-9 md:-my-13 lg:-my-16 z-20 group"
          >
            <div 
              className="relative w-60 sm:w-72 md:w-80 lg:w-[22rem] aspect-[4/4.8] overflow-hidden filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-[1.01] [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
            >
              <img
                src="/me.png"
                alt="Palla Jaya Narasimha"
                className="w-full h-full object-cover object-top filter contrast-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/profile1.jpg';
                }}
              />
            </div>
          </motion.div>

          {/* Bottom Huge Heading Line with Comfortable Breathing Room */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-zinc-950 uppercase tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] select-none text-center z-10 pt-1 sm:pt-2 pb-2"
          >
            <span className="text-zinc-950">NARASIMHA</span>
            <span className="text-purple-600">.</span>
          </motion.div>
        </div>

        {/* Subtext under the hero poster with generous vertical spacing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="max-w-xl mx-auto mt-8 sm:mt-12 space-y-3"
        >
          <p className="text-base sm:text-lg font-semibold text-zinc-800 tracking-tight">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            Building practical software, learning through real projects, and exploring development and UI/UX.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <button
              id="hero-explore-work-btn"
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium text-sm hover:bg-purple-700 transition-all shadow-md shadow-purple-600/20 active:scale-95 cursor-pointer"
            >
              <span>Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              id="hero-get-in-touch-btn"
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:border-purple-400 hover:text-purple-700 font-medium text-sm transition-all shadow-xs active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-600" />
            </a>
          </div>
        </motion.div>

        {/* Mobile social links banner */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-8 pt-6 border-t border-zinc-200/80 text-xs font-medium text-zinc-600 w-full max-w-xs">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-300">·</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-300">·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-purple-600 flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
