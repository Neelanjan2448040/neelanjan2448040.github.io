import { motion } from 'framer-motion';
import { Mail, MapPin, Quote, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import linkedinImg from '../assets/linkedin.png';
import githubImg from '../assets/github.png';

const Contact = () => {
  const [insight, setInsight] = useState("Data is the foundation, but AI is the architect of the future. I'm excited to help build that future with you.");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunity: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Opening Email Client...');
    
    const { name, email, opportunity, subject, message } = formData;
    
    // Construct the email body
    const body = `Name: ${name}%0D%0A` +
                 `Email: ${email}%0D%0A` +
                 `Opportunity: ${opportunity}%0D%0A` +
                 `Subject: ${subject}%0D%0A%0D%0A` +
                 `Message:%0D%0A${message}`;
                 
    const mailtoLink = `mailto:neelanjandutta122@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setStatus('Success!');
      setFormData({ name: '', email: '', opportunity: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">CONTACT</h2>
          <p>I'm currently looking for new opportunities and collaborations in AI, ML, and Data Science. Feel free to reach out!</p>
        </div>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="info-cards">
              <div className="glass info-card">
                <div className="icon-box email"><Mail size={20} /></div>
                <div className="details">
                  <span>EMAIL</span>
                  <a href="mailto:neelanjandutta122@gmail.com">neelanjandutta122@gmail.com</a>
                </div>
              </div>
              <div className="glass info-card">
                <div className="icon-box linkedin"><img src={linkedinImg} alt="LinkedIn" /></div>
                <div className="details">
                  <span>LINKEDIN</span>
                  <a href="https://www.linkedin.com/in/neelanjan40" target="_blank" rel="noreferrer">neelanjan40</a>
                </div>
              </div>
              <div className="glass info-card">
                <div className="icon-box github"><img src={githubImg} alt="GitHub" /></div>
                <div className="details">
                  <span>GITHUB</span>
                  <a href="https://www.github.com/Neelanjan2448040" target="_blank" rel="noreferrer">Neelanjan2448040</a>
                </div>
              </div>
              <div className="glass info-card">
                <div className="icon-box location"><MapPin size={20} /></div>

                <div className="details">
                  <span>LOCATION</span>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="glass insight-card">
              <div className="insight-header">
                <Quote size={20} style={{ color: 'var(--primary)' }} />
                <span>DAILY INSIGHT</span>
              </div>
              <p>"{insight}"</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <form className="glass contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select name="opportunity" value={formData.opportunity} onChange={handleChange} required>
                    <option value="" disabled>Job Opportunity</option>
                    <option value="freelance">Freelance</option>
                    <option value="fulltime">Full-time</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" rows="5" placeholder="Write your message here..." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                {status || 'Send Message'} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
