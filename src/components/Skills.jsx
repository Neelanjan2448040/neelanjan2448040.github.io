import { motion } from 'framer-motion';
import { Cpu, Code, BarChart3, Terminal, Database, Cloud, Compass } from 'lucide-react';

const skillCategories = [
  {
    title: "ML/AI",
    icon: <Cpu size={24} />,
    skills: ["Large Language Models", "RAG Architecture", "Neural Networks / GANs", "Natural Language Processing", "Computer Vision", "Generative AI", "Scikit-Learn", "TensorFlow/PyTorch"],
    delay: 0
  },
  {
    title: "Programming",
    icon: <Code size={24} />,
    skills: ["Python (Advanced)", "SQL / PostgreSQL", "R Programming", "JavaScript / ES6+"],
    delay: 0.1
  },
  {
    title: "Data Tools",
    icon: <BarChart3 size={24} />,
    skills: ["Pandas / NumPy", "Power BI / Tableau", "Matplotlib", "Seaborn"],
    delay: 0.2
  },
  {
    title: "Backend",
    icon: <Terminal size={24} />,
    skills: ["FastAPI", "Flask", "Node.js", "Express"],
    delay: 0.3
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "FAISS (Vector DB)"],
    delay: 0.4
  },
  {
    title: "Cloud",
    icon: <Cloud size={24} />,
    skills: ["AWS (Basic)", "Docker", "Git / GitHub", "Nginx", "Vercel", "Postman"],
    delay: 0.5
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
