import styles from "./page.module.css";

const services = [
  {
    id: "01",
    title: "Custom LLM Integration",
    description: "Seamlessly integrate state-of-the-art language models into your existing applications to unlock new capabilities and intelligent insights.",
    tech: ["OpenAI GPT-4", "Anthropic Claude 3", "Meta LLaMA", "Mistral", "LangChain / LlamaIndex", "Pinecone", "Milvus", "Qdrant", "Hugging Face"]
  },
  {
    id: "02",
    title: "Autonomous AI Agents & I/O Automation",
    description: "Deploy intelligent, task-oriented AI agents that seamlessly interface with your enterprise inputs and outputs (I/O) to execute complex workflows and independently get the job done.",
    tech: ["AutoGPT / BabyAGI", "RPA (UiPath, Blue Prism)", "Advanced API Integrations", "IoT Sensor Data Streams", "Hardware I/O Telemetry", "Custom Python Micro-agents"]
  },
  {
    id: "03",
    title: "AI Data Strategy & ML",
    description: "Organize, clean, and leverage your proprietary data to train custom predictive AI models that give you a definitive competitive edge.",
    tech: ["PyTorch / TensorFlow", "Apache Spark", "Databricks", "Snowflake", "dbt", "Airflow", "Kafka Streaming", "XGBoost"]
  },
  {
    id: "04",
    title: "Predictive Business Intelligence",
    description: "Transform raw data into predictive foresight using AI-driven analytics and intuitive dashboards for smarter, algorithmic decisions.",
    tech: ["Tableau / PowerBI", "Looker", "Meta Prophet", "ARIMA / LSTM Models", "Palantir Foundry", "Snowflake Cortex", "BigQuery ML"]
  },
  {
    id: "05",
    title: "AI-Optimized Cloud & CI/CD",
    description: "Streamline deployments with AI-assisted DevOps pipelines and scalable cloud infrastructure designed for heavy machine learning workloads.",
    tech: ["AWS SageMaker", "GCP Vertex AI", "Azure ML", "Kubernetes (K8s)", "Docker", "Terraform / IaC", "GitHub Actions", "ArgoCD"]
  },
  {
    id: "06",
    title: "Tech & Security Auditing",
    description: "Comprehensive code and architecture audits using advanced AI analysis tools to identify vulnerabilities and ensure peak operational efficiency.",
    tech: ["SonarQube", "Snyk / Checkmarx", "OWASP ZAP", "AI Penetration Testing", "SAST / DAST", "Cloud Security Posture Management"]
  },
  {
    id: "07",
    title: "AI-First Web & Mobile App Development",
    description: "Architect and build high-performance web applications and native mobile apps, seamlessly integrated with advanced AI capabilities to deliver unparalleled user experiences.",
    tech: ["Next.js (Web)", "React Native (Mobile)", "Flutter", "Swift / iOS", "Kotlin / Android", "Node.js", "GraphQL"]
  },
  {
    id: "08",
    title: "Legacy System AI Modernization",
    description: "Seamlessly upgrade outdated architectures and inject modern AI capabilities without disrupting your daily enterprise operations.",
    tech: ["Event-Driven Microservices", "Docker Containerization", "Mainframe API Integration", "Serverless (AWS Lambda)", "gRPC", "Strangler Fig Pattern"]
  },
  {
    id: "09",
    title: "Digital Transformation Strategy",
    description: "End-to-end consulting to align your technology investments with an AI-first future, ensuring maximum ROI and market dominance.",
    tech: ["Enterprise Architecture (TOGAF)", "AI Readiness Assessments", "C-Suite Roadmapping", "Change Management", "ROI Forecasting", "Agile Methodology"]
  }
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Our Capabilities</h1>
        <p className={styles.subtitle}>
          We don't just consult. We architect, build, and deploy the AI systems that define the next generation of enterprise technology.
        </p>
      </header>
      
      <div className={styles.servicesList}>
        {services.map((service) => (
          <section key={service.id} className={styles.serviceSection}>
            <div className={styles.stickyIndex}>
              <span className={styles.indexNumber}>{service.id}</span>
            </div>
            <div className={styles.serviceContent}>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.description}</p>
              
              <div className={styles.techStack}>
                <h4 className={styles.techTitle}>Key Technologies</h4>
                <div className={styles.techTags}>
                  {service.tech.map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
