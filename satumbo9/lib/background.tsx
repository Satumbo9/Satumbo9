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
      "Yes! I create dev-focused content on YouTube, and I love mentoring junior developers — especially around frontend architecture, design systems, and career growth.",
  },
  {
    question: "Can I hire you for freelance or contract work?",
    answer:
      "Absolutely. I offer different engagement tiers — from code support to full tech partnership. Let's connect to see what fits your needs best!",
  },
  {
    question: "Have you worked with enterprise companies?",
    answer:
      "Yes, I’ve worked with MiCamp Solutions on payment-focused software, ExxonMobil on global supply chain digitalization, and built security-first tools with NDB Inc.",
  },
  {
    question: "Where are you based?",
    answer:
      "I’m currently based in Scottsdale, Arizona 🇺🇸 — but I’ve also worked internationally in Brazil and Hungary. Remote collaboration is second nature to me.",
  },
];

export { Timeline, FAQ };
