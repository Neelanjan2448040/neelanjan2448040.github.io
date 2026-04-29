import { motion } from 'framer-motion';
import { Download, Mail, Send } from 'lucide-react';
import photo from '../assets/photo.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem' }}
            >
              Hi, I'm
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-name"
            >
              NEELANJAN <br />
              <span className="hero-dutta">DUTTA</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}
            >
              AI & Data Science Enthusiast
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ fontSize: '1.1rem', color: 'var(--text-dim)', maxWidth: '600px', marginBottom: '2.5rem' }}
            >
              Specializing in NLP, LLMs, Statistical Modeling, Data Analytics, and Intelligent Systems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              <a href="/Resume.pdf" target="_blank" className="btn-primary-hero">
                <Download size={20} /> Download CV
              </a>
              <a href="mailto:neelanjandutta01@gmail.com" className="btn-outline-hero">
                <Mail size={20} /> Contact Me
              </a>
              <a href="#contact" className="btn-outline-hero">
                <Send size={20} /> Let's Talk
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ position: 'relative' }}
          >
            <div className="profile-img-glow"></div>
            <img src={photo} alt="Neelanjan Dutta" className="profile-img-large" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
