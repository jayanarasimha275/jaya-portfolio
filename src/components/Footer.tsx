import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#fafafc] border-t border-zinc-200 py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity and affiliation */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="font-display text-base font-bold text-zinc-900 tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-zinc-500 font-normal">
            B.Tech CSE Student @ {PERSONAL_INFO.university}
          </p>
        </div>

        {/* Center: Clean direct links */}
        <div className="flex items-center gap-6 text-xs font-medium text-zinc-600">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            GitHub
          </a>
          <span className="text-zinc-300">·</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-zinc-300">·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-purple-600 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Copyright and back to top */}
        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <span>© 2026 {PERSONAL_INFO.name}</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white border border-zinc-200 hover:border-purple-300 text-zinc-600 hover:text-purple-600 transition-colors cursor-pointer shadow-2xs"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
