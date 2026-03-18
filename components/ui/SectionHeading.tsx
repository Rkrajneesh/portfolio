"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-6 sm:mb-7"
    >
      <div className="inline-flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(6,182,212,0.35)]" />
        <h2 className="font-heading text-2xl tracking-tight text-[var(--text)] sm:text-3xl">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-muted)] sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

