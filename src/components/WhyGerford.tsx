import { Check, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function WhyGerford() {
  return (
    <section id="why-gerford" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-b border-brand-border text-center">
      
      {/* Background neon dots glow decoration */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full bg-brand-gold/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-brand-gold font-bold mb-6 inline-block">
          // THE GERFORD ADVANTAGE
        </p>

        {/* Big Alternating Statement */}
        <div className="space-y-6 mb-12">
          <p className="font-display font-medium text-2xl md:text-3xl text-brand-muted max-w-3xl mx-auto leading-snug">
            "Most AI vendors promise transformation. <br className="hidden sm:inline" />
            Few have ever deployed anything."
          </p>
          
          <h2 className="font-display font-extrabold text-6xl md:text-8xl text-brand-text tracking-tighter uppercase leading-none">
            WE HAVE<span className="text-transparent text-outline-gold" style={{ WebkitTextStroke: "1.5px #C8A96E" }}>.</span>
          </h2>
        </div>

        {/* Central descriptive block */}
        <div className="max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-brand-muted text-base leading-relaxed">
            Gerford AI's solutions have been used at Olympic Games, Commonwealth Games, and World Championship level. We don't prototype. We ship. We measure. We improve.
          </p>
        </div>

        {/* 3 Horizontal differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-brand-border pt-12" id="why-gerford-differentiators">
          
          {/* Diff 1 */}
          <div className="flex gap-4 items-start p-4 rounded-sm hover:bg-brand-surface/40 hover:border hover:border-brand-border transition-all duration-300">
            <div className="w-8 h-8 rounded bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <h4 className="font-display font-medium text-base text-brand-text mb-2 block">
                Broadcast-Only AI Tracking
              </h4>
              <p className="text-brand-muted text-xs leading-relaxed font-sans">
                No expensive sensors or physical wearable on-site hardware dependency. Pure video intelligence.
              </p>
            </div>
          </div>

          {/* Diff 2 */}
          <div className="flex gap-4 items-start p-4 rounded-sm hover:bg-brand-surface/40 hover:border hover:border-brand-border transition-all duration-300">
            <div className="w-8 h-8 rounded bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <h4 className="font-display font-medium text-base text-brand-text mb-2 block">
                5+ Years Active Deployed
              </h4>
              <p className="text-brand-muted text-xs leading-relaxed font-sans">
                Half a decade of validating tracking algorithms against elite Olympic athletes under maximum pressure.
              </p>
            </div>
          </div>

          {/* Diff 3 */}
          <div className="flex gap-4 items-start p-4 rounded-sm hover:bg-brand-surface/40 hover:border hover:border-brand-border transition-all duration-300">
            <div className="w-8 h-8 rounded bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
            </div>
            <div>
              <h4 className="font-display font-medium text-base text-brand-text mb-2 block">
                Cross-Industry Precision
              </h4>
              <p className="text-brand-muted text-xs leading-relaxed font-sans">
                Our computer vision capability extends effortlessly standard sport boundaries into safety, security, and industrial analytics.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
