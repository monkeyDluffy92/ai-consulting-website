import styles from "./page.module.css";
import InteractiveServiceCard from "@/components/InteractiveServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { caseStudies } from "@/data/caseStudies";

const servicesData = [
  {
    id: "01",
    icon: "✦",
    title: "Custom LLM Integration",
    frontDescription: "Seamlessly integrate state-of-the-art language models into your existing applications to unlock new capabilities and intelligent insights.",
    visualEffectType: "llm-nodes",
    backContent: {
      solution: "We fine-tune and embed secure, private LLMs directly into your proprietary data pipelines.",
      productivityGain: "Automates up to 80% of manual text processing, reporting, and customer inquiries.",
      businessImpact: "Dramatically scales operational output without increasing headcount, driving 3x ROI in year one."
    }
  },
  {
    id: "02",
    icon: "🤖",
    title: "Autonomous AI Agents & I/O Automation",
    frontDescription: "Deploy intelligent, task-oriented AI agents that seamlessly interface with your enterprise inputs and outputs (I/O) to execute complex workflows and independently get the job done.",
    visualEffectType: "ai-gears",
    backContent: {
      solution: "Multi-agent systems orchestrated to handle your complex, multi-step business logic autonomously.",
      productivityGain: "Transforms days of manual data entry and cross-system routing into seconds of execution.",
      businessImpact: "Reduces error rates to near-zero while cutting operational overhead by over 40%."
    }
  },
  {
    id: "03",
    icon: "📊",
    title: "AI Data Strategy & ML",
    frontDescription: "Organize, clean, and leverage your proprietary data to train custom predictive AI models that give you a definitive competitive edge.",
    visualEffectType: "data-stream",
    backContent: {
      solution: "We structure your messy data lakes into clean, ML-ready pipelines feeding custom algorithms.",
      productivityGain: "Eliminates hundreds of hours spent manually wrangling spreadsheets and legacy databases.",
      businessImpact: "Unlocks predictive market insights, allowing you to anticipate trends and outmaneuver competitors."
    }
  },
  {
    id: "04",
    icon: "📈",
    title: "Predictive Business Intelligence",
    frontDescription: "Transform raw data into predictive foresight using AI-driven analytics and intuitive dashboards for smarter, algorithmic decisions.",
    visualEffectType: "analytics",
    backContent: {
      solution: "Real-time AI dashboards that forecast sales, churn, and supply chain demands with high accuracy.",
      productivityGain: "Replaces slow, retrospective human analysis with instant, forward-looking algorithmic forecasting.",
      businessImpact: "Empowers executive teams to make data-backed, high-stakes decisions instantly, minimizing risk."
    }
  },
  {
    id: "05",
    icon: "⚡",
    title: "AI-Optimized Cloud & CI/CD",
    frontDescription: "Streamline deployments with AI-assisted DevOps pipelines and scalable cloud infrastructure designed for heavy machine learning workloads.",
    visualEffectType: "cloud-pulse",
    backContent: {
      solution: "Cloud architectures specifically tuned for low-latency inference and high-throughput AI training.",
      productivityGain: "Accelerates time-to-market for new features by automating testing and deployment pipelines.",
      businessImpact: "Cuts unnecessary cloud spend by auto-scaling compute only when AI workloads demand it."
    }
  },
  {
    id: "06",
    icon: "🛡️",
    title: "Tech & Security Auditing",
    frontDescription: "Comprehensive code and architecture audits using advanced AI analysis tools to identify vulnerabilities and ensure peak operational efficiency.",
    visualEffectType: "shield",
    backContent: {
      solution: "AI-powered static and dynamic code analysis that detects vulnerabilities human auditors miss.",
      productivityGain: "Condenses a 4-week manual security audit into an exhaustive 48-hour automated diagnostic.",
      businessImpact: "Prevents catastrophic data breaches and ensures absolute compliance with modern data regulations."
    }
  },
  {
    id: "07",
    icon: "💻",
    title: "AI-First Web & Mobile App Development",
    frontDescription: "Architect and build high-performance web applications and native mobile apps, seamlessly integrated with advanced AI capabilities to deliver unparalleled user experiences.",
    visualEffectType: "app-dev",
    backContent: {
      solution: "Cross-platform applications engineered from day one with AI features at their core.",
      productivityGain: "Rapid prototyping and modular component architecture speeds up the entire development lifecycle.",
      businessImpact: "Delivers a premium, hyper-personalized product that significantly boosts user retention and LTV."
    }
  },
  {
    id: "08",
    icon: "🔄",
    title: "Legacy System AI Modernization",
    frontDescription: "Seamlessly upgrade outdated architectures and inject modern AI capabilities without disrupting your daily enterprise operations.",
    visualEffectType: "modernize",
    backContent: {
      solution: "Strangler-fig refactoring to wrap legacy monolithic code with modern, AI-enabled microservices.",
      productivityGain: "Frees your engineering team from maintaining tech debt, allowing them to focus on innovation.",
      businessImpact: "Future-proofs your core enterprise infrastructure while maximizing the lifespan of previous investments."
    }
  },
  {
    id: "09",
    icon: "🎯",
    title: "Digital Transformation Strategy",
    frontDescription: "End-to-end consulting to align your technology investments with an AI-first future, ensuring maximum ROI and market dominance.",
    visualEffectType: "strategy",
    backContent: {
      solution: "A bespoke, multi-year roadmap detailing exactly where and how to deploy AI across your org.",
      productivityGain: "Aligns all departments under a unified tech strategy, eliminating siloed, redundant efforts.",
      businessImpact: "Transforms your company from a traditional operator into a tech-first industry leader."
    }
  }
];

