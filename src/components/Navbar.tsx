import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Building', href: '#building' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg py-1"
          aria-label="Palla Jaya Narasimha - Home"
        >
          <span className="w-2 h-2 rounded-full bg-purple-600 transition-transform duration-300 group-hover:scale-125" />
          <span className="font-display text-sm font-bold tracking-tight text-zinc-950 group-hover:text-purple-600 transition-colors">
            PJN<span className="text-purple-600">.</span>
          </span>
          <span className="hidden sm:inline-block text-[13px] text-zinc-500 font-medium tracking-tight ml-0.5 border-l border-zinc-200 pl-2.5">
            Palla Jaya Narasimha
          </span>
        </a>

        {/* Center/Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] font-medium transition-colors relative py-1.5 ${
                  isActive
                    ? 'text-purple-700 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-purple-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side social links and purple CTA button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-zinc-600 hover:text-purple-600 flex items-center gap-1 transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-purple-600" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-zinc-600 hover:text-purple-600 flex items-center gap-1 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-purple-600" />
          </a>

          {/* Purple CTA */}
          <a
            id="nav-connect-btn"
            href="#contact"
            className="ml-1.5 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-purple-700 hover:-translate-y-0.5 transition-all shadow-xs hover:shadow-sm active:scale-95"
          >
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2.5">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-purple-700 transition-colors shadow-2xs"
          >
            Connect
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-2 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-zinc-200/90 shadow-xl"
          >
            <nav className="flex flex-col space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-700 hover:text-purple-700 py-1.5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3.5 border-t border-zinc-100 flex items-center gap-5 text-xs text-zinc-600 font-medium">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
