import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "About | xElement",
  description: "Learn about xElement, our mission, and our AI-first engineering philosophy.",
};

export default function AboutPage() {
  return (
    <main className={styles.pageContainer}>
      
      <header className={styles.header}>
        <h1 className={styles.title}>The AI-First Engineering Firm</h1>
        <p className={styles.subtitle}>
          We don't just write code; we engineer autonomous systems. At xElement, we are redefining what's possible for the modern enterprise.
        </p>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <h2>Our Philosophy</h2>
            <p>
              In a world where technology moves at breakneck speed, traditional software development is no longer enough. Businesses need systems that can think, adapt, and operate autonomously.
            </p>
            <p>
              That is why xElement takes an <strong>AI-First</strong> approach to every project. Whether we are building a consumer-facing web application, a cross-platform mobile app, or a complex backend architecture, we integrate intelligence at the foundation.
            </p>
            <p>
              We believe in creating software that doesn't just serve users, but anticipates their needs and optimizes your business operations in real-time. We are a collective of rogue engineers, AI researchers, and product visionaries committed to pushing the boundaries of what is possible.
            </p>
          </div>
          <div className={styles.visualContent}>
            {/* An abstract CSS representation of a futuristic AI core */}
            <div className={styles.core}></div>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>AI Integration Rate</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>10x</div>
            <div className={styles.statLabel}>Average ROI Delivered</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>Autonomous Operations</div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} xElement. All rights reserved.</p>
      </footer>
    </main>
  );
}
