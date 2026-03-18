"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { copy, personalInfo, stats } from "@/lib/data";
import { useTypewriter } from "@/lib/useTypewriter";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const subtitle = useTypewriter(personalInfo.subtitle, { speedMs: 28, pauseMs: 1100 });

  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(80%_60%_at_50%_0%,rgba(37,99,235,0.22),transparent_70%)]" />
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(60%_45%_at_80%_10%,rgba(6,182,212,0.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-14 sm:px-6 sm:pb-16 lg:grid-cols-2 lg:gap-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative">
          <motion.p variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }} className="text-sm text-[var(--text-muted)]">
            {copy.hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 font-heading text-4xl tracking-tight text-[var(--text)] sm:text-5xl"
          >
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-black/20 px-4 py-2 text-sm text-[var(--text)]"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(6,182,212,0.35)]" />
            <span className="text-[var(--text-muted)]">{personalInfo.title}</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg leading-7 text-[var(--text-muted)]"
          >
            <span className="text-[var(--text)]">{subtitle.value}</span>
            <span className={cn("ml-0.5 inline-block w-2", subtitle.done ? "opacity-0" : "opacity-100")}>
              <span className="inline-block h-5 w-px translate-y-1 bg-[var(--accent)]" />
            </span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-muted)] sm:text-base"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link href="#projects" className={buttonVariants({ variant: "default", size: "lg" })}>
              {copy.hero.ctas.viewProjects}
            </Link>
            <Link
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {copy.hero.ctas.downloadResume}
            </Link>
            <Link href="#contact" className={buttonVariants({ variant: "ghost", size: "lg" })}>
              {copy.hero.ctas.contactMe}
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 grid grid-cols-3 gap-3"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-4"
              >
                <p className="font-heading text-xl text-[var(--text)]">{s.value}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Premium frame (subtle border + glow) */}
          <div className="group relative mx-auto aspect-[4/5] w-5/6 rounded-[28px] p-[2px] shadow-[0_24px_70px_rgba(0,0,0,0.75)] transition-all duration-400 ease-out hover:-translate-y-[5px] hover:scale-[1.03] hover:shadow-[0_30px_90px_rgba(37,99,235,0.35),0_24px_70px_rgba(0,0,0,0.75)]">
            {/* subtle blue/purple gradient ring */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(59,130,246,0.7),rgba(147,51,234,0.65),rgba(6,182,212,0.55))] opacity-70 blur-[0.5px] transition-opacity duration-400 ease-out group-hover:opacity-100" />

            {/* inner card */}
            <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[var(--surface)] ring-1 ring-white/10">
              {/* soft specular highlight */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_15%,rgba(255,255,255,0.10),transparent_55%)] opacity-70" />

              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 320px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

