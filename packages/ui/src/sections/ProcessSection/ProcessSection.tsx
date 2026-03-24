"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProcessSection.module.css";

export interface ProcessStep {
  stepLabel: string;
  title: string;
  description?: string;
  image?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

export interface ProcessSectionProps {
  heading?: string;
  steps?: ProcessStep[];
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    stepLabel: "Step 1",
    title: "Identify the\nOnline Concern",
    description:
      "We review the reported content and assess how it may affect your business reputation and customer perception. Our team evaluates the context of the review or material and determines whether it may violate platform policies or community guidelines.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    stepLabel: "Step 2",
    title: "Create a\nCustom Solution",
    description:
      "Based on the initial assessment, we develop a structured approach tailored to the specific situation. This includes identifying the most appropriate reporting channels, documentation requirements, and dispute options available through the relevant platforms.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    stepLabel: "Step 3",
    title: "Implement the\nReputation Program",
    description:
      "Our team prepares the necessary reports and supporting documentation required for the submission process. We then assist with filing the case through the appropriate platform channels and monitor the progress while keeping you informed.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export function ProcessSection({
  heading = "Our Process",
  steps = DEFAULT_STEPS,
}: ProcessSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollable = el.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(0.9999, scrolled / scrollable));
      const idx = Math.floor(progress * steps.length);
      setActiveStep(Math.min(idx, steps.length - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className={styles.sticky}>
        <div className={styles.inner}>
          {/* Heading */}
          <h2 className={styles.heading}>{heading}</h2>

          {/* Cards grid */}
          <div className={styles.grid}>
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <div
                  key={i}
                  className={`${styles.card} ${isActive ? styles.cardActive : styles.cardDim}`}
                >
                  {/* Image */}
                  <div className={styles.imageWrap}>
                    {step.image && (
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className={`object-cover transition-all duration-700 ${isActive ? "" : "grayscale"}`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={styles.content}>
                    <h3 className={styles.title}>
                      {step.title.split("\n").map((line, j) => (
                        <span key={j} className="block">{line}</span>
                      ))}
                    </h3>
                    {step.description && (
                      <p className={styles.description}>{step.description}</p>
                    )}
                    <div
                      className={`${styles.stepPill} ${isActive ? styles.stepPillActive : styles.stepPillDim}`}
                    >
                      {step.stepLabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
