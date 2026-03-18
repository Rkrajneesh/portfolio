"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { copy, experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <SectionHeading
        title={copy.sections.experience.title}
        subtitle={copy.sections.experience.subtitle}
      />

      <div className="relative mt-6 sm:mt-7">
        <div className="absolute left-2 top-0 h-full w-px bg-[var(--border)]" />
        <div className="space-y-6">
          {experience.map((e, idx) => (
            <TimelineItem key={`${e.company}-${e.period}`} item={e} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

