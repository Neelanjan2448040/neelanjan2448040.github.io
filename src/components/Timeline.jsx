import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ data, index, type }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
    >
      <div className="glass timeline-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          {data.logo && <img src={data.logo} alt={data.institution} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />}
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>{data.title || data.role}</h3>
            <p style={{ fontWeight: 600 }}>{data.institution || data.company}</p>
          </div>
        </div>
        <p style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem' }}>{data.period}</p>
        
        {data.description && (
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-dim)', fontSize: '0.95rem' }}>
            {data.description.map((item, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
            ))}
          </ul>
        )}
        
        {data.stats && (
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {data.stats.map((stat, i) => (
              <span key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.8rem', border: '1px solid var(--glass-border)' }}>
                {stat}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Timeline = ({ items, title, subtitle }) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-text"
          >
            {title}
          </motion.h2>
          <p>{subtitle}</p>
        </div>
        
        <div className="timeline">
          {items.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
