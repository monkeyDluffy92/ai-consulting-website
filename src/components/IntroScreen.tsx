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
      }, 2000);

      const fadeTimer = setTimeout(() => {
        setStage("fading");
      }, 3200);

      const removeTimer = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem("introPlayed", "true");
        document.body.style.overflow = '';
      }, 3700);

      return () => {
        clearTimeout(shrinkTimer);
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
        document.body.style.overflow = '';
      };
    }
  }, []);

  if (!showIntro) return null;

  // Generate seamless looping SVGs for the background text
  const generateSVG = (color: string) => {
    const text = "TECHNOLOGY • BUSINESS GROWTH • I/O • ";
    const rows = Array.from({length: 20}).map((_, i) => {
      const x = (i % 2) * -10; // Slight stagger
      return `<text x="${x}" y="${i * 12}" class="t">${text.repeat(4)}</text>`;
    }).join('');

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="240">
        <style>
          @keyframes scroll { 100% { transform: translateY(-120px); } }
          .t { font-family: system-ui, sans-serif; font-size: 10px; font-weight: 800; fill: ${color}; }
          .g { animation: scroll 3s linear infinite; }
        </style>
        <g class="g">
          ${rows}
        </g>
      </svg>
    `;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  };

  const cyanSvg = generateSVG("#5CD4D4");
  const blackSvg = generateSVG("#0a0a0a"); // very dark background color

  return (
    <div className={`${styles.introOverlay} ${stage === "fading" ? styles.fadeOut : ""}`}>
      <div className={`${styles.introLogoContainer} ${stage === "shrinking" ? styles.shrink : ""}`}>
        <span 
          className={styles.introX} 
          style={{ backgroundImage: cyanSvg }}
        >
          x
        </span>
        <span 
          className={styles.introE} 
          style={{ backgroundImage: blackSvg }}
        >
          e
        </span>
      </div>
    </div>
  );
}
