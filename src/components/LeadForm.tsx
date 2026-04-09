import AnimateOnScroll from "./AnimateOnScroll";

const LeadForm = () => {
  return (
    <section id="form" className="py-16 md:py-20 bg-dark-bg">
      <div className="container max-w-5xl">
        <AnimateOnScroll>
          <div className="bg-dark-card border border-dark-border border-t-4 border-t-primary rounded-xl p-5 sm:p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-dark-text">
              Secure Your Plot
            </h2>
            <p className="text-dark-muted text-center text-sm mb-6 md:mb-8">
              Fill the form below, and a property consultant will reach out to you within 24 hours.
            </p>
            <iframe
              aria-label="SAPPHIRE ESTATE"
              title="SAPPHIRE ESTATE"
              frameBorder="0"
              className="w-full min-h-[560px] sm:min-h-[620px] border-0 rounded-md"
              src="https://forms.zohopublic.com/stephenstephen1/form/SAPPHIREESTATE/formperma/l-ECAVqQ5iUELnYZhv_qHNIhGvhp9Nhb8RjWReR-XJo"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default LeadForm;
