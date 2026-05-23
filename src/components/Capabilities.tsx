import { Eye, BarChart3, Cpu, ArrowRight } from "lucide-react";
import { CapabilityItem } from "../types";

const capabilities: CapabilityItem[] = [
  {
    id: "cap-1",
    iconName: "vision",
    title: "Computer Vision & Tracking",
    body: "We extract millisecond-accurate performance data from live or broadcast video — completely eliminating the need for complex on-site camera hardware. Commercially proven and deployed across 8 Olympic sports disciplines.",
  },
  {
    id: "cap-2",
    iconName: "analytics",
    title: "Performance Analytics",
    body: "From professional athlete biomechanical metrics to raw enterprise operational intelligence — we synthesize massive multidimensional databases into actionable strategic decisions that create unfair competitive advantage.",
  },
  {
    id: "cap-3",
    iconName: "service",
    title: "AI-as-a-Service (AlaaS)",
    body: "Custom, end-to-end proprietary machine learning models integration right inside your current software pipeline. Sport was our uncompromising proving ground — it is never our capability limit.",
  },
];

export default function Capabilities() {
  const getIcon = (type: string) => {
    switch (type) {
      case "vision":
        return <Eye className="w-6 h-6 text-brand-gold" />;
      case "analytics":
        return <BarChart3 className="w-6 h-6 text-brand-gold" />;
      case "service":
        return <Cpu className="w-6 h-6 text-brand-gold" />;
      default:
        return <Cpu className="w-6 h-6 text-brand-gold" />;
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
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
    <section id="capabilities" className="py-24 md:py-32 bg-brand-surface relative overflow-hidden border-b border-brand-border">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-2xl text-left mb-16 md:mb-24">
          <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-brand-gold font-bold mb-3 md:mb-4 inline-block">
            // OUR CAPABILITIES
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tighter text-brand-text mb-6 uppercase">
            AI Built for <br className="hidden sm:inline" />
            the <span className="text-transparent text-outline" style={{ WebkitTextStroke: "1px #F0EFE9", opacity: 0.85 }}>Real World</span>
          </h2>
          <div className="w-12 h-1 bg-brand-gold/60 mb-6 rounded-sm"></div>
          <p className="text-brand-muted font-sans text-base leading-relaxed">
            Five years of refining deep neural networks in environments where fractions of a millimeter and micro-seconds represent the line between world champions and runners-up. This is real, rugged, deployed AI.
          </p>
        </div>

        {/* 3-Column Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" id="capabilities-grid">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="group border border-brand-border bg-brand-bg/80 p-8 flex flex-col justify-between hover:border-brand-gold hover:translate-y-[-4px] transition-all duration-300 relative rounded-sm"
              id={`capability-card-${cap.id}`}
            >
              {/* Corner accent decorative gold dots, visible on hover */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Floating blur glow back of icon */}
                <div className="relative w-12 h-12 flex items-center justify-center bg-brand-surface border border-brand-border rounded mb-8 group-hover:border-brand-gold/50 transition-colors duration-300">
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 filter blur-xs rounded transition-opacity duration-300"></div>
                  {getIcon(cap.iconName)}
                </div>

                <h3 className="font-display font-semibold text-xl text-brand-text mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                  {cap.title}
                </h3>

                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {cap.body}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/45 mt-auto flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-brand-gold opacity-80 group-hover:opacity-100">
                <span>Enterprise Deployed</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold ml-1"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Prompt to custom B2B inquiry */}
        <div className="border border-brand-border bg-brand-bg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative rounded-sm">
          <div className="absolute inset-y-0 left-0 w-1 bg-brand-gold"></div>
          <div>
            <h4 className="font-display font-medium text-lg text-brand-text mb-1 text-left">
              Need a completely tailormade vision or machine learning interface?
            </h4>
            <p className="text-brand-muted text-xs font-mono uppercase tracking-wider text-left">
              Our engineering team integrates seamlessly with enterprise tech stacks
            </p>
          </div>
          <button
            onClick={handleScrollToContact}
            className="flex items-center gap-2 px-6 py-3 bg-brand-surface hover:bg-brand-gold hover:text-brand-bg text-brand-text hover:border-brand-gold border border-brand-border text-xs uppercase tracking-widest font-mono transition-all duration-300 rounded-sm"
          >
            <span>Consult our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
