"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./IndustriesSection.module.css";

const INDUSTRIES = [
  { label: "Clinics",           image: "/images/industry-1.png"  },
  { label: "Hotels",            image: "/images/industry-2.png"  },
  { label: "Salons",            image: "/images/industry-3.png"  },
  { label: "Auto Rental",       image: "/images/industry-4.png"  },
  { label: "Restaurants",       image: "/images/industry-5.png"  },
  { label: "Real Estate",       image: "/images/industry-6.png"  },
  { label: "Home Services",     image: "/images/industry-7.png"  },
  { label: "Fitness",           image: "/images/industry-8.png"  },
  { label: "Aesthetics",        image: "/images/industry-9.png"  },
  { label: "Venues",            image: "/images/industry-10.png" },
  { label: "Retail",            image: "/images/industry-11.png" },
  { label: "Entertainment",     image: "/images/industry-12.png" },
  { label: "Contractors",       image: "/images/industry-13.png" },
  { label: "Business Services", image: "/images/industry-14.png" },
  { label: "Automotive",        image: "/images/industry-15.png" },
];

export function IndustriesSection() {
  return (
    <section
      className="bg-white py-9 lg:py-14"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Industries"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header row */}
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <h2
            className="text-[#1a1a1a] leading-[1.15] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 400 }}
          >
            Industries
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors whitespace-nowrap"
          >
            Free Assessment
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {INDUSTRIES.map((item, i) => (
            <Link
              key={i}
              href="/contact"
              className={styles.card}
              aria-label={item.label}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 20vw"
                className={styles.img}
              />
              <div className={styles.overlay} />
              <span className={styles.label}>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
