import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Academics } from './components/Academics';
import { Interests } from './components/Interests';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToProjects = () => {
    const el = document.getElementById('work') || document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-zinc-900 antialiased selection:bg-purple-100 selection:text-purple-900 relative font-sans">
      {/* Top Floating Minimal Navbar */}
      <Navbar />

      {/* Main Editorial Flow */}
      <main id="main-content">
        <Hero onExploreProjects={scrollToProjects} />
        <About />
        <Academics />
        <Interests />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
