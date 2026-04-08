import { CheckCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const plans = [
  { name: "Mini Estate Plot", price: "₦12,000,000", label: "Best Entry Point", highlight: false },
  { name: "Full Plot — Outright", price: "₦15,000,000", label: "Most Popular", highlight: true },
  { name: "Full Plot — Instalment", price: "₦20,000,000", label: "Flexible Payment", highlight: false },
];

const PricingSection = () => (
  <section className="py-20 bg-[#F4F4F2]">
    <div className="container">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Anniversary Pricing — Available for a <span className="text-gold-gradient">Limited Window</span>
        </h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
        {plans.map((p, i) => (
          <div key={i} className="h-full">
            <div
              className={`relative h-full rounded-xl p-6 md:p-8 text-center transition-transform duration-300 ${
                p.highlight
                  ? "bg-card border-2 border-[#C9A227] shadow-lg md:-translate-y-3"
                  : "bg-card border border-border"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <span
                className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                  p.highlight ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                }`}
              >
                {p.label}
              </span>
              <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
              <p className="text-2xl md:text-3xl font-bold text-primary">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
      <AnimateOnScroll delay={0.3}>
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Free allocation included</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Full documentation package included</span>
          </div>
          <p className="text-xs text-muted-foreground italic mt-4">
            Pricing reflects early-entry positioning and is reviewed as the area develops.
          </p>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default PricingSection;
