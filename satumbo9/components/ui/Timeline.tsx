type TimelineItem = {
    year: string
    title: string
    description: string
    location?: string
    badge?: string
}

const timeline: TimelineItem[] = [
    {
        year: "2025",
        title: "Building Personal Brand",
        description: "Focused on creating content, launching digital products, and mentoring devs.",
        badge: "Now",
    },
    {
        year: "2023",
        title: "Back to Brazil 🇧🇷",
        description: "Spiritual growth, reconnected with roots, launched solo projects.",
    },
    {
        year: "2022",
        title: "Moved to Netherlands 🇳🇱 — Reaktor",
        description: "Worked on products for Adidas, Netflix, and HBO. Growth-focused role.",
        badge: "International",
    },
    {
        year: "2021",
        title: "Content Creation Journey",
        description: "Started YouTube. Reached thousands of devs. Taught modern React.",
    },
]

export default function ExperienceTimeline() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">📍 Experience Timeline</h2>
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
