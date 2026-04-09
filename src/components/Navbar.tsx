import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-lg border-b border-dark-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className={`font-display text-xl md:text-2xl font-bold transition-colors ${scrolled ? "text-primary" : "text-primary"}`}>
          Sapphire City
        </a>
        <a
          href="https://forms.zoho.com/stephenstephen1/form/SAPPHIREESTATE"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Reserve Your Plot
        </a>
        <button className={`md:hidden transition-colors ${scrolled ? "text-dark-text" : "text-dark-text"}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border p-4">
          <a
            href="https://forms.zoho.com/stephenstephen1/form/SAPPHIREESTATE"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm"
          >
            Reserve Your Plot
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
