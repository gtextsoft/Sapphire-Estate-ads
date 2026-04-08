import { UserCheck, Globe, TrendingUp, Landmark } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const cards = [
  { icon: UserCheck, title: "First-Time Buyers", desc: "Verified land without the stress of chasing titles." },
  { icon: Globe, title: "Diaspora Buyers", desc: "Secure a foothold back home — no physical presence required." },
  { icon: TrendingUp, title: "Strategic Investors", desc: "Early positioning in growing corridors is where real returns are made." },
  { icon: Landmark, title: "Long-Term Builders", desc: "Building a lasting asset, not chasing short-term noise." },
];

const AudienceSection = () => (
  <section className="py-20 bg-[#F4F4F2]">
    <div className="container">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Is Sapphire City <span className="text-gold-gradient">Right for You?</span>
        </h2>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {cards.map((c, i) => (
          <div key={i}>
            <div className="bg-card border border-border border-l-4 border-l-primary rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <c.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
