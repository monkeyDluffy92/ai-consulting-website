import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Case Studies | xElement",
  description: "Explore our proven impact through enterprise AI case studies.",
};

const caseStudies = [
  {
    id: "luma",
    company: "Luma",
    title: "Generative AI Content Engine",
    description: "We integrated a custom fine-tuned LLM pipeline into Luma's core product, allowing them to automate high-quality asset generation. The AI natively hooks into their creative workflow, learning brand voice and stylistic preferences over time to ensure perfect brand alignment across massive content volumes.",
    tech: ["Next.js", "GPT-4 Custom Model", "Vector DB", "Redis"],
    metrics: [
      { value: "10x", label: "Asset Velocity" },
      { value: "-60%", label: "Cost per Asset" }
    ]
  },
  {
    id: "smartsync",
    company: "SmartSync",
    title: "Autonomous Supply Chain Agents",
    description: "Deployed a multi-agent system to autonomously monitor global I/O telemetry data. SmartSync's agents now instantly reroute shipments, predict hardware failures, and re-order inventory without human intervention when they detect disruptions, fundamentally shifting them to a proactive supply chain model.",
    tech: ["Agentic Framework", "IoT Telemetry", "Node.js", "Kafka"],
    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "$4M+", label: "Saved Annually" }
    ]
  },
  {
    id: "nexus",
    company: "Nexus Financial",
    title: "Predictive Market Intelligence",
    description: "Overhauled Nexus's legacy data lakes into a clean, ML-ready pipeline. We built real-time, predictive business intelligence dashboards that forecast market volatility and automatically suggest portfolio rebalancing strategies, drastically reducing their risk exposure during sudden market downturns.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    metrics: [
      { value: "3.2x", label: "Faster Reporting" },
      { value: "+14%", label: "Portfolio Yield" }
    ]
  },
  {
    id: "vanguard",
    company: "Vanguard Health",
    title: "Secure Legacy Modernization",
    description: "Wrapped Vanguard's decades-old monolithic healthcare records system with AI-enabled microservices. We mapped their entire legacy I/O schema and ran extensive AI security audits to ensure HIPAA compliance, enabling a seamless transition to the cloud with absolute zero downtime.",
    tech: ["AWS", "Kubernetes", "GraphQL", "AI Security Scanner"],
    metrics: [
      { value: "0", label: "Downtime" },
      { value: "100%", label: "HIPAA Compliant" }
    ]
  },
  {
    id: "aura",
    company: "Aura Web Platforms",
    title: "High-Performance AI E-Commerce Website",
    description: "Re-architected Aura's entire consumer-facing website into a lightning-fast React application. We integrated an AI recommendation engine directly into the frontend state, allowing the website to dynamically shift its layout, featured products, and styling in real-time based on the user's browsing behavior.",
    tech: ["React", "Next.js", "TailwindCSS", "Edge AI"],
    metrics: [
      { value: "+45%", label: "Conversion Rate" },
      { value: "0.8s", label: "Page Load Time" }
    ]
  },
  {
    id: "zenith",
    company: "Zenith Mobile",
    title: "Cross-Platform AI Fitness App",
    description: "Designed and developed a complete cross-platform mobile app for Zenith. The app utilizes on-device computer vision models to track user form during workouts, providing real-time voice feedback. We handled the entire lifecycle from UI/UX design to native performance optimization and backend syncing.",
    tech: ["React Native", "CoreML", "Firebase", "WebSockets"],
    metrics: [
      { value: "4.9★", label: "App Store Rating" },
      { value: "3x", label: "User Retention" }
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <main className={styles.pageContainer}>
      <Navbar />
      
      <header className={styles.header}>
        <h1 className={styles.title}>Proven Impact</h1>
        <p className={styles.subtitle}>
          Discover how we build high-performance web platforms, intelligent mobile apps, and autonomous agent systems that drive massive ROI for our enterprise clients.
        </p>
      </header>

      <section className={styles.grid}>
        {caseStudies.map((study) => (
          <div key={study.id} className={styles.caseCard}>
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
        ))}
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} xElement. All rights reserved.</p>
      </footer>
    </main>
  );
}
