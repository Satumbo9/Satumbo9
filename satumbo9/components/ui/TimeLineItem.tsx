
import { GiSoapExperiment } from "react-icons/gi";

type TimelineItem = {
    year: string
    title: string
    description: string
    location?: string
    badge?: string
}

const timeline: TimelineItem[] = [
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
        badge: "Part-time",
    },
    {
        year: "Summer 2022",
        title: "Camp Staff · YMCA Storer Camps 🇺🇸",
        description: `Worked closely with mentors, improved soft skills, and developed leadership through real-world teamwork and professional collaboration.`,
        badge: "On-site",
    },
]


export default function ExperienceTimeline() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <p className="text-3xl flex items-center justify-center gap-5 font-bold text-center mb-12">
                <GiSoapExperiment />

                Work Experience
            </p>
            <div className="relative border-l border-zinc-800 ml-4">
                {timeline.map((item, i) => (
                    <div key={i} className="mb-12 ml-6">
                        <span className="absolute -left-3.5 top-1 w-4 h-4 bg-pink-500 rounded-full border-2 border-white" />

                        <div className="mb-2 flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-white">{item.year}</h3>
                            {item.badge && (
                                <span className="bg-purple-700 text-white text-xs px-2 py-0.5 rounded">
                                    {item.badge}
                                </span>
                            )}
                        </div>

                        <h4 className="text-md text-pink-400 font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
