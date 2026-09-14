import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Project Inquiry / Opportunity'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 bg-white border-b border-zinc-200/80 relative overflow-hidden bg-grid-pattern"
      aria-labelledby="contact-heading"
    >
      {/* Decorative soft purple block */}
      <div 
        className="absolute top-20 right-[15%] w-16 h-16 bg-purple-500/10 border border-purple-400/20 rounded-sm pointer-events-none hidden sm:block" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-20 left-[10%] w-16 h-16 bg-purple-600/10 border border-purple-400/20 rounded-sm pointer-events-none hidden md:block" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Eyebrow & Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-xs font-mono-meta font-semibold text-purple-700 uppercase tracking-widest">
              06 / Get in Touch
            </span>
          </div>

          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4 leading-tight"
          >
            Let's Connect<span className="text-purple-600">.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Have an idea, project, internship, or opportunity? I'm always open to discussing new engineering collaborations.
          </p>
        </div>

        {/* 3 Main Direct Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14 sm:mb-16">
          
          {/* Email Card with Copy button */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-2xs hover:border-purple-300 hover:shadow-sm transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-meta text-purple-700 uppercase tracking-wider font-semibold block mb-1">
                Direct Email
              </span>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 break-all mb-4">
                {PERSONAL_INFO.email}
              </h3>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-100">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 py-2 px-3 rounded-full bg-zinc-950 hover:bg-purple-700 text-white text-xs font-semibold text-center transition-colors shadow-2xs"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-full bg-zinc-100 hover:bg-purple-100 text-zinc-700 hover:text-purple-700 transition-colors cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-2xs hover:border-purple-300 hover:shadow-sm transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 shadow-2xs">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-meta text-purple-700 uppercase tracking-wider font-semibold block mb-1">
                Professional Network
              </span>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-1">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-zinc-500">
                Connect for academic &amp; career updates
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-purple-700 group-hover:text-purple-800">
              <span>View Profile</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-2xs hover:border-purple-300 hover:shadow-sm transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 shadow-2xs">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-meta text-purple-700 uppercase tracking-wider font-semibold block mb-1">
                Code &amp; Repositories
              </span>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-1">
                GitHub Profile
              </h3>
              <p className="text-xs text-zinc-500">
                TrackFlow, Invoice Generator &amp; builds
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-purple-700 group-hover:text-purple-800">
              <span>Explore Code</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

        </div>

        {/* Quick Message Box */}
        <div className="max-w-xl mx-auto p-7 sm:p-9 rounded-3xl bg-[#fafafc] border border-zinc-200/90 shadow-2xs">
          <h4 className="text-base font-bold text-zinc-900 mb-1.5 text-center tracking-tight">
            Quick Inquiry
          </h4>
          <p className="text-xs text-zinc-500 mb-6 text-center">
            Compose a direct note — it will open your preferred email client ready to send.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="subject-input" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                Subject
              </label>
              <input
                id="subject-input"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Collaboration / Opportunity / Project feedback"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message-input" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message-input"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note here..."
                required
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            <button
              id="contact-submit-btn"
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs tracking-wide uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>

            {sentSuccess && (
              <p className="text-xs text-purple-700 text-center font-medium mt-2">
                Opening email client with pre-filled message...
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};
