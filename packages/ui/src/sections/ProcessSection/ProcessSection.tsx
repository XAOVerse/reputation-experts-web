'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ProcessSection.module.css';

interface Step {
  title: string;
  description: string;
  image: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    title: 'Identify the\nOnline Concern',
    description:
      'We review the reported content and assess how it may affect your business reputation and customer perception. Our team evaluates the context of the review or material and determines whether it may violate platform policies or community guidelines.',
    image: '/images/history-001.webp',
  },
  {
    title: 'Create a\nCustom Solution',
    description:
      'Based on the initial assessment, we develop a structured approach tailored to the specific situation. This includes identifying the most appropriate reporting channels, documentation requirements, and dispute options available through the relevant platforms.',
    image: '/images/history-002.webp',
  },
  {
    title: 'Implement the\nReputation Program',
    description:
      'Our team prepares the necessary reports and supporting documentation required for the submission process. We then assist with filing the case through the appropriate platform channels and monitor the progress while keeping you informed.',
    image: '/images/history-003.webp',
  },
];

export default function ProcessSection({ steps = DEFAULT_STEPS }: { steps?: Step[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const scrolled = -rect.top;
      const stepHeight = sectionHeight / steps.length;
      const idx = Math.min(Math.max(Math.floor(scrolled / stepHeight), 0), steps.length - 1);
      setActive(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className={styles.sticky}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>Our Process</h2>

          <div className={styles.grid}>
            {steps.map((step, i) => {
              const isActive = i === active;
              const cardClass = [
                styles.card,
                isActive ? styles.cardActive : styles.cardDim,
              ].join(' ');

              return (
                <div key={i} className={cardClass}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="160px"
                    />
                  </div>

                  <div className={styles.content}>
                    <h3 className={styles.title}>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                    <span
                      className={[
                        styles.stepPill,
                        isActive ? styles.stepPillActive : styles.stepPillDim,
                      ].join(' ')}
                    >
                      Step {i + 1}
                    </span>
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
