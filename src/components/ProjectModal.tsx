import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs"
          aria-hidden="true"
        />

        {/* Modal Dialog Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Close button */}
          <button
            id="close-project-modal"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono-meta text-purple-700 uppercase tracking-wider font-semibold">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-semibold text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-full">
                  Featured Project
                </span>
              )}
            </div>
            <h3 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              {project.subtitle}
            </p>
          </div>

          {/* Narrative Content */}
          <div className="space-y-4 mb-6 text-sm text-zinc-600 leading-relaxed font-normal">
            <p>{project.extendedDescription || project.description}</p>
            {project.architectureNotes && (
              <div className="p-4 rounded-2xl bg-[#fafafc] border border-zinc-200 text-xs text-zinc-600 leading-relaxed">
                <span className="text-zinc-900 font-semibold block mb-1">Architecture &amp; Deployment:</span>
                {project.architectureNotes}
              </div>
            )}
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono-meta uppercase tracking-wider text-zinc-500 mb-3 font-semibold">
                Key Features &amp; Workflows
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-700">
                    <span className="w-4 h-4 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8 pt-4 border-t border-zinc-100">
            <h4 className="text-xs font-mono-meta uppercase tracking-wider text-zinc-500 mb-2.5 font-semibold">
              Technologies &amp; Scope
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono-meta text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-zinc-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-colors shadow-sm"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-zinc-800 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 rounded-full transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-zinc-800 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 rounded-full transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Backend Repository</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
