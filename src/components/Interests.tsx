import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Globe, Palette, Code2 } from 'lucide-react';

const BUILDING_AREAS = [
  {
    number: "01",
    title: "Software Development",
    description: "Building practical applications and strengthening programming fundamentals.",
    icon: Terminal,
    tags: ["Modular Architecture", "Clean Logic", "Practical Tools"]
  },
  {
    number: "02",
    title: "Web Development",
    description: "Creating useful and responsive web applications.",
    icon: Globe,
    tags: ["Semantic HTML", "Modern CSS", "Interactive Web"]
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Exploring interface design, usability, and visual presentation.",
    icon: Palette,
    tags: ["Typography Hierarchy", "Pristine Spacing", "Design Ergonomics"]
  },
  {
    number: "04",
    title: "Problem Solving",
    description: "Developing stronger programming and algorithmic thinking through C, C++, Python and Java.",
    icon: Code2,
    tags: ["C / C++", "Python & Java", "Algorithmic Foundations"]
  }
];

export const Interests: React.FC = () => {
  return (
    <section
      id="building"
      className="py-16 sm:py-20 lg:py-24 bg-[#fcfcfd] border-b border-zinc-200/80 relative"
      aria-labelledby="building-heading"
    >
      <span id="exploring" className="sr-only" aria-hidden="true" />
      <span id="interests" className="sr-only" aria-hidden="true" />

      {/* Subtle decorative purple tile */}
      <div 
        className="absolute bottom-16 right-[12%] w-16 h-16 bg-purple-500/10 border border-purple-400/20 rounded-md pointer-events-none hidden lg:block" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-mono-meta font-semibold text-purple-700 uppercase tracking-widest">
              03 / Areas of Focus
            </span>
          </div>

          <h2
            id="building-heading"
            className="font-display text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-zinc-950 mb-3.5 leading-tight"
          >
            What I'm Building<span className="text-purple-600">.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            The core engineering disciplines and design craft I explore daily through coursework, independent builds, and problem solving.
          </p>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {BUILDING_AREAS.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-[0_2px_12px_rgba(20,20,40,0.03)] hover:border-purple-300 hover:shadow-[0_20px_45px_-8px_rgba(124,58,237,0.09)] hover:-translate-y-1 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle soft purple highlight in the background */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-50/50 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-100/50 transition-colors" />

                <div>
                  {/* Card Top: Number and Icon */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-100">
                    <span className="font-mono-meta text-2xl sm:text-3xl font-bold text-zinc-300 group-hover:text-purple-600 transition-colors">
                      {area.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/80 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-950 mb-2.5 tracking-tight group-hover:text-purple-900 transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-6">
                    {area.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/70 text-xs font-mono-meta text-zinc-700 group-hover:border-purple-200 group-hover:bg-purple-50/60 transition-colors"
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
