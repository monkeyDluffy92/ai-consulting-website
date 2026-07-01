"use client";

import { useRef } from 'react';
import { useLenis } from 'lenis/react';
import styles from './ParallaxBackground.module.css';

export default function ParallaxBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const imgBgRef = useRef<HTMLDivElement>(null);

  useLenis(({ scroll }) => {
    if (bgRef.current) {
      // Parallax effect: translate down by half the scroll distance
      // Since it naturally scrolls up, adding a positive Y translation makes it move slower
      bgRef.current.style.transform = `translate3d(0, ${scroll * 0.4}px, 0)`;
    }
    if (imgBgRef.current) {
      // Image scrolls at a different speed for deep multi-layered parallax
      imgBgRef.current.style.transform = `translate3d(0, ${scroll * 0.15}px, 0)`;
    }
  });

  return (
    <div className={styles.parallaxWrapper}>
      <div ref={imgBgRef} className={styles.imageBackground}></div>
      <div ref={bgRef} className={styles.parallaxContent}>
        <div className={styles.textRow}>
          <span>xElement • AI NATIVE</span>
        </div>
        <div className={`${styles.textRow} ${styles.outline}`}>
          <span>TECHNOLOGY • GROWTH</span>
        </div>
        <div className={styles.textRow}>
          <span>CLOUD • I/O • DATA</span>
        </div>
        <div className={`${styles.textRow} ${styles.outline}`}>
          <span>CONSULTING • SCALE</span>
        </div>
        <div className={styles.textRow}>
          <span>xElement • AI NATIVE</span>
        </div>
        <div className={`${styles.textRow} ${styles.outline}`}>
          <span>TECHNOLOGY • GROWTH</span>
        </div>
        <div className={styles.textRow}>
          <span>CLOUD • I/O • DATA</span>
        </div>
        <div className={`${styles.textRow} ${styles.outline}`}>
          <span>CONSULTING • SCALE</span>
        </div>
      </div>
    </div>
  );
}
