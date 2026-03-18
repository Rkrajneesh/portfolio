"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useMotionValue, useTransform, animate, useInView, Variants } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { copy, personalInfo } from "@/lib/data";

const titles = [
  "Backend Engineer",
  "Java & Spring Boot Developer",
  "Microservices Architect",
  "Distributed Systems Engineer",
  "Spring Batch & AWS Specialist"
];

const techStack = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Spring Batch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "AWS (SQS/SES)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "WebSocket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
];

interface StatCounterProps {
  endValue: number;
  suffix: string;
  label: string;
}

function StatCounter({ endValue, suffix, label }: StatCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (inView) {
      if (shouldReduceMotion) {
        count.set(endValue);
      } else {
        animate(count, endValue, { duration: 2, ease: "easeOut" });
      }
    }
  }, [inView, count, endValue, shouldReduceMotion]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-[var(--surface)]/30 border border-[var(--border)] rounded-2xl backdrop-blur-sm shadow-lg">
      <motion.span className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {rounded}
      </motion.span>
      <span className="text-sm md:text-base text-[var(--text-muted)] mt-2 font-medium">{label}</span>
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStartedTypewriter, setHasStartedTypewriter] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setHasStartedTypewriter(true), 300);
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!hasStartedTypewriter) return;
    
    const typeSpeed = isDeleting ? 30 : 60;
    const currentWord = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex, hasStartedTypewriter]);

  const slideInLeft = (delay: number): Variants => 
    shouldReduceMotion 
      ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay } } } 
      : { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: "easeOut" } } };

  const slideInUp = (delay: number): Variants => 
    shouldReduceMotion 
      ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay } } } 
      : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } } };

  const slideInRight = (delay: number): Variants => 
    shouldReduceMotion 
      ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay } } } 
      : { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: "easeOut" } } };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(80%_60%_at_50%_0%,rgba(37,99,235,0.22),transparent_70%)]" />
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(60%_45%_at_80%_10%,rgba(6,182,212,0.16),transparent_55%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10">
        
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center w-full min-w-0">
          <motion.div
            initial="hidden" animate="visible" variants={slideInLeft(0.05)}
            className="mb-4 inline-flex self-start items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
          >
            ⚡ Backend Engineer <span className="mx-2 text-cyan-500">·</span> 4+ Years <span className="mx-2 text-cyan-500">·</span> Java & Spring Boot <span className="mx-2 text-cyan-500">·</span> Open to opportunities
          </motion.div>

          <motion.p 
            initial="hidden" animate="visible" variants={slideInLeft(0.1)} 
            className="text-lg md:text-xl font-medium text-cyan-400 mb-2"
          >
            {copy.hero.greeting}
          </motion.p>

          <motion.h1
            initial="hidden" animate="visible" variants={slideInLeft(0.2)}
            className="font-heading text-4xl tracking-tight text-[var(--text)] sm:text-6xl font-bold"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial="hidden" animate="visible" variants={slideInLeft(0.3)}
            className="mt-4 text-2xl sm:text-3xl text-[var(--text-muted)] font-semibold h-10 flex items-center"
          >
            <span>{currentText}</span>
            <span className={cn("ml-1 inline-block w-[3px] h-7 bg-cyan-400", isDeleting ? "opacity-30" : "animate-pulse")} />
          </motion.h2>

          <motion.p
            initial="hidden" animate="visible" variants={slideInUp(0.4)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]"
          >
            I design and build scalable distributed backend systems using Java & Spring Boot — from real-time WebSocket messaging platforms to Spring Batch pipelines processing 50K–100K+ records. Passionate about clean architecture, microservices, and solving large-scale engineering problems.
          </motion.p>

          <motion.p
            initial="hidden" animate="visible" variants={slideInUp(0.45)}
            className="mt-4 text-sm text-[var(--text-muted)]"
          >
            Infinite Computer Solutions (2023–Present) <span className="text-cyan-400 mx-1">·</span> GigVistas (2022–2023)
          </motion.p>

          <motion.p
            initial="hidden" animate="visible" variants={slideInUp(0.45)}
            className="mt-2 text-sm italic text-[var(--text-muted)]"
          >
            Microservices <span className="text-cyan-400 mx-1">·</span> Event-Driven Architecture <span className="text-cyan-400 mx-1">·</span> AWS <span className="text-cyan-400 mx-1">·</span> Docker <span className="text-cyan-400 mx-1">·</span> JWT & RBAC Security
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={slideInUp(0.5)}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link 
              href="#projects" 
              aria-label="View My Projects"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/25")}
            >
              See My Projects
            </Link>
            <a
              href={personalInfo.resume || "/Rajneesh_Kumar_Resume.pdf"}
              download="Rajneesh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10")}
            >
              Download Resume
            </a>
            <Link 
              href="#contact" 
              aria-label="Contact Me"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10")}
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial="hidden" animate="visible" variants={slideInUp(0.6)}
            className="mt-10 w-full min-w-0"
          >
            <p className="text-sm italic text-[var(--text-muted)] mb-3">
              Worked on enterprise power sector systems <span className="text-cyan-400 mx-1">·</span> Real-time messaging <span className="text-cyan-400 mx-1">·</span> Payment gateway integrations <span className="text-cyan-400 mx-1">·</span> URL monitoring systems <span className="text-cyan-400 mx-1">·</span> Batch processing
            </p>
            <p className="text-sm text-[var(--text-muted)] mb-3 font-medium uppercase tracking-wider">Core Technologies</p>
            <div className={cn(
              "relative flex pb-2 w-full min-w-0",
              shouldReduceMotion ? "overflow-x-auto no-scrollbar" : "overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            )}>
              <motion.div
                className="flex flex-shrink-0"
                animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {(shouldReduceMotion ? techStack : [...techStack, ...techStack]).map((tech, idx) => (
                  <div key={`${tech.name}-${idx}`} className="flex-shrink-0 pr-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[var(--surface)]/50 border border-[var(--border)] rounded-full hover:bg-[var(--surface)] transition-colors">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tech.icon} alt={`${tech.name} icon`} className="w-5 h-5" />
                      <span className="text-sm font-medium text-[var(--text)]">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial="hidden" animate="visible" variants={slideInRight(0.3)}
          className="relative mx-auto w-full max-w-md lg:max-w-lg mt-12 lg:mt-0 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Glowing Background Blobs */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600/30 rounded-full mix-blend-screen filter blur-[4rem] animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[4rem] animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Profile Card / Image container */}
            <div className="relative w-full h-full rounded-full border-[4px] border-[var(--surface)] overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-[var(--surface)]">
              <Image
                src={personalInfo.photo || "/placeholder.jpg"}
                alt={`${personalInfo.name} - Profile Photo`}
                fill
                sizes="(max-width: 640px) 18rem, (max-width: 1024px) 20rem, 400px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
        
      </div>

      {/* Stats Bar */}
      <div className="mx-auto w-full max-w-7xl px-6 mt-20 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <StatCounter endValue={4} suffix="+" label="Years Experience" />
          <StatCounter endValue={100} suffix="K+" label="Records Processed" />
          <StatCounter endValue={10} suffix="+" label="Microservices Built" />
        </motion.div>
      </div>

    </section>
  );
}
