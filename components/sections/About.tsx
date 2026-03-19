"use client";

import { motion } from "framer-motion";
import { Server, Zap, Shield } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

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

export function About() {
  return (
    <SectionWrapper id="about" className="pt-14 sm:pt-16 pb-0 sm:pb-0">
      <SectionHeading
        title="About"
        subtitle="Backend engineer building distributed systems at scale with Java and Spring Boot."
      />

      <div className="grid lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={slideLeft}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-5">
            <p className="text-sm text-slate-400 leading-relaxed">
              I'm a Backend Engineer with 4+ years of experience building distributed 
              systems and microservices using Java and Spring Boot.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              At Infinite Computer Solutions, I architect enterprise backend systems 
              for the power sector — high-volume Spring Batch pipelines, automated 
              WhatsApp notifications, and secure payment gateways. Previously at 
              GigVistas, I built a real-time WebSocket messaging platform and a 
              cloud-native notification service on AWS SQS & SES.
            </p>
          </div>

          {/* Feature Cards: What I Do Best */}
          <div className="mt-12 mb-8">
            <h3 className="text-base font-semibold text-white mb-6">What I Do Best</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div 
                    key={f.title} 
                    className="rounded-2xl border border-[var(--border)] border-t-2 border-t-cyan-500/60 bg-[var(--surface)] p-6 sm:p-8 hover:border-cyan-500/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-300 group"
                  >
                    <Icon className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-base font-semibold text-white mb-2">{f.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>

        {/* Subtle Bottom Divider */}
        <div className="border-t border-[var(--border)] opacity-60" />
      </div>
    </SectionWrapper>
  );
}