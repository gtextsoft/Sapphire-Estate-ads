import AnimateOnScroll from "./AnimateOnScroll";

const StorySection = () => (
  <section className="py-20 bg-dark-bg">
    <div className="container max-w-2xl text-center">
      <AnimateOnScroll>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark-text">
          People Said the Same Thing About <span className="text-gold-gradient">Gwarimpa.</span>
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <div className="space-y-6 text-dark-muted leading-relaxed text-base">
          <p>"Too far." "Not yet." "Let's wait and see." Today, those who waited are watching from the outside. Those who bought early are sitting on some of the most valuable land in Abuja.</p>
          <p>Growth in real estate doesn't announce itself. It shows up quietly — in road construction, in hospital expansions, in university enrollment numbers, in the new businesses appearing on what used to be empty roads.</p>
          <p>Gwagwalada is already showing every one of those signs. The question isn't whether it will grow. It's whether you'll be in it when it does.</p>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default StorySection;
