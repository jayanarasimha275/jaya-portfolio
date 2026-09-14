import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const Academics: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-24 sm:py-28 lg:py-32 bg-white border-b border-zinc-200/80 relative overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <span id="academics" className="sr-only" aria-hidden="true" />

      {/* Decorative background grid tile */}
      <div 
        className="absolute top-20 left-[6%] w-16 h-16 bg-purple-500/10 border border-purple-400/20 rounded-md pointer-events-none hidden md:block" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Large Typography */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-xs font-mono-meta font-semibold text-purple-700 uppercase tracking-widest">
              02 / Academic Journey
            </span>
          </div>

          <h2
            id="journey-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-zinc-950 mb-4 leading-tight"
          >
            My Journey<span className="text-purple-600">.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            A chronological timeline of academic performance, mathematical foundations, and ongoing computer science studies at SRM University-AP.
          </p>
        </div>

        {/* Visual Timeline Layout */}
        <div className="relative">
          {/* Subtle horizontal timeline track for larger screens */}
          <div className="hidden lg:block absolute top-24 left-8 right-8 h-[1px] bg-purple-100/90 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {JOURNEY_MILESTONES.map((milestone, idx) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-[#fafafc] rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-zinc-200/90 shadow-[0_2px_10px_rgba(20,20,40,0.025)] hover:border-purple-300 hover:shadow-[0_16px_36px_-8px_rgba(124,58,237,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step indicator & Period */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-200/80">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-semibold flex items-center justify-center font-mono-meta shadow-2xs">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-mono-meta font-semibold text-purple-700 uppercase tracking-wider">
                        {milestone.period}
                      </span>
                    </div>

                    {milestone.active ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100/80 text-purple-800 border border-purple-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                        Current
                      </span>
                    ) : (
                      <span className="text-xs font-mono-meta text-zinc-400">Completed</span>
                    )}
                  </div>

                  {/* Metric Display */}
                  <div className="mb-5">
                    <div className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-1 group-hover:text-purple-700 transition-colors">
                      {milestone.metric}
                    </div>
                    <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider font-mono-meta">
                      {milestone.metricLabel}
                    </div>
                  </div>

                  {/* Milestone Title */}
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2 tracking-tight">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                    {milestone.description}
                  </p>
                </div>

                {/* Institution Footer */}
                <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-medium text-zinc-700">{milestone.institution}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verification & Context Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#fafafc] border border-zinc-200/90 shadow-[0_2px_8px_rgba(20,20,40,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-2xs">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900">
                Department of Computer Science and Engineering
              </p>
              <p className="text-xs text-zinc-500">
                SRM University-AP, Mangalagiri · 9.10 CGPA specifically represents First-Year Academic Performance
              </p>
            </div>
          </div>

          <div className="text-xs font-mono-meta text-purple-800 font-semibold sm:text-right bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100 self-start sm:self-auto">
            Class of 2028
          </div>
        </div>

      </div>
    </section>
  );
};
