import ScrollReveal from "@/components/ScrollReveal";

import Image from "next/image";

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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F2E8D1] to-[#D4AF37] drop-shadow-sm animate-gradient-x">
                    Operational Excellence.
                  </span><br />
                  Strategic Growth. <br />
                  Scalable Solutions.
                </h1>

                {/* Subheadline */}
                <p className="text-body-lg text-white/70 max-w-xl mb-10 leading-relaxed font-light">
                  Witter Global is a business management and consulting firm specializing
                  in operational infrastructure, administrative support, and strategic
                  development for growing companies.
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

            {/* Right Content: STATIC LOGO WITH PREMIUM EFFECTS */}
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[700px] flex items-center justify-center lg:justify-end z-10 -ml-4 lg:ml-0">
              <ScrollReveal animation="fade-in-up" delay={200}>
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-[80px] group-hover:bg-gold-400/30 transition-all duration-700 ease-out" />
                  <Image
                    src="/assets/witter-global-logo.png"
                    alt="Witter Global Executive Logo"
                    width={600}
                    height={600}
                    className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] drop-shadow-[0_10px_40px_rgba(212,175,55,0.4)] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_20px_50px_rgba(212,175,55,0.6)]"
                    priority
                  />
                  <div className="absolute inset-x-12 -bottom-10 h-6 bg-black/60 blur-[20px] rounded-[100%] transition-opacity duration-700 group-hover:opacity-100" />
                </div>
              </ScrollReveal>
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
                title: "Professional & Structured Approach",
                body: "We implement proven systems that bring clarity, organization, and efficiency to business operations.",
              },
              {
                title: "Scalable Solutions",
                body: "Our strategies are designed to grow with your business, supporting both current needs and future expansion.",
              },
              {
                title: "Operational Expertise",
                body: "We focus on improving the core functions that drive performance and profitability.",
              },
              {
                title: "Reliable Partnership",
                body: "We work closely with our clients, providing consistent support and long-term value.",
              },
              {
                title: "Results-Driven Execution",
                body: "Our approach is centered on measurable improvements and sustainable outcomes.",
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

      {/* ═══════════════════ HOW WE WORK ═══════════════════ */}
      <section id="process" className="section-spacing bg-navy relative z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-navy-900 to-navy z-0" />
        <div className="content-width section-padding relative z-10">
          <div className="text-center mb-16">
            <div className="gold-rule-center mb-6" />
            <h2 className="font-heading font-semibold text-display-sm text-white mb-4 drop-shadow-md">
              Our Process
            </h2>
            <p className="text-body-lg text-white/70 max-w-xl mx-auto font-light">
              We employ a structured, methodical approach to elevate your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-[44px] left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent z-0" />

            {[
              { num: "1", title: "Assessment", desc: "We evaluate current operations, structure, and growth opportunities." },
              { num: "2", title: "Strategy", desc: "We develop a customized plan to improve efficiency and scalability." },
              { num: "3", title: "Implementation", desc: "We execute systems and processes designed to optimize performance." },
              { num: "4", title: "Optimization", desc: "We continuously refine operations to ensure long-term success." },
            ].map((step, idx) => (
              <ScrollReveal key={step.num} delay={100 * (idx + 1)} animation="fade-in-up" className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-navy-800 border-2 border-gold-500/50 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-gradient-to-br from-navy-800 to-navy-900">
                    <span className="text-gold-400 font-heading text-3xl font-bold">{step.num}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ AUTHORITY POSITIONING (WHO WE WORK WITH) ═══════════════════ */}
      <section className="section-spacing bg-[#faf8f5] relative border-y border-navy-50">
        <div className="content-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-in-right">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 text-gold-600 uppercase tracking-widest text-sm font-bold">
                  <span className="w-8 h-[2px] bg-gold-400" />
                  Who We Work With
                </div>
                <h2 className="font-heading font-semibold text-display-sm sm:text-4xl text-navy mb-6 leading-tight">
                  Why Businesses<br />
                  <span className="text-gold-600">Work With Us</span>
                </h2>
                <p className="text-body-lg text-navy-500 leading-relaxed mb-8">
                  Witter Global supports a portfolio of businesses across multiple industries, providing centralized management and operational infrastructure.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Structured operational systems",
                    "Scalable growth strategies",
                    "Centralized management approach",
                    "Long-term partnership focus"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-navy-700 font-medium bg-white px-5 py-4 rounded-xl shadow-sm border border-navy-50/50">
                      <div className="w-6 h-6 rounded-full bg-gold-100/50 flex items-center justify-center shrink-0">
                        <CheckIcon />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-left" delay={200}>
              <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5] bg-navy shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 to-navy-700" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-30 bg-cover bg-center" />
                <div className="w-full h-full absolute inset-0 bg-gold-500/10 mix-blend-color-burn" />
                
                {/* Decorative overlay graphic */}
                <div className="relative z-10 w-32 h-32 border border-gold-500/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5">
                  <div className="w-24 h-24 border border-gold-500/50 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="w-3 h-3 bg-gold-400 rounded-full absolute -top-1.5" />
                  </div>
                </div>
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
