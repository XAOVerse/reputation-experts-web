"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./sections.module.css";

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   DENTAL CTA SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export function DentalCTASection() {
  return (
    <section
      className="bg-white py-10 lg:py-16 px-5 sm:px-6 lg:px-10"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Contact CTA"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* ââ Dark rounded card âââââââââââââââââââââââââââââââââââ */}
        <div className="rounded-2xl bg-[#141414] px-8 sm:px-12 lg:px-16 py-14 lg:py-16">

          {/* ââ Heading ââââââââââââââââââââââââââââââââââââââââââââ */}
          <h2
            className="text-white font-normal leading-[1.15] tracking-[-0.02em] mb-14 lg:mb-16 max-w-[560px]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let&apos;s build a reputation your practice deserves.
          </h2>

          {/* ââ "Write us on" âââââââââââââââââââââââââââââââââââââââ */}
          <p className="text-white/40 text-[13px] mb-5">Write us on</p>

          {/* ââ Two email columns ââââââââââââââââââââââââââââââââââ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {/* Free Case Assessment */}
            <div>
              <span className="inline-block border border-white/25 text-white/70 text-[13px] rounded-full px-4 py-1.5 mb-3">
                Free Case Assessment
              </span>
              <p>
                <a
                  href="mailto:uk@reputation-experts.co.uk"
                  className="text-white text-[16px] sm:text-[17px] font-normal hover:text-white/70 transition-colors"
                >
                  uk@reputation-experts.co.uk
                </a>
              </p>
            </div>

            {/* General Inquiries */}
            <div>
              <span className="inline-block border border-white/25 text-white/70 text-[13px] rounded-full px-4 py-1.5 mb-3">
                General Inquiries
              </span>
              <p>
                <a
                  href="mailto:info@reputation-experts.co.uk"
                  className="text-white text-[16px] sm:text-[17px] font-normal hover:text-white/70 transition-colors"
                >
                  info@reputation-experts.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* ââ Divider ââââââââââââââââââââââââââââââââââââââââââââ */}
          <div className="border-t border-white/10 mb-8" />

          {/* ââ Bottom row âââââââââââââââââââââââââââââââââââââââââ */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex flex-row items-center gap-3 sm:contents">
              {/* Talk To Expert button â first */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors whitespace-nowrap"
              >
                Talk To Expert
              </Link>

              {/* Phone button */}
              <a
                href="tel:08006546009"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/30 text-white text-[14px] font-medium hover:border-white/60 transition-colors whitespace-nowrap"
              >
                0800 654 6009
              </a>
            </div>

            {/* Tagline */}
            <p className="text-white/35 text-[13px] sm:ml-4 leading-snug">
              Join dental practices across the UK who trust us to protect and grow their online presence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   DENTAL CASE STUDIES SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export interface CaseStudyItem {
  quote: string;
  avatar?: { src: string; alt: string };
  name: string;
  title: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    quote:
      "A private dental clinic came to us with a 3.6-star rating, several damaging fake reviews, and an online reputation that was undermining patient trust. Within just under four months, we helped remove 8 fake and policy-violating reviews, implemented a consistent patient review strategy, and increased the clinic's rating to 4.7 stars. Consultation bookings rose by 40%, with the clinic benefiting from stronger trust, better visibility, and a much healthier flow of new enquiries.",
    avatar: { src: "/images/dental-case-study-1.png", alt: "Dental Clinic Case Study" },
    name: "Dental Clinic Case Study",
    title: "Reputation Recovery for a Dental Clinic in Midlands",
  },
  {
    quote:
      "An independent restaurant came to Reputation Experts with a 3.9-star rating and a mixed review profile that was costing it bookings. After identifying and challenging damaging reviews, implementing a structured system for generating genuine guest feedback, and strengthening the restaurant's wider online trust signals, we helped increase its rating to 4.8 stars within five months. Reservation enquiries rose by 27%, and the restaurant moved from being overlooked online to being chosen with confidence.",
    avatar: { src: "/images/dental-case-study-2.png", alt: "Pierre Lambert" },
    name: "Pierre Lambert",
    title: "Reputation Building for a Restaurant in London",
  },
  {
    quote:
      "A premium aesthetic clinic was attracting attention online, but too many potential clients were dropping off before booking. Its 4.0-star rating and mixed review profile were creating doubt at the point of decision. Reputation Experts helped reposition the business by challenging damaging reviews, building a stronger flow of genuine positive feedback, and improving the spa's wider digital trust signals. Within four months, the rating rose to 4.8 stars and treatment enquiries and package bookings increased by 35%.",
    avatar: { src: "/images/dental-case-study-3.png", alt: "Pierre Lambert" },
    name: "Pierre Lambert",
    title: "Reputation Acceleration for an Aesthetic Clinic in London",
  },
];

export function DentalCaseStudiesSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const prevActive = useRef(active);

  const handleSelect = (i: number) => {
    if (i === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      prevActive.current = i;
      setVisible(true);
    }, 180);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Case Studies"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        {/* Heading row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em]">
            Case Studies
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#0f0f0f] text-white text-[13px] font-medium px-5 py-2.5 hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            Talk To Expert
          </Link>
        </div>

        {/* DESKTOP: expanding cards */}
        <div className="hidden lg:flex gap-3 items-stretch">
          {CASE_STUDIES.map((t, i) => {
            const isActive = i === active;

            if (isActive) {
              return (
                <div
                  key={i}
                  className="relative bg-[#f4f4f4] rounded-2xl p-8 flex flex-col justify-between min-h-[340px]"
                  style={{
                    flex: "1 1 0%",
                    minWidth: 0,
                    transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(10px)",
                      transition: "opacity 0.22s ease, transform 0.22s ease",
                    }}
                  >
                    <div className="text-[56px] font-serif leading-none text-[#0f0f0f] mb-3 select-none">
                      &ldquo;
                    </div>
                    <blockquote>
                      <p className="text-[#0f0f0f] text-[clamp(0.9rem,1.4vw,1.05rem)] font-medium leading-[1.7] tracking-[-0.01em]">
                        {t.quote}
                      </p>
                    </blockquote>
                  </div>
                  <footer
                    className="flex items-center gap-3 mt-8"
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: "opacity 0.22s ease 0.05s",
                    }}
                  >
                    {t.avatar ? (
                      <Image
                        src={t.avatar.src}
                        alt={t.avatar.alt}
                        width={44}
                        height={44}
                        className="w-11 h-11 rounded-xl object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] font-bold text-sm shrink-0">
                        {t.name[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-[#0f0f0f] font-semibold text-[14px]">{t.name}</p>
                      <p className="text-[#888] text-[12px]">{t.title}</p>
                    </div>
                  </footer>
                </div>
              );
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="bg-[#f7f7f7] rounded-2xl p-5 flex flex-col justify-between min-h-[340px] hover:bg-[#f0f0f0] cursor-pointer overflow-hidden"
                style={{
                  flex: "0 0 150px",
                  width: 150,
                  transition:
                    "flex 0.45s cubic-bezier(0.4,0,0.2,1), background-color 0.2s",
                }}
                aria-label={`View case study: ${t.title}`}
              >
                <div className="text-[32px] font-serif leading-none text-[#bbb] select-none">
                  &ldquo;
                </div>
                <div className="mt-auto">
                  {t.avatar ? (
                    <Image
                      src={t.avatar.src}
                      alt={t.avatar.alt}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] font-bold text-sm">
                      {t.name[0]}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* MOBILE: single card with fade + dots */}
        <div className="lg:hidden">
          <div className="relative bg-[#f4f4f4] rounded-2xl p-7 flex flex-col justify-between min-h-[320px]">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <div className="text-[48px] font-serif leading-none text-[#0f0f0f] mb-2 select-none">
                &ldquo;
              </div>
              <p className="text-[#0f0f0f] text-[15px] font-medium leading-[1.7] text-justify">
                {CASE_STUDIES[active].quote}
              </p>
            </div>
            <footer
              className="flex items-center gap-3 mt-6"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.22s ease 0.05s",
              }}
            >
              {CASE_STUDIES[active].avatar && (
                <Image
                  src={CASE_STUDIES[active].avatar!.src}
                  alt={CASE_STUDIES[active].avatar!.alt}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl object-cover shrink-0"
                />
              )}
              <div>
                <p className="text-[#0f0f0f] font-semibold text-[13px]">
                  {CASE_STUDIES[active].name}
                </p>
                <p className="text-[#888] text-[12px]">{CASE_STUDIES[active].title}</p>
              </div>
            </footer>
          </div>
          <div className="flex items-center justify-center gap-2.5 mt-5">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-7 h-2 bg-[#0f0f0f]" : "w-2 h-2 bg-[#ccc]"
                }`}
                aria-label={`Case study ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   DENTAL CONTACT SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  agreed?: string;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function DentalContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    link: "",
    message: "",
    agreed: false,
  });
  const [linkLen, setLinkLen] = useState(0);
  const [msgLen, setMsgLen] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});

  const validate = (f = form): FormErrors => {
    const e: FormErrors = {};
    if (!f.name.trim()) e.name = "Name is required.";
    if (!f.email.trim()) {
      e.email = "Email is required.";
    } else if (!isValidEmail(f.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!f.message.trim()) {
      e.message = "Please tell us a bit about your project.";
    } else if (f.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    }
    if (!f.agreed) e.agreed = "You must accept the Privacy Policy to continue.";
    return e;
  };

  const touch = (field: keyof FormErrors) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors(validate());
  };

  const err = (field: keyof FormErrors) =>
    touched[field] ? errors[field] : undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true, agreed: true });
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          link: form.link,
          message: form.message,
          source: "Dental Home Page",
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setSubmitError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Get in touch"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* ââ LEFT: Form ââââââââââââââââââââââââââââââââââââââââ */}
          <div>
            <h2
              className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-5"
            >
              Get in touch
            </h2>
            <p className="text-[#444] text-[15px] leading-[1.7] mb-10 max-w-[380px]">
              Tell us what you need and we&apos;ll get back within 24 hours with a tailored plan.
            </p>

            {submitted ? (
              <div className="py-12">
                <p className="text-[#0f0f0f] font-semibold text-lg mb-1">Thank you!</p>
                <p className="text-[#888] text-sm">We&apos;ll review your case and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                  <div>
                    <label className="block text-[#0f0f0f] text-[14px] font-medium mb-1.5">
                      Band / company name
                    </label>
                    <input
                      type="text"
                      placeholder="John from Apple"
                            value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      onBlur={() => touch("name")}
                      className={`w-full bg-transparent border-b pb-2.5 text-[#1a1a1a] text-[14px] placeholder-[#bbb] focus:outline-none transition-colors ${err("name") ? "border-red-500 focus:border-red-500" : "border-[#d0d0d0] focus:border-[#888]"}`}
                    />
                    {err("name") && (
                      <p className="text-red-500 text-[11px] mt-1.5">{err("name")}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[#0f0f0f] text-[14px] font-medium mb-1.5">
                      Your email
                    </label>
                    <input
                      type="email"
                      placeholder="john@apple.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      onBlur={() => touch("email")}
                      className={`w-full bg-transparent border-b pb-2.5 text-[#1a1a1a] text-[14px] placeholder-[#bbb] focus:outline-none transition-colors ${err("email") ? "border-red-500 focus:border-red-500" : "border-[#d0d0d0] focus:border-[#888]"}`}
                    />
                    {err("email") && (
                      <p className="text-red-500 text-[11px] mt-1.5">{err("email")}</p>
                    )}
                  </div>
                </div>

                {/* Google Maps / Trustpilot Link */}
                <div>
                  <label className="block text-[#0f0f0f] text-[14px] font-medium mb-1.5">
                    Google Maps / Trustpilot Link
                  </label>
                  <textarea
                    placeholder="Something about your great idea"
                    rows={1}
                    value={form.link}
                    maxLength={500}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, link: e.target.value }));
                      setLinkLen(e.target.value.length);
                    }}
                    className="w-full bg-transparent border-b border-[#d0d0d0] pb-2.5 text-[#1a1a1a] text-[14px] placeholder-[#bbb] focus:outline-none focus:border-[#888] transition-colors resize-none"
                  />
                  <div className="text-right text-[#bbb] text-[11px] mt-1">{linkLen}/500</div>
                </div>

                {/* Tell us more */}
                <div>
                  <label className="block text-[#0f0f0f] text-[14px] font-medium mb-1.5">
                    Tell us more about your project
                  </label>
                  <textarea
                    placeholder="Something about your great idea"
                    rows={1}
                    value={form.message}
                    maxLength={500}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, message: e.target.value }));
                      setMsgLen(e.target.value.length);
                    }}
                    onBlur={() => touch("message")}
                    className={`w-full bg-transparent border-b pb-2.5 text-[#1a1a1a] text-[14px] placeholder-[#bbb] focus:outline-none transition-colors resize-none ${err("message") ? "border-red-500 focus:border-red-500" : "border-[#d0d0d0] focus:border-[#888]"}`}
                  />
                  <div className="flex items-center justify-between mt-1">
                    {err("message") ? (
                      <p className="text-red-500 text-[11px]">{err("message")}</p>
                    ) : <span />}
                    <span className="text-[#bbb] text-[11px]">{msgLen}/500</span>
                  </div>
                </div>

                {/* Toggle + Privacy + Submit */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 flex-wrap">
                    {/* iOS-style toggle */}
                    <button
                      type="button"
                      onClick={() => {
                        setForm((p) => ({ ...p, agreed: !p.agreed }));
                        setTouched((p) => ({ ...p, agreed: true }));
                        setTimeout(() => setErrors(validate()), 0);
                      }}
                      aria-pressed={form.agreed}
                      style={{
                        position: "relative",
                        flexShrink: 0,
                        width: 44,
                        height: 24,
                        borderRadius: 999,
                        overflow: "hidden",
                        transition: "background 0.2s",
                        background: form.agreed ? "#0f0f0f" : err("agreed") ? "#fca5a5" : "#d0d0d0",
                        outline: err("agreed") ? "2px solid #ef4444" : "none",
                        outlineOffset: 2,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: 3,
                          left: form.agreed ? 23 : 3,
                          width: 18,
                          height: 18,
                          borderRadius: 999,
                          background: "white",
                          transition: "left 0.2s",
                        }}
                      />
                    </button>

                    <p className="text-[#888] text-[12px] flex-1 leading-snug min-w-0">
                      I confirm that I have read, consent and agree to our{" "}
                      <Link href="/privacy-policy" className="underline text-[#555] hover:text-[#111] transition-colors">
                        Privacy Policy
                      </Link>
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="ml-auto inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-[14px] font-medium transition-colors whitespace-nowrap disabled:opacity-60"
                      style={{ background: Object.keys(validate()).length === 0 ? "#FF461E" : "#c0c0c0" }}
                    >
                      {loading ? "Sendingâ¦" : "Submit"}
                    </button>
                  </div>

                  {err("agreed") && (
                    <p className="text-red-500 text-[11px]">{err("agreed")}</p>
                  )}
                  {submitError && (
                    <p className="text-red-500 text-[12px] mt-2">{submitError}</p>
                  )}
                </div>

              </form>
            )}
          </div>

          {/* ââ RIGHT: What happens card âââââââââââââââââââââââââââ */}
          <div className="bg-[#f5f5f3] rounded-2xl px-7 py-8">
            <h3 className="text-[#0f0f0f] font-semibold text-[1.2rem] leading-[1.3] tracking-[-0.01em] mb-6">
              What happens after<br />I submit a request?
            </h3>

            {/* Step 01 */}
            <div className="pb-6 border-b border-[#e0e0de]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#0f0f0f] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[12px] font-semibold">01</span>
                </div>
                <div>
                  <p className="text-[#0f0f0f] font-semibold text-[15px] mb-1.5">Free Reputation Audit</p>
                  <p className="text-[#666] text-[13px] leading-[1.65]">
                    We review your Google, Trustpilot, and social profiles within 24 hours and identify every review that can be challenged.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="py-6 border-b border-[#e0e0de]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#0f0f0f] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[12px] font-semibold">02</span>
                </div>
                <div>
                  <p className="text-[#0f0f0f] font-semibold text-[15px] mb-1.5">Strategy Call</p>
                  <p className="text-[#666] text-[13px] leading-[1.65]">
                    A reputation consultant walks you through the findings, explains your options, and recommends a tailored plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#FF461E] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[12px] font-semibold">03</span>
                </div>
                <div>
                  <p className="text-[#0f0f0f] font-semibold text-[15px] mb-1.5">We Get To Work</p>
                  <p className="text-[#666] text-[13px] leading-[1.65]">
                    We start strengthening your online reputation immediately, from review removal and rating growth to Google AI Overview visibility, search positioning, and major media authority. You begin seeing movement within weeks.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <p className="text-[#aaa] text-[12px] mt-7 pt-6 border-t border-[#e0e0de]">
              We respect your time - no spam, no endless calls.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   DENTAL FAQ SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const DENTAL_FAQ = [
  {
    question: "How can Reputation Experts protect your business from harmful new reviews?",
    answer:
      "We monitor your Google Business Profile and other platforms around the clock. The moment a new harmful review appears, our team is alerted and processes the removal, if the review can not be taken down, we craft professional responses on your behalf that show prospective patients your practice takes feedback seriously. You're never caught off guard by a review again.",
  },
  {
    question: "How long does it take to see results for my dental practice?",
    answer:
      "Most practices see measurable improvement within 30 to 60 days. Review removal cases typically resolve in 1â3 weeks, depending on the platform, and our review generation system starts delivering new 5-star reviews within the first fortnight. By month three, you'll typically see a noticeable rating increase and a stronger first page on Google. Full reputation transformation - including AI Overview positioning and authority building - is a 4â6 month process.",
  },
  {
    question: "How does Google's AI Overview affect my dental practice?",
    answer:
      "Google's AI Overviews now pull together information from reviews, your website, and third-party sources into a single AI-generated answer at the top of the search results. When someone searches for terms like \"best dentist near me\", Google no longer just shows a list of websites; it increasingly highlights and recommends specific practices. Reputation Experts strengthens your entire digital presence so your practice is in a far better position to be trusted and recommended by Google's AI. This includes improving your review profile, increasing rating strength and review volume, optimising trust signals across your web presence, and building authority through high-quality third-party coverage. When your dental practice is featured in trusted media and reputable publications â something we specialise in â it creates the kind of authority signals that naturally improve how your practice is understood and recommended by Google AI Overviews, ChatGPT, and other AI-driven discovery platforms.",
  },
  {
    question: "How does Reputation Experts build a strong online reputation for my practice?",
    answer:
      "We work across three phases. First, we clean up, removing policy-violating reviews, suppressing negative search results, and fixing gaps in your Google Business Profile. Second, we strengthen, building a steady flow of genuine 5-star reviews from your existing patients using follow-up systems timed around appointments, and publishing authoritative content that positions your practice as a trusted name online. Third, we establish long-term authority, securing press coverage, optimising for Google AI Overviews and ChatGPT recommendations, and providing ongoing monitoring so your reputation stays protected month after month.",
  },
  {
    question: "How does Reputation Experts help clinics boost their bookings and increase sales?",
    answer:
      "Reputation directly drives revenue. 87% of customers check online reviews before making an appointment (unless existing clients). A practice sitting at lower score stars loses patients to a competitor at a higher score every single day, even if the clinical care is identical. We close that gap by removing unfair reviews that drag your rating down, generating a consistent stream of new 5-star reviews that push it up, and ensuring your practice appears prominently when potential patients search on Google, ask ChatGPT, or browse AI Overviews. The result is more clicks, more calls, and more booked appointments, clients typically see a 30â50% increase in new patient enquiries within the first three months.",
  },
];

