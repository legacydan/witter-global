import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="content-width section-padding">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <Image
                src="/assets/witter-global-logo.png"
                alt="Witter Global LLC"
                width={36}
                height={36}
                className="h-9 w-9 object-contain brightness-0 invert opacity-90"
              />
              <span className="font-heading text-lg font-semibold text-white tracking-wide">
                Witter Global
              </span>
            </Link>
            <p className="text-body-sm leading-relaxed text-white/60 max-w-xs">
              Professional management, consulting, and operational support
              designed to help businesses scale efficiently and operate at a
              higher level.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-body-sm font-body font-semibold uppercase tracking-[0.15em] text-gold-400 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-white/60 hover:text-gold-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-body-sm font-body font-semibold uppercase tracking-[0.15em] text-gold-400 mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-body-sm text-white/60">
              <p>
                1830 N. University Dr. Ste #211
                <br />
                Plantation, FL 33322
              </p>
              <p>
                <a
                  href="mailto:info@witterglobal.com"
                  className="hover:text-gold-300 transition-colors duration-200"
                >
                  info@witterglobal.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.8125rem] text-white/40">
            &copy; 2026 Witter Global LLC. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[0.8125rem] text-white/30">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-600" />
            <span>Plantation, Florida</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
