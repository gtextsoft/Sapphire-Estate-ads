import { GraduationCap, Hospital, Building, Home, MapPin } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const landmarks = [
  { icon: GraduationCap, text: "University of Abuja — a permanent driver of residential demand" },
  { icon: Hospital, text: "National Hospital Teaching Complex" },
  { icon: Building, text: "Federal Immigration Headquarters" },
  { icon: Home, text: "Rapidly expanding residential and commercial communities" },
];

const LocationSection = () => (
  <section className="py-20 md:py-28 bg-[#F4F4F2]">
    <div className="container">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Surrounded by the Infrastructure That Drives <span className="text-gold-gradient">Property Value</span>
        </h2>
      </AnimateOnScroll>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <AnimateOnScroll>
          <div className="bg-card border border-border rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63014.17862542104!2d7.049!3d8.943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e6f4d73d6b3c9%3A0x2695e8e0a2b62bb0!2sGwagwalada%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gwagwalada location map"
            />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <div className="space-y-5">
            {landmarks.map((l, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <l.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed pt-2">{l.text}</p>
              </div>
            ))}
            <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 text-sm text-primary font-medium">
              <MapPin className="w-4 h-4" /> Directly on a tarred road
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default LocationSection;
