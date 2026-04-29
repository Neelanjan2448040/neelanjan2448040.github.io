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
            <p>Data Science postgraduate with strong skills in SQL, data analysis, and statistical modeling. Experienced in transforming raw data into actionable insights through data querying, exploratory analysis, and dashboard development.</p>
            <p style={{ marginTop: '1.5rem' }}>Proficient in Python and AI/ML techniques, with experience in NLP and LLM-based systems. Passionate about solving business problems using data-driven storytelling.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
