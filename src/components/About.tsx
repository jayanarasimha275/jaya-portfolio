import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap, MapPin, Code, Palette, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-[#fcfcfd] border-b border-zinc-200/80 relative"
      aria-labelledby="about-heading"
    >
      {/* Decorative subtle grid tile */}
      <div 
        className="absolute top-12 right-[8%] w-16 h-16 bg-purple-500/10 border border-purple-400/20 rounded-md pointer-events-none hidden lg:block" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Asymmetrical Editorial Heading & Quick Meta */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-xs font-mono-meta font-semibold text-purple-700 uppercase tracking-widest">
                01 / About Me
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-display text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-zinc-950 mb-3.5 leading-[1.18]"
            >
              Crafting software through hands-on practice<span className="text-purple-600">.</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
              A developer mindset driven by building functional tools, understanding core programming mechanics, and shaping clean digital interfaces.
            </p>

            {/* Academic Status Card */}
            <div className="w-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 shadow-[0_2px_12px_rgba(20,20,40,0.03)] hover:border-purple-300 hover:shadow-[0_16px_36px_-8px_rgba(124,58,237,0.08)] hover:-translate-y-0.5 transition-all space-y-3.5">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-100/80 text-purple-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-meta text-purple-700 uppercase tracking-wider block font-semibold">
                    Current Institution
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 mt-0.5">SRM University-AP</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{PERSONAL_INFO.degree}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  Mangalagiri, Andhra Pradesh
                </span>
                <span className="font-semibold text-purple-700 font-mono-meta bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-100/60">2nd Year</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Large Typography Callout */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Primary Large Phrase */}
            <div className="p-6 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 shadow-[0_2px_12px_rgba(20,20,40,0.03)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-50/70 rounded-full blur-3xl pointer-events-none" />
              
              <p className="text-base sm:text-lg lg:text-xl font-medium text-zinc-900 leading-snug tracking-tight mb-5">
                "I am a 2nd-year B.Tech Computer Science and Engineering student at SRM University-AP. I enjoy building practical software, learning through hands-on projects, solving programming problems, and exploring both development and UI/UX."
              </p>

              <div className="space-y-3.5 text-zinc-600 text-sm sm:text-[14.5px] leading-relaxed">
                <p>
                  Rather than treating computer science purely as theoretical lectures, I learn fastest by engineering real tools. Whether it is architecting an affiliate link tracking dashboard, crafting client-side billing engines, or structuring algorithmic logic in C++ and Python, each project directly reinforces system mechanics and user ergonomics.
                </p>
                <p>
                  My goal is to bridge robust computer science fundamentals with intentional design—building web applications that are responsive, accessible, and enjoyable to interact with.
                </p>
              </div>
            </div>

            {/* 3 Core Editorial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4.5 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-purple-300 hover:shadow-[0_12px_28px_-8px_rgba(124,58,237,0.07)] hover:-translate-y-0.5 transition-all">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-2.5">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">Practical Code</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Real projects over abstract theory to solidify software structure.
                </p>
              </div>

              <div className="p-4.5 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-purple-300 hover:shadow-[0_12px_28px_-8px_rgba(124,58,237,0.07)] hover:-translate-y-0.5 transition-all">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-2.5">
                  <Palette className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">UI/UX Craft</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Clear typography, intuitive spacing, and human-centered design.
                </p>
              </div>

              <div className="p-4.5 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-purple-300 hover:shadow-[0_12px_28px_-8px_rgba(124,58,237,0.07)] hover:-translate-y-0.5 transition-all">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-2.5">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">Problem Solving</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Strengthening algorithmic logic in C, C++, Python, and Java.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
