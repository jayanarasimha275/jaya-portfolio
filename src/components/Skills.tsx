import React from 'react';
import { motion } from 'motion/react';
import { Code2, Globe, Terminal, Palette } from 'lucide-react';

const SKILL_SECTIONS = [
  {
    title: 'Programming',
    icon: Code2,
    description: 'Core procedural, object-oriented, and algorithmic languages.',
    skills: [
      { name: 'C', detail: 'Procedural foundations, pointers, and memory mechanics' },
      { name: 'C++', detail: 'Object-oriented programming, standard structures, and logic' },
      { name: 'Python', detail: 'Scripting, algorithmic problem solving, and data utilities' },
      { name: 'Java', detail: 'Object-oriented design principles and class structures' },
    ],
  },
  {
    title: 'Web',
    icon: Globe,
    description: 'Client-side web fundamentals for building responsive web apps.',
    skills: [
      { name: 'HTML', detail: 'Semantic structuring, document accessibility, and forms' },
      { name: 'CSS', detail: 'Modern Flexbox, Grid, responsive layouts, and clean styling' },
    ],
  },
  {
    title: 'Tools',
    icon: Terminal,
    description: 'Version control and collaboration platforms for codebases.',
    skills: [
      { name: 'Git', detail: 'Branching, commit history, staging, and local workflows' },
      { name: 'GitHub', detail: 'Remote repositories, documentation, and project hosting' },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    description: 'User-centered interface principles and visual layout ergonomics.',
    skills: [
      { name: 'UI/UX', detail: 'Visual hierarchy, typography, intentional whitespace, and clarity' },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 sm:py-28 lg:py-32 bg-white border-b border-zinc-200/80 relative"
      aria-labelledby="skills-heading"
    >
      {/* Decorative soft purple block */}
      <div 
        className="absolute top-16 left-[10%] w-16 h-16 bg-purple-500/10 border border-purple-400/20 rounded-md pointer-events-none hidden md:block" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-mono-meta font-semibold text-purple-700 uppercase tracking-widest">
              04 / Toolkit &amp; Capabilities
            </span>
          </div>

          <h2
            id="skills-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-zinc-950 mb-4 leading-tight"
          >
            Skills<span className="text-purple-600">.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Verified technologies and tools I actively practice across coursework, personal applications, and interface experiments.
          </p>
        </div>

        {/* 4 Clean Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SKILL_SECTIONS.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-[#fafafc] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-zinc-200/90 shadow-[0_2px_10px_rgba(20,20,40,0.025)] hover:border-purple-300 hover:shadow-[0_16px_36px_-8px_rgba(124,58,237,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="pb-4 mb-5 border-b border-zinc-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shadow-2xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-sm font-bold text-zinc-950 tracking-normal">
                        {section.title}
                      </h3>
                    </div>
                    <span className="font-mono-meta text-xs text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500 mb-5 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Skills inside category */}
                  <div className="space-y-2.5">
                    {section.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white border border-zinc-200/70 hover:border-purple-200/90 hover:shadow-2xs transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-zinc-900">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600/70" />
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-normal font-normal">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-200/80 text-[11px] font-mono-meta text-purple-700 font-semibold">
                  {section.skills.length} {section.skills.length === 1 ? 'Technology' : 'Technologies'}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
