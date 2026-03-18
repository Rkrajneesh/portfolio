import type {
  Certification,
  EducationItem,
  ExperienceItem,
  NavLink,
  PersonalInfo,
  Project,
  SkillCategory,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Rajneesh Kumar",
  title: "Senior Software Engineer",
  subtitle: "Backend Specialist (Java & Spring Boot)",
  tagline: "Building scalable microservices with Java & Spring Boot",
  email: "rajneesh11263@gmail.com",
  phone: "+91 7814015072",
  location: "Noida, Uttar Pradesh, India",
  linkedin: "https://linkedin.com/in/rkrajneesh-kumar",
  github: "https://github.com/rajneeshkumar",
  resume: "/RajneeshKumar_SoftwareEngineer.pdf",
  photo: "/Rajneesh.png",
  summary:
    "Performance-driven Backend Engineer with 4+ years of experience specializing in the Java/Spring ecosystem. Proven track record in architecting scalable microservices and high-throughput data pipelines handling 100k+ concurrent records. Expert in system optimization, achieving 25% reduction in latency and 30% boost in messaging efficiency.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Users Served", value: "100k+" },
  { label: "Companies", value: "3" },
] as const;

export const highlights = [
  { label: "Latency Reduction", value: "25%" },
  { label: "Messaging Efficiency", value: "30%" },
  { label: "Unauthorized Access ↓", value: "50%" },
] as const;

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    icon: "⚙️",
    color: "#f97316",
    items: [
      "Java 8/11/17",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Spring Batch",
      "Hibernate ORM",
    ],
  },
  {
    category: "Architecture",
    icon: "🏗️",
    color: "#8b5cf6",
    items: [
      "Microservices",
      "Event-Driven (EDA)",
      "RESTful APIs",
      "SOLID Principles",
      "RBAC",
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "#06b6d4",
    items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "#f59e0b",
    items: [
      "AWS SQS",
      "AWS SES",
      "AWS S3",
      "Docker",
      "Docker Compose",
      "CI/CD",
      "Maven",
      "Git",
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "#ec4899",
    items: ["JavaScript", "HTML/CSS", "React", "Next.js"],
  },
  {
    category: "AI Tools",
    icon: "🤖",
    color: "#10b981",
    items: ["Cursor AI", "Claude Code", "GitHub Copilot"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Infinite Computer Solutions",
    role: "Software Engineer",
    location: "Noida, India",
    period: "October 2023 – Present",
    current: true,
    achievements: [
      "Spearheaded payment gateway integration; reduced transaction failures by 12% through circuit-breaker patterns",
      "Re-engineered data processing for 100,000+ records using Spring Batch and SQL tuning; cut query times by 25%",
      "Optimized WhatsApp messaging automation with async processing; boosted efficiency by 30%",
      "Developed URL monitoring tool using AWS SES; improved service uptime by 15%",
      "Scaled RESTful microservices for 100k+ user base ensuring high availability",
    ],
  },
  {
    company: "GigVistas",
    role: "Software Development Engineer - I",
    location: "Hyderabad, India",
    period: "July 2022 – August 2023",
    current: false,
    achievements: [
      "Architected real-time messaging platform using WebSocket and STOMP; drove 40% increase in user engagement",
      "Created notification engine using AWS SQS and SES; improved user retention by 15%",
      "Implemented RBAC with Spring Security; reduced unauthorized access attempts by 50%",
      "Containerized microservices using Docker Compose on AWS; reduced deployment overhead by 30%",
    ],
  },
  {
    company: "FunctionUp",
    role: "Backend Developer Trainee",
    location: "Remote",
    period: "February 2022 – July 2022",
    current: false,
    achievements: [
      "Developed secure backend applications using Node.js and MongoDB",
      "Implemented JWT-based authentication and scalable URL generation logic",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    description:
      "Built a scalable online store with secure payment processing, microservices architecture, and high availability design patterns.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Fintech API Microservices",
    tags: ["Spring Boot", "Docker", "AWS", "Redis"],
    description:
      "Developed RESTful APIs for a fintech application with circuit breakers, high availability, and 100k+ concurrent users support.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Real-time Messaging Platform",
    tags: ["WebSocket", "STOMP", "Spring Boot", "React"],
    description:
      "Architected bidirectional real-time communication platform that drove 40% increase in user engagement.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "WhatsApp Automation System",
    tags: ["Spring Boot", "AWS SQS", "Spring Batch"],
    description:
      "High-volume CSV-driven messaging automation with async processing pipeline handling large-scale data.",
    github: "#",
    demo: "#",
    featured: false,
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master of Science (MS) in IT",
    institution: "Govt. Mohindra College, Patiala",
    year: "2020",
  },
  {
    degree: "Bachelor of Science (BS) in CS",
    institution: "Govt. Mohindra College, Patiala",
    year: "2018",
  },
];

export const certifications: Certification[] = [
  {
    title: "The Complete AI Coding Course (Cursor, Claude Code)",
    year: "2025",
    icon: "🤖",
  },
  {
    title: "Spring Ecosystem and Core (MVC, Boot, REST)",
    year: "2024",
    icon: "☕",
  },
];

export const techStackIcons = {
  java: "SiJava",
  springboot: "SiSpringboot",
  docker: "SiDocker",
  aws: "SiAws",
} as const;

export const techStack = [
  { key: "java", label: "Java" },
  { key: "springboot", label: "Spring Boot" },
  { key: "docker", label: "Docker" },
  { key: "aws", label: "AWS" },
] as const;

export const copy = {
  a11y: {
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    greeting: "Hi, I'm",
    ctas: {
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      contactMe: "Contact Me",
    },
  },
  sections: {
    about: {
      title: "About",
      subtitle: "A quick snapshot of what I build and how I think about systems.",
    },
    skills: {
      title: "Skills",
      subtitle:
        "A focused backend-heavy toolset with cloud and frontend capability when needed.",
    },
    projects: {
      title: "Projects",
      subtitle: "Selected work showcasing scalable backend systems and platforms.",
      viewAll: "View All",
      card: {
        githubLabel: "GitHub",
        demoLabel: "Demo",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "Roles and impact across product and platform teams.",
    },
    education: {
      title: "Education",
      subtitle: "Academic background and certifications.",
      certificationsTitle: "Certifications",
    },
    contact: {
      title: "Contact",
      subtitle: "Have an opportunity or want to collaborate? Let’s talk.",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@example.com",
        messagePlaceholder: "Tell me about your project or role…",
        sendLabel: "Send",
        sendingToast: "Sending message…",
        successToast: "Message sent successfully.",
        errorToast: "Something went wrong.",
      },
    },
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind CSS, and Framer Motion.",
  },
} as const;

