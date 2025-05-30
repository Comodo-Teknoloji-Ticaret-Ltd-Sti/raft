import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Nav.css';

function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    const handleClickOutside = (event) => {
      const navbar = document.getElementById('navbarNav');
      const togglerButton = document.querySelector('.navbar-toggler');

      if (isMenuOpen && navbar && !navbar.contains(event.target) && !togglerButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${scrolled ? "scrolled-position" : "top-position"
        } ${scrolled ? "black-theme" : "white-theme"
        }`}>
        <div className="container">
          <Link to='/' className="logo navbar-brand" onClick={handleLinkClick}>
            MC<span> Raft</span>
          </Link>

          <button
            className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/" onClick={handleLinkClick}>{t('nav.home')}</Link></li>
              <li className="nav-item"><Link className="nav-link" to='activities' onClick={handleLinkClick}>{t('nav.activities')}</Link></li>
              <li className="nav-item"><Link className="nav-link" to='contact' onClick={handleLinkClick}>{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
