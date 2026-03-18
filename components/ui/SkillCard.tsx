"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/types";

const borderByCategory: Record<string, string> = {
  Backend: "border-t-[#f97316]",
  Architecture: "border-t-[#8b5cf6]",
  Databases: "border-t-[#06b6d4]",
  "Cloud & DevOps": "border-t-[#f59e0b]",
  Frontend: "border-t-[#ec4899]",
  "AI Tools": "border-t-[#10b981]",
};

export function SkillCard({ skill }: { skill: SkillCategory }) {
  const borderClass = borderByCategory[skill.category] ?? "border-t-[var(--accent)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_0_0_1px_rgba(37,99,235,0.06)] border-t-2 ${borderClass}`}
    >
      <div className="relative flex items-center justify-between gap-4">
        <h3 className="font-heading text-lg tracking-tight text-[var(--text)]">
          {skill.category}
        </h3>
        <span className="text-xl" aria-hidden="true">
          {skill.icon}
        </span>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {skill.items.map((i) => (
          <span
            key={i}
            className="rounded-full border border-[var(--border)] bg-black/10 px-3 py-1 text-xs text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]"
          >
            {i}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

