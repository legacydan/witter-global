"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-4 left-4 right-4 lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-4xl z-50 transition-all duration-500 rounded-full ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50"
          : "bg-white/5 backdrop-blur-md shadow-lg border border-white/20 lg:bg-[#0A1F44]/50"
      }`}
    >
      <nav className="px-6 lg:px-8 py-3" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            <Image
              src="/assets/witter-global-logo.png"
              alt="Witter Global LLC"
              width={560}
              height={548}
              className="h-11 lg:h-12 w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] group-hover:scale-[1.03]"
              priority
            />
            <span
              className={`hidden sm:inline-flex items-center text-[0.6875rem] font-body font-bold tracking-[0.25em] uppercase px-2 py-1 rounded-full border transition-all duration-300 ${
                scrolled
                  ? "text-navy-500 border-navy-100 bg-navy-50/40"
                  : "text-gold-300 border-gold-400/40 bg-white/5 backdrop-blur-sm"
              }`}
            >
              LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-5 py-2.5 text-[0.8125rem] font-body font-bold tracking-[0.1em] uppercase transition-all duration-300 rounded-full ${
                      isActive
                        ? scrolled ? "bg-navy text-white shadow-md" : "bg-white text-navy shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        : scrolled ? "text-navy-600 hover:bg-navy/5" : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="relative z-10 md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-[2.5px] transition-all duration-400 origin-center rounded-full ${
                  scrolled || mobileOpen ? "bg-navy" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`}
              />
              <span
                className={`block h-[2.5px] transition-all duration-300 rounded-full ${
                  scrolled || mobileOpen ? "bg-navy" : "bg-white"
                } ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-[2.5px] transition-all duration-400 origin-center rounded-full ${
                  scrolled || mobileOpen ? "bg-navy" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            mobileOpen ? "max-h-80 opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-navy/5 shadow-2xl">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3.5 text-[0.875rem] font-body font-bold tracking-wide uppercase transition-all duration-300 rounded-xl ${
                        isActive
                          ? "bg-navy text-white shadow-md"
                          : "text-navy-700 hover:bg-navy/5 hover:translate-x-1"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
