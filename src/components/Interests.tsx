import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Globe, Palette, Code2, ArrowUpRight } from 'lucide-react';

const BUILDING_AREAS = [
  {
    number: "01",
    title: "SOFTWARE DEVELOPMENT",
    description: "Building practical applications and strengthening programming fundamentals.",
    icon: Terminal,
    tags: ["Modular Architecture", "Clean Logic", "Practical Tools"]
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description: "Creating useful and responsive web applications.",
    icon: Globe,
    tags: ["Semantic HTML", "Modern CSS", "Interactive Web"]
  },
  {
    number: "03",
    title: "UI/UX",
    description: "Exploring interface design, usability, and visual presentation.",
    icon: Palette,
    tags: ["Typography Hierarchy", "Pristine Spacing", "Design Ergonomics"]
  },
  {
    number: "04",
    title: "PROBLEM SOLVING",
    description: "Developing stronger programming and algorithmic thinking through C, C++, Python and Java.",
    icon: Code2,
    tags: ["C / C++", "Python & Java", "Algorithmic Foundations"]
  }
];

export const Interests: React.FC = () => {
  return (
    <section
      id="building"
      className="py-24 sm:py-32 bg-[#fcfcfd] border-b border-zinc-200/80 relative"
      aria-labelledby="building-heading"
    >
      <span id="exploring" className="sr-only" aria-hidden="true" />
      <span id="interests" className="sr-only" aria-hidden="true" />

      {/* Subtle decorative purple tile */}
      <div 
        className="absolute bottom-16 right-[12%] w-16 h-16 bg-purple-500/5 border border-purple-300/20 rounded-sm pointer-events-none hidden lg:block" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-purple-700 uppercase">
              Areas of Focus
            </span>
          </div>

          <h2
            id="building-heading"
            className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 mb-5 leading-none"
          >
            WHAT I'M BUILDING<span className="text-purple-600">.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            The core engineering disciplines and design craft I explore daily through coursework, independent builds, and problem solving.
          </p>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUILDING_AREAS.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/90 shadow-xs hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle soft purple highlight in the background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/50 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-100/50 transition-colors" />

                <div>
                  {/* Card Top: Number and Icon */}
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-100">
                    <span className="font-display text-3xl sm:text-4xl font-black text-zinc-300 group-hover:text-purple-600 transition-colors tracking-tight">
                      {area.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/80 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title in bold uppercase */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight group-hover:text-purple-900 transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8">
                    {area.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/70 text-xs font-mono-meta text-zinc-700 group-hover:border-purple-200 group-hover:bg-purple-50/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
