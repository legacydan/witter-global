import ScrollReveal from "@/components/ScrollReveal";

import dynamic from "next/dynamic";
const WitterCustomLogo3D = dynamic(
  () => import("@/components/WitterCustomLogo3D").then((mod) => mod.WitterCustomLogo3D),
  { ssr: false }
);

/* ─── SVG Icons (inline to avoid external deps) ─── */
function ArrowDownIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 3v14M4 11l6 6 6-6" />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-gold-600"
    >
      <path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9" />
      <path d="M9 21V13h6v8" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-gold-600"
    >
      <path d="M5 17h14M5 17a2 2 0 01-2-2V9a2 2 0 012-2h1l2-3h8l2 3h1a2 2 0 012 2v6a2 2 0 01-2 2M5 17a2 2 0 100 4 2 2 0 000-4zM19 17a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0A1F44]">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#0B1D3A] to-[#040C18]" />
        <div className="absolute top-1/4 -right-1/4 w-full aspect-square bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-full aspect-square bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle noise texture overlay */}
        <div className={`absolute inset-0 opacity-[0.02] bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")] pointer-events-none`} />

        <div className="relative content-width section-padding pt-32 pb-20 lg:pt-0 lg:pb-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
            {/* Left Content */}
            <div className="max-w-2xl z-10 relative pt-12 lg:pt-0">
              <ScrollReveal animation="fade-in-up">
                {/* Glassmorphic pre-heading */}
                <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]" />
                  <span className="text-[0.75rem] font-body font-medium uppercase tracking-[0.15em] text-[#D4AF37] drop-shadow-sm">
                    Est. 2010 &middot; South Florida
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-heading font-semibold text-display-sm sm:text-display lg:text-[4.5rem] text-white text-balance mb-6 leading-[1.1] drop-shadow-lg tracking-tight">
                  Accelerating <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2E8D1] to-[#D4AF37] drop-shadow-sm animate-gradient-x">
                    Global Connections.
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-body-lg text-white/70 max-w-xl mb-10 leading-relaxed font-light">
                  Witter Global LLC is a South Florida management and holdings
                  company overseeing a portfolio of established retail and
                  corporate entities, built to last.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#portfolio"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8924A] hover:from-[#E5D1A3] hover:to-[#D4AF37] text-navy-900 font-body font-semibold text-body-sm uppercase tracking-[0.1em] transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
                  >
                    Explore Portfolio
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowDownIcon />
                    </span>
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center px-8 py-4 text-white font-body font-semibold text-body-sm uppercase tracking-[0.1em] backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Learn More
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content: 3D GLOBE */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[700px] flex items-center justify-center lg:justify-end z-10 -ml-4 lg:ml-0">
               <WitterCustomLogo3D />
            </div>
          </div>
        </div>

        {/* Bottom edge fade transitioning to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="about" className="section-spacing bg-cream relative z-20">
        <div className="content-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-12">
              <ScrollReveal animation="fade-in-up">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="gold-rule-center mb-8" />
                  <h2 className="font-heading font-semibold text-display-sm text-navy mb-8">
                    Operating with the discipline of a corporation &amp; the agility of an entrepreneur.
                  </h2>
                  <p className="text-body-lg text-navy-700 leading-relaxed mb-12">
                    Founded over a decade ago, Witter Global LLC serves as the
                    management and marketing backbone for a growing portfolio of
                    South Florida businesses.
                  </p>
                </div>
              </ScrollReveal>
               <ScrollReveal delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 px-8 bg-white rounded-2xl shadow-[0_8px_30px_-12px_rgba(11,29,58,0.05)] border border-navy-50">
                  {[
                    { value: "15+", label: "Years in Business" },
                    { value: "3", label: "Active Entities" },
                    { value: "SFL", label: "South Florida Based" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-heading text-[3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-gold-600 mb-2">
                        {stat.value}
                      </p>
                      <p className="text-body-sm text-navy-400 font-medium uppercase tracking-[0.1em]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PORTFOLIO ═══════════════════ */}
      <section id="portfolio" className="section-spacing bg-white relative">
        <div className="content-width section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-rule-center mb-6" />
              <h2 className="font-heading font-semibold text-display-sm text-navy mb-4">
                Our Portfolio
              </h2>
              <p className="text-body-lg text-navy-400 max-w-lg mx-auto">
                Established subsidiaries bridging retail, automotive, and digital experiences across South Florida.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <ScrollReveal delay={100} animation="fade-in-left">
              <div className="group relative bg-[#faf8f5] p-8 lg:p-10 rounded-2xl border border-transparent hover:border-gold-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(184,146,74,0.15)] hover:-translate-y-1 h-full overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                  <ShopIcon />
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center mb-8 group-hover:shadow-md transition-all duration-300">
                  <ShopIcon />
                </div>
                <h3 className="font-heading text-heading-sm font-semibold text-navy mb-3">
                  Cloud 9five4 LLC
                </h3>
                <p className="text-body text-navy-500 leading-relaxed mb-8">
                  Retail smoke shop serving the Fort Lauderdale community with
                  local delivery and a highly-curated online presence.
                </p>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-[0.75rem] text-gold-700 font-medium tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  Retail
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} animation="fade-in-right">
              <div className="group relative bg-[#faf8f5] p-8 lg:p-10 rounded-2xl border border-transparent hover:border-gold-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(184,146,74,0.15)] hover:-translate-y-1 h-full overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                  <CarIcon />
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center mb-8 group-hover:shadow-md transition-all duration-300">
                  <CarIcon />
                </div>
                <h3 className="font-heading text-heading-sm font-semibold text-navy mb-3">
                  Cabriolet Motors LLC
                </h3>
                <p className="text-body text-navy-500 leading-relaxed mb-8">
                  Pre-owned vehicle dealership providing exclusive auction access and a new state-of-the-art location coming soon to Fort Lauderdale.
                </p>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-[0.75rem] text-gold-700 font-medium tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  Automotive
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BAND ═══════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden mx-4 sm:mx-8 lg:mx-12 mb-12 rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-800" />
        <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")] opacity-[0.03] pointer-events-none`} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        
        {/* Glow behind CTA content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-gold-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative content-width section-padding text-center">
          <ScrollReveal>
            <h2 className="font-heading font-semibold text-display-sm sm:text-display text-white mb-6 drop-shadow-md">
              Ready to Work Together?
            </h2>
            <p className="text-body-lg text-white/60 mb-10 max-w-xl mx-auto font-light">
              We bring decades of strategic insight to real-world businesses. Let&apos;s discuss how Witter Global can elevate your next venture.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy font-body font-bold text-body-sm uppercase tracking-[0.1em] hover:bg-gold-50 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
