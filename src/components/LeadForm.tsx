import AnimateOnScroll from "./AnimateOnScroll";
import { FORM_URL } from "@/lib/constants";

const budgetOptions = ["₦5M – ₦10M", "₦10M – ₦20M", "₦20M+"];
const purposeOptions = ["Investment", "Personal Use", "Undecided"];

const inputClass = "w-full bg-dark-card border border-dark-border rounded-md px-4 py-3 text-sm text-dark-text placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary";

const LeadForm = () => {
  return (
    <section id="form" className="py-20 bg-dark-bg">
      <div className="container max-w-xl">
        <AnimateOnScroll>
          <div className="bg-dark-card border border-dark-border border-t-4 border-t-primary rounded-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-dark-text">
              Secure Your Plot
            </h2>
            <p className="text-dark-muted text-center text-sm mb-8">
              Fill the form below, and a property consultant will reach out to you within 24 hours.
            </p>
            <form className="space-y-5">
              <input name="fullName" required placeholder="Full Name" className={inputClass} />
              <input name="phone" required type="tel" placeholder="Phone Number (WhatsApp Preferred)" className={inputClass} />
              <input name="email" required type="email" placeholder="Email Address" className={inputClass} />
              <input name="location" placeholder="Location / Country" className={inputClass} />
              <div>
                <label className="block text-sm font-medium mb-2 text-dark-text">Budget Range</label>
                <div className="flex flex-wrap gap-3">
                  {budgetOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer text-dark-muted">
                      <input type="radio" name="budget" value={opt} className="accent-primary" required />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-dark-text">Purpose</label>
                <div className="flex flex-wrap gap-3">
                  {purposeOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer text-dark-muted">
                      <input type="radio" name="purpose" value={opt} className="accent-primary" required />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => window.open(FORM_URL, "_blank", "noopener,noreferrer")}
                className="w-full bg-primary text-primary-foreground py-4 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                👉 Send Me the Full Property Details
              </button>
              <p className="text-center text-xs text-dark-muted">🔒 Your details are private. No spam, ever.</p>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default LeadForm;
