import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">ABOUT ME</h2>
          <p>Combining machine learning, analytics, and engineering to build meaningful technology.</p>
        </div>
        
        <div className="glass about-card-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h3>Professional Summary</h3>
            <p>I am a Data Analytics and AI professional with strong experience in Machine Learning, Generative AI, Financial Analytics, Business Intelligence, and Full-Stack Application Development. My work focuses on building intelligent data-driven solutions that transform complex business and financial data into actionable insights.</p>
            <p style={{ marginTop: '1.5rem' }}>Currently, I am gaining industry experience in Financial Planning & Analysis (FP&A) at Palo Alto Networks (PANW), where I work with financial reporting, forecasting validation, business performance analysis, stakeholder collaboration, variance analysis, and cloud-based reporting workflows. This experience has strengthened my understanding of how analytics and technology drive strategic business decisions in large-scale enterprises.</p>
            <p style={{ marginTop: '1.5rem' }}>Alongside finance and analytics, I actively build AI-powered applications, recommendation systems, intelligent dashboards, RAG solutions, NLP systems, predictive models, and automation tools using modern AI and data technologies.</p>
            <p style={{ marginTop: '1.5rem' }}>I am passionate about combining data, finance, and artificial intelligence to solve real-world business problems and create scalable solutions with measurable impact.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
