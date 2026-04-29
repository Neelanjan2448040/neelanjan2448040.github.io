import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, ExternalLink, Cpu, Layout, Layers, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';

const projectsData = {
  "PaperScout+": {
    title: "PaperScout+",
    emoji: "📄",
    desc: "An AI-powered academic paper recommendation engine that aggregates scholarly databases like PubMed, arXiv, and CrossRef.",
    tech: ["Python", "Streamlit", "NLP", "Semantic"],
    github: "https://github.com/Neelanjan2448040/PaperScout-Topic-Aware-Academic-Paper-Recommender",
    demo: "https://paperscout-topic-aware-academic-paper-recommender.streamlit.app/",
    architecture: "Multi-Source API Integration -> Semantic Embedding (LLM) -> FAISS Vector Search -> Streamlit Frontend",
    details: [
      "Aggregates data from diverse scholarly APIs (PubMed, arXiv, CrossRef) using asynchronous requests.",
      "Implements advanced NLP pipelines for topic-aware recommendation and semantic ranking.",
      "Features a clean, interactive UI for researchers to explore relevant publications efficiently."
    ]
  },
  "NutriSage": {
    title: "NutriSage",
    emoji: "🥗",
    desc: "A multi-modal AI nutrition assistant that combines computer vision and NLP to analyze food images.",
    tech: ["RAG", "EffNet", "Qwen 2.5", "FAISS"],
    github: "https://github.com/Aaditya235-design/NutriSage",
    architecture: "Image Capture -> EfficientNet-B0 (Feature Extraction) -> Qwen 2.5 LLM -> RAG Nutrition Retrieval -> Response Generation",
    details: [
      "Leverages state-of-the-art Computer Vision to identify food items from user-uploaded images.",
      "Integrates Retrieval-Augmented Generation (RAG) to ensure nutritional data is factually accurate.",
      "Provides personalized dietary advice based on the identified macronutrient profile."
    ]
  },
  "LakshyaAI": {
    title: "LakshyaAI",
    emoji: "🎯",
    desc: "An AI-powered internship portal designed to streamline career opportunities using machine learning.",
    tech: ["Python", "ML", "NLP", "FAISS"],
    github: "https://github.com/Neelanjan2448040/LakshayAI",
    architecture: "Resume Parsing -> Skill Matching Algorithm -> Job Similarity Engine (FAISS) -> Portal Frontend",
    details: [
      "Automates the screening of resumes using NLP to extract key technical and soft skills.",
      "Matches student profiles with internship roles based on weighted similarity scores.",
      "Reduces manual administrative overhead by over 50% through intelligent automation."
    ]
  },
  "MediGuide-AI": {
    title: "MediGuide-AI",
    emoji: "🏥",
    desc: "A premium intelligent healthcare assistant using RAG pipelines for medical document analysis.",
    tech: ["RAG", "LangChain", "Groq", "Streamlit"],
    github: "https://github.com/Neelanjan2448040/MediGuide-AI",
    demo: "https://mediguide-ai-5c6mvgqmktcwhwvtuckwhn.streamlit.app/",
    architecture: "Document Upload -> LangChain Processing -> Groq Inference Engine -> Structured Medical Insights",
    details: [
      "Securely processes patient records and medical documents using private RAG pipelines.",
      "Provides simplified medical explanations for complex terminology using LLM summarization.",
      "Integrates with Groq for near-instantaneous response times in clinical environments."
    ]
  },
  "Campus AI": {
    title: "Campus AI",
    emoji: "🏫",
    desc: "An enterprise-grade AI-powered campus management platform for student and faculty administration.",
    tech: ["React", "FastAPI", "MySQL", "Docker"],
    github: "https://github.com/Neelanjan2448040/campus-ai",
    architecture: "React Frontend -> FastAPI Backend -> MySQL Database -> Docker Orchestration",
    details: [
      "Synchronizes student administration, faculty workflows, and library systems in real-time.",
      "Features a highly scalable microservices architecture containerized with Docker.",
      "Implements robust authentication and authorization protocols for diverse user roles."
    ]
  },
  "AttriNet": {
    title: "AttriNet",
    emoji: "👨‍💼",
    desc: "An AI-powered HR analytics platform for employee attrition prediction featuring interactive dashboards.",
    tech: ["Streamlit", "ML", "ANN", "TabNet"],
    github: "https://github.com/Neelanjan2448040/AttriNet-Predictive-HR-Attrition-Intelligence-",
    demo: "https://ecppvduzspjv38swewmysm.streamlit.app/",
    architecture: "Raw HR Data -> Feature Engineering Pipeline -> ANN / TabNet Ensemble -> Interactive Dashboard",
    details: [
      "Predicts employee attrition with 85%+ accuracy using advanced deep learning models.",
      "Provides 'what-if' analysis tools for HR managers to simulate retention strategies.",
      "Visualizes complex organizational metrics through high-performance Plotly charts."
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
            <div className="arch-flow">
              {project.architecture.split(' -> ').map((step, i, arr) => (
                <div key={i} className="arch-step-container">
                  <div className="arch-step">{step}</div>
                  {i < arr.length - 1 && <div className="arch-arrow">↓</div>}
                </div>
              ))}
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
