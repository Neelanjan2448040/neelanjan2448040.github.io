import { GitBranch, Link, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--glass-border)', background: 'var(--bg-color)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="mailto:neelanjandutta01@gmail.com" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-dim)'}><Mail size={24} /></a>
          <a href="https://www.github.com/Neelanjan2448040" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-dim)'}><GitBranch size={24} /></a>
          <a href="https://www.linkedin.com/in/neelanjan40" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={e=>e.currentTarget.style.color='var(--primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-dim)'}><Link size={24} /></a>
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
