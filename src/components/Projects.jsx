import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "PaperScout+",
    emoji: "📄",
    desc: "An AI-powered academic paper recommendation engine that aggregates scholarly databases like PubMed, arXiv, and CrossRef.",
    tech: ["Python", "Streamlit", "NLP", "Semantic"],
    github: "https://github.com/Neelanjan2448040/PaperScout-Topic-Aware-Academic-Paper-Recommender",
    demo: "https://paperscout-topic-aware-academic-paper-recommender.streamlit.app/",
    delay: 0
  },
  {
    title: "NutriSage",
    emoji: "🥗",
    desc: "A multi-modal AI nutrition assistant that combines computer vision and NLP to analyze food images.",
    tech: ["RAG", "EffNet", "Qwen 2.5", "FAISS"],
    github: "https://github.com/Aaditya235-design/NutriSage",
    delay: 0.1
  },
  {
    title: "LakshyaAI",
    emoji: "🎯",
    desc: "An AI-powered internship portal designed to streamline career opportunities using machine learning.",
    tech: ["Python", "ML", "NLP", "FAISS"],
    github: "https://github.com/Neelanjan2448040/LakshayAI",
    delay: 0.2
  },
  {
    title: "MediGuide-AI",
    emoji: "🏥",
    desc: "A premium intelligent healthcare assistant using RAG pipelines for medical document analysis.",
    tech: ["RAG", "LangChain", "Groq", "Streamlit"],
    github: "https://github.com/Neelanjan2448040/MediGuide-AI",
    demo: "https://mediguide-ai-5c6mvgqmktcwkwvtuckwhn.streamlit.app/",
    delay: 0.3
  },
  {
    title: "Campus AI",
    emoji: "🏫",
    desc: "An enterprise-grade AI-powered campus management platform for student and faculty administration.",
    tech: ["React", "FastAPI", "MySQL", "Docker"],
    github: "https://github.com/Neelanjan2448040/campus-ai",
    delay: 0.4
  },
  {
    title: "AttriNet",
    emoji: "👨‍💼",
    desc: "An AI-powered HR analytics platform for employee attrition prediction featuring interactive dashboards.",
    tech: ["Streamlit", "ML", "ANN", "TabNet"],
    github: "https://github.com/Neelanjan2448040/AttriNet-Predictive-HR-Attrition-Intelligence-",
    demo: "https://ecppvduzspjv38swewmysm.streamlit.app/",
    delay: 0.5
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: project.delay }}
      whileHover={{ y: -10 }}
      className="glass project-card-v3"
    >
      <div className="project-header">
        <span className="project-emoji">{project.emoji}</span>
        <Link to={`/project/${project.title}`} className="project-title-link">
          <h3>{project.title}</h3>
        </Link>
      </div>
      <p className="project-desc">{project.desc}</p>
      
      <div className="tech-stack">
        {project.tech.map((t, i) => (
          <span key={i} className="tech-badge">{t}</span>
        ))}
      </div>
      
      <div className="project-card-actions">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon-text">
          <Code size={18} /> Github
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-icon-text demo">
            <ExternalLink size={18} /> Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">PROJECTS</h2>
          <p>A showcase of my engineering work in AI and Data Science. Click on a project name for deep-dive details.</p>
        </div>
        
        <div className="projects-grid-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
