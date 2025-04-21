import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageSquare } from "lucide-react"

const faqs = [
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
]

export default function FAQSection({ id }: { id: string }) {
    return (
        <section id={id} className="max-w-3xl mx-auto px-6 py-16 text-white">
            <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-pink-500 w-5 h-5" />
                <h2 className="text-3xl font-bold">FAQ</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left text-lg">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-400">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
