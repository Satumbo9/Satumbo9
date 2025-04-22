import { Code2, MonitorSmartphone, Server, Settings2 } from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  location?: string;
  badge?: string;
};

const Timeline: TimelineItem[] = [
  {
    year: "2024 – Present",
    title: "Software Engineer · MiCamp Solutions 🇺🇸",
    description: `Building payment-focused web applications using Next.js, TypeScript, Tailwind CSS, and MongoDB. I lead UI/UX design with Figma, backend with Prisma + SQL, and integrate AI features like multimodal and generative AI. Azure DevOps + Responsible AI principles included.`,
    badge: "Full-time",
  },
  {
    year: "2022 – 2023",
    title: "Supply Chain | IT Intern · ExxonMobil 🇭🇺",
    description: `Optimized procurement and sales processes across global ops. Supported digitalization efforts, used SAP and Excel for tracking, and collaborated cross-functionally on supply chain innovation projects.`,
    badge: "Internship",
  },
  {
    year: "2020 – 2022",
    title: "Software Developer · NDB Inc. (Remote)",
    description: `Helped design and build a secure, browser-based VPN with React. Collaborated on backend architecture, implemented SSL encryption, and led UI/UX testing for seamless user flows.`,
    badge: "Remote",
  },
  {
    year: "Summer 2022",
    title: "Camp Staff · YMCA Storer Camps 🇺🇸",
    description: `Worked closely with mentors, improved soft skills, and developed leadership through real-world teamwork and professional collaboration.`,
    badge: "On-site",
  },
];
const FAQ = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in building scalable web applications with Next.js, TypeScript, Tailwind CSS, Prisma ORM, and MongoDB. I also integrate AI capabilities like multimodal prompting and generative AI into products.",
  },
  {
    question: "Do you offer mentorship or content creation?",
    answer:
      "Yes! I create dev-focused content on YouTube, and I love mentoring junior developers, especially around frontend architecture, design systems, and career growth.",
  },
  {
    question: "Can I hire you for freelance or contract work?",
    answer:
      "Absolutely. I offer different engagement tiers from code support to full tech partnership. Let's connect to see what fits your needs best!",
  },
  {
    question: "Have you worked with enterprise companies?",
    answer:
      "Yes, I’ve worked with MiCamp Solutions on payment-focused software, ExxonMobil on global supply chain digitalization, and built security-first tools with NDB Inc.",
  },
  {
    question: "Where are you based?",
    answer:
      "I’m currently based in Scottsdale, Arizona, USA, but I’ve also worked internationally in Hungary. Remote collaboration is second nature to me.",
  },
];


const SkillGroups = [
  {
    title: "Frontend",
    icon: <MonitorSmartphone className="w-5 h-5 text-pink-500" />,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Figma",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-purple-500" />,
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "SQL",
      "Firebase",
    ],
  },
  {
    title: "DevOps / Tools",
    icon: <Settings2 className="w-5 h-5 text-blue-500" />,
    skills: [
      "Git",
      "Azure DevOps",
      "Vercel",
      "Zustand",
      "TurboRepo",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: "AI / Creative",
    icon: <Code2 className="w-5 h-5 text-yellow-400" />,
    skills: [
      "Multimodal AI",
      "Generative AI",
      "Responsible AI",
      "Content Creation",
      "YouTube",
      "Teaching",
    ],
  },
]

const Certifications = [
  {
    id: "google-prompting",
    title: "Google Prompting Essentials",
    details:
      "Issued by Google in April 2025, this certification covers the foundations of prompt engineering for large language models. It includes hands-on techniques for few-shot and zero-shot prompting, chain-of-thought prompting, and best practices for building safe and responsible AI systems. Focus areas included: Generative AI, Responsible AI, Prompt Design, Safety & Bias Awareness, and Task-Specific Optimization.",
  },
]

export { Timeline, FAQ, SkillGroups, Certifications };
