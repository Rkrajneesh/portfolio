"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
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
  async function onSubmit(formData: FormData) {
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const t = toast.loading(copy.sections.contact.form.sendingToast);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message");
      }
      toast.success(copy.sections.contact.form.successToast, { id: t });
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : copy.sections.contact.form.errorToast,
        { id: t }
      );
    }
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
            action={(fd) => {
              void onSubmit(fd);
            }}
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
                required
                placeholder={copy.sections.contact.form.messagePlaceholder}
                className="mt-2 min-h-[140px]"
              />
            </div>
            <div className="flex items-center justify-end">
              <Button type="submit" size="lg">
                {copy.sections.contact.form.sendLabel}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
