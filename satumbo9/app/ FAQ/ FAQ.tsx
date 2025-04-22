import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";
import { FAQ } from "@/lib/background";

export default function FAQSection({ id }: { id: string }) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-16 text-white">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="text-pink-500 w-5 h-5" />
        <h2 className="text-3xl font-bold">FAQ</h2>
      </div>

      <Accordion type="single" collapsible className="w-full ">
        {FAQ.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-lg cursor-pointer">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-400">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
