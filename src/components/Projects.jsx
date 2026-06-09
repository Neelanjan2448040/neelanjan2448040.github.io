import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, ExternalLink } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: "Financial Econometrics Dashboard",
    emoji: "📈",
    desc: "A scalable financial analytics platform built to perform variance analysis, time-series forecasting, and automated KPI monitoring for real-time business decision-making.",
    tech: ["Python", "Streamlit", "Plotly", "Forecasting"],
    github: "https://github.com/Neelanjan2448040",
    delay: 0
  },
  {
    title: "PaperScout+",
    emoji: "📄",
    desc: "An enterprise-grade AI recommendation engine aggregating academic databases. Solves the problem of information overload with advanced NLP, improving research efficiency significantly.",
    tech: ["Python", "Streamlit", "NLP", "Semantic Search"],
    github: "https://github.com/Neelanjan2448040/PaperScout-Topic-Aware-Academic-Paper-Recommender",
    demo: "https://paperscout-topic-aware-academic-paper-recommender.streamlit.app/",
    delay: 0.1
  },
  {
    title: "NutriSage",
    emoji: "🥗",
    desc: "A multimodal computer vision and RAG-powered nutrition assistant providing real-time dietary insights. Drives user value by delivering accurate, personalized macro-nutrient analysis.",
    tech: ["RAG", "EffNet", "Qwen 2.5", "FAISS"],
    github: "https://github.com/Aaditya235-design/NutriSage",
    delay: 0.2
  },
  {
    title: "LakshyaAI",
    emoji: "🎯",
    desc: "A highly scalable AI recruitment platform automating candidate screening and role matching using vector search, reducing administrative screening time by over 50%.",
    tech: ["Python", "ML", "NLP", "FAISS"],
    github: "https://github.com/Neelanjan2448040/LakshayAI",
    delay: 0.3
  },
  {
    title: "MediGuide-AI",
    emoji: "🏥",
    desc: "A secure, privacy-focused medical document analyzer utilizing private LLM RAG pipelines. Empowers clinical workflows with near-instantaneous medical insights and summarization.",
    tech: ["RAG", "LangChain", "Groq", "Streamlit"],
    github: "https://github.com/Neelanjan2448040/MediGuide-AI",
    demo: "https://mediguide-ai-5c6mvgqmktcwkwvtuckwhn.streamlit.app/",
    delay: 0.4
  },
  {
    title: "Campus AI",
    emoji: "🏫",
    desc: "A robust microservices-based administrative platform optimizing university operations. Streamlines real-time faculty and student data management across departments.",
    tech: ["React", "FastAPI", "MySQL", "Docker"],
    github: "https://github.com/Neelanjan2448040/campus-ai",
    delay: 0.5
  },
  {
    title: "AttriNet",
    emoji: "👨‍💼",
    desc: "An advanced HR intelligence dashboard predicting employee attrition with 85%+ accuracy using deep learning. Equips managers with actionable insights to simulate retention strategies.",
    tech: ["Streamlit", "ML", "ANN", "TabNet"],
    github: "https://github.com/Neelanjan2448040/AttriNet-Predictive-HR-Attrition-Intelligence-",
    demo: "https://ecppvduzspjv38swewmysm.streamlit.app/",
    delay: 0.6
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: project.delay }}
      style={{ height: '100%' }}
    >
      <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.02} transitionSpeed={2500} className="glass project-card-v3" style={{ height: '100%' }}>
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
      </Tilt>
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
