"use client";
import React, { useEffect, useState } from "react";
import styles from "./IntroScreen.module.css";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(false);
  const [stage, setStage] = useState<"holding" | "shrinking" | "fading">("holding");

  useEffect(() => {
    // Check if the intro has already played in this session
    const hasPlayed = sessionStorage.getItem("introPlayed");
    if (!hasPlayed) {
      setShowIntro(true);
      
      // Prevent body scrolling while intro is playing
      document.body.style.overflow = 'hidden';
      
      // Stage 1: Hold the giant 'xe' for 1.8 seconds
      const shrinkTimer = setTimeout(() => {
        setStage("shrinking");
      }, 1800);

      // Stage 2: After shrink animation completes (1.2s), fade out overlay
      const fadeTimer = setTimeout(() => {
        setStage("fading");
      }, 3000);

      // Stage 3: Remove from DOM, restore scrolling
      const removeTimer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("introPlayed", "true");
        document.body.style.overflow = '';
      }, 3500);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
        document.body.style.overflow = '';
      };
    }
  }, []);

  if (!showIntro) return null;

  const contentRow1 = "TECHNOLOGY • BUSINESS GROWTH • I/O • ARTIFICIAL INTELLIGENCE • MACHINE LEARNING • DATA • SCALE • ".repeat(4);
  const contentRow2 = "CLOUD INFRASTRUCTURE • DISTRIBUTED SYSTEMS • BIG DATA • AUTOMATION • PREDICTIVE ANALYTICS • ".repeat(4);

  return (
    <div className={`${styles.introOverlay} ${stage === "fading" ? styles.fadeOut : ""}`}>
      
      {/* Layer 1: The scrolling text background */}
      <div className={styles.scrollingLayer}>
        <div className={styles.scrollingTrack}>
          <div className={styles.marqueeRow}>{contentRow1}</div>
          <div className={styles.marqueeRowReverse}>{contentRow2}</div>
          <div className={styles.marqueeRow}>{contentRow1}</div>
          <div className={styles.marqueeRowReverse}>{contentRow2}</div>
          <div className={styles.marqueeRow}>{contentRow1}</div>
          <div className={styles.marqueeRowReverse}>{contentRow2}</div>
          <div className={styles.marqueeRow}>{contentRow1}</div>
          <div className={styles.marqueeRowReverse}>{contentRow2}</div>
          <div className={styles.marqueeRow}>{contentRow1}</div>
          <div className={styles.marqueeRowReverse}>{contentRow2}</div>
        </div>
      </div>
      
      {/* Layer 2: The Mask Cutout */}
      <div className={`${styles.cutoutLayer}`}>
        <div className={`${styles.cutoutText} ${stage === "shrinking" ? styles.shrink : ""}`}>xe</div>
      </div>

    </div>
  );
}
