'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Database, MessageSquare, MessageCircle, Activity,
  CreditCard, Github, ExternalLink, Building2, LucideIcon
} from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'

interface ProjectData {
  id: number;
  name: string;
  company: string;
  description: string;
  tags: string[];
  accentColor: string;
  Icon: LucideIcon;
  featured: boolean;
  filter: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    name: 'High-Volume Data Pipeline',
    company: 'Infinite Computer Solutions',
    description: 'Batch processing pipeline ingesting 50K-100K+ records with optimised MySQL/PostgreSQL query strategies, significantly reducing processing latency at enterprise scale.',
    tags: ['Java', 'Spring Batch', 'MySQL', 'PostgreSQL'],
    accentColor: '#fb923c',
    Icon: Database,
    featured: true,
    filter: 'Backend',
  },
  {
    id: 2,
    name: 'Real-Time Messaging System',
    company: 'GigVistas',
    description: 'Distributed real-time messaging platform and async notification service using WebSocket, STOMP, and event-driven architecture with AWS SQS and SES pipelines.',
    tags: ['WebSocket', 'STOMP', 'AWS SQS', 'AWS SES', 'Spring Boot'],
    accentColor: '#a78bfa',
    Icon: MessageSquare,
    featured: true,
    filter: 'Real-Time',
  },
  {
    id: 3,
    name: 'WhatsApp Notification Automation',
    company: 'Infinite Computer Solutions',
    description: 'End-to-end automation parsing large CSV datasets and delivering targeted WhatsApp notifications via external API integration at enterprise scale.',
    tags: ['Spring Batch', 'REST APIs', 'CSV Processing', 'Java'],
    accentColor: '#2dd4bf',
    Icon: MessageCircle,
    featured: true,
    filter: 'Backend',
  },
  {
    id: 4,
    name: 'URL Monitoring & Alerting System',
    company: 'Infinite Computer Solutions',
    description: 'URL monitoring using scheduled tasks and automated email notifications via AWS SES, improving service uptime visibility and operational reliability.',
    tags: ['Spring Boot', 'Scheduler', 'AWS SES', 'MySQL'],
    accentColor: '#facc15',
    Icon: Activity,
    featured: false,
    filter: 'DevOps',
  },
  {
    id: 5,
    name: 'Payment Gateway Integration',
    company: 'Infinite Computer Solutions',
    description: 'Secure payment gateway with PCI-compliant data flows, Spring Security hardening, and seamless digital transaction handling across the platform.',
    tags: ['Java', 'Spring Security', 'PostgreSQL', 'Spring Boot'],
    accentColor: '#f472b6',
    Icon: CreditCard,
    featured: false,
    filter: 'Security',
  },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.filter === activeFilter)

  return (
    <SectionWrapper id="projects">

      <SectionHeading
        title="Projects"
        subtitle="A focused showcase of backend systems and distributed architecture projects built at scale."
      />

      {/* FILTER PILLS — identical to Skills top pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['All','Backend','Real-Time','DevOps','Security'].map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium
              border transition-all duration-200 flex items-center gap-2
              ${activeFilter === f
                ? 'border-cyan-400/40 text-cyan-400 bg-cyan-400/8'
                : 'border-white/10 text-slate-400 bg-white/3 hover:text-white hover:border-white/20'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID — 3 cols with gap-4 */}
      <motion.div
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

    </SectionWrapper>
  )
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <motion.div
      layout
      exit={{ opacity: 0, scale: 0.95 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0,
                transition: { duration: 0.6, ease: [0.21,0.47,0.32,0.98] }}
      }}
      className="flex flex-col gap-4 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderTop: `2px solid ${project.accentColor}`,
        borderRadius: '12px',
      }}
    >
      {/* ROW 1: title + icon */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-semibold text-base leading-snug">
          {project.name}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.featured && (
            <span className="px-2 py-0.5 text-[10px] font-semibold tracking-widest rounded text-cyan-400 border border-cyan-400/20 bg-cyan-400/5">
              FEATURED
            </span>
          )}
          <project.Icon size={18} style={{ color: project.accentColor, opacity: 0.8 }} />
        </div>
      </div>

      {/* ROW 2: company */}
      <div className="flex items-center gap-1.5 -mt-2">
        <Building2 size={11} className="text-slate-600" />
        <p className="text-xs text-slate-500">{project.company}</p>
      </div>

      {/* ROW 3: description */}
      <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>

      {/* ROW 4: tech tags — identical to Skills section tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-mono text-slate-400 rounded-md"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ROW 5: GitHub + Demo links + Divider */}
      <div className="mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex gap-5">
          <a href="#" className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-200 transition-colors">
            <Github size={13} /> GitHub
          </a>
          <a href="#" className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-200 transition-colors">
            <ExternalLink size={13} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}