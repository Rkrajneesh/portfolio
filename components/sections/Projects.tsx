"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { copy, personalInfo, projects } from "@/lib/data";

export function Projects() {
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading title={copy.sections.projects.title} subtitle={copy.sections.projects.subtitle} />

        <Link
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
        >
          {copy.sections.projects.viewAll}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sorted.map((p, idx) => (
          <ProjectCard key={p.title} project={p} index={idx} />
        ))}
      </div>
    </section>
  );
}

