"use client";
import React, { useEffect, useRef } from 'react';
import styles from './GridBackground.module.css';

export default function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        // Set CSS variables for the mouse position relative to the viewport
        containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.baseGrid}></div>
      <div className={styles.interactiveGrid}></div>
    </div>
  );
}
