"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/ui/SectionHeading";
import { copy, personalInfo } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Contact"
        subtitle="Open to backend engineering roles and collaborations. Let's connect."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={fadeIn}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
        >
          <p className="text-sm text-slate-400 leading-relaxed">
            {personalInfo.title} • {personalInfo.location}
          </p>

          <div className="mt-6 space-y-3">
            <Link
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-black/10 px-4 py-3 text-sm text-slate-400 hover:bg-white/5"
            >
              <Mail className="h-4 w-4 text-[var(--accent)]" />
              <span>{personalInfo.email}</span>
            </Link>
            <Link
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-black/10 px-4 py-3 text-sm text-slate-400 hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-[var(--accent)]" />
              <span>{personalInfo.phone}</span>
            </Link>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-black/10 px-4 py-3 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-[var(--accent)]" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          variants={fadeIn}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-400" htmlFor="name">
                  {copy.sections.contact.form.nameLabel}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={copy.sections.contact.form.namePlaceholder}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400" htmlFor="email">
                  {copy.sections.contact.form.emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={copy.sections.contact.form.emailPlaceholder}
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-400" htmlFor="message">
                {copy.sections.contact.form.messageLabel}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={copy.sections.contact.form.messagePlaceholder}
                className="mt-2 min-h-[140px]"
              />
            </div>
            <div className="flex items-center justify-end">
              <Button type="submit" size="lg" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : copy.sections.contact.form.sendLabel}
              </Button>
            </div>
            {status === 'success' && <p className="text-green-400 text-sm mt-2 text-right">✓ Message sent! I'll reply within 24 hours.</p>}
            {status === 'error' && <p className="text-red-400 text-sm mt-2 text-right">Something went wrong. Please try again.</p>}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
