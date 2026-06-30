"use client";

import { useState } from "react";
import styles from "./InteractiveServiceCard.module.css";

interface CardProps {
  id: string;
  icon: string;
  title: string;
  frontDescription: string;
  visualEffectType: string;
  backContent: {
    solution: string;
    productivityGain: string;
    businessImpact: string;
  };
}

export default function InteractiveServiceCard({
  icon,
  title,
  frontDescription,
  visualEffectType,
  backContent,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.cardInner}>
        {/* FRONT */}
        <div className={styles.cardFront}>
          <div className={`${styles.visualEffect} ${styles[visualEffectType]}`}>
            {visualEffectType === "llm-nodes" && (
              <div className={styles.llmNetwork}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`node-${i}`} className={styles.node} style={{
                    top: `${Math.random() * 90}%`,
                    left: `${Math.random() * 90}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}></div>
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`conn-${i}`} className={styles.connectionLine} style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 40}%`,
                    width: `${20 + Math.random() * 30}%`,
                    transform: `rotate(${Math.random() * 180}deg)`,
                    animationDelay: `${Math.random() * 2}s`
                  }}></div>
                ))}
              </div>
            )}
            {visualEffectType === "ai-gears" && (
              <div className={styles.gearContainer}>
                <div className={`${styles.gear} ${styles.gearMassive}`}>⚙️</div>
                <div className={`${styles.gear} ${styles.gearReverse} ${styles.gearLarge}`}>⚙️</div>
                <div className={`${styles.gear} ${styles.gearMedium}`}>⚙️</div>
              </div>
            )}
            {visualEffectType === "data-stream" && (
              <div className={styles.streamContainer}>
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={`stream-${i}`} className={styles.stream} style={{
                    left: `${(i / 15) * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    height: `${50 + Math.random() * 50}%`
                  }}></div>
                ))}
              </div>
            )}
             {visualEffectType === "analytics" && (
              <div className={styles.analyticsGrid}>
                 <div className={styles.sweepingLine}></div>
                 <div className={styles.glowingGrid}></div>
              </div>
            )}
            {visualEffectType === "cloud-pulse" && (
               <div className={styles.serverStack}>
                 {Array.from({ length: 8 }).map((_, i) => (
                   <div key={`blade-${i}`} className={styles.serverBlade} style={{
                     animationDelay: `${Math.random() * 2}s`
                   }}></div>
                 ))}
               </div>
            )}
             {visualEffectType === "shield" && (
               <div className={styles.shieldWrapper}>
                 <div className={styles.scannerLaser}></div>
                 <div className={styles.codeMatrix}>
                   {Array.from({ length: 30 }).map((_, i) => (
                     <span key={`code-${i}`} style={{ opacity: Math.random() }}>{Math.random() > 0.5 ? '1' : '0'}</span>
                   ))}
                 </div>
               </div>
            )}
            {visualEffectType === "app-dev" && (
               <div className={styles.appDevContainer}>
                 {Array.from({ length: 6 }).map((_, i) => (
                   <div key={`block-${i}`} className={styles.floatingCodeBlock} style={{
                     left: `${Math.random() * 80}%`,
                     animationDelay: `${Math.random() * 5}s`,
                     width: `${40 + Math.random() * 40}px`
                   }}></div>
                 ))}
               </div>
            )}
            {visualEffectType === "modernize" && (
               <div className={styles.modernizeEffect}>
                 <div className={styles.legacyGrid}></div>
                 <div className={styles.neonWave}></div>
               </div>
            )}
             {visualEffectType === "strategy" && (
               <div className={styles.radarContainer}>
                 <div className={styles.radarRing}></div>
                 <div className={styles.radarRing} style={{ animationDelay: '1s' }}></div>
                 <div className={styles.radarRing} style={{ animationDelay: '2s' }}></div>
                 <div className={styles.radarSweep}></div>
               </div>
            )}
          </div>
          
          <div className={styles.frontContent}>
            <div className={styles.serviceIcon}>{icon}</div>
            <h3 className={styles.serviceTitle}>{title}</h3>
            <p className={styles.serviceDesc}>{frontDescription}</p>
            <div className={styles.flipPrompt}>Click to reveal ROI &rarr;</div>
          </div>
        </div>

        {/* BACK */}
        <div className={styles.cardBack}>
           <h3 className={styles.backTitle}>{title}</h3>
           
           <div className={styles.backSection}>
             <h4 className={styles.backLabel}>The Solution</h4>
             <p className={styles.backText}>{backContent.solution}</p>
           </div>
           
           <div className={styles.backSection}>
             <h4 className={styles.backLabel}>Productivity Gain</h4>
             <p className={styles.backText}>{backContent.productivityGain}</p>
           </div>
           
           <div className={styles.backSection}>
             <h4 className={styles.backLabel}>Business Impact</h4>
             <p className={`${styles.backText} ${styles.highlightImpact}`}>{backContent.businessImpact}</p>
           </div>
           
           <div className={styles.flipPrompt}>&larr; Flip back</div>
        </div>
      </div>
    </div>
  );
}
