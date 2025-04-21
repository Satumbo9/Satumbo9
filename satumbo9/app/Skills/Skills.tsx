"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Code2,
    MonitorSmartphone,
    Server,
    Settings2,
} from "lucide-react"
import { PiCertificateFill } from "react-icons/pi"
import { BsTools } from "react-icons/bs"

const skillGroups = [
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

const certifications = [
    {
        id: "google-prompting",
        title: "Google Prompting Essentials",
        details:
            "Issued by Google in April 2025, this certification covers the foundations of prompt engineering for large language models. It includes hands-on techniques for few-shot and zero-shot prompting, chain-of-thought prompting, and best practices for building safe and responsible AI systems. Focus areas included: Generative AI, Responsible AI, Prompt Design, Safety & Bias Awareness, and Task-Specific Optimization.",
    },
]

export default function Skills() {
    return (
        <main className="relative overflow-hidden  bg-black text-white px-6 py-12">
            {/* ✨ Sparkles Layer */}
            <div className="pointer-events-none absolute inset-0 z-0 animate-pulse-slow">
                {[
                    { top: "10%", left: "15%" },
                    { top: "20%", left: "70%" },
                    { top: "35%", left: "40%" },
                    { top: "50%", left: "25%" },
                    { top: "65%", left: "80%" },
                    { top: "75%", left: "50%" },
                    { top: "85%", left: "10%" },
                    { top: "30%", left: "85%" },
                    { top: "60%", left: "60%" },
                    { top: "90%", left: "35%" },
                ].map((pos, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-twinkle"
                        style={{
                            top: pos.top,
                            left: pos.left,
                            animationDelay: `${i * 0.3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <p className="text-4xl items-center justify-center flex gap-5 font-bold mb-4">
                    <BsTools />
                    <span>My Skills</span>
                </p>
                <p className="text-gray-400 mb-2">
                    These are the technologies, tools, and creative skills I use to build,
                    ship, and scale software.
                </p>
                <p className="text-sm text-gray-500 mb-12">
                    Connect with me on{" "}
                    <a
                        href="https://www.linkedin.com/in/edimarf-satumbo-96b725143/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:underline"
                    >
                        LinkedIn
                    </a>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {skillGroups.map((group, idx) => (
                        <div
                            key={idx}
                            className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center mb-4 gap-2">
                                {group.icon}
                                <h2 className="text-xl font-semibold">{group.title}</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <TooltipProvider>
                                    {group.skills.map((skill, i) => (
                                        <Tooltip key={i}>
                                            <TooltipTrigger asChild>
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-zinc-800 text-white hover:bg-pink-600 transition-colors cursor-default"
                                                >
                                                    {skill}
                                                </Badge>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{skill}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </TooltipProvider>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="text-left max-w-2xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <PiCertificateFill className="text-green-500 w-5 h-5" />
                        <h2 className="text-2xl font-semibold">Certifications</h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {certifications.map((cert) => (
                            <AccordionItem key={cert.id} value={cert.id}>
                                <AccordionTrigger className="text-left">
                                    {cert.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 text-sm">
                                    {cert.details}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </main>
    )
}
