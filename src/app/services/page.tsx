import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Services",
};

const services = [
  {
    number: "01",
    title: "Business Management",
    body: "We provide hands-on management support to help businesses operate more efficiently. From daily operations to long-term planning, we ensure your business runs smoothly and effectively.",
  },
  {
    number: "02",
    title: "Operational Consulting",
    body: "Our consulting services focus on identifying inefficiencies and implementing solutions that improve workflow, reduce costs, and increase overall productivity.",
  },
  {
    number: "03",
    title: "Business Development",
    body: "We assist with growth strategies, market expansion, and building scalable systems that support long-term success.",
  },
  {
    number: "04",
    title: "Administrative Support",
    body: "We help manage back-end operations including coordination, organization, and process optimization so you can focus on revenue-generating activities.",
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