export function DentalFAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section
      className="bg-white pt-6 pb-14 lg:pt-8 lg:pb-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-10 lg:mb-12">
          FAQ
        </h2>

        <div>
          {DENTAL_FAQ.map((item, i) => {
            const isOpen = openItem === i;
            return (
              <div key={i} className="border-t border-[#e0e0e0] last:border-b">
                <button
                  onClick={() => setOpenItem(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-7 text-left group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#1a1a1a] text-[15px] lg:text-[16px] font-normal leading-snug group-hover:text-[#444] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-[#e8502a] text-[22px] leading-none font-light transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px] pb-6" : "max-h-0"}`}
                >
                  <p className="text-[#666] text-[14px] leading-relaxed max-w-3xl text-justify lg:text-left">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   DENTAL HERO SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export interface DentalHeroSectionProps {
  headline?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function DentalHeroSection({
  headline = "We protect and grow Dental Clinics' online reputations.",
  subtitle = "Improving online reputation directly affects clinics by helping them gain more bookings, build trust, and increase sales.",
  ctaLabel = "Free Assessment",
  ctaLink = "/contact",
  imageSrc = "/images/dental-1.png",
  imageAlt = "Dental clinic consultation",
}: DentalHeroSectionProps) {
  return (
    <section
      className="dental-hero bg-white pt-[64px]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Hero"
    >
      <div className="dental-hero__inner max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* ââ Text block âââââââââââââââââââââââââââââââââââââââ */}
        <div className="dental-hero__text pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 max-w-[720px]">
          <h1
            className={`${styles.fadeUp} dental-hero__heading text-[#0f0f0f] font-semibold leading-[1.12] tracking-[-0.02em] mb-5 lg:mb-6`}
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              animationDelay: "0.05s",
            }}
          >
            {headline}
          </h1>

          <p
            className={`${styles.fadeUp} dental-hero__subtitle text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-6 lg:mb-8 max-w-[580px]`}
            style={{ animationDelay: "0.15s" }}
          >
            {subtitle}
          </p>

          <Link
            href={ctaLink}
            className={`${styles.fadeUp} dental-hero__cta inline-flex items-center gap-2 text-[#0f0f0f] text-[14px] sm:text-[15px] font-medium underline underline-offset-4 decoration-[#0f0f0f] hover:decoration-[#555] hover:text-[#555] transition-colors`}
            style={{ animationDelay: "0.25s" }}
          >
            {ctaLabel}
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-[1px]"
            >
              <path
                d="M3 8.5h9m0 0L8.5 5M12 8.5L8.5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ââ Image block ââââââââââââââââââââââââââââââââââââââ */}
        <div
          className={`${styles.fadeUp} dental-hero__image-wrapper relative w-full`}
          style={{ animationDelay: "0.35s" }}
        >
          <div className="dental-hero__image-frame relative w-full rounded-2xl overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: "16 / 8" }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   DENTAL SERVICES SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export interface DentalServiceItem {
  name: string;
  description?: string;
  category: string;
}

export interface DentalServicesSectionProps {
  heading?: string;
  filters?: string[];
  services?: DentalServiceItem[];
}

const DEFAULT_FILTERS = ["All Services", "Reviews", "Search & Content", "PR & Media"];

const DEFAULT_SERVICES: DentalServiceItem[] = [
  {
    name: "Online Reputation Audit",
    description:
      "We start with a comprehensive reputation audit of your business, reviewing your Google rating, Trustpilot score, Instagram and Facebook sentiment, competitor positioning, how Google AI Overviews and ChatGPT present your business, how you rank against competitors across both traditional and AI-driven search, and any reviews that violate platform guidelines. This gives us a clear action plan to improve your online presence within 60â90 days.",
    category: "All Services",
  },
  {
    name: "Review Dispute & Removal",
    description:
      "Damaging reviews can shape how customers see your business before they ever make contact. We help identify high-risk review issues, challenge harmful content where appropriate, and protect your reputation across Google and other key platforms to preserve trust, strengthen profile quality, and limit reputational damage. Our service also includes ongoing protection against harmful reviews as they appear. Unlike many online reputation management companies that treat review issues as a one-off task, we understand that reputation protection is an ongoing process and is included as part of our all-inclusive monthly packages.",
    category: "Reviews",
  },
  {
    name: "Review Generation",
    description:
      "Consistent positive reviews increase trust, strengthen your online reputation, and influence buying decisions before a customer ever contacts your business. We help brands build a healthier review profile across the platforms that matter most â increasing review quality, improving rating strength, and supporting stronger commercial performance over time.",
    category: "Reviews",
  },
  {
    name: "Google Business Optimisation",
    description:
      "A weak Google Business Profile can cost you visibility, trust, and enquiries. We help businesses improve the quality, credibility, and commercial performance of their Google presence so they stand out more effectively in local search, rank more strongly in Google Maps results and recommendations, and convert more potential customers into leads.",
    category: "Search & Content",
  },
  {
    name: "Crisis & Issue Response",
    description:
      "Damaging online content can harm trust long before a customer ever contacts your business. We take down harmful photos, videos, articles, and other negative content that affects how they are perceived online. Where removal is not possible, we focus on reducing its visibility and strengthening the presence of more credible, positive content so harmful results are buried behind positive content and appear at the last pages of the search results.",
    category: "Search & Content",
  },
  {
    name: "Digital PR & Authority Building",
    description:
      "Authority matters. We help businesses strengthen their brand through digital PR and strategic media exposure across major international publications, local news outlets, and industry-specific media. This broader media footprint helps reinforce trust, elevate perceived credibility, and build the kind of authority signals that increasingly influence Google search, Google AI Overviews, and AI platforms such as ChatGPT when presenting businesses to potential customers. Whether through globally recognised names such as BBC, Business Insider, NBC, FOX, CBS, Yahoo Finance, and Digital Journal, Evening Standard, The Sun, Telegraph, or through more targeted local and industry-led coverage, the objective is the same: build a stronger, more trusted, more visible brand.",
    category: "PR & Media",
  },
  {
    name: "AI Overview Optimisation",
    description:
      "Traditional SEO is no longer the full picture. Google AI Overviews are increasingly shaping which businesses get seen, trusted, and chosen first. We help brands strengthen the authority, relevance, and reputation signals that support better visibility within AI-generated search results, helping position the business more competitively in a rapidly changing search landscape.",
    category: "Search & Content",
  },
  {
    name: "Daily Monitoring and Protection",
    description:
      "Negative content, harmful reviews, and new reputation threats can appear at any time. Our monthly service helps businesses challenge damaging content, address harmful reviews where appropriate, and protect how the brand is seen across the platforms that influence customer decisions most. This frequently includes fake competitor reviews, unreasonable customer complaints, and personal revenge-driven attacks from former employees - issues we deal with regularly and effectively take them down. The result is stronger trust, greater credibility, and better long-term reputation protection.",
    category: "All Services",
  },
];

export function DentalServicesSection({
  heading = "Services",
  filters = DEFAULT_FILTERS,
  services = DEFAULT_SERVICES,
}: DentalServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "All Services");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    if (activeFilter === "All Services") return services;
    return services.filter((s) => s.category === activeFilter);
  }, [activeFilter, services]);

  const safeActive = active >= filtered.length ? 0 : active;
  const activeService = filtered[safeActive];

  return (
    <section
      className="bg-white py-6 lg:py-8"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden bg-[#161616] px-6 pt-10 pb-10 lg:px-12 lg:pt-14 lg:pb-14"
          style={{
            backgroundImage: "url('/images/background-path.webp')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-white font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] tracking-[-0.01em] mb-6">
            {heading}
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setActive(0);
                }}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors duration-200 ${
                  activeFilter === filter
                    ? "bg-white text-[#161616] border-white"
                    : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* MOBILE: Accordion */}
          <div className="lg:hidden">
            {filtered.map((service, i) => {
              const isOpen = safeActive === i;
              return (
                <div key={service.name} className="border-t border-white/[0.1]">
                  <button
                    onClick={() => setActive(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between py-5 gap-4"
                  >
                    <span
                      className={`text-left text-[16px] font-medium transition-colors ${
                        isOpen ? "text-white" : "text-white/60"
                      }`}
                    >
                      {service.name}
                    </span>
                    <svg
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={isOpen ? "1" : "0.4"}
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="pb-6">
                      <div className="w-full h-px bg-white/10 mb-5" />
                      {service.description && (
                        <p className="text-white/60 text-[14px] leading-[1.75] text-justify">
                          {service.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="border-t border-white/[0.1]" />
          </div>

          {/* DESKTOP: Two-column layout */}
          <div className="hidden lg:grid grid-cols-[1fr_1.2fr] gap-0 rounded-2xl overflow-hidden">
            {/* Left â service list */}
            <div>
              {filtered.map((service, i) => (
                <button
                  key={service.name}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center justify-between px-6 py-4 border-b border-white/[0.07] transition-colors duration-150 last:border-b-0 ${
                    safeActive === i
                      ? "bg-white/[0.07]"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`text-[14px] font-normal transition-colors ${
                      safeActive === i ? "text-white" : "text-white/50"
                    }`}
                  >
                    {service.name}
                  </span>
                  {safeActive === i ? (
                    <svg
                      className="shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  ) : (
                    <svg
                      className="shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.25"
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Right â detail panel */}
            <div className="p-8 lg:p-10 flex flex-col min-h-[320px]">
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="text-white font-semibold text-[clamp(1.1rem,2vw,1.45rem)] leading-[1.3] tracking-[-0.01em]">
                  {activeService?.name}
                </h3>
              </div>

              {activeService?.description && (
                <p className="text-white/80 text-[15px] leading-[1.85] text-justify">
                  {activeService.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   DIGITAL REPUTATION SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export interface DigitalReputationSectionProps {
  heading?: string;
  description?: string;
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const DEFAULT_TAGS = [
  "Harmful Review Removal",
  "Google Review Growth",
  "Trustpilot Review Growth",
  "Authority Content Publishing",
  "National Press Features",
  "Negative Content Suspension",
  "Google Maps Positioning",
  "Ongoing Protection: Removal of New Harmful Reviews",
  "Google AI Overview Optimisation",
  "Chat-GPT Visibility",
];

export function DigitalReputationSection({
  heading = "Digital reputation management that covers every angle",
  description = "Our approach brings together review management, reputation building, Google AI Overview optimisation, ChatGPT recommendation positioning, and major online media publications - all in one integrated service built specifically for UK dental practices. Every strategy is shaped around how patients actually search for and choose their dentist online.",
  tags = DEFAULT_TAGS,
  imageSrc = "/images/dental-2.png",
  imageAlt = "Reputation management wheel showing all service areas",
}: DigitalReputationSectionProps) {
  return (
    <section
      className="bg-white py-8 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Digital reputation management"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ââ Left column: text + tags ââââââââââââââââââââââââ */}
          <div>
            <h2
              className="text-[#1a1a1a] font-normal leading-[1.15] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)" }}
            >
              {heading}
            </h2>

            <p className="text-[#444] text-[14px] sm:text-[15px] leading-[1.8] mb-2 lg:mb-8 text-justify lg:text-left">
              {description}
            </p>

            <div className="hidden lg:flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-4 py-2 rounded-full border border-[#d8d8d8] text-[#333] text-[13px] font-normal leading-[1.4] bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ââ Right column: diagram image âââââââââââââââââââââ */}
          <div className="flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={2028}
              height={2109}
              className="w-full max-w-[540px] h-auto"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   GOOGLE AI OVERVIEW SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export function GoogleAIOverviewSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Google AI Overview"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* ââ Two-column grid âââââââââââââââââââââââââââââââââââââ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ââ Left: text âââââââââââââââââââââââââââââââââââââââââ */}
          <div>
            <h2
              className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-6 text-justify lg:text-left"
            >
              Google &lsquo;AI Overview&rsquo;
            </h2>

            <p
              className="text-[#1a1a1a] font-semibold leading-[1.5] mb-5 text-justify lg:text-left"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
            >
              Google AI Overviews consolidate information from multiple sources
              into a single AI-generated answer, changing how users discover
              businesses online.
            </p>

            <p className="text-[#444] text-[14px] sm:text-[15px] leading-[1.8] text-justify lg:text-left">
              Google's AI Overviews are changing how customers discover
              businesses online. Instead of browsing multiple links, users are
              increasingly shown a single AI-generated answer drawn from across
              the web. That means your business needs to be a source Google
              trusts and surfaces. Reputation Experts helps keep your business
              visible in AI-driven search by optimising your Google Business
              Profile, improving review signals, and structuring your online
              presence so Google favours you over competitors.
            </p>
          </div>

          {/* ââ Right: image âââââââââââââââââââââââââââââââââââââââ */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[580px] rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-[#e8e8e8]">
              <Image
                src="/images/dental-3.png"
                alt="Google AI Overview search result example"
                width={1160}
                height={800}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* ââ CTA buttons ââââââââââââââââââââââââââââââââââââââââââââ */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-12">
          <a
            href="tel:08006546009"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1a1a1a] text-white text-[15px] font-medium tracking-wide hover:bg-[#333] transition-colors duration-200"
          >
            0800 654 6009
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#FF461E] text-white text-[15px] font-medium tracking-wide hover:bg-[#e63b15] transition-colors duration-200"
          >
            Talk To Expert
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   INDUSTRY AUTHORITY SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export function IndustryAuthoritySection() {
  return (
    <section className="bg-white py-10 lg:py-14 px-3 sm:px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <Image
          src="/images/graph.png"
          alt="Industry Authority Brand in 6 Months"
          width={1800}
          height={900}
          className="w-full h-auto rounded-2xl min-h-[300px] object-cover object-left"
          priority={false}
        />
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   PLATFORMS MEDIA SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const CBSLogo = () => (
  <img src="/images/cbs-logo.svg" alt="CBS" style={{ width: 51, height: 15, objectFit: "contain" }} />
);

const BBCLogo = () => (
  <div className="flex gap-[2px] flex-shrink-0">
    {["B", "B", "C"].map((l, i) => (
      <span key={i} className="w-[16px] h-[16px] bg-[#1a1a1a] text-white text-[9px] font-bold flex items-center justify-center rounded-[1px]">{l}</span>
    ))}
  </div>
);

const FOXNewsLogo = () => (
  <div className="flex flex-col items-center leading-none rounded-[2px] overflow-hidden" style={{ width: 38 }}>
    <div className="w-full bg-[#003366] flex flex-col items-center py-[2px] px-[3px] relative">
      <span className="text-[11px] font-black italic text-white tracking-[-0.03em] leading-none" style={{ fontFamily: "Arial Black, sans-serif" }}>FOX</span>
      <span className="text-[6.5px] font-bold text-white tracking-[0.06em] uppercase leading-none mt-[1px]" style={{ fontFamily: "Arial, sans-serif" }}>NEWS</span>
    </div>
    <div className="w-full bg-[#c8102e] flex items-center justify-center py-[1px]">
      <span className="text-[4.5px] text-white font-bold tracking-[0.05em] leading-none" style={{ fontFamily: "Arial, sans-serif" }}>channel</span>
    </div>
  </div>
);

const BusinessInsiderLogo = () => (
  <div className="flex flex-col leading-none">
    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#1a1a1a] leading-tight" style={{ fontFamily: "Arial, sans-serif" }}>BUSINESS</span>
    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#1a1a1a] leading-tight" style={{ fontFamily: "Arial, sans-serif" }}>INSIDER</span>
  </div>
);

const DigitalJournalLogo = () => (
  <div className="flex items-start gap-[3px]">
    <span className="inline-block w-[9px] h-[11px] bg-[#b91c1c] rounded-[1px] mt-[2px] flex-shrink-0" />
    <div className="flex flex-col leading-none" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <span className="text-[10px] font-bold text-[#1a1a1a] tracking-[-0.01em] leading-[1.1]">DIGITAL</span>
      <span className="text-[10px] font-bold text-[#1a1a1a] tracking-[-0.01em] leading-[1.1]">JOURNAL</span>
    </div>
  </div>
);

const NBCLogo = () => (
  <img src="/images/nbc-logo.svg" alt="NBC" style={{ width: 60, height: 24, objectFit: "contain" }} />
);

const ArrowUpRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const APOverlay = () => (
  <div className="flex items-center justify-center w-full h-full" style={{ position: "relative" }}>
    <img src="/images/ap-logo.svg" alt="Associated Press" className={styles.apLogoBlack} style={{ width: 550, height: 155, objectFit: "contain" }} />
    <img src="/images/ap-logo-white.svg" alt="Associated Press" className={styles.apLogoWhite} style={{ width: 550, height: 155, objectFit: "contain", position: "absolute" }} />
  </div>
);

const BloombergOverlay = () => (
  <div className="flex items-center justify-center w-full h-full" style={{ position: "relative" }}>
    <img src="/images/bloomberg-logo-black.svg" alt="Bloomberg" className={styles.apLogoBlack} style={{ width: 140, height: 28, objectFit: "contain" }} />
    <img src="/images/bloomberg-logo-white.svg" alt="Bloomberg" className={styles.apLogoWhite} style={{ width: 140, height: 28, objectFit: "contain", position: "absolute" }} />
  </div>
);

const ForbesOverlay = () => (
  <div className="flex items-center justify-center w-full h-full" style={{ position: "relative" }}>
    <img src="/images/forbes-logo-black.svg" alt="Forbes" className={styles.apLogoBlack} style={{ width: 133, height: 51, objectFit: "contain" }} />
    <img src="/images/forbes-logo-white.svg" alt="Forbes" className={styles.apLogoWhite} style={{ width: 133, height: 51, objectFit: "contain", position: "absolute" }} />
  </div>
);

const YahooFinanceOverlay = () => (
  <div className="flex items-center justify-center w-full h-full" style={{ position: "relative" }}>
    <img src="/images/yahoo-finance-logo-black.svg" alt="Yahoo Finance" className={styles.apLogoBlack} style={{ width: 143, height: 54, objectFit: "contain" }} />
    <img src="/images/yahoo-finance-logo-white.svg" alt="Yahoo Finance" className={styles.apLogoWhite} style={{ width: 143, height: 54, objectFit: "contain", position: "absolute" }} />
  </div>
);

const MENTIONS = [
  { logo: <CBSLogo />, name: "CBS", url: "#" },
  { logo: <BBCLogo />, name: "BBC", url: "#" },
  { logo: <FOXNewsLogo />, name: "FOX News", url: "#" },
  { logo: <BusinessInsiderLogo />, name: "Business Insider", url: "#" },
  { logo: <NBCLogo />, name: "NBC", url: "#" },
  { logo: <DigitalJournalLogo />, name: "Digital Journal", url: "#" },
];

const MEDIA_IMAGES = [
  { src: "/images/media-1.webp", alt: "Media partner 1" },
  { src: "/images/media-2.png",  alt: "Media partner 2" },
  { src: "/images/media-3.png",  alt: "Media partner 3" },
  { src: "/images/media-4.svg",  alt: "Media partner 4" },
  { src: "/images/media-5.svg",  alt: "Media partner 5" },
  { src: "/images/media-6.svg",  alt: "Media partner 6" },
  { src: "/images/media-7.svg",  alt: "Media partner 7" },
  { src: "/images/media-8.webp", alt: "Media partner 8" },
  { src: "/images/media-9.png",  alt: "Media partner 9" },
  { src: "/images/media-10.png", alt: "Media partner 10" },
  { src: "/images/media-11.png", alt: "Media partner 11" },
];

function MediaCardItem({ image, overlay, url }: { image?: string; overlay: React.ReactNode; url: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.mediaCard}
      style={
        hovered && image
          ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`${styles.mediaCardOverlay} ${hovered ? styles.overlayVisible : ""}`} />
      <div className={`${styles.mediaCardContent} ${hovered ? styles.contentOnHover : styles.contentDefault}`}>
        {overlay}
      </div>
      <div className={`${styles.arrowBadge} ${hovered ? styles.arrowOnHover : styles.arrowDefault}`}>
        <ArrowUpRight />
      </div>
    </a>
  );
}

export function PlatformsMediaSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Platforms and Media Outlets"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        <h2
          className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-10"
        >
          Platforms &amp; Media Outlets
        </h2>

        <div className={styles.grid}>

          {/* Left: mention list */}
          <div className={styles.mentionsCol}>
            {MENTIONS.map((m, i) => (
              <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" className={styles.mentionRow}>
                <div className={styles.mentionLogo}>{m.logo}</div>
                <span className={styles.mentionName}>{m.name}</span>
                <span className={styles.mentionArrow}><ArrowUpRight /></span>
              </a>
            ))}
          </div>

          {/* Middle col: 2 media cards */}
          <div className={styles.cardsCol}>
            <MediaCardItem image="/images/image-1.webp" overlay={<APOverlay />} url="#" />
            <MediaCardItem image="/images/image-2.webp" overlay={<BloombergOverlay />} url="#" />
          </div>

          {/* Right col: 2 media cards */}
          <div className={styles.cardsCol}>
            <MediaCardItem image="/images/image-3.webp" overlay={<ForbesOverlay />} url="#" />
            <MediaCardItem image="/images/image-4.webp" overlay={<YahooFinanceOverlay />} url="#" />
          </div>
        </div>

        {/* ââ Media Partners carousel âââââââââââââââââââââââââââââââââââââ */}
        <div className="mt-14 lg:mt-16">
          <h3 className="text-[#1a1a1a] text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium tracking-[-0.02em] mb-6">
            Media Partners
          </h3>

          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {[...MEDIA_IMAGES, ...MEDIA_IMAGES].map((img, i) => (
                <div key={i} className={styles.marqueeItem}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.marqueeImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   PROBLEM STATEMENT SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export interface PlatformCard {
  name: string;
  hoverImage?: string;
}

export interface ProblemStatementSectionProps {
  heading?: React.ReactNode;
  bodyLeft?: string;
  bodyRight?: string;
  platforms?: PlatformCard[];
}

const ProblemArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-3.5 h-3.5 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

function PlatformCardItem({ card }: { card: PlatformCard }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl flex cursor-pointer",
        "bg-[#f5f5f5] border transition-all duration-300",
        "[aspect-ratio:4/3] md:[aspect-ratio:5/2]",
        hovered
          ? "border-transparent -translate-y-0.5 shadow-[0_8px_28px_rgba(0,0,0,0.12)]"
          : "border-[#e4e4e4]",
      ].join(" ")}
      style={
        hovered && card.hoverImage
          ? {
              backgroundImage: `url(${card.hoverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-black/50 pointer-events-none z-10 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      />
      <div
        className="relative z-20 flex items-end w-full p-[18px_20px] md:p-[26px_30px] transition-colors duration-300"
        style={{ color: hovered ? "#ffffff" : "#1a1a1a" }}
      >
        <span
          className="font-medium leading-tight tracking-tight"
          style={{ fontSize: "clamp(0.875rem, 3.8vw, 1.65rem)" }}
        >
          {card.name}
        </span>
      </div>
      <div
        className="absolute top-3.5 right-3.5 z-20 flex items-center justify-center w-[26px] h-[26px] rounded-full transition-all duration-300"
        style={{
          background: hovered ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.07)",
          color: hovered ? "#ffffff" : "#999999",
          transform: hovered ? "translate(2px,-2px)" : "none",
        }}
      >
        <ProblemArrowUpRight />
      </div>
    </div>
  );
}

const DEFAULT_PLATFORMS: PlatformCard[] = [
  { name: "Google Maps", hoverImage: "/images/image-1.webp" },
  { name: "Trust Pilot", hoverImage: "/images/image-2.webp" },
  { name: "Google AI Overview", hoverImage: "/images/image-3.webp" },
  { name: "Facebook", hoverImage: "/images/image-4.webp" },
];

export function ProblemStatementSection({
  heading,
  bodyLeft = "In 2026, 89% of patients read online reviews before booking a dentist. Reputation directly drives revenue. A practice with a poor online reputation loses patients to competitors every single day, even when the clinical care is identical. We close that gap by removing damaging reviews that drag your rating down and generating a consistent flow of new 5-star reviews that strengthen trust and push your rating up.",
  bodyRight = "We also help ensure your practice appears prominently when potential patients search on Google, ask ChatGPT, or browse AI Overviews. The result is more visibility, more clicks, more calls, and more booked appointments. Clients typically see a 30â50% increase in new patient enquiries within the first three months.",
  platforms = DEFAULT_PLATFORMS,
}: ProblemStatementSectionProps) {
  return (
    <section
      className="problem-statement bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Problem statement"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2 className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-8 lg:mb-10"
          style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)" }}
        >
          {heading ?? (
            <>
              For many UK dental practices,{" "}
              <strong className="font-bold">
                poor reviews mean losing Â£60,000 to Â£180,000+ per year
              </strong>{" "}
              in lost revenue.
            </>
          )}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12 lg:mb-16">
          <p className="text-[#444] text-[14px] sm:text-[15px] leading-[1.8] text-justify">
            {bodyLeft}
          </p>
          <p className="text-[#444] text-[14px] sm:text-[15px] leading-[1.8] text-justify">
            {bodyRight}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {platforms.map((platform, i) => (
            <PlatformCardItem key={`platform-${i}`} card={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
   REPUTATION MANAGEMENT SECTION
   ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

export interface ServiceCard {
  title: string;
  description: string;
}

export interface ReputationManagementSectionProps {
  heading?: string;
  services?: ServiceCard[];
}

const DEFAULT_SERVICES_MGMT: ServiceCard[] = [
  {
    title: "Review Dispute & Removal",
    description:
      "We legally remove harmful, fake, malicious, and policy-violating reviews from online platforms like Google Maps that are damaging your reputation, on ongoing bases.",
  },
  {
    title: "Review Generation",
    description:
      "We help your business generate a steady stream of positive reviews that builds trust, strengthens your Google rating, and drives more customers to choose you over competitors.",
  },
  {
    title: "Google 'AI Overview'",
    description:
      "We keep your business visible in AI-driven search by optimising your Google Business Profile, driving consistent clients' reviews, and structuring your online presence so Google surfaces you, not your competitors.",
  },
  {
    title: "Search Result Management",
    description:
      "We suppress damaging search results and replace them with authoritative, trust-building content that presents your business properly on page one.",
  },
  {
    title: "Digital PR & Authority",
    description:
      "We help businesses build brand authority through strategic features and articles across major, niche, and local media outlets, strengthening visibility in Google AI Overviews and recommendations in ChatGPT.",
  },
  {
    title: "Reputation Protection",
    description:
      "Real-time alerts whenever your practice is mentioned online. New review? We notify you. Negative article? We flag it. So you're never caught off guard again.",
  },
];

export function ReputationManagementSection({
  heading = "Reputation Management for Dental Clinics",
  services = DEFAULT_SERVICES_MGMT,
}: ReputationManagementSectionProps) {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reputation management services"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2
          className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-12"
        >
          {heading}
        </h2>

        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <div key={`service-${i}`} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
