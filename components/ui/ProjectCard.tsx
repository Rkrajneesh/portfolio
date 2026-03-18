"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { copy } from "@/lib/data";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.06 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-[var(--surface)] p-6",
        "border-[var(--border)] shadow-[0_0_0_1px_rgba(37,99,235,0.06)]",
        "transition-transform duration-300 hover:-translate-y-1",
        "hover:shadow-[0_0_0_1px_rgba(6,182,212,0.18),0_16px_60px_rgba(0,0,0,0.45)]"
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18),transparent_60%)] blur-2xl" />
      </div>

      <header className="relative">
        <h3 className="font-heading text-lg tracking-tight text-[var(--text)] sm:text-xl">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-black/10 px-3 py-1 text-xs text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <p className="relative mt-4 text-sm leading-6 text-[var(--text-muted)]">
        {project.description}
      </p>

      <div className="relative mt-6 flex items-center gap-3">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "gap-2")}
        >
          <Github className="h-4 w-4" />
          {copy.sections.projects.card.githubLabel}
        </Link>
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}
        >
          <ExternalLink className="h-4 w-4" />
          {copy.sections.projects.card.demoLabel}
        </Link>
      </div>
    </motion.article>
  );
}

