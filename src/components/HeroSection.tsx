import { MapPin, CheckCircle, FileText, Gift } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const bullets = [
  { icon: MapPin, text: "Sits directly on a tarred road — accessible today, not someday" },
  { icon: CheckCircle, text: "Dry land, ready for immediate development" },
  { icon: FileText, text: "Registered Survey — title verified, no stories" },
  { icon: Gift, text: "Free allocation included at no extra cost" },
];

const pricing = [
  { price: "₦12M", label: "Mini Estate Plot" },
  { price: "₦15M", label: "Outright" },
  { price: "₦20M", label: "Instalment Plan" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Sapphire City estate aerial view" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/70 to-foreground/90" />
    </div>
    <div className="container relative z-10 py-16 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl text-dark-text"
      >
        Own Land in Abuja Before the Price{" "}
        <span className="text-gold-gradient">Catches Up.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-6 text-dark-muted text-base md:text-lg max-w-2xl leading-relaxed"
      >
        Sapphire City, Gwagwalada — a fully structured, gated estate with verified title, tarred road access, and flexible ownership plans built for serious buyers.
      </motion.p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        {bullets.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
            className="flex items-start gap-3"
          >
            <b.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span className="text-sm text-dark-text/80">{b.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {pricing.map((p, i) => (
          <div key={i} className="bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-full px-5 py-2.5 text-sm">
            <span className="font-bold text-primary">{p.price}</span>
            <span className="text-dark-muted ml-2">— {p.label}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
      >
        <a
          href="#form"
          className="mt-10 inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:opacity-90 transition-opacity"
        >
          👉 Reserve Your Plot — Get Full Details
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
