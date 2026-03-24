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
    title: 'Assess Your\nDigital Presence',
    description:
      'We conduct a thorough audit of your online reputation across search engines, review platforms, social media, and news sources. Our team identifies both risks and opportunities in your current digital footprint.',
    image: '/images/history-001.webp',
  },
  {
    title: 'Develop Your\nCustom Strategy',
    description:
      'Based on the audit findings, we create a tailored reputation management plan. This includes prioritised actions, content strategy, platform-specific approaches, and clear milestones for measuring progress.',
    image: '/images/history-002.webp',
  },
  {
    title: 'Execute &\nMonitor Results',
    description:
      'Our team implements the strategy across all relevant channels while providing regular updates and reporting. We continuously monitor your digital presence and adapt the approach as your reputation strengthens.',
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
