"use client";
import React, { useEffect, useState } from "react";
import styles from "./IntroScreen.module.css";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(false);
  const [stage, setStage] = useState<"holding" | "shrinking" | "fading">("holding");

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("introPlayed");
    if (!hasPlayed) {
      setShowIntro(true);
      document.body.style.overflow = 'hidden';
      
      const shrinkTimer = setTimeout(() => {
        setStage("shrinking");
      }, 500); // Wait 0.5s before shrinking

      const fadeTimer = setTimeout(() => {
        setStage("fading");
      }, 1500); // Fade out background when it reaches the spot (1s transition)

      const removeTimer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("introPlayed", "true");
        document.body.style.overflow = '';
      }, 2000); // Complete sequence in 2 seconds

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
        document.body.style.overflow = '';
      };
    }
  }, []);

  if (!showIntro) return null;

  return (
    <div className={`${styles.introOverlay} ${stage === "fading" ? styles.fadeOut : ""}`}>
      <div className={`${styles.introLogoContainer} ${stage === "shrinking" ? styles.shrink : ""}`}>
        <span className={styles.introX}>x</span>
        <span className={styles.introE}>e</span>
      </div>
    </div>
  );
}
