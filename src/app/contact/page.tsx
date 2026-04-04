import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy" />
        <div className="relative content-width section-padding text-center">
          <ScrollReveal>
            <div className="gold-rule-center mb-6" />
            <h1 className="font-heading font-semibold text-display-sm sm:text-display text-white mb-6 drop-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-body-lg text-white/60 max-w-2xl mx-auto font-light">
              We look forward to discussing strategic partnerships, acquisitions, and management consulting opportunities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ CONTACT FORM/INFO ═══════════════════ */}
      <section className="section-spacing bg-cream relative z-10">
        <div className="content-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto bg-white p-8 lg:p-14 rounded-3xl shadow-[0_8px_30px_-12px_rgba(11,29,58,0.05)] border border-navy-50">
            
            {/* Left Column: Info */}
            <ScrollReveal animation="fade-in-right">
              <div className="h-full flex flex-col justify-center">
                <h2 className="font-heading font-semibold text-heading-lg text-navy mb-8">
                  Contact Details
                </h2>
                <div className="space-y-8">
                  {/* Phone */}
                  <div>
                    <h3 className="text-body-sm font-body font-bold tracking-widest uppercase text-navy-400 mb-2">
                      Phone Number
                    </h3>
                    <p className="text-heading-sm font-heading text-navy">
                      <a href="tel:+19548164669" className="hover:text-gold-500 transition-colors">
                        (954) 816-4669
                      </a>
                    </p>
                  </div>
                  
                  {/* Email */}
                  <div>
                    <h3 className="text-body-sm font-body font-bold tracking-widest uppercase text-navy-400 mb-2">
                      Email Address
                    </h3>
                    <p className="text-heading-sm font-heading text-navy">
                      <a href="mailto:antoine.witter@gmail.com" className="hover:text-gold-500 transition-colors">
                        antoine.witter@gmail.com
                      </a>
                    </p>
                  </div>
                  
                  {/* Address */}
                  <div>
                    <h3 className="text-body-sm font-body font-bold tracking-widest uppercase text-navy-400 mb-2">
                      Headquarters
                    </h3>
                    <p className="text-heading-sm font-heading text-navy">
                      1830 N. University Dr. Ste 211<br />
                      Plantation, FL 33322
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Form */}
            <ScrollReveal delay={200} animation="fade-in-left">
              <div className="bg-navy-50/30 p-8 rounded-2xl border border-navy-50">
                <form action="mailto:antoine.witter@gmail.com" method="POST" encType="text/plain" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-body-sm font-bold tracking-widest uppercase text-navy-600 mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-5 py-4 border border-navy-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent text-navy"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-body-sm font-bold tracking-widest uppercase text-navy-600 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-5 py-4 border border-navy-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent text-navy"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-body-sm font-bold tracking-widest uppercase text-navy-600 mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5}
                      className="w-full px-5 py-4 border border-navy-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent text-navy resize-none"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-navy text-white font-body font-bold text-body-sm uppercase tracking-[0.1em] hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 rounded-lg shadow-md"
                  >
                    Submit Form
                  </button>
                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
