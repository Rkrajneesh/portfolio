"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/types";
import { cn } from "@/lib/utils";

export function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.06 }}
      className="relative pl-10"
    >
      <div
        className={cn(
          "absolute left-[0.28rem] top-1.5 h-3 w-3 rounded-full",
          item.current
            ? "bg-[var(--primary)] shadow-[0_0_18px_rgba(37,99,235,0.5)]"
            : "bg-[var(--border)]"
        )}
      />
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-heading text-lg text-[var(--text)]">
              {item.company}
            </h3>
            <p className="text-sm text-[var(--text-muted)]">{item.role}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--border)] bg-black/10 px-3 py-1 text-xs text-[var(--text-muted)]">
              {item.period}
            </span>
            <span className="rounded-full border border-[var(--border)] bg-black/10 px-3 py-1 text-xs text-[var(--text-muted)]">
              {item.location}
            </span>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--text-muted)]">
          {item.achievements.map((a) => (
            <li key={a} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

