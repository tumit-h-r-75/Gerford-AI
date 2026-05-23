/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import AboutUs from "./components/AboutUs";
import WorkPortfolio from "./components/WorkPortfolio";
import WhyGerford from "./components/WhyGerford";
import ClientMarquee from "./components/ClientMarquee";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-gold selection:text-brand-bg overflow-x-hidden relative">
      {/* Dynamic Grid Overlay lines across entire page for top-tier aesthetic */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(18,17,25,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(18,17,25,0.012)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

      {/* Navigation */}
      <Navbar />

      {/* Pages Layout Stream */}
      <main className="relative z-10 w-full flex flex-col">
        {/* Section 1 - Hero */}
        <Hero />

        {/* Section 2 - Capabilities (What We Do) */}
        <Capabilities />

        {/* Section 3 - About Us */}
        <AboutUs />

        {/* Section 4 - Selected Work (Proof points + Interactive Playground) */}
        <WorkPortfolio />

        {/* Section 5 - Why Gerford (Trust differentiator) */}
        <WhyGerford />

        {/* Section 6 - Partner Logos Marquee */}
        <ClientMarquee />

        {/* Section 7 - Contact Form & Tester database logs */}
        <ContactSection />
      </main>

      {/* Footer block */}
      <Footer />
    </div>
  );
}

