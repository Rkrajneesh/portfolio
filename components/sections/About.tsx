"use client";

import { motion } from "framer-motion";
import { Server, Zap, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const stats = [
  { value: "50K–100K+", label: "Records Processed Per Batch" },
  { value: "4+", label: "Years Backend Experience" },
  { value: "2", label: "Enterprise Products Shipped" },
];

const features = [
  {
    icon: Server,
    title: "High-Volume Data Processing",
    desc: "Spring Batch pipelines handling 50K–100K+ records with optimized MySQL/PostgreSQL query strategies"
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    desc: "WebSocket & STOMP-based messaging platforms with low-latency bidirectional communication"
  },
  {
    icon: Shield,
    title: "Secure Microservices",
    desc: "JWT authentication, RBAC with Spring Security, and containerized deployments using Docker on AWS"
  }
];

const techStack = [
  "Java", "Spring Boot", "Spring Batch", "Spring Security", 
  "MySQL", "PostgreSQL", "AWS SQS", "AWS SES", "Docker", "WebSocket"
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <SectionHeading 
        title="About" 
        subtitle="From enterprise power sector systems to real-time messaging platforms — here's how I think, build, and scale." 
      />

      <div className="grid gap-10 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={slideLeft}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            I'm a Backend Engineer with 4+ years of experience designing distributed systems 
            and microservices using Java and Spring Boot. At Infinite Computer Solutions, I architect 
            enterprise backend systems for the power sector — including high-volume Spring Batch pipelines 
            processing 50K–100K+ records, automated WhatsApp notification systems, and secure payment 
            gateway integrations. Previously at GigVistas, I built a real-time WebSocket messaging 
            platform and a cloud-native notification service using AWS SQS & SES. I'm passionate about 
            clean architecture, system design, and turning complex engineering problems into reliable, 
            scalable solutions.
          </p>

          {/* Feature Cards: What I Do Best */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[var(--text)] mb-6">What I Do Best</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div 
                    key={f.title} 
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all group"
                  >
                    <Icon className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-heading text-lg font-semibold text-[var(--text)] mb-2">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-[var(--text-muted)]">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center hover:border-cyan-500/30 transition-colors"
              >
                <p className="font-heading text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-[var(--text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
          
          {/* Currently Working With */}
          <div className="mt-10">
            <p className="text-sm text-[var(--text-muted)] mb-4 font-medium uppercase tracking-wider">Currently Working With:</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
