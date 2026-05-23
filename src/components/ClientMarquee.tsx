import { ReactNode } from "react";
import { Activity, Shield, Flame, Globe } from "lucide-react";

interface LogoProps {
  name: string;
  sub: string;
  icon: ReactNode;
}

const logoData: LogoProps[] = [
  {
    name: "USA SWIMMING",
    sub: "Olympic Division",
    icon: <Flame className="w-4 h-4 text-brand-gold shrink-0" />
  },
  {
    name: "WORLD TABLE TENNIS",
    sub: "International Federation",
    icon: <Globe className="w-4 h-4 text-brand-text shrink-0" />
  },
  {
    name: "TABLE TENNIS ENGLAND",
    sub: "National Union",
    icon: <Shield className="w-4 h-4 text-brand-blue shrink-0" />
  },
  {
    name: "TEAM ENGLAND",
    sub: "Commonwealth Federation",
    icon: <Activity className="w-4 h-4 text-brand-gold shrink-0" />
  },
  {
    name: "PARIS 2024",
    sub: "Olympic Telemetry Vendor",
    icon: <Flame className="w-4 h-4 text-brand-text shrink-0" />
  }
];

export default function ClientMarquee() {
  // Duplicate list to achieve infinite scrolling visual marquee
  const duplicateLogos = [...logoData, ...logoData, ...logoData];

  return (
    <section id="marquee" className="py-16 bg-brand-surface relative overflow-hidden border-b border-brand-border select-none">
      <div className="max-w-[1200px] mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-brand-muted font-bold inline-block">
          // CRITICAL PLATFORMS TRUSTED BY
        </p>
      </div>

      {/* Outer Marquee box */}
      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Left and Right blur safety fades overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-brand-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-brand-surface to-transparent z-10 pointer-events-none"></div>

        {/* Infinite Animating Strip */}
        <div className="flex gap-8 md:gap-14 animate-infinite-marquee whitespace-nowrap min-w-full">
          {duplicateLogos.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 bg-brand-bg/40 border border-brand-border hover:border-brand-gold hover:bg-brand-bg hover:scale-102 transition-all duration-300 px-5 py-3.5 rounded-sm opacity-40 hover:opacity-100 cursor-pointer shrink-0"
              title={item.name}
            >
              <div className="w-7 h-7 rounded bg-brand-surface border border-brand-border/60 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="text-left leading-none flex flex-col justify-center">
                <span className="font-display font-black text-xs md:text-sm text-brand-text tracking-wider">
                  {item.name}
                </span>
                <span className="text-[8px] font-mono text-brand-muted uppercase tracking-widest mt-0.5">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
