const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', background: 'rgba(2, 6, 23, 0.5)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Neelanjan Dutta — Built with passion for data & intelligent systems.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="mailto:neelanjandutta122@gmail.com" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>Email</a>
          <a href="https://www.github.com/Neelanjan2448040" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/neelanjan40" target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
