import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Nav.css';

function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${
        scrolled ? "scrolled-position" : "top-position"
      } ${
        scrolled ? "black-theme" : "white-theme"
      }`}>
        <div className="container">
          <Link to='/' className="logo navbar-brand">
            MC<span> Raft</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/">{t('nav.home')}</Link></li>
              {/* <li className="nav-item"><Link className="nav-link" to='/about'>{t('nav.about')}</Link></li> */}
              {/* <li className="nav-item"><Link className="nav-link" to='/tours'>{t('nav.tours')}</Link></li> */}
              <li className="nav-item"><Link className="nav-link" to='/blog'>{t('nav.activities')}</Link></li>
              <li className="nav-item"><Link className="nav-link" to='contact'>{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
