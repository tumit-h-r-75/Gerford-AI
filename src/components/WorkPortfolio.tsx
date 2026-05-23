import { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, Activity, Info, BarChart, Sliders, ChevronRight, X } from "lucide-react";
import { WorkItem } from "../types";

// The generated images
import swimmingImage from "../assets/images/swimming_analysis_dark_1779532107459.png";
import ttImage from "../assets/images/table_tennis_tracking_dark_1779532126232.png";
import enterpriseImage from "../assets/images/enterprise_ai_node_network_1779532145447.png";

const workItems: WorkItem[] = [
  {
    id: "work-a",
    tag: "SPORT · COMPUTER VISION",
    title: "USA Swimming — Paris 2024 Olympics",
    body: "232,000+ data points extracted across 73 world-class races using broadcast-only computer vision. Zero on-site physical hardware or intrusive markers required. Millisecond stroke velocity vectors computed perfectly.",
    imagePath: swimmingImage,
    metrics: [
      { label: "Data Points Extracted", value: "232,000+" },
      { label: "Total Races Tested", value: "73" },
      { label: "Sensor Accuracy", value: "99.82%" }
    ],
    category: "sport"
  },
  {
    id: "work-b",
    tag: "SPORT · PERFORMANCE ANALYTICS",
    title: "World Table Tennis & Team England",
    body: "End-to-end performance intelligence dashboard deployed at international competition level. Automated strike taxonomy identification, stroke velocity evaluation, and ball vector curves delivered for Commonwealth Games team England.",
    imagePath: ttImage,
    metrics: [
      { label: "Accurate Taxonomies", value: "14+" },
      { label: "Delivery Level", value: "Commonwealth" },
      { label: "Ball Vector Precision", value: "±2mm" }
    ],
    category: "sport"
  },
  {
    id: "work-c",
    tag: "ENTERPRISE · AI-AS-A-SERVICE",
    title: "Beyond Sport: Industrial Telemetry",
    body: "Deploying our high-speed object tracking and video intelligence capabilities inside custom manufacturing lines, security zones, and high-frequency logistics warehouses. Precision analysis adapted for safety-critical situations.",
    imagePath: enterpriseImage,
    metrics: [
      { label: "Frame Rate Support", value: "Up to 240fps" },
      { label: "Security Encryption", value: "AES-256 E2E" },
      { label: "Object Types", value: "Custom Trained" }
    ],
    category: "enterprise"
  }
];

