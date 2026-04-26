"use client";

import React from "react";
import styles from "./PlatformsMediaSection.module.css";

/* ——— SVG Logos ———————————————————————————————————————————————————————— */

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

/* ——— Card overlay content (same as AwardsStrip homepage) ————————————— */

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

/* ——— Data ————————————————————————————————————————————————————————————— */

const MENTIONS = [
  { logo: <CBSLogo />, name: "CBS", url: "#" },
  { logo: <BBCLogo />, name: "BBC", url: "#" },
  { logo: <FOXNewsLogo />, name: "FOX News", url: "#" },
  { logo: <BusinessInsiderLogo />, name: "Business Insider", url: "#" },
  { logo: <NBCLogo />, name: "NBC", url: "#" },
  { logo: <DigitalJournalLogo />, name: "Digital Journal", url: "#" },
];

// Correct extensions per actual files in /public/images/
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

/* ——— Media card — white bg + dark overlay by default, image + white overlay on hover ——— */

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

/* ——— Component ———————————————————————————————————————————————————————— */

export function PlatformsMediaSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Platforms and Media Outlets"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* —— Heading ————————————————————————————————————————————————————— */}
        <h2
          className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-10"
        >
          Platforms &amp; Media Outlets
        </h2>

        {/* —— 3-column grid (mentions + 2 card cols) ————————————————————— */}
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

        {/* —— Media Partners carousel ———————————————————————————————————— */}
        <div className="mt-14 lg:mt-16">
          <h3 className="text-[#1a1a1a] text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium tracking-[-0.02em] mb-6">
            Media Partners
          </h3>

          {/* Outer mask for fade edges */}
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {/* Duplicate for seamless loop */}
              {[...MEDIA_IMAGES, ...MEDIA_IMAGES].map((img, i) => (
                <div key={i} className={styles.marqueeItem}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
