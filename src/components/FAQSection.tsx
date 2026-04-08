import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  { q: "What's the title on the land?", a: "Registered Survey. The documentation is verified and professionally processed." },
  { q: "Is the land dry?", a: "Yes. Fully dry land — no waterlogging, no rainy season surprises. Ready for development." },
  { q: "Can I buy without visiting in person?", a: "Yes. The process is fully structured — documentation, allocation, and handover are handled professionally. Many buyers complete remotely." },
  { q: "Is there a payment plan available?", a: "Yes. The instalment option lets you spread payment while locking in your plot at today's price." },
  { q: "What happens after I fill out the form?", a: "A property consultant contacts you within 24 hours with the full offer details, documentation breakdown, and any specific questions answered." },
];

const FAQSection = () => (
  <section className="py-20">
    <div className="container max-w-2xl">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Common Questions, <span className="text-gold-gradient">Honest Answers</span>
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30">
              <AccordionTrigger className="text-sm font-medium py-5 hover:no-underline text-left [&>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-5 border-t border-border pt-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimateOnScroll>
    </div>
  </section>
);

export default FAQSection;
