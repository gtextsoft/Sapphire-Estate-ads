import AnimateOnScroll from "./AnimateOnScroll";

const FinalCTA = () => (
  <section className="py-20 bg-dark-bg">
    <div className="container max-w-2xl text-center">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-dark-text">
          The Right Time to Buy Land Is <span className="text-gold-gradient">Before Everyone Else Knows About It.</span>
        </h2>
        <p className="text-dark-muted mb-10 text-sm md:text-base leading-relaxed">
          By the time Gwagwalada becomes a headline, this pricing will be history. Fill the form now — get the full details, ask your questions, and decide with clarity.
        </p>
        <a
          href="#form"
          className="inline-flex bg-primary text-primary-foreground px-10 py-4 rounded-md font-semibold text-base hover:opacity-90 transition-opacity animate-cta-pulse"
        >
          👉 Get Full Details & Reserve My Plot
        </a>
      </AnimateOnScroll>
    </div>
  </section>
);

export default FinalCTA;
