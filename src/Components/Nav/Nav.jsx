import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menü açıkken veya scroll edildiğinde karanlık tema
  const isDark = scrolled || expanded;
  const navTheme = isDark ? "black-theme" : "white-theme";
  const linkTheme = `nav-link ${isDark ? "text-white" : "text-dark"}`;
  const logoTheme = `logo navbar-brand ${isDark ? "text-white" : "text-dark"}`;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${navTheme}`}>
      <div className="container">
        <Link to='/' className={logoTheme}>Frost<span>Quest</span></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link to="/" className={linkTheme} onClick={() => setExpanded(false)}>Home</Link></li>
            <li className="nav-item"><Link to='/about' className={linkTheme} onClick={() => setExpanded(false)}>About</Link></li>
            <li className="nav-item"><Link to='/tours' className={linkTheme} onClick={() => setExpanded(false)}>Tour</Link></li>
            <li className="nav-item"><Link to='/blog' className={linkTheme} onClick={() => setExpanded(false)}>Blog</Link></li>
            <li className="nav-item"><Link to='/contact' className={linkTheme} onClick={() => setExpanded(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
