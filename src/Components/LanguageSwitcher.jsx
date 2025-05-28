import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const getLanguageLabel = (code) => {
    switch(code) {
      case 'tr': return 'TR';
      case 'en': return 'EN';
      case 'ru': return 'RU';
      default: return code.toUpperCase();
    }
  };

  return (
    <div className="language-switcher">
      <button
        className="language-current"
        onClick={() => setIsOpen(!isOpen)}
      >
        {getLanguageLabel(i18n.language)}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="language-dropdown">
          <button
            className={`language-option ${i18n.language === 'tr' ? 'active' : ''}`}
            onClick={() => changeLanguage('tr')}
          >
            TR
          </button>
          <button
            className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button
            className={`language-option ${i18n.language === 'ru' ? 'active' : ''}`}
            onClick={() => changeLanguage('ru')}
          >
            RU
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
