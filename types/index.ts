export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "contact";

export type SocialLink = {
  label: string;
  href: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resume: string;
  photo: string;
  summary: string;
};

export type SkillCategory = {
  category: string;
  icon: string;
  color: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  achievements: string[];
};

export type Project = {
  title: string;
  tags: string[];
  description: string;
  github: string;
  demo: string;
  featured: boolean;
};

export type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

export type Certification = {
  title: string;
  year: string;
  icon: string;
};

export type NavLink = {
  label: string;
  href: `#${SectionId}`;
  id: SectionId;
};

