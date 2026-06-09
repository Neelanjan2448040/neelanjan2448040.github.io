import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, ExternalLink, Cpu, Layout, Layers, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import mermaid from 'mermaid';

const Mermaid = ({ chart, id }) => {
  const [svgInfo, setSvgInfo] = useState('');
  
  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'dark', securityLevel: 'loose' });
    const renderChart = async () => {
      try {
        const safeId = id.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
        const { svg } = await mermaid.render(`mermaid-${safeId}-${Math.random().toString(36).substring(7)}`, chart);
        setSvgInfo(svg);
      } catch (e) {
        console.error('Mermaid render error:', e);
      }
    };
    if (chart) renderChart();
  }, [chart, id]);

  return <div style={{width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center'}} dangerouslySetInnerHTML={{ __html: svgInfo }} />;
};

const projectsData = {
  "Financial Econometrics Dashboard": {
    title: "Financial Econometrics Dashboard",
    emoji: "📈",
    desc: "A scalable financial analytics platform built to perform variance analysis, time-series forecasting, and automated KPI monitoring for real-time business decision-making.",
    tech: ["Python", "Streamlit", "Plotly", "Forecasting", "Pandas"],
    github: "https://github.com/Neelanjan2448040",
    mermaidGraph: `graph TD
    User([User]) --> Dash[Streamlit Dashboard]
    Dash --> Engine[Variance Analysis Engine]
    Dash --> Forecast[Time-Series Modeling]
    Engine --> DataIntake[Financial Data Intake]
    Forecast --> DataIntake
    DataIntake --> Pandas[(Pandas / Data Lake)]
    Pandas --> DataIntake
    style Dash fill:#020617,stroke:#00f2ff,stroke-width:2px,color:#fff
    style Engine fill:#020617,stroke:#aa3bff,stroke-width:2px,color:#fff
    style Forecast fill:#020617,stroke:#ff3b7c,stroke-width:2px,color:#fff`,
    details: [
      "Business Problem: Manual financial reporting and forecasting is slow and prone to errors. Stakeholders need real-time, accurate variance analysis.",
      "Techniques Used: Time-series forecasting, automated variance calculation, and descriptive financial analytics.",
      "Technologies: Built using Python, Pandas for data wrangling, and Plotly/Streamlit for high-performance visualization.",
      "Value Delivered: Automates KPI monitoring, accelerates financial reporting workflows, and enables leadership to make agile, data-driven decisions."
    ]
  },
  "PaperScout+": {
    title: "PaperScout+",
    emoji: "📄",
    desc: "An enterprise-grade AI recommendation engine aggregating academic databases. Solves the problem of information overload with advanced NLP, improving research efficiency significantly.",
    tech: ["Python", "Streamlit", "NLP", "Semantic Search"],
    github: "https://github.com/Neelanjan2448040/PaperScout-Topic-Aware-Academic-Paper-Recommender",
    demo: "https://paperscout-topic-aware-academic-paper-recommender.streamlit.app/",
    mermaidGraph: `graph TD
    Researcher([Researcher]) --> Frontend[Streamlit Frontend]
    Frontend --> NLP[NLP Pipeline & Semantic Embedding]
    NLP --> API[Multi-Source API Integration]
    API --> PubMed(PubMed)
    API --> arXiv(arXiv)
    API --> CrossRef(CrossRef)
    NLP --> VectorDB[(FAISS Vector Search)]
    VectorDB --> NLP
    style Frontend fill:#020617,stroke:#00f2ff,stroke-width:2px,color:#fff
    style NLP fill:#020617,stroke:#aa3bff,stroke-width:2px,color:#fff
    style VectorDB fill:#020617,stroke:#ff3b7c,stroke-width:2px,color:#fff`,
    details: [
      "Business Problem: Researchers face massive information overload and struggle to find highly relevant literature efficiently.",
      "Techniques Used: Topic-aware semantic similarity mapping, natural language processing, and high-dimensional vector search.",
      "Technologies: Python, FAISS for vector storage, Streamlit, and integration with scholarly APIs (PubMed, arXiv).",
      "Value Delivered: Reduces literature review time drastically by surfacing highly relevant, context-aware academic papers automatically."
    ]
  },
  "NutriSage": {
    title: "NutriSage",
    emoji: "🥗",
    desc: "A multimodal computer vision and RAG-powered nutrition assistant providing real-time dietary insights. Drives user value by delivering accurate, personalized macro-nutrient analysis.",
    tech: ["RAG", "EffNet", "Qwen 2.5", "FAISS"],
    github: "https://github.com/Aaditya235-design/NutriSage",
    mermaidGraph: `graph TD
    User([User]) --> App[Web Application]
    App --> CV[EfficientNet-B0<br/>Feature Extraction]
    CV --> RAG[RAG Nutrition Retrieval]
    RAG --> DB[(FAISS Vector DB)]
    DB --> RAG
    RAG --> LLM[Qwen 2.5 LLM<br/>Response Generation]
    LLM --> App
    style App fill:#020617,stroke:#00f2ff,stroke-width:2px,color:#fff
    style CV fill:#020617,stroke:#aa3bff,stroke-width:2px,color:#fff
    style LLM fill:#020617,stroke:#ff3b7c,stroke-width:2px,color:#fff`,
    details: [
      "Business Problem: Users lack immediate, accurate nutritional breakdowns of their meals to maintain healthy diets.",
      "Techniques Used: Multimodal feature extraction (Computer Vision) coupled with Retrieval-Augmented Generation (RAG) for factual accuracy.",
      "Technologies: EfficientNet-B0 for vision, Qwen 2.5 LLM, FAISS vector database, and Python.",
      "Value Delivered: Empowers individuals with personalized, real-time dietary advice and highly accurate macronutrient profiling."
    ]
  },
  "LakshyaAI": {
    title: "LakshyaAI",
    emoji: "🎯",
    desc: "A highly scalable AI recruitment platform automating candidate screening and role matching using vector search, reducing administrative screening time by over 50%.",
    tech: ["Python", "ML", "NLP", "FAISS"],
    github: "https://github.com/Neelanjan2448040/LakshayAI",
    mermaidGraph: `graph TD
    Candidate([Candidate]) --> Portal[Portal Frontend]
    Portal --> Parser[NLP Resume Parsing]
    Parser --> Matcher[Weighted Skill Matching]
    Matcher --> FAISS[(Job Similarity Engine FAISS)]
    FAISS --> Matcher
    Matcher --> Portal
    style Portal fill:#020617,stroke:#00f2ff,stroke-width:2px,color:#fff
    style Parser fill:#020617,stroke:#aa3bff,stroke-width:2px,color:#fff
    style FAISS fill:#020617,stroke:#ff3b7c,stroke-width:2px,color:#fff`,
    details: [
      "Business Problem: Manual candidate screening is highly subjective and inefficient, causing delays in matching talent with the right roles.",
      "Techniques Used: NLP for information extraction, weighted skill matching algorithms, and semantic similarity scoring.",
      "Technologies: Built with Python, Scikit-learn, FAISS, and natural language processing pipelines.",
      "Value Delivered: Automates recruitment workflows, objectively ranks candidates, and successfully reduces manual administrative overhead by over 50%."
    ]
  },
  "MediGuide-AI": {
    title: "MediGuide-AI",
    emoji: "🏥",
    desc: "A secure, privacy-focused medical document analyzer utilizing private LLM RAG pipelines. Empowers clinical workflows with near-instantaneous medical insights and summarization.",
    tech: ["RAG", "LangChain", "Groq", "Streamlit"],
    github: "https://github.com/Neelanjan2448040/MediGuide-AI",
    demo: "https://mediguide-ai-5c6mvgqmktcwkwvtuckwhn.streamlit.app/",
    mermaidGraph: `graph TD
    Patient([User/Patient]) --> App[Streamlit Interface]
    App --> Upload[Document Upload Handler]
    Upload --> LC[LangChain Processing & RAG]
    LC --> DB[(Private Vector DB)]
    DB --> LC
    LC --> Groq[Groq Inference Engine]
    Groq --> LC
    LC --> Insights[Structured Medical Insights]
    Insights --> App
    style App fill:#020617,stroke:#00f2ff,stroke-width:2px,color:#fff
    style LC fill:#020617,stroke:#aa3bff,stroke-width:2px,color:#fff
    style Groq fill:#020617,stroke:#ff3b7c,stroke-width:2px,color:#fff`,
    details: [
      "Business Problem: Medical professionals and patients struggle to rapidly synthesize dense, complex clinical documentation.",
      "Techniques Used: Private Retrieval-Augmented Generation (RAG) ensuring data confidentiality and targeted LLM summarization.",
      "Technologies: LangChain framework, Groq inference for ultra-low latency, and Streamlit.",
      "Value Delivered: Streamlines clinical workflows by delivering accurate, near-instantaneous translations of complex medical terminology into actionable insights."
    ]
  },
  "Campus AI": {
    title: "Campus AI",
    emoji: "🏫",
    desc: "A robust microservices-based administrative platform optimizing university operations. Streamlines real-time faculty and student data management across departments.",
    tech: ["React", "FastAPI", "MySQL", "Docker"],
    github: "https://github.com/Neelanjan2448040/campus-ai",
    mermaidGraph: `graph TD
    Admin([Administrator]) --> React[React Frontend]
    Student([Student]) --> React
    Faculty([Faculty]) --> React
    React --> API[FastAPI Backend Gateway]
    API --> Auth[Auth Microservice]
    API --> AdminService[Admin Service]
    API --> StudentService[Student Service]
    Auth --> MySQL[(MySQL Database)]
    AdminService --> MySQL
    StudentService --> MySQL
    style React fill:#020617,stroke:#00f2ff,stroke-width:2px,color:#fff
    style API fill:#020617,stroke:#aa3bff,stroke-width:2px,color:#fff
    style MySQL fill:#020617,stroke:#ff3b7c,stroke-width:2px,color:#fff`,
    details: [
      "Business Problem: Fragmented, legacy university systems create data silos and inefficient administrative operations.",
      "Techniques Used: Distributed microservices architecture, RESTful API design, and container orchestration.",
      "Technologies: React for a dynamic frontend, FastAPI for high-performance routing, MySQL, and Docker for scalable deployment.",
      "Value Delivered: Provides a highly scalable, centralized platform that synchronizes administration, cutting operational delays across the campus."
    ]
  },
  "AttriNet": {
    title: "AttriNet",
    emoji: "👨‍💼",
    desc: "An advanced HR intelligence dashboard predicting employee attrition with 85%+ accuracy using deep learning. Equips managers with actionable insights to simulate retention strategies.",
    tech: ["Streamlit", "ML", "ANN", "TabNet"],
    github: "https://github.com/Neelanjan2448040/AttriNet-Predictive-HR-Attrition-Intelligence-",
    demo: "https://ecppvduzspjv38swewmysm.streamlit.app/",
    mermaidGraph: `graph TD
    HR([HR Manager]) --> Dash[Interactive Dashboard]
    Dash --> Ensemble[Ensemble Model<br/>ANN & TabNet]
    Ensemble --> Feat[Feature Engineering Pipeline]
    Feat --> Raw[(Raw HR Data)]
    Ensemble --> Sim[What-If Simulation Engine]
    Sim --> Dash
    style Dash fill:#020617,stroke:#00f2ff,stroke-width:2px,color:#fff
    style Ensemble fill:#020617,stroke:#aa3bff,stroke-width:2px,color:#fff
    style Sim fill:#020617,stroke:#ff3b7c,stroke-width:2px,color:#fff`,
    details: [
      "Business Problem: High employee turnover is costly. HR leadership lacks predictive tools to foresee and mitigate attrition risks proactively.",
      "Techniques Used: Deep learning ensembles (Artificial Neural Networks and TabNet) and complex feature engineering.",
      "Technologies: Streamlit, TensorFlow/PyTorch, Scikit-learn, and Plotly for interactive data visualization.",
      "Value Delivered: Accurately predicts attrition (85%+ accuracy) and provides 'what-if' simulation tools, enabling HR to devise preemptive retention strategies."
    ]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-details-page">
      <div className="container">
        <Link to="/" className="back-btn">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="details-header"
        >
          <span className="details-emoji">{project.emoji}</span>
          <h1 className="gradient-text">{project.title}</h1>
          <p className="details-tagline">{project.desc}</p>
        </motion.div>

        <div className="details-grid">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass details-card architecture"
          >
            <h3><Cpu size={24} /> System Architecture</h3>
            <div className="arch-flow" style={{ width: '100%', overflow: 'hidden' }}>
              {project.mermaidGraph ? (
                <Mermaid chart={project.mermaidGraph} id={project.title} />
              ) : (
                <p>Architecture details coming soon.</p>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass details-card info"
          >
            <h3><Layout size={24} /> Key Highlights</h3>
            <ul className="details-list">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>

            <div className="tech-stack-details">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-final-actions">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Code size={20} /> Github Repository
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <ExternalLink size={20} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
