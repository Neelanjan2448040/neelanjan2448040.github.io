import { Mail } from 'lucide-react';

const GitHubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297a12 12 0 0 0-3.793 23.39c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.335-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.608-2.807 5.624-5.479 5.921.43.371.814 1.102.814 2.222v3.293c0 .319.216.694.825.576A12.003 12.003 0 0 0 12 .297z" />
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.119 20.452H3.555V9h3.564v11.452zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
  </svg>
);

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-color)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="mailto:neelanjandutta01@gmail.com" aria-label="Email Neelanjan" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-dim)'}><Mail size={24} /></a>
          <a href="https://www.github.com/Neelanjan2448040" aria-label="GitHub profile" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-dim)'}><GitHubIcon size={24} /></a>
          <a href="https://www.linkedin.com/in/neelanjan40" aria-label="LinkedIn profile" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-dim)'}><LinkedInIcon size={24} /></a>
        </div>
        <div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
            &copy; {new Date().getFullYear()} Engineered by Neelanjan Dutta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
