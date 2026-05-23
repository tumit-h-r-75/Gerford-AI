import { useState, useEffect } from "react";
import { Menu, X, Activity } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          id="navbar-logo"
        >
          <div className="w-5 h-5 bg-brand-gold rounded-xs shrink-0 group-hover:rotate-12 transition-transform duration-300"></div>
          <div>
            <div className="font-display font-bold text-xl tracking-tight text-brand-text uppercase leading-none">
              Gerford AI
            </div>
            <p className="text-[8px] uppercase tracking-widest text-brand-muted font-mono leading-none mt-1">
              EST. 2019
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm" id="desktop-nav-links">
          <button
            onClick={() => handleNavClick("about")}
            className="text-brand-muted hover:text-brand-gold transition-colors duration-200 uppercase font-mono tracking-wider text-xs"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("capabilities")}
            className="text-brand-muted hover:text-brand-gold transition-colors duration-200 uppercase font-mono tracking-wider text-xs"
          >
            Capabilities
          </button>
          <button
            onClick={() => handleNavClick("work")}
            className="text-brand-muted hover:text-brand-gold transition-colors duration-200 uppercase font-mono tracking-wider text-xs"
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-brand-muted hover:text-brand-gold transition-colors duration-200 uppercase font-mono tracking-wider text-xs"
          >
            Contact
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className="border border-brand-gold font-mono text-xs uppercase tracking-wider text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-all duration-300 px-5 py-2.5 rounded-sm"
            id="navbar-cta"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-text hover:text-brand-gold transition-colors p-2"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[68px] bg-brand-bg/98 backdrop-blur-lg flex flex-col p-8 z-40 animate-fade-in md:hidden border-t border-brand-border"
          id="mobile-navigation-overlay"
        >
          <div className="flex flex-col gap-6 text-lg mt-8">
            <button
              onClick={() => handleNavClick("about")}
              className="text-left text-brand-text hover:text-brand-gold transition-colors border-b border-brand-border/40 pb-4 uppercase font-mono tracking-wider text-sm"
            >
              / About Us
            </button>
            <button
              onClick={() => handleNavClick("capabilities")}
              className="text-left text-brand-text hover:text-brand-gold transition-colors border-b border-brand-border/40 pb-4 uppercase font-mono tracking-wider text-sm"
            >
              / Capabilities
            </button>
            <button
              onClick={() => handleNavClick("work")}
              className="text-left text-brand-text hover:text-brand-gold transition-colors border-b border-brand-border/40 pb-4 uppercase font-mono tracking-wider text-sm"
            >
              / Work Portfolio
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-left text-brand-text hover:text-brand-gold transition-colors border-b border-brand-border/40 pb-4 uppercase font-mono tracking-wider text-sm"
            >
              / Contact
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="mt-4 w-full text-center border border-brand-gold uppercase tracking-widest text-sm text-brand-gold py-4 hover:bg-brand-gold hover:text-brand-bg transition-colors duration-300 font-mono"
            >
              Let's Talk
            </button>
          </div>
          <div className="mt-auto border-t border-brand-border/40 pt-6 flex flex-col gap-2 font-mono text-center text-xs text-brand-muted">
            <p>Gerford AI • Tokyo & Sydney</p>
            <p className="text-[10px]">Since 2019 • Olympic-Grade Precision</p>
          </div>
        </div>
      )}
    </nav>
  );
}