export default function WorkPortfolio() {
  const [selectedCase, setSelectedCase] = useState<WorkItem | null>(null);
  const [isPlayingSim, setIsPlayingSim] = useState(false);
  const [swimStroke, setSwimStroke] = useState<"Freestyle" | "Breaststroke" | "Butterfly">("Freestyle");
  const [currentMetricFrame, setCurrentMetricFrame] = useState(0);
  const [simMetrics, setSimMetrics] = useState({
    velocity: 2.10,
    strokeFreq: 52,
    dragCoeff: 0.28,
    ballVelocity: 12.4, // for tennis
    spinRpm: 2400       // for tennis
  });

  const simRef = useRef<number | null>(null);

  // Simulation Loop
  useEffect(() => {
    if (isPlayingSim) {
      simRef.current = window.setInterval(() => {
        setCurrentMetricFrame((prev) => (prev + 1) % 100);
        
        // Vary values realistically based on selection
        setSimMetrics((prev) => {
          const factor = swimStroke === "Freestyle" ? 1.1 : swimStroke === "Breaststroke" ? 0.8 : 0.95;
          const randomVel = (2.2 + Math.sin(Date.now() / 800) * 0.3) * factor;
          const randomFreq = Math.round((50 + Math.cos(Date.now() / 1200) * 5) * factor);
          const tennisVel = 12.0 + Math.sin(Date.now() / 500) * 8;
          const tennisSpin = 2200 + Math.round(Math.sin(Date.now() / 700) * 600);

          return {
            velocity: parseFloat(randomVel.toFixed(2)),
            strokeFreq: randomFreq,
            dragCoeff: parseFloat((0.26 + Math.cos(Date.now() / 1500) * 0.03).toFixed(3)),
            ballVelocity: parseFloat(tennisVel.toFixed(1)),
            spinRpm: tennisSpin
          };
        });
      }, 100);
    } else {
      if (simRef.current) clearInterval(simRef.current);
    }

    return () => {
      if (simRef.current) clearInterval(simRef.current);
    };
  }, [isPlayingSim, swimStroke]);

  const handleOpenPlayground = (item: WorkItem) => {
    setSelectedCase(item);
    setIsPlayingSim(true);
  };

  const handleTogglePlay = () => {
    setIsPlayingSim(!isPlayingSim);
  };

  const handleClosePlayground = () => {
    setIsPlayingSim(false);
    setSelectedCase(null);
  };

  return (
    <section id="work" className="py-24 md:py-32 bg-brand-surface relative overflow-hidden border-b border-brand-border">
      {/* Background glow elements */}
      <div className="absolute top-[20%] left-[-15%] h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl text-left">
            <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-brand-gold font-bold mb-3 inline-block">
              // SELECTED WORK
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tighter text-brand-text mb-4 leading-[0.95] uppercase">
              Real Deployed <br />
              <span className="text-transparent text-outline" style={{ WebkitTextStroke: "1px #F0EFE9", opacity: 0.85 }}>Real Results.</span>
            </h2>
            <div className="w-12 h-1 bg-brand-gold/60 mb-5 rounded-sm"></div>
            <p className="text-brand-muted text-base max-w-xl">
              We do not prototype or produce proof-of-concepts slide decks. We construct industrial systems active at Olympic finals and global sport channels.
            </p>
          </div>

          <div className="text-left font-mono">
            <div className="inline-flex items-center gap-2 text-xs text-brand-gold bg-brand-bg relative p-3 border border-brand-border rounded-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></span>
              <span>Click a Case card to open Live AI Telemetry Playground</span>
            </div>
          </div>
        </div>

        {/* Selected Work Layout: 2-Column Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" id="selected-work-cards-grid">
          {workItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenPlayground(item)}
              className="group border border-brand-border bg-brand-bg hover:border-brand-gold transition-all duration-300 flex flex-col justify-between overflow-hidden relative rounded-sm cursor-pointer hover:shadow-2xl hover:shadow-black/60"
              id={`portfolio-card-${item.id}`}
            >
              {/* Aspect Ratio 4:3 view top */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-black border-b border-brand-border h-72 sm:h-80 md:h-[350px]">
                <img
                  src={item.imagePath}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                
                {/* Visual decoration overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent"></div>
                
                {/* Floating badge top-left */}
                <div className="absolute top-4 left-4 h-6 px-3 bg-brand-bg/80 backdrop-blur-md border border-brand-border/80 flex items-center rounded-sm font-mono text-[9px] uppercase tracking-wider text-brand-gold">
                  {item.tag}
                </div>

                {/* Simulated AI box tracking frame over swimming and table tennis images */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-300">
                  <div className="absolute border border-brand-blue/60 bg-brand-blue/5 w-1/3 h-1/4 rounded top-1/3 left-1/4">
                    <span className="absolute -top-3 left-0 bg-brand-blue text-white text-[7px] px-1 font-mono uppercase tracking-widest leading-none py-0.5">
                      TARGET_TRACK [98%]
                    </span>
                  </div>
                </div>

                {/* Play action hover signal */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-brand-gold text-brand-bg rounded-sm px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                    <Play className="w-4 h-4 fill-brand-bg" />
                    <span>Launch Telemetry Playground</span>
                  </div>
                </div>
              </div>

              {/* Card Specs */}
              <div className="p-6 md:p-8 text-left">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-brand-text mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8">
                  {item.body}
                </p>

                {/* Stats and metrics inside card bottom */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border font-mono">
                  {item.metrics.map((met, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[14px] md:text-[16px] font-bold text-brand-text group-hover:text-brand-gold transition-colors duration-300">
                        {met.value}
                      </span>
                      <span className="text-[9px] text-brand-muted uppercase tracking-wider leading-tight mt-0.5">
                        {met.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE PLAYGROUND OVERLAY / PANEL */}
        {/* ========================================================= */}
        {selectedCase && (
          <div 
            className="border-2 border-brand-gold bg-brand-bg rounded-sm overflow-hidden p-6 md:p-8 text-left mt-12 relative animate-fade-in shadow-2xl"
            id="case-playground-panel"
          >
            {/* Header with Title and close button */}
            <div className="flex items-start justify-between border-b border-brand-border pb-6 mb-6">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-brand-gold font-semibold">
                  INTERACTIVE AI TELEMETRY SIMULATOR
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-text mt-1">
                  Active Playground: {selectedCase.title}
                </h3>
              </div>
              <button
                onClick={handleClosePlayground}
                className="text-brand-muted hover:text-brand-gold bg-brand-surface p-2 border border-brand-border rounded cursor-pointer transition-colors"
                title="Close Sim"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick alert bar */}
            <div className="bg-brand-blue/10 border border-brand-blue/30 rounded p-4 mb-6 flex items-start gap-3">
              <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed text-brand-text/90">
                You are executing a real-time tracking simulation models. Below, customize the parameters and watch the model output curves calculate velocities, stroke rates, and coordinates dynamically on the canvas.
              </div>
            </div>

            {/* Playground Core Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Form Settings Column (4 Cols) */}
              <div className="lg:col-span-4 bg-brand-surface border border-brand-border p-6 rounded">
                <h4 className="font-mono text-xs uppercase tracking-widest text-brand-text font-bold mb-4 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-brand-gold" />
                  <span>Model Controls</span>
                </h4>

                {/* Swimmer specific controls */}
                {selectedCase.id === "work-a" && (
                  <div className="space-y-4 mb-6 text-sm">
                    <div>
                      <label className="block text-brand-muted text-xs font-mono uppercase tracking-wider mb-2">
                        Swim Stroke Variant
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(["Freestyle", "Breaststroke", "Butterfly"] as const).map((style) => (
                          <button
                            key={style}
                            onClick={() => setSwimStroke(style)}
                            className={`py-2 px-1 text-center text-[10px] font-mono uppercase tracking-wider rounded border transition-colors ${
                              swimStroke === style
                                ? "bg-brand-gold border-brand-gold text-brand-bg font-bold"
                                : "bg-brand-bg border-brand-border hover:bg-brand-surface text-brand-text"
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Table Tennis specific controls */}
                {selectedCase.id === "work-b" && (
                  <div className="space-y-4 mb-6 text-sm">
                    <div>
                      <p className="text-xs font-mono text-brand-muted uppercase tracking-wider mb-2">
                        Active Sport context
                      </p>
                      <div className="bg-brand-bg px-3 py-2 border border-brand-border rounded text-xs text-brand-text flex items-center justify-between font-mono">
                        <span>Discipline:</span>
                        <span className="text-brand-gold font-bold">Table Tennis</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Play controls */}
                <div className="space-y-3">
                  <button
                    onClick={handleTogglePlay}
                    className={`w-full py-3.5 px-4 font-mono text-xs font-semibold uppercase tracking-wider rounded border transition-all flex items-center justify-center gap-2 ${
                      isPlayingSim
                        ? "bg-red-950/40 text-red-400 border-red-500/50 hover:bg-red-950/60"
                        : "bg-brand-gold text-brand-bg border-brand-gold hover:bg-transparent hover:text-brand-gold"
                    }`}
                  >
                    {isPlayingSim ? (
                      <>
                        <RotateCcw className="w-4 h-4 animate-spin" />
                        <span>Halt Model Stream</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-brand-bg group-hover:fill-current" />
                        <span>Initialize Model Stream</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] font-mono text-brand-muted text-center uppercase tracking-wide">
                    {isPlayingSim ? "Status: Stream Executing" : "Status: Stream Idle"}
                  </p>
                </div>
              </div>

              {/* Right Viewport Canvas Column (8 Cols) */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* The Virtual Canvas Monitor */}
                <div className="border border-brand-border bg-black rounded-sm aspect-video relative overflow-hidden flex flex-col justify-between p-6">
                  {/* Virtual Scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]"></div>
                  
                  {/* Digital Compass Top Row */}
                  <div className="flex items-center justify-between font-mono text-[9px] text-brand-muted z-10 select-none">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping"></span>
                      <span>SEC_REC // MODEL_LOCK: POSITIVE</span>
                    </span>
                    <span>DEC_INDEX: 412.091_2 // UTC 2026</span>
                  </div>

                  {/* SVG Dynamic Overlay containing tracked coordinates */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    {selectedCase.id === "work-a" ? (
                      // Swimming Visual Sim
                      <svg className="w-full h-full" viewBox="0 0 400 220">
                        {/* Lane grids */}
                        <line x1="50" y1="50" x2="350" y2="50" stroke="#1E2028" strokeWidth="1" />
                        <line x1="50" y1="110" x2="350" y2="110" stroke="#1E2028" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="50" y1="170" x2="350" y2="170" stroke="#1E2028" strokeWidth="1" />
                        
                        {/* Track Swim Node */}
                        {isPlayingSim && (
                          <g>
                            <circle
                              cx={100 + (currentMetricFrame * 2) % 200}
                              cy={110 + Math.sin(currentMetricFrame * 0.3) * 12}
                              r="8"
                              fill="rgba(200, 169, 110, 0.2)"
                              stroke="#C8A96E"
                              strokeWidth="1.5"
                            />
                            {/* Tracking box */}
                            <rect
                              x={80 + (currentMetricFrame * 2) % 200}
                              y={90 + Math.sin(currentMetricFrame * 0.3) * 12}
                              width="40"
                              height="40"
                              fill="none"
                              stroke="#4A6CF7"
                              strokeWidth="1"
                            />
                            {/* Bounding Label */}
                            <text
                              x={80 + (currentMetricFrame * 2) % 200}
                              y={85 + Math.sin(currentMetricFrame * 0.3) * 12}
                              fill="#4A6CF7"
                              fontSize="6px"
                              fontFamily="monospace"
                            >
                              USA_S: {swimStroke.toUpperCase().slice(0, 3)}
                            </text>
                            
                            {/* Vector Tail */}
                            <line
                              x1={100 + (currentMetricFrame * 2) % 200}
                              y1={110 + Math.sin(currentMetricFrame * 0.3) * 12}
                              x2={70 + (currentMetricFrame * 2) % 200}
                              y2={110}
                              stroke="#C8A96E"
                              strokeWidth="1"
                              strokeDasharray="2,2"
                            />
                          </g>
                        )}
                      </svg>
                    ) : selectedCase.id === "work-b" ? (
                      // Table tennis ball tracker
                      <svg className="w-full h-full" viewBox="0 0 400 220">
                        {/* Table tennis grid line */}
                        <polygon points="100,160 300,160 340,200 60,200" fill="none" stroke="#1E2028" strokeWidth="1.5" />
                        <line x1="200" y1="140" x2="200" y2="200" stroke="#C8A96E" strokeWidth="1" />
                        
                        {/* Ball trajectory vector curve */}
                        {isPlayingSim && (
                          <g>
                            <path
                              d="M 120 180 Q 200 80, 280 170"
                              fill="none"
                              stroke="#4A6CF7"
                              strokeWidth="1.5"
                            />
                            {/* Track ball */}
                            <circle
                              cx={120 + (currentMetricFrame * 1.6) % 160}
                              cy={180 - Math.sin((currentMetricFrame % 100) * 0.0314) * 80}
                              r="4"
                              fill="#C8A96E"
                            />
                            {/* Tracking bounding box */}
                            <rect
                              x={112 + (currentMetricFrame * 1.6) % 160}
                              y={172 - Math.sin((currentMetricFrame % 100) * 0.0314) * 80}
                              width="16"
                              height="16"
                              fill="none"
                              stroke="#C8A96E"
                              strokeWidth="1"
                            />
                          </g>
                        )}
                      </svg>
                    ) : (
                      // Enterprise node loop
                      <svg className="w-full h-full" viewBox="0 0 400 220">
                        <circle cx="100" cy="110" r="10" fill="none" stroke="#1E2028" />
                        <circle cx="200" cy="60" r="10" fill="none" stroke="#1E2028" />
                        <circle cx="200" cy="160" r="10" fill="none" stroke="#1E2028" />
                        <circle cx="300" cy="110" r="10" fill="none" stroke="#1E2028" />
                        
                        <line x1="110" y1="105" x2="190" y2="65" stroke="#1E2028" />
                        <line x1="110" y1="115" x2="190" y2="155" stroke="#1E2028" />
                        <line x1="210" y1="65" x2="290" y2="105" stroke="#1E2028" />
                        <line x1="210" y1="155" x2="290" y2="115" stroke="#1E2028" />

                        {isPlayingSim && (
                          <g>
                            <circle cx="100" cy="110" r="10" fill="rgba(74, 108, 247, 0.2)" stroke="#4A6CF7" />
                            <circle cx="300" cy="110" r="10" fill="rgba(200, 169, 110, 0.2)" stroke="#C8A96E" />
                            
                            {/* Signal Pulses */}
                            <circle cx={110 + (currentMetricFrame * 0.8) % 80} cy={105 - (currentMetricFrame * 0.4) % 40} r="3" fill="#C8A96E" />
                            <circle cx={110 + (currentMetricFrame * 0.8) % 80} cy={115 + (currentMetricFrame * 0.4) % 40} r="3" fill="#4A6CF7" />
                          </g>
                        )}
                      </svg>
                    )}
                  </div>

                  {/* Live HUD Readout Metrics overlay */}
                  <div className="z-10 bg-brand-surface/90 border border-brand-border/80 px-4 py-3 rounded w-fit text-xs font-mono flex flex-col gap-1 text-left select-none">
                    {selectedCase.id === "work-a" ? (
                      <>
                        <div>VARIANT: <span className="text-brand-gold uppercase font-bold">{swimStroke}</span></div>
                        <div>VELOCITY: <span className="text-brand-text font-bold">{simMetrics.velocity} m/s</span></div>
                        <div>STROKE FRQ: <span className="text-brand-blue font-bold">{simMetrics.strokeFreq}/min</span></div>
                        <div>DRAG COEFF: <span className="text-brand-muted">{simMetrics.dragCoeff} cd</span></div>
                      </>
                    ) : selectedCase.id === "work-b" ? (
                      <>
                        <div>VELOCITY: <span className="text-brand-gold font-bold">{simMetrics.ballVelocity} m/s</span></div>
                        <div>SPIN FREQ: <span className="text-brand-blue font-bold">{simMetrics.spinRpm} rpm</span></div>
                        <div>BOUNCE LOSS: <span className="text-brand-text">0.14</span></div>
                      </>
                    ) : (
                      <>
                        <div>SECURITY FREQ: <span className="text-brand-gold">120Hz</span></div>
                        <div>COMPRESSION: <span className="text-brand-blue">H.265</span></div>
                        <div>CHANNELS: <span className="text-brand-text">16 Parallel</span></div>
                      </>
                    )}
                  </div>

                  {/* Bottom digital monitor decoration */}
                  <div className="flex items-center justify-between font-mono text-[8px] text-brand-muted z-10 select-none border-t border-brand-border/40 pt-2 shrink-0">
                    <span>FRAME RATE: {isPlayingSim ? "59.94 FPS" : "STOPPED"}</span>
                    <span>TELEMETRY STACK: V4 // BROADCAST_AI</span>
                  </div>
                </div>

                {/* Simulated Metrics Plots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-brand-border p-4 rounded bg-brand-surface text-xs font-mono">
                    <p className="uppercase tracking-wider text-brand-muted mb-2 font-bold flex items-center gap-1">
                      <BarChart className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Temporal Velocity Vector</span>
                    </p>
                    <div className="h-6 flex items-end gap-1 font-mono">
                      {Array.from({ length: 15 }).map((_, i) => {
                        const hFactor = (Math.sin((currentMetricFrame + i) * 0.4) + 1.2) * 12;
                        return (
                          <div 
                            key={i} 
                            className="bg-brand-blue flex-1 transition-all duration-150" 
                            style={{ height: isPlayingSim ? `${hFactor}px` : "1px" }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="border border-brand-border p-4 rounded bg-brand-surface text-xs font-mono">
                    <p className="uppercase tracking-wider text-brand-muted mb-2 font-bold flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Stroke Rate Matrix</span>
                    </p>
                    <div className="h-6 flex items-end gap-1 font-mono">
                      {Array.from({ length: 15 }).map((_, i) => {
                        const hFactor = (Math.cos((currentMetricFrame + i * 2) * 0.3) + 1.2) * 12;
                        return (
                          <div 
                            key={i} 
                            className="bg-brand-gold flex-1 transition-all duration-150" 
                            style={{ height: isPlayingSim ? `${hFactor}px` : "1px" }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
