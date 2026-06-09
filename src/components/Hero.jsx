import { motion } from 'framer-motion';
import { Download, Mail, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import photo from '../assets/photo.jpeg';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("neelanjandutta01@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="section-padding" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '120px' }}>
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
              <button onClick={handleCopyEmail} className="btn-outline-hero" style={{ background: copied ? 'rgba(16, 185, 129, 0.1)' : 'transparent', borderColor: copied ? 'var(--secondary)' : 'var(--glass-border)' }}>
                {copied ? <CheckCircle size={20} color="var(--secondary)" /> : <Mail size={20} />}
                {copied ? <span style={{color: 'var(--secondary)'}}>Email Copied!</span> : 'Contact Me'}
              </button>
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

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ width: '100%', maxWidth: '800px', margin: '3rem auto 0', padding: '1.2rem', display: 'flex', justifyContent: 'space-around', background: 'var(--card-bg)', backdropFilter: 'blur(24px)', border: '1px solid var(--glass-border)', borderRadius: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
        >
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.1rem' }}>85%+</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Prediction Accuracy</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.1rem' }}>50%</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Time Reduction</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.1rem' }}>7+</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Models</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
