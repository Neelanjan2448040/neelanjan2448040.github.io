import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'skills', 'projects', 'education', 'experience', 'publication', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT ME', href: '#about', id: 'about' },
    { name: 'TECHNICAL SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'WORK JOURNEY', href: '#experience', id: 'experience' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">ND<span className="gradient-text">.</span></a>
        
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                style={{ 
                  color: activeSection === link.id ? 'var(--primary)' : 'var(--text-primary)',
                  fontWeight: activeSection === link.id ? 700 : 500,
                  transition: 'all 0.3s ease',
                  borderBottom: activeSection === link.id ? '2px solid var(--primary)' : '2px solid transparent',
                  paddingBottom: '4px'
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu glass"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{ color: activeSection === link.id ? 'var(--primary)' : 'var(--text-primary)' }}>{link.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
