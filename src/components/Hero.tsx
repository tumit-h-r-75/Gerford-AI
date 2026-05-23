import { ArrowRight, ChevronDown, Activity, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [simulationFrame, setSimulationFrame] = useState(0);
  const [speed, setSpeed] = useState(2.81);
  const [strokeRate, setStrokeRate] = useState(54);

  // Active tracking simulation for Paris 2024 swimmer metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulationFrame((prev) => (prev + 1) % 100);
      setSpeed((prev) => {
        const delta = (Math.random() - 0.5) * 0.15;
        const next = prev + delta;
        return Math.max(1.9, Math.min(3.4, parseFloat(next.toFixed(2))));
      });
      setStrokeRate((prev) => {
        const delta = Math.round((Math.random() - 0.5) * 4);
        const next = prev + delta;
        return Math.max(45, Math.min(65, next));
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-brand-bg overflow-hidden pt-28 pb-16 border-b border-brand-border"
    >
      {/* Background radial blue glow behind headline & tech grid lines */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 45%, rgba(74, 108, 247, 0.12) 0%, rgba(10, 11, 15, 0) 65%),
            radial-gradient(circle at 10% 20%, rgba(200, 169, 110, 0.04) 0%, rgba(10, 11, 15, 0) 50%),
            linear-gradient(to right, rgba(238,238,238,0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(238,238,238,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px"
        }}
      ></div>

      <div className="absolute top-[30%] left-[20%] right-[20%] h-48 w-48 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-6 flex flex-col md:grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Content - 7 columns */}
        <div className="md:col-span-7 flex flex-col items-start text-left mt-6 md:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-surface border border-brand-border rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-brand-gold">
              AI SOLUTIONS · EST. 2019
            </span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8.5xl text-brand-text tracking-tighter leading-[0.9] mb-8 uppercase">
            FIVE YEARS BUILDING AI <br />
            THAT PERFORMS UNDER <br />
            <span className="text-transparent text-outline" style={{ WebkitTextStroke: "1px #F0EFE9", opacity: 0.85 }}>
              PRESSURE.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed mb-10">
            From Olympic tracks to enterprise operations — Gerford AI delivers real, deployed computer vision solutions that create competitive advantage. Sport was our foundation — it is not our ceiling.
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <button
              onClick={() => handleScrollToSection("work")}
              className="bg-brand-gold border border-brand-gold hover:bg-transparent hover:text-brand-gold transition-all duration-300 font-mono text-xs uppercase tracking-widest text-brand-bg px-10 py-4.5 rounded-sm font-bold flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollToSection("about")}
              className="font-mono text-xs uppercase tracking-widest text-brand-text hover:text-brand-gold border-b-2 border-brand-gold/60 hover:border-brand-gold transition-all duration-300 pb-1 cursor-pointer font-bold"
            >
              ABOUT GERFORD AI →
            </button>
          </div>
        </div>

        {/* Right Side Live Telemetry Mock / Technical Block - 5 columns */}
        <div className="md:col-span-5 w-full">
          <div className="relative border border-brand-border bg-brand-surface rounded-sm overflow-hidden p-6 shadow-2xl shadow-black/80">
            {/* Header decor */}
            <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-gold"></div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-text font-semibold">
                  LIVE TELEMETRY STREAM
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-brand-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping"></span>
                <span>CH: 01 _ USA_SWIM</span>
              </div>
            </div>

            {/* Visualizer Frame */}
            <div className="relative aspect-video bg-black border border-brand-border rounded flex flex-col justify-between overflow-hidden p-4 group">
              {/* Virtual Grid Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#1E2028_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Box bounds representing swimmer tracker */}
              <div 
                className="absolute border-2 border-brand-gold/60 bg-brand-gold/5 rounded transition-all duration-150 ease-out flex flex-col pb-1 pl-1"
                style={{
                  top: `${20 + Math.sin(simulationFrame * 0.15) * 10}%`,
                  left: `${((simulationFrame * 0.9) % 80) + 10}%`,
                  width: "120px",
                  height: "55px",
                }}
              >
                <div className="font-mono text-[8px] text-brand-gold bg-brand-bg/90 px-1 py-0.5 rounded-sm w-fit leading-none mt-auto">
                  SWIMMER 04 [98.2%]
                </div>
              </div>

              {/* Swimmer stroke vector graph mock */}
              <div className="absolute inset-x-4 bottom-4 h-16 pointer-events-none select-none opacity-60">
                <svg className="w-full h-full" viewBox="0 0 300 100">
                  <path
                    d={`M 0 50 Q 50 ${40 + Math.sin(simulationFrame * 0.2) * 20}, 100 50 T 200 50 T 300 50`}
                    fill="none"
                    stroke="#4A6CF7"
                    strokeWidth="1.5"
                  />
                  <path
                    d={`M 0 50 Q 50 ${60 + Math.cos(simulationFrame * 0.2) * 15}, 100 50 T 200 50 T 300 50`}
                    fill="none"
                    stroke="#C8A96E"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>

              {/* Overlaid Data Feed */}
              <div className="z-10 bg-brand-surface/75 backdrop-blur-xs border border-brand-border/40 p-1.5 rounded w-fit text-[8px] font-mono flex flex-col gap-0.5 leading-none">
                <span className="text-brand-text">SPEED: <span className="text-brand-gold">{speed} m/s</span></span>
                <span className="text-brand-text">STROKE RATE: <span className="text-brand-blue">{strokeRate}/m</span></span>
                <span className="text-brand-muted">FRAME: {1020 + simulationFrame} idx</span>
              </div>

              <div className="z-10 ml-auto mt-auto flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-1 rounded text-[7px] tracking-widest font-mono text-brand-gold">
                <Activity className="w-2.5 h-2.5 animate-pulse text-brand-gold" />
                <span>ACCURACY: 99.4%</span>
              </div>
            </div>

            {/* Quick Metrics under view */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="border border-brand-border/40 bg-brand-bg/60 p-2.5 rounded-sm">
                <p className="text-[9px] uppercase tracking-wider text-brand-muted font-mono leading-none mb-1">
                  LAP RATIO
                </p>
                <p className="text-sm font-semibold text-brand-text tracking-tight">
                  1.042<span className="text-[10px] text-brand-gold ml-0.5">μ</span>
                </p>
              </div>
              <div className="border border-brand-border/40 bg-brand-bg/60 p-2.5 rounded-sm">
                <p className="text-[9px] uppercase tracking-wider text-brand-muted font-mono leading-none mb-1">
                  FLOW VECT
                </p>
                <p className="text-sm font-semibold text-brand-text tracking-tight text-brand-blue">
                  0.887
                </p>
              </div>
              <div className="border border-brand-border/40 bg-brand-bg/60 p-2.5 rounded-sm">
                <p className="text-[9px] uppercase tracking-wider text-brand-muted font-mono leading-none mb-1">
                  HZ FREQ
                </p>
                <p className="text-sm font-semibold text-brand-text tracking-tight">
                  120fps
                </p>
              </div>
            </div>

            {/* Quick footnote */}
            <p className="text-[9px] font-mono text-center text-brand-muted mt-4 uppercase tracking-widest">
              * BROADCAST ONLY BROAD-SPECTRUM ANALYSIS
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Footer Area for Hero: Includes scroll indicator on left, stat block on right */}
      <div className="max-w-[1200px] w-full mx-auto px-6 mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10 font-mono">
        
        {/* Bottom Left: Scroll label */}
        <div className="md:col-span-4 flex items-center gap-4">
          <button 
            onClick={() => handleScrollToSection("about")}
            className="flex items-center gap-4 group text-left focus:outline-none cursor-pointer"
          >
            <div className="w-[1px] h-12 bg-brand-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold animate-bounce"></div>
            </div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-brand-muted leading-tight">
              Scroll <br /> <span className="text-brand-gold font-bold">Down</span>
            </span>
          </button>
        </div>

        {/* Bottom Right: Elite stats block */}
        <div className="md:col-span-8 flex flex-wrap items-center gap-x-12 gap-y-6 md:justify-end text-left border-t md:border-t-0 border-brand-border pt-6 md:pt-0">
          
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-brand-gold font-display">232,000+</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-muted mt-0.5">
              Data Points extracted<br />Paris 2024 Olympics
            </span>
          </div>

          <div className="w-px h-10 bg-brand-border hidden sm:block"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-brand-text font-display">8</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-muted mt-0.5">
              Olympic Sport<br />disciplines Deployed
            </span>
          </div>

          <div className="w-px h-10 bg-brand-border hidden sm:block"></div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-brand-blue font-display">5+ yrs</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-muted mt-0.5">
              Proven Commercial<br />Deployed AI Solutions
            </span>
          </div>
          
        </div>

      </div>
    </section>
  );
}
