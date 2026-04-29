import { motion } from 'framer-motion';
import { Microscope, ExternalLink, Eye } from 'lucide-react';

const Publication = () => {
  return (
    <section id="publication" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">RESEARCH AND PUBLICATION</h2>
          <p>Academic contributions to Artificial Intelligence and Financial Forecasting.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass pub-card-premium"
        >
          <div className="pub-glow"></div>
          
          <div className="pub-icon">
            <Microscope size={32} />
          </div>

          <span className="pub-meta">IEEE PUBLICATION</span>
          
          <h3>“Enhancing Time Series Forecasting in Low-Liquidity Markets using GANs”</h3>
          
          <p className="pub-desc">
            Published research focused on improving low-liquidity financial forecasting using
            TimeGAN-enhanced LSTM architectures and synthetic data augmentation.
          </p>

          <div className="pub-tags">
            {["Time Series", "GANs", "Financial AI", "Deep Learning"].map((t, i) => (
              <span key={i} className="tech-badge">{t}</span>
            ))}
          </div>

          <div className="pub-actions">
            <a href="https://ieeexplore.ieee.org/abstract/document/11331192" target="_blank" rel="noopener noreferrer" className="btn-primary-pub">
              <ExternalLink size={20} /> View Publication
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publication;
