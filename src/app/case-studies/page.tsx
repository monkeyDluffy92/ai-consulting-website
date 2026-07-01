import React from "react";
import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "Case Studies | xElement",
  description: "Explore our proven impact through enterprise AI case studies.",
};



export default function CaseStudiesPage() {
  return (
    <main className={styles.pageContainer}>
      
      <header className={styles.header}>
        <ScrollReveal yOffset={30}>
          <h1 className={styles.title}>Proven Impact</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2} yOffset={30}>
          <p className={styles.subtitle}>
            Discover how we build high-performance web platforms, intelligent mobile apps, and autonomous agent systems that drive massive ROI for our enterprise clients.
          </p>
        </ScrollReveal>
      </header>

      <section className={styles.grid}>
        {caseStudies.map((study, index) => (
          <ScrollReveal key={study.id} delay={index * 0.1}>
            <div className={styles.caseCard}>
              <div className={styles.caseCompany}>{study.company}</div>
              <h3 className={styles.caseTitle}>{study.title}</h3>
              
              <div className={styles.techStack}>
                {study.tech.map((t, idx) => (
                  <span key={idx} className={styles.techBadge}>{t}</span>
                ))}
              </div>

              <p className={styles.caseDesc}>{study.description}</p>
              
              <div className={styles.caseMetrics}>
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className={styles.metric}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} xElement. All rights reserved. Automating the future of business.</p>
      </footer>
    </main>
  );
}
