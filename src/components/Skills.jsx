import { motion } from 'framer-motion';
import { Cpu, Code, BarChart3, Terminal, Database, Cloud, Compass, Briefcase, PieChart } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming & Development",
    icon: <Code size={24} />,
    skills: ["Python", "SQL", "R", "JavaScript", "HTML", "Flask", "FastAPI", "Streamlit"],
    delay: 0
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu size={24} />,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "LLMs", "RAG", "LangChain", "Vector Databases", "Recommendation Systems"],
    delay: 0.1
  },
  {
    title: "Data Analytics & BI",
    icon: <BarChart3 size={24} />,
    skills: ["Data Analytics", "Business Analytics", "Financial Analytics", "Statistical Analysis", "Forecasting", "Predictive Analytics", "Business Intelligence", "Data Visualization"],
    delay: 0.2
  },
  {
    title: "Visualization Tools",
    icon: <PieChart size={24} />,
    skills: ["Tableau", "Power BI", "Plotly", "Matplotlib"],
    delay: 0.3
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: ["MySQL", "MongoDB", "SQLite"],
    delay: 0.4
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: <Cloud size={24} />,
    skills: ["Git", "GitHub", "Docker", "REST APIs", "Cloud-Based AI Applications"],
    delay: 0.5
  },
  {
    title: "Finance & FP&A",
    icon: <Briefcase size={24} />,
    skills: ["Financial Planning & Analysis (FP&A)", "Variance Analysis", "Forecast Validation", "Financial Reporting", "Business Performance Analysis", "KPI Monitoring", "Stakeholder Reporting"],
    delay: 0.6
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">TECHNICAL SKILLS</h2>
          <p>A comprehensive overview of my technical expertise in Data Science and AI.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cat.delay }}
              className="glass skill-card"
            >
              <div className="skill-cat-header">
                <div className="skill-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, si) => (
                  <span key={si} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass exploring-box"
        >
          <div className="exploring-content">
            <h4><Compass size={24} style={{ color: 'var(--primary)' }} /> What I'm Exploring Now</h4>
            <p>Currently researching advanced architectures in Decision Intelligence and LLM optimization.</p>
            <div className="exploring-tags">
              {["Explainable AI", "LLM Agents", "Decision Intelligence", "Automation", "n8n", "Graph Neural Networks"].map((t, i) => (
                <span key={i} className="exploring-tag">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
