import { Linkedin, Activity } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#070809] border-t border-brand-border py-16 text-left relative z-10 font-sans">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Main Columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 mb-12 border-b border-brand-border/40">
          
          {/* Column A: Logo & Slogan (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-3 text-left focus:outline-none mb-6 group cursor-pointer"
            >
              <div className="w-5 h-5 bg-brand-gold rounded-xs shrink-0 group-hover:rotate-12 transition-transform duration-300"></div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-brand-text flex items-baseline leading-none">
                  GERFORD AI
                </span>
                <p className="text-[8px] uppercase tracking-widest text-brand-muted font-mono leading-none mt-1">
                  EST. 2019
                </p>
              </div>
            </button>
            
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm mb-4">
              AI solutions constructed for elite sporting pressure and enterprise challenges. We build systems that perform on the absolute edge.
            </p>
            <div className="font-mono text-[10px] text-brand-gold uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <span>AI That Performs Under Pressure.</span>
            </div>
          </div>

          {/* Column B: Navigation Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col md:items-center text-left">
            <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-[#FFF]">
              <span className="text-[9px] text-[#8A8F9E] font-bold pb-2 block border-b border-brand-border/40">
                // PLATFORM INDEX
              </span>
              <button
                onClick={() => handleNavClick("about")}
                className="text-left text-brand-muted hover:text-brand-gold transition-colors cursor-pointer"
              >
                About Gerford
              </button>
              <button
                onClick={() => handleNavClick("capabilities")}
                className="text-left text-brand-muted hover:text-brand-gold transition-colors cursor-pointer"
              >
                Our Capabilities
              </button>
              <button
                onClick={() => handleNavClick("work")}
                className="text-left text-brand-muted hover:text-brand-gold transition-colors cursor-pointer"
              >
                Selected Work
              </button>
              <button
                onClick={() => handleNavClick("why-gerford")}
                className="text-left text-brand-muted hover:text-brand-gold transition-colors cursor-pointer"
              >
                Why Gerford
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-left text-brand-muted hover:text-brand-gold transition-colors cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Column C: LinkedIn Connector / Social (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-[9px] font-mono text-brand-muted uppercase tracking-widest font-bold pb-2 border-b border-brand-border/40 mb-6">
              // CONNECT
            </p>
            <a
              href="https://www.linkedin.com/company/gerford"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-3.5 px-4 py-3 border border-brand-border bg-brand-surface hover:bg-brand-gold hover:text-brand-bg hover:border-brand-gold text-brand-text transition-all duration-300 rounded-sm font-mono text-xs uppercase tracking-wider"
              id="footer-linkedin-link"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              <span>Gerford LinkedIn</span>
            </a>
            
            <p className="text-[10px] text-[#8A8F9E] mt-4 font-mono uppercase tracking-wide">
              Official Social Headquarters
            </p>
          </div>

        </div>

        {/* Bottom Copy strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[10px] text-brand-muted uppercase tracking-wider">
          <p>© 2026 Gerford AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://www.gerford.com" className="hover:text-brand-gold transition-colors">
              www.gerford.com
            </a>
            <span className="text-brand-border">|</span>
            <button
              onClick={handleScrollToTop}
              className="hover:text-brand-gold transition-colors text-right"
            >
              Back To Zenith ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
