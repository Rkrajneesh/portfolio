"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { copy, navLinks, personalInfo } from "@/lib/data";
import type { SectionId } from "@/types";

const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts.slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  const ids = useMemo(() => navLinks.map((l) => l.id), []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target?.id) return;
        setActive(visible.target.id as SectionId);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -65% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onNav = (id: SectionId) => {
    setOpen(false);
    setActive(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeDown}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNav("home");
          }}
          className="flex items-center gap-3"
          aria-label={personalInfo.name}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[rgba(37,99,235,0.16)] text-sm font-semibold text-[var(--text)] ring-1 ring-[rgba(37,99,235,0.28)]">
            {initials(personalInfo.name) || "RK"}
          </span>
          <span className="hidden font-heading text-sm tracking-tight text-[var(--text)] sm:inline">
            <span className="text-[var(--primary)]">{personalInfo.name.split(" ")[0]}</span>{" "}
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const isActive = active === l.id;
            return (
              <Link
                key={l.id}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNav(l.id);
                }}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-[rgba(37,99,235,0.16)] text-[var(--text)] ring-1 ring-[rgba(37,99,235,0.28)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-white/5"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text)] md:hidden"
          aria-label={open ? copy.a11y.closeMenu : copy.a11y.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2">
                {navLinks.map((l) => {
                  const isActive = active === l.id;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => onNav(l.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm",
                        isActive
                          ? "bg-[rgba(37,99,235,0.16)] text-[var(--text)]"
                          : "text-[var(--text-muted)] hover:bg-white/5 hover:text-[var(--text)]"
                      )}
                    >
                      <span>{l.label}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-70" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

