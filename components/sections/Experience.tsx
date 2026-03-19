'use client'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import SectionHeading from '@/components/ui/SectionHeading'

interface Experience {
  id: number
  company: string
  role: string
  duration: string
  location: string
  accentColor: string
  current: boolean
  tags: string[]
  bullets: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Infinite Computer Solutions',
    role: 'Software Engineer — Backend',
    duration: 'Oct 2023 – Present',
    location: 'Noida, India',
    accentColor: '#38bdf8',
    current: true,
    tags: ['Java', 'Spring Boot', 'Spring Batch', 'MySQL', 'PostgreSQL', 'AWS'],
    bullets: [
      'Spearheaded payment gateway integration; reduced transaction failures by 12% through circuit-breaker patterns',
      'Re-engineered data processing for 100,000+ records using Spring Batch and SQL tuning; cut query times by 25%',
      'Optimized WhatsApp messaging automation with async processing; boosted efficiency by 30%',
      'Developed URL monitoring tool using AWS SES; improved service uptime by 15%',
      'Scaled RESTful microservices for 100k+ user base ensuring high availability',
    ],
  },
  {
    id: 2,
    company: 'GigVistas',
    role: 'Software Development Engineer I — Backend',
    duration: 'Jul 2022 – Aug 2023',
    location: 'Hyderabad, India',
    accentColor: '#a78bfa',
    current: false,
    tags: ['Java', 'Spring Boot', 'WebSocket', 'AWS SQS', 'AWS SES', 'Docker', 'MongoDB'],
    bullets: [
      'Architected real-time messaging platform using WebSocket and STOMP; drove 40% increase in user engagement',
      'Created notification engine using AWS SQS and SES; improved user retention by 15%',
      'Implemented RBAC with Spring Security; reduced unauthorized access attempts by 50%',
      'Containerized microservices using Docker Compose on AWS; reduced deployment overhead by 30%',
    ],
  },
  {
    id: 3,
    company: 'FunctionUp',
    role: 'Backend Developer Trainee',
    duration: 'Feb 2022 – Jul 2022',
    location: 'Remote',
    accentColor: '#34d399',
    current: false,
    tags: ['Node.js', 'MongoDB', 'JWT', 'REST APIs', 'Git'],
    bullets: [
      'Developed secure backend applications using Node.js and MongoDB',
      'Implemented JWT-based authentication and scalable URL generation logic',
    ],
  },
]

export function Experience() {
  return (
    <SectionWrapper id="experience">

      <SectionHeading
        title="Experience"
        subtitle="Roles and impact across product and platform teams."
      />

      {/* CARDS GRID */}
      <motion.div
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="flex flex-col gap-4"
      >
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </motion.div>

    </SectionWrapper>
  )
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0,
                transition: { duration: 0.6, ease: [0.21,0.47,0.32,0.98] }}
      }}
      className="flex flex-col gap-5 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderTop: `2px solid ${exp.accentColor}`,
        borderRadius: '12px',
      }}
    >
      {/* HEADER ROW */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-base">{exp.company}</h3>
          <p className="text-sm mt-0.5 font-medium" style={{ color: exp.accentColor }}>
            {exp.role}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <div className="flex items-center gap-1.5">
            <Calendar size={11} className="text-slate-500" />
            <span className="text-xs text-slate-500 font-mono">{exp.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={11} className="text-slate-600" />
            <span className="text-xs text-slate-600">{exp.location}</span>
          </div>
        </div>
      </div>

      {/* BULLET POINTS */}
      <ul className="flex flex-col gap-2">
        {exp.bullets.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full shrink-0"
              style={{ background: exp.accentColor, opacity: 0.7 }}>
            </span>
            <span className="text-sm text-slate-400 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>

      {/* TECH TAGS */}
      <div className="flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span key={tag}
            className="px-2.5 py-1 text-xs font-mono text-slate-400 rounded-md"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* DIVIDER & CURRENT STATUS */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}></div>
      {exp.current ? (
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs text-green-400">Currently working here</span>
        </div>
      ) : (
        <span className="text-xs text-slate-600">Completed</span>
      )}
    </motion.div>
  )
}