export default function Home() {
  return (
    <>
      <main className={styles.main}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <ScrollReveal width="fit-content" yOffset={30}>
          <h1 className={styles.heroTitle}>
            The missing <span className={styles.xGlow}>x</span> element in your tech.
          </h1>
        </ScrollReveal>
        <ScrollReveal width="fit-content" delay={0.2} yOffset={30}>
          <p className={styles.heroSubtitle}>
            We are an AI-native consultancy that architects the entirety of your technological ecosystem. From injecting machine learning into legacy systems to building autonomous workflows and bespoke AI software—we are the definitive, end-to-end partner you've been looking for.
          </p>
        </ScrollReveal>
        <ScrollReveal width="fit-content" delay={0.4} yOffset={30}>
        <a href="#contact" className={styles.ctaButton}>
          Book a Discovery Call
        </a>
        </ScrollReveal>
      </section>

      {/* Tech Stack Marquee */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <div className={styles.marqueeItem}>OpenAI</div>
          <div className={styles.marqueeItem}>Anthropic</div>
          <div className={styles.marqueeItem}>LangChain</div>
          <div className={styles.marqueeItem}>Vercel</div>
          <div className={styles.marqueeItem}>Next.js</div>
          <div className={styles.marqueeItem}>Python</div>
          <div className={styles.marqueeItem}>AWS</div>
          <div className={styles.marqueeItem}>Google Cloud</div>
          {/* Duplicated for infinite scroll effect */}
          <div className={styles.marqueeItem}>OpenAI</div>
          <div className={styles.marqueeItem}>Anthropic</div>
          <div className={styles.marqueeItem}>LangChain</div>
          <div className={styles.marqueeItem}>Vercel</div>
          <div className={styles.marqueeItem}>Next.js</div>
          <div className={styles.marqueeItem}>Python</div>
          <div className={styles.marqueeItem}>AWS</div>
          <div className={styles.marqueeItem}>Google Cloud</div>
        </div>
      </div>

      {/* Services Section */}
      <section className={styles.section} id="services">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Our Capabilities</h2>
        </ScrollReveal>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
            <InteractiveServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              frontDescription={service.frontDescription}
              visualEffectType={service.visualEffectType}
              backContent={service.backContent}
            />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.section} id="case-studies">
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Proven Impact</h2>
        </ScrollReveal>
        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={0.1 + index * 0.1}>
              <div className={styles.caseCard}>
                <div className={styles.caseCompany}>{study.company}</div>
                <h3 className={styles.caseTitle}>{study.title}</h3>
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
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact} id="contact">
        <ScrollReveal width="fit-content">
          <h2 className={styles.sectionTitle}>Ready to Automate the Future?</h2>
        </ScrollReveal>
        <ScrollReveal width="fit-content" delay={0.1}>
          <p className={styles.contactSubtitle}>
            Let's discuss how AI can transform your enterprise operations.
          </p>
        </ScrollReveal>
        <ScrollReveal width="fit-content" delay={0.2}>
          <a href="mailto:hello@example.com" className={styles.ctaButton}>
          Get in Touch
        </a>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        © {new Date().getFullYear()} xelement. All rights reserved. Inspired by modern web design.
      </footer>
    </main>
    </>
  );
}
