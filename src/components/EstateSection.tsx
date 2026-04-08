import { Shield, Zap, Droplets, TreePine, LayoutGrid, Sun } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  { icon: Shield, title: "Gated Access", desc: "Secure perimeter with controlled entry for residents and visitors." },
  { icon: Zap, title: "Smart Power", desc: "Modern power infrastructure designed for reliability." },
  { icon: Droplets, title: "Water System", desc: "Built-in water supply for every plot." },
  { icon: TreePine, title: "Green Areas", desc: "Organized green spaces for community and lifestyle." },
  { icon: LayoutGrid, title: "Structured Layout", desc: "Surveyed, organized plots for seamless development." },
  { icon: Sun, title: "Dry Land", desc: "Zero waterlogging risk — ready for development immediately." },
];

const EstateSection = () => (
  <section className="py-20 md:py-28 bg-[#F4F4F2]">
    <div className="container">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          This Isn't Just Land. It's a <span className="text-gold-gradient">Structured Community.</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 text-sm">
          Sapphire City is designed to be livable from day one — not a plot in a field with a fancy name.
        </p>
      </AnimateOnScroll>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <AnimateOnScroll key={i} delay={i * 0.05}>
            <div className="bg-card border border-border rounded-xl p-7 md:p-8 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default EstateSection;
