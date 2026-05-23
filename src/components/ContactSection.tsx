import { useState, useEffect, FormEvent } from "react";
import { Mail, Briefcase, FileText, Send, CheckCircle2, Trash2, Database } from "lucide-react";
import { ContactSubmission } from "../types";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [savedSubmissions, setSavedSubmissions] = useState<ContactSubmission[]>([]);
  const [showAdminLogs, setShowAdminLogs] = useState(false);

  // Load submissions on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("gerford_contacts");
      if (saved) {
        setSavedSubmissions(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate elite network dispatch lag
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: "submission_" + Date.now(),
        name,
        email,
        organisation: organisation || "Not Disclosed",
        message,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " (Local UTC)"
      };

      const updated = [newSubmission, ...savedSubmissions];
      setSavedSubmissions(updated);
      try {
        localStorage.setItem("gerford_contacts", JSON.stringify(updated));
      } catch (err) {
        console.error("Local storage write error:", err);
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset fields
      setName("");
      setEmail("");
      setOrganisation("");
      setMessage("");

      // Revert success flag after 4 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }, 1200);
  };

  const handleClearInbox = () => {
    try {
      localStorage.removeItem("gerford_contacts");
      setSavedSubmissions([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-b border-brand-border">
      
      {/* Background accent radial glow */}
      <div className="absolute bottom-[-10%] left-[10%] h-[350px] w-[350px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (50% / 5 Columns) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <p className="text-[11px] uppercase font-mono tracking-[0.25em] text-brand-gold font-bold mb-3 inline-block">
                // GET IN TOUCH
              </p>
              <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tighter text-brand-text mb-6 leading-[0.95] uppercase">
                Let's Talk About <br />
                <span className="text-transparent text-outline" style={{ WebkitTextStroke: "1px #F0EFE9", opacity: 0.85 }}>What's Possible.</span>
              </h2>
              <div className="w-12 h-1 bg-brand-gold/60 mb-6 rounded-sm"></div>
              <p className="text-brand-muted text-base leading-relaxed mb-10 max-w-sm">
                Whether you're exploring computer vision for sport, enterprise, or something we haven't seen yet — our engineering team is aligned to help. Tell us what you're trying to achieve.
              </p>
            </div>

            {/* Premium Direct Contact Block */}
            <div className="border border-brand-border bg-brand-surface p-6 rounded-sm mt-auto max-w-sm">
              <span className="text-[8px] font-mono uppercase tracking-widest text-brand-muted block mb-2">
                CRITICAL DIRECT COMMS
              </span>
              <a
                href="mailto:hello@gerford.com"
                className="group flex items-center gap-3 text-brand-text hover:text-brand-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-brand-border bg-brand-bg flex items-center justify-center group-hover:border-brand-gold transition-colors duration-300">
                  <Mail className="w-4 h-4 text-brand-gold" />
                </div>
                <div className="text-left">
                  <p className="font-sans font-bold text-base leading-none">hello@gerford.com</p>
                  <p className="text-[9px] font-mono text-brand-muted uppercase tracking-widest mt-1">
                    Typically responds under 2 hours
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column (50% / 7 Columns) */}
          <div className="lg:col-span-7 w-full">
            <div className="border border-brand-border bg-brand-surface p-8 p-x-6 sm:p-x-8 rounded-sm relative shadow-2xl">
              
              {/* Form header decor */}
              <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-6">
                <span className="font-mono text-[9px] text-brand-muted uppercase tracking-widest block font-bold">
                  // B2B SECURE ENVELOPE
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              </div>

              {submitSuccess ? (
                /* Dynamic Success Viewport */
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-brand-text mb-2">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-brand-muted text-sm max-w-md leading-relaxed mb-6">
                    We received your submission packet. Our lead system architects have been pinged. You'll find your payload inside the local logs viewer below.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="font-mono text-xs uppercase tracking-wider text-brand-gold border border-brand-gold px-6 py-2.5 hover:bg-brand-gold hover:text-brand-bg transition-all duration-300 rounded-sm"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                /* Primary Contact form input boxes */
                <form onSubmit={handleSubmit} className="space-y-5 text-left" id="contact-evaluation-form">
                  
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-brand-muted mb-2 font-bold select-none">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alexis Carter"
                      className="bg-brand-bg border border-brand-border focus:border-brand-gold focus:outline-none text-brand-text rounded px-4 py-3 text-sm font-sans placeholder-brand-muted/40 transition-colors w-full"
                    />
                  </div>

                  {/* Grid row for Email and Organisation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-brand-muted mb-2 font-bold select-none">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alexis@organisation.com"
                        className="bg-brand-bg border border-brand-border focus:border-brand-gold focus:outline-none text-brand-text rounded px-4 py-3 text-sm font-sans placeholder-brand-muted/40 transition-colors w-full"
                      />
                    </div>

                    {/* Organisation */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-brand-muted mb-2 font-bold select-none">
                        Organisation Name
                      </label>
                      <input
                        type="text"
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}
                        placeholder="e.g. Elite Sports Club"
                        className="bg-brand-bg border border-brand-border focus:border-brand-gold focus:outline-none text-brand-text rounded px-4 py-3 text-sm font-sans placeholder-brand-muted/40 transition-colors w-full"
                      />
                    </div>

                  </div>

                  {/* Message payload */}
                  <div className="flex flex-col">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-brand-muted mb-2 font-bold select-none">
                      Project Objective / Outline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Detail your computer vision or analytic telemetry objectives..."
                      className="bg-brand-bg border border-brand-border focus:border-brand-gold focus:outline-none text-brand-text rounded px-4 py-3 text-sm font-sans placeholder-brand-muted/40 transition-colors resize-none w-full"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-gold hover:bg-transparent border-2 border-brand-gold hover:text-brand-gold text-brand-bg font-mono text-xs uppercase tracking-widest py-4 rounded-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? "TRANSMITTING DATA..." : "SEND ENVELOPE PAYLOAD"}</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE ADMIN TEST LOGS DRAWER (Pre-built in UI) */}
        {/* ========================================================= */}
        <div className="mt-12 border border-brand-border bg-brand-surface rounded-sm overflow-hidden text-left shadow-lg">
          
          {/* Toggle Header bar */}
          <div 
            onClick={() => setShowAdminLogs(!showAdminLogs)}
            className="flex items-center justify-between p-4 bg-brand-bg cursor-pointer hover:bg-brand-surface/50 border-b border-brand-border/60 transition-colors select-none"
            id="logs-toggle-header"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs text-brand-gold">
              <Database className="w-4 h-4 text-brand-gold" />
              <span>TEST ENGINE ADMIN panel (Captured Inquiries)</span>
              <span className="bg-brand-surface border border-brand-border text-[9px] px-2 py-0.5 rounded text-brand-text">
                {savedSubmissions.length} stored
              </span>
            </div>
            <button className="text-[10px] font-mono uppercase tracking-wider text-brand-muted hover:text-brand-gold focus:outline-none">
              {showAdminLogs ? "[ Hide Panel ]" : "[ Expand Panel ]"}
            </button>
          </div>

          {/* Stored logs list body */}
          {showAdminLogs && (
            <div className="p-6 transition-all duration-300 animate-slide-up bg-brand-surface text-xs font-mono">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-border">
                <span className="text-[10px] uppercase tracking-widest text-brand-muted">
                  LOCAL PERSISTED ENVELOPES (INDEXED)
                </span>
                
                {savedSubmissions.length > 0 && (
                  <button
                    onClick={handleClearInbox}
                    className="flex items-center gap-1 text-red-400 hover:text-red-500 hover:underline cursor-pointer focus:outline-none"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Captured Mail</span>
                  </button>
                )}
              </div>

              {savedSubmissions.length === 0 ? (
                <div className="py-8 text-center text-brand-muted uppercase tracking-widest leading-relaxed">
                  No inquiries recorded locally yet.<br />
                  <span className="text-[10px] text-brand-gold lowercase mt-1 block">
                    (Submit the form above to watch data logs update live)
                  </span>
                </div>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  {savedSubmissions.map((sub) => (
                    <div 
                      key={sub.id} 
                      className="border border-brand-border bg-brand-bg p-4 relative group rounded-sm"
                    >
                      <span className="absolute top-3 right-4 text-[9px] text-brand-muted uppercase">
                        {sub.submittedAt}
                      </span>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-[10px] uppercase tracking-wider text-brand-gold">
                        <div>
                          Sender: <span className="text-brand-text">{sub.name}</span>
                        </div>
                        <div>
                          Company: <span className="text-brand-text">{sub.organisation}</span>
                        </div>
                      </div>

                      <div className="text-[10px] uppercase tracking-wider text-brand-muted mb-1 block">
                        Email: <span className="text-brand-text text-xs tracking-normal lowercase">{sub.email}</span>
                      </div>

                      <div className="mt-3 p-3 bg-brand-surface border border-brand-border text-[11px] text-brand-muted rounded normal-case font-sans italic">
                        "{sub.message}"
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
