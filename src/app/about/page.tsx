import React from "react";
import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About | xElement",
  description: "Learn about xElement, our mission, and our AI-first engineering philosophy.",
};

export default function AboutPage() {
  return (
    <main className={styles.pageContainer}>
      
      <header className={styles.header}>
        <ScrollReveal yOffset={30}>
          <h1 className={styles.title}>The AI-First Engineering Firm</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2} yOffset={30}>
          <p className={styles.subtitle}>
            We don't just write code; we engineer autonomous systems. At xElement, we are redefining what's possible for the modern enterprise.
          </p>
        </ScrollReveal>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <ScrollReveal>
              <h2>Our Philosophy</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>
                In a world where technology moves at breakneck speed, traditional software development is no longer enough. Businesses need systems that can think, adapt, and operate autonomously.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                That is why xElement takes an <strong>AI-First</strong> approach to every project. Whether we are building a consumer-facing web application, a cross-platform mobile app, or a complex backend architecture, we integrate intelligence at the foundation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                We believe in creating software that doesn't just serve users, but anticipates their needs and optimizes your business operations in real-time. We are a collective of rogue engineers, AI researchers, and product visionaries committed to pushing the boundaries of what is possible.
              </p>
            </ScrollReveal>
          </div>
          <div className={styles.visualContent}>
            <ScrollReveal delay={0.2}>
              {/* An abstract CSS representation of a futuristic AI core */}
              <div className={styles.core}></div>
            </ScrollReveal>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <ScrollReveal delay={0.4}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>AI Integration Rate</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>10x</div>
              <div className={styles.statLabel}>Average ROI Delivered</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>Autonomous Operations</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} xElement. All rights reserved.</p>
      </footer>
    </main>
  );
}
