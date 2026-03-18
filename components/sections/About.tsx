"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy, highlights, personalInfo } from "@/lib/data";

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <SectionHeading title={copy.sections.about.title} subtitle={copy.sections.about.subtitle} />

      <div className="grid gap-10 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={slideLeft}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            {personalInfo.summary}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <p className="font-heading text-xl text-[var(--text)]">{h.value}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{h.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

