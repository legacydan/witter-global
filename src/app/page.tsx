import ScrollReveal from "@/components/ScrollReveal";

import dynamic from "next/dynamic";
const WitterCustomLogo3D = dynamic(
  () => import("@/components/WitterCustomLogo3D").then((mod) => mod.WitterCustomLogo3D),
  { ssr: false }
);

/* ─── SVG Icons (inline to avoid external deps) ─── */
function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10h14M11 4l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
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
                    Business Management &middot; Consulting &middot; Growth
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-heading font-semibold text-display-sm sm:text-display lg:text-[4.25rem] text-white text-balance mb-6 leading-[1.1] drop-shadow-lg tracking-tight">
                  Strategic Business <br />
                  Management &amp;{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2E8D1] to-[#D4AF37] drop-shadow-sm animate-gradient-x">
                    Growth Solutions.
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-body-lg text-white/70 max-w-xl mb-10 leading-relaxed font-light">
                  Witter Global provides professional management, consulting, and
                  operational support services designed to help businesses scale
                  efficiently and operate at a higher level.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8924A] hover:from-[#E5D1A3] hover:to-[#D4AF37] text-navy-900 font-body font-semibold text-body-sm uppercase tracking-[0.1em] transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
                  >
                    Get Started Today
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRightIcon />
                    </span>
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 text-white font-body font-semibold text-body-sm uppercase tracking-[0.1em] backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Our Services
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content: 3D GLOBE + GOLD ARROW */}
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
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center">
                <div className="gold-rule-center mb-8" />
                <h2 className="font-heading font-semibold text-display-sm text-navy mb-8">
                  Scalable solutions for growing companies.
                </h2>
                <p className="text-body-lg text-navy-700 leading-relaxed mb-6">
                  Witter Global is a business management and consulting firm
                  focused on delivering scalable solutions for growing companies.
                  We specialize in streamlining operations, improving efficiency,
                  and supporting long-term business development across multiple
                  industries.
                </p>
                <p className="text-body-lg text-navy-700 leading-relaxed">
                  Our mission is to help businesses build strong foundations,
                  optimize performance, and position themselves for sustainable
                  growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY CHOOSE US (TRUST SECTION) ═══════════════════ */}
      <section id="why-us" className="section-spacing bg-white relative">
        <div className="content-width section-padding">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="gold-rule-center mb-6" />
              <h2 className="font-heading font-semibold text-display-sm text-navy mb-4">
                Why Choose Witter Global?
              </h2>
              <p className="text-body-lg text-navy-400 max-w-xl mx-auto">
                A partner built around discipline, efficiency, and the long-term
                success of every client we serve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Professional & Reliable Service",
                body: "Experienced guidance delivered with the consistency and accountability your business deserves.",
              },
              {
                title: "Scalable Solutions for Growing Businesses",
                body: "Strategies and systems designed to grow alongside your company at every stage.",
              },
              {
                title: "Focused on Efficiency & Performance",
                body: "We identify what's holding you back and put smarter, leaner processes in place.",
              },
              {
                title: "Committed to Long-Term Client Success",
                body: "Real partnerships built on sustainable results, not short-term wins.",
              },
            ].map((item, idx) => (
              <ScrollReveal
                key={item.title}
                delay={100 * (idx + 1)}
                animation="fade-in-up"
              >
                <div className="group relative bg-[#faf8f5] p-8 rounded-2xl border border-transparent hover:border-gold-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(184,146,74,0.15)] hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-gold-50 flex items-center justify-center mb-6 text-gold-600 group-hover:shadow-md transition-all duration-300">
                    <CheckIcon />
                  </div>
                  <h3 className="font-heading text-heading-sm font-semibold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body text-navy-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
              Get Started Today
            </h2>
            <p className="text-body-lg text-white/60 mb-10 max-w-xl mx-auto font-light">
              Contact us to learn how Witter Global can support your business
              growth.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy font-body font-bold text-body-sm uppercase tracking-[0.1em] hover:bg-gold-50 transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transform hover:-translate-y-1"
            >
              Get in Touch
              <ArrowRightIcon />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
