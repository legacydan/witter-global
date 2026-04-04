"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Formspree endpoint — replace YOUR_FORM_ID with actual Formspree ID when ready
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        // Fallback to mailto
        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const message = data.get("message") as string;
        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\n${message}`
        );
        window.location.href = `mailto:info@wittergloballlc.com?subject=${subject}&body=${body}`;
        setStatus("sent");
      }
    } catch {
      // Fallback to mailto on network error
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:info@wittergloballlc.com?subject=${subject}&body=${body}`;
      setStatus("sent");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gold-600"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-heading text-heading-sm font-semibold text-navy mb-2">
          Message Sent
        </h3>
        <p className="text-body text-navy-400">
          Thank you for reaching out. We&apos;ll respond within one business
          day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-body-sm font-body font-semibold text-gold-600 hover:text-gold-500 uppercase tracking-wide transition-colors duration-200"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-body-sm font-body font-semibold text-navy-700 mb-2"
        >
          Name <span className="text-gold-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your full name"
          className="w-full px-4 py-3 bg-cream border border-cream-300 rounded-sm text-body text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors duration-200"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-body-sm font-body font-semibold text-navy-700 mb-2"
        >
          Email <span className="text-gold-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 bg-cream border border-cream-300 rounded-sm text-body text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors duration-200"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-body-sm font-body font-semibold text-navy-700 mb-2"
        >
          Message <span className="text-gold-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 bg-cream border border-cream-300 rounded-sm text-body text-navy-800 placeholder:text-navy-300 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors duration-200 resize-y min-h-[120px]"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-3.5 bg-gold-600 hover:bg-gold-500 disabled:bg-gold-300 text-white font-body font-semibold text-body-sm uppercase tracking-[0.1em] transition-all duration-200 rounded-sm flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                className="opacity-25"
              />
              <path
                d="M4 12a8 8 0 018-8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="opacity-75"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
