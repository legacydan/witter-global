import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Services",
};

const services = [
  {
    number: "01",
    title: "Business Management",
    body: "We provide hands-on management support to ensure day-to-day operations run efficiently while aligning with long-term objectives.",
  },
  {
    number: "02",
    title: "Operational Consulting",
    body: "We identify inefficiencies and implement structured solutions that improve workflow, reduce costs, and increase productivity.",
  },
  {
    number: "03",
    title: "Business Development",
    body: "We assist with growth planning, expansion strategies, and the development of scalable systems.",
  },
  {
    number: "04",
    title: "Administrative Support",
    body: "We handle backend coordination, organization, and operational processes so businesses can focus on revenue generation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy" />
        <div className="relative content-width section-padding text-center">
          <ScrollReveal>
            <Image
              src="/assets/witter-global-logo.png"
              alt="Witter Global LLC"
              width={560}
              height={548}
              className="h-24 sm:h-28 w-auto mx-auto mb-6 drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]"
              priority
            />
            <div className="gold-rule-center mb-6" />
            <h1 className="font-heading font-semibold text-display-sm sm:text-display text-white mb-6 drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-body-lg text-white/60 max-w-2xl mx-auto font-light">
              Professional management, consulting, and operational support
              designed to help your business scale efficiently and operate at a
              higher level.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section className="section-spacing bg-cream relative z-10">
        <div className="content-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <ScrollReveal
                key={service.number}
                delay={100 * (idx + 1)}
                animation="fade-in-up"
              >
                <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-[0_8px_30px_-12px_rgba(11,29,58,0.05)] border border-navy-50 h-full flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(184,146,74,0.15)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-50 to-white flex items-center justify-center mb-8 border border-navy-100/50 shadow-inner">
                    <span className="text-gold-500 font-heading text-2xl font-semibold">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-heading-sm font-semibold text-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body text-navy-500 leading-relaxed font-light">
                    {service.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICE PACKAGES ═══════════════════ */}
      <section className="section-spacing bg-white relative z-10 border-t border-navy-50">
        <div className="content-width section-padding">
          <div className="text-center mb-16">
            <div className="gold-rule-center mb-6" />
            <h2 className="font-heading font-semibold text-display-sm text-navy mb-4">
              Service Packages
            </h2>
            <p className="text-body-lg text-navy-400 max-w-xl mx-auto">
              Structured tiers designed to provide the exact level of support your business needs to scale effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Tier 1 */}
            <ScrollReveal animation="fade-in-up">
              <div className="bg-[#faf8f5] p-10 rounded-2xl border border-navy-50 flex flex-col h-full hover:border-gold-300 transition-colors shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-navy mb-2">Essential Management</h3>
                <p className="text-gold-600 font-semibold mb-8 text-lg">Starting at $2,500/month</p>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-start gap-3 text-navy-600">
                    <span className="text-gold-500 mt-1">🔹</span> Operational oversight
                  </li>
                  <li className="flex items-start gap-3 text-navy-600">
                    <span className="text-gold-500 mt-1">🔹</span> Administrative support
                  </li>
                  <li className="flex items-start gap-3 text-navy-600">
                    <span className="text-gold-500 mt-1">🔹</span> Monthly reporting
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center w-full py-4 border border-navy text-navy font-body font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-navy hover:text-white transition-colors"
                >
                  Inquire Now
                </a>
              </div>
            </ScrollReveal>

            {/* Tier 2 */}
            <ScrollReveal delay={100} animation="fade-in-up">
              <div className="bg-navy p-10 rounded-2xl border border-navy-700 flex flex-col h-full relative shadow-xl transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-navy-900 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest">
                  Recommended
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Growth Management</h3>
                <p className="text-gold-400 font-semibold mb-8 text-lg">Starting at $5,000/month</p>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-gold-400 mt-1">🔹</span> Full operational management
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-gold-400 mt-1">🔹</span> Process optimization
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <span className="text-gold-400 mt-1">🔹</span> Strategic planning
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center w-full py-4 bg-gold-500 text-navy-900 font-body font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-white transition-colors"
                >
                  Inquire Now
                </a>
              </div>
            </ScrollReveal>

            {/* Tier 3 */}
            <ScrollReveal delay={200} animation="fade-in-up">
              <div className="bg-[#faf8f5] p-10 rounded-2xl border border-navy-50 flex flex-col h-full hover:border-gold-300 transition-colors shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-navy mb-2">Enterprise Support</h3>
                <p className="text-navy-400 font-semibold mb-8 text-lg">Custom Pricing</p>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-start gap-3 text-navy-600">
                    <span className="text-gold-500 mt-1">🔹</span> Multi-business oversight
                  </li>
                  <li className="flex items-start gap-3 text-navy-600">
                    <span className="text-gold-500 mt-1">🔹</span> Advanced systems implementation
                  </li>
                  <li className="flex items-start gap-3 text-navy-600">
                    <span className="text-gold-500 mt-1">🔹</span> Dedicated consulting
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center w-full py-4 border border-navy text-navy font-body font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-navy hover:text-white transition-colors"
                >
                  Let&apos;s Discuss
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CLIENT AGREEMENT ═══════════════════ */}
      <section className="section-spacing bg-cream relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="content-width section-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="p-10 lg:p-14 bg-white rounded-3xl border border-navy-100 shadow-[0_8px_30px_-12px_rgba(11,29,58,0.05)] relative">
                {/* Decorative quote marks */}
                <div className="absolute -top-6 -left-4 text-9xl text-gold-500/10 font-serif leading-none select-none">
                  “
                </div>
                
                <h3 className="font-heading text-2xl font-semibold text-navy mb-6 relative z-10">
                  Client Agreement & Expectations
                </h3>
                
                <div className="bg-navy-50/50 p-6 rounded-xl border-l-4 border-gold-400 mb-8 relative z-10">
                  <p className="text-navy-700 italic text-lg leading-relaxed font-serif">
                    “Witter Global, LLC provides ongoing business management, operational support, and administrative services. Client agrees to pay a monthly management fee for services rendered.”
                  </p>
                </div>

                <div className="relative z-10">
                  <p className="text-body font-semibold text-navy mb-4 font-body tracking-wider uppercase text-sm">
                    All service agreements clearly outline:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Monthly fee amount",
                      "Scope of services",
                      "Payment schedule",
                      "Authorized signatures",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-navy-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BAND ═══════════════════ */}
      <section className="py-24 bg-white border-t border-navy-50 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-semibold text-heading-lg text-navy mb-6">
            Ready to take your business to the next level?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-navy text-white font-body font-bold text-body-sm uppercase tracking-[0.1em] hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 rounded-full shadow-lg transform hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
