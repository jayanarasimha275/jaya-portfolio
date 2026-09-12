import React from 'react';
import { motion } from 'motion/react';
import { Code2, Globe, Terminal, Palette } from 'lucide-react';

const SKILL_SECTIONS = [
  {
    title: 'PROGRAMMING',
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
    title: 'WEB',
    icon: Globe,
    description: 'Client-side web fundamentals for building responsive web apps.',
    skills: [
      { name: 'HTML', detail: 'Semantic structuring, document accessibility, and forms' },
      { name: 'CSS', detail: 'Modern Flexbox, Grid, responsive layouts, and clean styling' },
    ],
  },
  {
    title: 'TOOLS',
    icon: Terminal,
    description: 'Version control and collaboration platforms for codebases.',
    skills: [
      { name: 'Git', detail: 'Branching, commit history, staging, and local workflows' },
      { name: 'GitHub', detail: 'Remote repositories, documentation, and project hosting' },
    ],
  },
  {
    title: 'DESIGN',
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
      className="py-24 sm:py-32 bg-white border-b border-zinc-200/80 relative"
      aria-labelledby="skills-heading"
    >
      {/* Decorative soft purple block */}
      <div 
        className="absolute top-16 left-[10%] w-16 h-16 bg-purple-500/5 border border-purple-300/20 rounded-sm pointer-events-none hidden md:block" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-purple-700 uppercase">
              Toolkit &amp; Capabilities
            </span>
          </div>

          <h2
            id="skills-heading"
            className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 mb-5 leading-none"
          >
            SKILLS<span className="text-purple-600">.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Verified technologies and tools I actively practice across coursework, personal applications, and interface experiments.
          </p>
        </div>

        {/* 4 Clean Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_SECTIONS.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-[#fafafc] rounded-3xl p-7 sm:p-8 border border-zinc-200/90 shadow-xs hover:border-purple-300 hover:shadow-md hover:shadow-purple-500/5 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="pb-5 mb-6 border-b border-zinc-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-display text-sm font-bold text-zinc-900 tracking-wider">
                        {section.title}
                      </h3>
                    </div>
                    <span className="font-mono-meta text-xs text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Skills inside category */}
                  <div className="space-y-3">
                    {section.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 group-hover:border-purple-100 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-zinc-900">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                        </div>
                        <p className="text-xs text-zinc-500 leading-snug font-light">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200/80 text-[11px] font-mono-meta text-purple-700 font-semibold">
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
