"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { copy, personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-heading text-base text-[var(--text)]">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {copy.footer.builtWith}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text)] transition-colors hover:bg-white/10"
              aria-label={copy.a11y.email}
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text)] transition-colors hover:bg-white/10"
              aria-label={copy.a11y.linkedin}
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text)] transition-colors hover:bg-white/10"
              aria-label={copy.a11y.github}
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

