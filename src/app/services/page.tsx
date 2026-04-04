import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy" />
        <div className="relative content-width section-padding text-center">
          <ScrollReveal>
            <div className="gold-rule-center mb-6" />
            <h1 className="font-heading font-semibold text-display-sm sm:text-display text-white mb-6 drop-shadow-lg">
              What We Do
            </h1>
            <p className="text-body-lg text-white/60 max-w-2xl mx-auto font-light">
              Comprehensive management, strategic consulting, and robust operational holding structures deployed across our South Florida portfolio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section className="section-spacing bg-cream relative z-10">
        <div className="content-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Service 1 */}
            <ScrollReveal delay={100} animation="fade-in-up">
              <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-[0_8px_30px_-12px_rgba(11,29,58,0.05)] border border-navy-50 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-50 to-white flex items-center justify-center mb-8 border border-navy-100/50 shadow-inner">
                  <span className="text-gold-500 font-heading text-2xl font-semibold">01</span>
                </div>
                <h3 className="font-heading text-heading-sm font-semibold text-navy mb-4">
                  Business Consulting
                </h3>
                <p className="text-body text-navy-500 leading-relaxed font-light">
                  Operational guidance and strategic planning for emerging and established businesses. We bring high-level corporate discipline to our subsidiaries and partners.
                </p>
              </div>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal delay={200} animation="fade-in-up">
              <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-[0_8px_30px_-12px_rgba(11,29,58,0.05)] border border-navy-50 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-50 to-white flex items-center justify-center mb-8 border border-navy-100/50 shadow-inner">
                  <span className="text-gold-500 font-heading text-2xl font-semibold">02</span>
                </div>
                <h3 className="font-heading text-heading-sm font-semibold text-navy mb-4">
                  Operations Management
                </h3>
                <p className="text-body text-navy-500 leading-relaxed font-light">
                  Centralized management of subsidiary entities, vendor relationships, and business processes to leverage economies of scale and drive bottom-line efficiency.
                </p>
              </div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal delay={300} animation="fade-in-up">
              <div className="bg-white p-10 lg:p-12 rounded-2xl shadow-[0_8px_30px_-12px_rgba(11,29,58,0.05)] border border-navy-50 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-50 to-white flex items-center justify-center mb-8 border border-navy-100/50 shadow-inner">
                  <span className="text-gold-500 font-heading text-2xl font-semibold">03</span>
                </div>
                <h3 className="font-heading text-heading-sm font-semibold text-navy mb-4">
                  Investment & Holdings
                </h3>
                <p className="text-body text-navy-500 leading-relaxed font-light">
                  Structured ownership and capital deployment across a diverse portfolio of South Florida business assets, ensuring long-term value creation.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BAND ═══════════════════ */}
      <section className="py-24 bg-white border-t border-navy-50 text-center">
        <ScrollReveal>
             <h2 className="font-heading font-semibold text-heading-lg text-navy mb-6">
              Need strategic guidance?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-navy text-white font-body font-bold text-body-sm uppercase tracking-[0.1em] hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 rounded-full shadow-lg transform hover:-translate-y-1"
            >
              Contact Us Today
            </a>
        </ScrollReveal>
      </section>
    </>
  );
}
