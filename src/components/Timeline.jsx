import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const TimelineItem = ({ data, index, type }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px 0px"
  });

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
      style={{ zIndex: 1 }}
    >
      <div className="glass timeline-content" style={{ position: 'relative' }}>
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
        
        {/* Connection dot that lights up */}
        <motion.div 
          initial={{ scale: 0, backgroundColor: 'var(--bg-color)' }}
          animate={inView ? { scale: 1, backgroundColor: 'var(--secondary)', boxShadow: '0 0 15px var(--secondary)' } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ 
            position: 'absolute', 
            top: '20px', 
            [isLeft ? 'right' : 'left']: '-46px',
            width: '16px', 
            height: '16px', 
            borderRadius: '50%',
            border: '3px solid var(--primary)',
            zIndex: 2,
            '@media (max-width: 768px)': {
              left: '-39px',
              right: 'auto'
            }
          }} 
          className="timeline-dot"
        />
      </div>
    </motion.div>
  );
};

const Timeline = ({ items, title, subtitle }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-padding" ref={containerRef}>
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
        
        <div className="timeline" style={{ position: 'relative' }}>
          {/* Animated Progress Line */}
          <motion.div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              bottom: 0, 
              left: '50%', 
              width: '4px', 
              background: 'linear-gradient(to bottom, transparent, var(--primary), var(--secondary))', 
              marginLeft: '-2px', 
              transformOrigin: 'top', 
              scaleY: scaleY, 
              boxShadow: '0 0 20px var(--secondary)',
              zIndex: 0,
              borderRadius: '2px'
            }} 
            className="animated-timeline-line"
          />
          {/* Moving Laser Tip */}
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              width: '12px',
              height: '12px',
              marginLeft: '-6px',
              backgroundColor: '#fff',
              boxShadow: '0 0 15px 5px var(--secondary), 0 0 30px 10px var(--primary)',
              borderRadius: '50%',
              zIndex: 3,
              top: useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
            }}
            className="timeline-laser-tip"
          />
          <style>{`
            .timeline::after { display: none !important; }
            @media (max-width: 768px) {
              .animated-timeline-line { left: 31px !important; }
              .timeline-laser-tip { left: 31px !important; }
              .timeline-dot { left: -39px !important; right: auto !important; }
            }
          `}</style>
          
          {items.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
