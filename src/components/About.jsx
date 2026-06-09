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
            <p>I am a Data Analytics and AI professional focused on Machine Learning, Generative AI, and Financial Analytics. I build intelligent solutions that transform complex data into actionable insights.</p>
            <p style={{ marginTop: '1rem' }}>Currently, I work as a Financial Planning & Analysis Analyst (FP&A) at Palo Alto Networks, driving strategic business decisions through forecasting, variance analysis, and reporting automation.</p>
            <p style={{ marginTop: '1rem' }}>Passionate about leveraging AI and data to solve real-world problems, I continuously build scalable applications, NLP systems, and intelligent dashboards.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
