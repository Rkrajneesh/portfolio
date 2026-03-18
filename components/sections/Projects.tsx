"use client";

import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { copy, personalInfo, projects } from "@/lib/data";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="projects" className="relative w-full py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] opacity-20 [background:radial-gradient(circle_at_center,rgba(6,182,212,0.4),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-20 [background:radial-gradient(circle_at_center,rgba(37,99,235,0.4),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <h2 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-3">{copy.sections.projects.title}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work</span>
            </h3>
            <p className="text-[var(--text-muted)] max-w-2xl text-lg">
              {copy.sections.projects.subtitle}
            </p>
          </div>

          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 shrink-0")}
          >
            {copy.sections.projects.viewAll}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {sorted.map((project) => (
            <motion.div key={project.title} variants={cardVariants} className="group relative h-full">
              
              {/* Animated Card Hover Glow */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 blur transition duration-500 group-hover:opacity-25" />

              {/* Card Container */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-[var(--surface)]/80 backdrop-blur-xl border border-[var(--border)] shadow-2xl transition-colors hover:border-white/20 p-6 lg:p-8">
                
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <h4 className="text-2xl font-bold text-[var(--text)] group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    {project.featured && (
                      <span className="shrink-0 px-3 py-1 text-[10px] uppercase tracking-wider font-bold text-blue-300 bg-blue-500/20 rounded-full border border-blue-500/30">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-[var(--text-muted)] leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 mt-auto border-t border-[var(--border)] pt-6">
                    {project.github && project.github !== "" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        {copy.sections.projects.card.githubLabel}
                      </a>
                    )}
                    {project.demo && project.demo !== "" && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        {copy.sections.projects.card.demoLabel}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
