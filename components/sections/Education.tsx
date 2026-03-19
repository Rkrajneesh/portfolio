"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, education } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        title="Education"
        subtitle="Academic background and professional certifications."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
        >
          <h3 className="text-base font-semibold text-white">
            Education
          </h3>
          <div className="mt-4 space-y-4">
            {education.map((ed) => (
              <div key={`${ed.degree}-${ed.year}`} className="rounded-xl border border-[var(--border)] bg-black/10 p-4">
                <p className="text-base font-semibold text-white">{ed.degree}</p>
                <p className="mt-1 text-sm text-slate-400">{ed.institution}</p>
                <p className="mt-2 text-xs font-mono text-slate-500">{ed.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
        >
          <h3 className="text-base font-semibold text-white">
            Certifications
          </h3>
          <div className="mt-4 space-y-4">
            {certifications.map((c) => (
              <div
                key={`${c.title}-${c.year}`}
                className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-black/10 p-4"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-white/5 text-lg">
                  <span aria-hidden="true">{c.icon}</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{c.title}</p>
                  <p className="mt-1 text-xs font-mono text-slate-500">{c.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
