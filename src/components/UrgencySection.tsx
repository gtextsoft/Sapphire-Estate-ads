import AnimateOnScroll from "./AnimateOnScroll";
import { FORM_URL } from "@/lib/constants";

const UrgencySection = () => (
  <section className="py-20 bg-dark-bg">
    <div className="container max-w-3xl">
      <AnimateOnScroll>
        <div className="bg-dark-card border border-dark-border rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-dark-text">
            Anniversary Pricing Has an Expiry. <span className="text-gold-gradient">Development Doesn't Wait.</span>
          </h2>
          <div className="space-y-4 text-dark-muted leading-relaxed text-sm md:text-base">
            <p>This offer is tied to Sapphire City's anniversary window — once it closes, it closes.</p>
            <p>As road infrastructure improves and surrounding institutions expand, land in this corridor consistently gets repriced upward. Buyers who act on early pricing don't just secure land — they secure margin.</p>
            <p>The risk of waiting isn't losing the plot. It's paying significantly more for the same asset in 12 months.</p>
          </div>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity animate-cta-pulse"
          >
            👉 Lock In This Price Now
          </a>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default UrgencySection;
