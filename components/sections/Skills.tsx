"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillCard } from "@/components/ui/SkillCard";
import { copy, skills, techStack } from "@/lib/data";
import { SiDocker, SiOpenjdk, SiSpringboot } from "react-icons/si";
import { DiAws } from "react-icons/di";

const iconByKey = {
  java: SiOpenjdk,
  springboot: SiSpringboot,
  docker: SiDocker,
  aws: DiAws,
} as const;

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <SectionHeading title={copy.sections.skills.title} subtitle={copy.sections.skills.subtitle} />

      <div className="mb-4 flex flex-wrap items-center gap-3">
        {techStack.map((t) => {
          const Icon = iconByKey[t.key];
          return (
            <div
              key={t.key}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text-muted)]"
            >
              <Icon className="h-4 w-4 text-[var(--text)]" aria-hidden="true" />
              <span>{t.label}</span>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <SkillCard key={s.category} skill={s} />
        ))}
      </div>
    </section>
  );
}
