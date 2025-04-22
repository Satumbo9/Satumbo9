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
import { PiCertificateFill } from "react-icons/pi"
import { FaDiceTwo } from "react-icons/fa";
import { SkillGroups, Certifications } from "@/lib/background"
import React from "react";

export default function Skills() {
    return (
        <main className="relative overflow-hidden  bg-black text-white px-6 py-12">
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
                    <FaDiceTwo />
                    <span> Stack</span>
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
                    {SkillGroups.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center mb-4 gap-2">
                                {item.icon}
                                <h2 className="text-xl font-semibold">{item.title}</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <TooltipProvider>
                                    {item.skills.map((skill, i) => (
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
                <div className="text-left max-w-2xl ">
                    <div className="flex items-center gap-2 mb-4">
                        {React.createElement(PiCertificateFill, { className: 'text-4xl text-green-500 ' })}


                        <h2 className="text-4xl font-semibold">Certifications</h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {Certifications.map((item) => (
                            <AccordionItem key={item.id} value={item.id}>
                                <AccordionTrigger className="text-left cursor-pointer text-sm">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 text-sm">
                                    {item.details}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </main>
    )
}
