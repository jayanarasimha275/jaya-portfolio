import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, GraduationCap, MapPin, Code, Palette, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#fcfcfd] border-b border-zinc-200/80 relative"
      aria-labelledby="about-heading"
    >
      {/* Decorative subtle grid tile */}
      <div 
        className="absolute top-12 right-[8%] w-16 h-16 bg-purple-500/5 border border-purple-300/20 rounded-sm pointer-events-none hidden lg:block" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Asymmetrical Editorial Heading & Quick Meta */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-xs font-mono-meta font-semibold text-purple-700 uppercase tracking-widest">
                01 / About Me
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 mb-5 leading-[1.15]"
            >
              Crafting software through hands-on practice.
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed mb-8">
              A developer mindset driven by building functional tools, understanding core programming mechanics, and shaping clean digital interfaces.
            </p>

            {/* Academic Status Card */}
            <div className="w-full p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs hover:border-purple-200 transition-all space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100/80 text-purple-700">
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
                <span className="font-semibold text-purple-700 font-mono-meta bg-purple-50 px-2 py-0.5 rounded-md">2nd Year</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Large Typography Callout */}
          <div className="lg:col-span-7 space-y-8">
            {/* Primary Large Phrase */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200/90 shadow-2xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50/70 rounded-full blur-3xl pointer-events-none" />
              
              <p className="text-lg sm:text-xl font-medium text-zinc-900 leading-snug tracking-tight mb-6">
                "I am a 2nd-year B.Tech Computer Science and Engineering student at SRM University-AP. I enjoy building practical software, learning through hands-on projects, solving programming problems, and exploring both development and UI/UX."
              </p>

              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Rather than treating computer science purely as theoretical lectures, I learn fastest by engineering real tools. Whether it is architecting an affiliate link tracking dashboard, crafting client-side billing engines, or structuring algorithmic logic in C++ and Python, each project directly reinforces system mechanics and user ergonomics.
                </p>
                <p>
                  My goal is to bridge robust computer science fundamentals with intentional design—building web applications that are responsive, accessible, and enjoyable to interact with.
                </p>
              </div>
            </div>

            {/* 3 Core Editorial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-purple-200 hover:shadow-xs transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">Practical Code</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Real projects over abstract theory to solidify software structure.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-purple-200 hover:shadow-xs transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <Palette className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">UI/UX Craft</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Clear typography, intuitive spacing, and human-centered design.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-purple-200 hover:shadow-xs transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
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
