import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Mac Cummings",
  initials: "MC",
  url: "https://maccummings.dev",
  location: "Stuart, FL",
  locationLink: "https://www.google.com/maps/place/Stuart,+FL",
  description:
    "I build fast, modern websites that help businesses grow. Based in South Florida, delivering worldwide.",
  summary:
    "I'm a full-stack developer and finance student who builds high-performance websites and web applications for businesses that want to stand out online. I specialize in [modern tech stacks like Next.js and React](/#skills) that load fast, rank well on Google, and convert visitors into customers. What sets me apart is speed — I deliver in days what most agencies take weeks to build, without cutting corners on quality. Whether you need a [landing page, a full business site, or a custom web app](/#services), I treat every project like it's my own.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Supabase", icon: undefined },
    { name: "Tailwind CSS", icon: undefined },
    { name: "Claude AI", icon: undefined },
    { name: "Playwright", icon: undefined },
    { name: "Vercel", icon: undefined },
    { name: "Git", icon: undefined },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mac@maccummings.dev",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bestmackied",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/maccummings",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/maccummings",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mac@maccummings.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "#",
      badges: ["Current"],
      location: "Stuart, FL",
      title: "Full-Stack Web Developer",
      logoUrl: "",
      start: "2026",
      end: "Present",
      description:
        "Building modern, high-performance websites and web applications for businesses across South Florida and beyond. Specializing in Next.js, React, and Tailwind CSS with a focus on speed, SEO, and conversion optimization.",
    },
    {
      company: "PartHawk",
      href: "#",
      badges: ["Co-founder"],
      location: "Stuart, FL",
      title: "Technical Co-founder",
      logoUrl: "",
      start: "2026",
      end: "Present",
      description:
        "Building an aerospace parts price comparison platform — think Kayak for airplane parts. Multi-vendor search engine with real-time pricing, parallel API queries, and CSV export for procurement teams.",
    },
  ],
  education: [
    {
      school: "University of South Florida",
      href: "https://www.usf.edu",
      degree: "Bachelor's in Finance",
      logoUrl: "",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "SupportBase — AI Chatbot Builder",
      href: "https://supportbase-rust.vercel.app",
      dates: "2026",
      active: true,
      description:
        "A SaaS platform that lets businesses deploy AI-powered customer support chatbots. Upload your docs, train the AI on your content, and embed a chat widget on your site. Includes Stripe billing, Supabase auth, and a full admin dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Stripe",
        "Claude AI",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Live Site",
          href: "https://supportbase-rust.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bestmackied",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PartHawk — Aerospace Parts Search",
      href: "https://github.com/bestmackied/parthawk",
      dates: "2026",
      active: true,
      description:
        "A multi-vendor price comparison engine for aerospace parts — think Kayak for airplane parts. Searches 8+ vendor portals simultaneously with real-time pricing, quote parsing, and CSV export for procurement teams.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Playwright",
        "WebSocket",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/bestmackied/parthawk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Trading Bot — Algorithmic Trading",
      href: "https://github.com/bestmackied/trading-bot",
      dates: "2026",
      active: true,
      description:
        "A full-stack algorithmic trading platform with a backtesting engine, multiple strategy modules, real-time dashboard, and Docker deployment. Built for paper trading validation and prop firm integration.",
      technologies: [
        "Python",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "WebSocket",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/bestmackied/trading-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Jarvis — AI Command Center",
      href: "https://github.com/bestmackied/jarvis",
      dates: "2026",
      active: true,
      description:
        "A local-first AI operations dashboard with setup wizard, skill management, Drizzle ORM, NextAuth, and system health monitoring. Manages projects, tasks, and AI agent workflows from a single interface.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Drizzle ORM",
        "NextAuth",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/bestmackied/jarvis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Custom Website Design & Development",
      dates: "Starting at $1,500",
      location: "5-7 page business website",
      description:
        "Fully custom, mobile-responsive websites built with modern frameworks. SEO-optimized, fast-loading, and designed to convert visitors into customers. Includes contact forms, analytics setup, and deployment.",
      image: "",
      links: [] as readonly { href: string; title: string; icon?: React.ReactNode }[],
    },
    {
      title: "Landing Pages",
      dates: "Starting at $500",
      location: "Single-page, high-conversion",
      description:
        "Focused landing pages designed for lead generation, product launches, or marketing campaigns. Built for speed and conversion with clear CTAs, responsive design, and A/B testing ready.",
      image: "",
      links: [] as readonly { href: string; title: string; icon?: React.ReactNode }[],
    },
    {
      title: "Web Applications & Dashboards",
      dates: "Starting at $3,000",
      location: "Custom-scoped",
      description:
        "Full-stack web applications with user authentication, data visualization, real-time features, and admin panels. From internal tools to customer-facing SaaS products.",
      image: "",
      links: [] as readonly { href: string; title: string; icon?: React.ReactNode }[],
    },
    {
      title: "E-Commerce Stores",
      dates: "Starting at $2,000",
      location: "Shopify or custom",
      description:
        "Online stores with product management, cart, checkout, payment processing, and inventory tracking. Optimized for mobile shopping and fast page loads that keep customers buying.",
      image: "",
      links: [] as readonly { href: string; title: string; icon?: React.ReactNode }[],
    },
    {
      title: "Website Redesign & Modernization",
      dates: "Starting at $800",
      location: "Upgrade your existing site",
      description:
        "Transform your outdated website into a modern, fast, mobile-friendly experience. Migration from WordPress, Squarespace, or legacy platforms to cutting-edge tech that ranks better on Google.",
      image: "",
      links: [] as readonly { href: string; title: string; icon?: React.ReactNode }[],
    },
    {
      title: "Ongoing Maintenance & Support",
      dates: "From $150/month",
      location: "Retainer packages",
      description:
        "Monthly website maintenance including content updates, security patches, performance monitoring, SEO optimization, and priority support. Keep your site running smoothly without the hassle.",
      image: "",
      links: [] as readonly { href: string; title: string; icon?: React.ReactNode }[],
    },
  ],
} as const;
