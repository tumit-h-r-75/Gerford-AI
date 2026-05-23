import { CheckCircle2, ChevronRight, Trophy, ShieldCheck, Users } from "lucide-react";
import { useState } from "react";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<"vision" | "philosophy" | "security">("vision");

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-b border-brand-border">
      {/* Background glow overlay */}
      <div className="absolute top-[40%] right-[-10%] h-[350px] w-[350px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Main 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - 60% (7 Columns in Grid) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-brand-gold font-bold mb-3 inline-block">
              // ABOUT GERFORD AI
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tighter text-brand-text mb-8 leading-[0.95] uppercase">
              We Didn't Open <br />
              Our Doors <br />
              <span className="text-transparent text-outline" style={{ WebkitTextStroke: "1px #F0EFE9", opacity: 0.85 }}>Yesterday.</span>
            </h2>

            <div className="space-y-6 text-brand-muted text-base leading-relaxed font-sans max-w-xl">
              <p>
                Gerford AI was founded in <strong className="text-brand-text font-semibold">2019</strong> with a single goal: bring elite-level analytics to sports that the data industry had ignored.
              </p>
              <p>
                We built proprietary computer vision technology that analysed athlete performance purely from broadcast streams — a world first. <strong className="text-brand-text font-semibold">No cameras on-site. No compromise on accuracy.</strong>
              </p>
              <p>
                Our work at the Paris 2024 Olympics with USA Swimming, and with Team England at the Commonwealth Games, proved that what we build works under the highest possible pressure.
              </p>
              <p>
                Today, Gerford AI is an AI-as-a-service company. Sport remains part of what we do. But our capability extends into any domain where performance, data, and precision matter.
              </p>
            </div>

            {/* In-Page Interactive Tabs to highlight more information without page bloat */}
            <div className="mt-12 border border-brand-border bg-brand-surface p-6 rounded-sm">
              <div className="flex border-b border-brand-border pb-3 gap-6 font-mono text-xs uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`pb-2 transition-all ${
                    activeTab === "vision"
                      ? "text-brand-gold border-b border-brand-gold font-semibold"
                      : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab("philosophy")}
                  className={`pb-2 transition-all ${
                    activeTab === "philosophy"
                      ? "text-brand-gold border-b border-brand-gold font-semibold"
                      : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  Our Philosophy
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`pb-2 transition-all ${
                    activeTab === "security"
                      ? "text-brand-gold border-b border-brand-gold font-semibold"
                      : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  Enterprise Security
                </button>
              </div>

              <div className="mt-4 min-h-[90px] text-sm text-brand-muted">
                {activeTab === "vision" && (
                  <p className="animate-fade-in leading-relaxed">
                    "Expanding Olympic performance telemetry to critical infrastructures. We believe that if you can accurately track high-velocity Olympic swim transitions from standard 2D television broadcasts, you can track anything."
                  </p>
                )}
                {activeTab === "philosophy" && (
                  <p className="animate-fade-in leading-relaxed">
                    "We do not build speculative blueprints or sales-cycles mockup slide-decks. We build fully deployed, hardened, and commercially calibrated systems that work instantly. We measure twice and deploy once."
                  </p>
                )}
                {activeTab === "security" && (
                  <p className="animate-fade-in leading-relaxed">
                    "100% proprietary systems. We do not transmit customer data to generic shared vector models, ensuring absolute protection of corporate intellectual property, athlete data, and operational telemetry."
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* Right Column - 40% (5 Columns in Grid) */}
          <div className="lg:col-span-5 w-full">
            <div className="border border-brand-border bg-brand-surface rounded-sm relative overflow-hidden p-1 p-b-0">
              
              {/* Stat grid wrapper */}
              <div className="grid grid-cols-2 bg-brand-border gap-px text-center">
                
                {/* Stat 1 */}
                <div className="bg-brand-surface p-8 flex flex-col justify-center items-center">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-brand-gold font-display mb-2">
                    232,000+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-text font-mono font-medium">
                    Data Points
                  </span>
                  <span className="text-[9px] text-brand-muted font-mono uppercase mt-0.5">
                    Paris 2024
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="bg-brand-surface p-8 flex flex-col justify-center items-center">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text font-display mb-2">
                    8
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-text font-mono font-medium">
                    Olympic Sports
                  </span>
                  <span className="text-[9px] text-brand-muted font-mono uppercase mt-0.5">
                    Fully Deployed
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="bg-brand-surface p-8 flex flex-col justify-center items-center">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text font-display mb-2">
                    5+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-text font-mono font-medium">
                    Years
                  </span>
                  <span className="text-[9px] text-brand-muted font-mono uppercase mt-0.5">
                    Of Live Operations
                  </span>
                </div>

                {/* Stat 4 */}
                <div className="bg-brand-surface p-8 flex flex-col justify-center items-center relative group">
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-gold font-display mb-2 flex items-center gap-1.5">
                    World's <span className="text-brand-blue">1st*</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-text font-mono font-medium mb-1 line-clamp-1">
                    Broadcast AI
                  </span>
                  <span className="text-[9px] text-brand-muted font-mono uppercase leading-tight line-clamp-2">
                    No hardware limit
                  </span>
                </div>

              </div>
              
              {/* Footnote */}
              <div className="bg-brand-bg py-3 px-4 border-t border-brand-border text-left font-mono">
                <span className="text-brand-gold font-bold">*</span>{" "}
                <span className="text-[9px] text-brand-muted uppercase tracking-wider">
                  First to analyse complete physical athletic performance purely from broadcast streams.
                </span>
              </div>

            </div>

            {/* Quick credentials badge below stats */}
            <div className="mt-6 flex items-center justify-between gap-4 p-4 border border-brand-border bg-brand-surface/40 rounded-sm font-mono text-[10px] uppercase tracking-wider text-brand-muted">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-brand-gold shrink-0" />
                <span>US Olympic Team Supplier</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                <span>E2E Verification</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
