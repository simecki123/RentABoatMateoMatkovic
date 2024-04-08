import React, { useState } from 'react';
import './HeaderComponent.css';
import logo from '../assets/MatinLogo.png';
import GB from '../assets/britain.jpeg';
import DE from '../assets/germany.jpeg';
import IT from '../assets/italy.jpeg';

function HeaderComponent() {
    const [selectedLanguage, setSelectedLanguage] = useState('🇬🇧');
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setLanguageMenuOpen(false); // Close the language menu after selection
    };

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!languageMenuOpen);
    };

    const toggleNavMenu = () => {
        setNavMenuOpen(!navMenuOpen);
    };

    const renderLanguageImage = (language) => {
        switch (language) {
            case '🇬🇧':
                return GB; // Return the image for Great Britain
            case '🇩🇪':
                return DE; // Return the image for Germany
            case '🇮🇹':
                return IT; // Return the image for Italy
            default:
                return null; // No image for other languages
        }
    };

    return (
        <header>
            <link
                href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap"
                rel="stylesheet"
            ></link>
            <div className="header-container">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="Company Logo" />
                </div>
                <div className="large-title">
                    <h1 className="title">August Boats</h1>
                </div>
                <div className="actions">
                    <div className="language-dropdown">
                        <button className="language-btn" onClick={toggleLanguageMenu}>
                            <img className='country-img' src={renderLanguageImage(selectedLanguage)} alt="Country Flag" />
                        </button>
                        {languageMenuOpen && (
                            <div className="language-options">
                                <span onClick={() => handleLanguageSelect('🇬🇧')}>
                                    <img className='country-img' src={GB} alt="Great Britain" />
                                </span>
                                <span onClick={() => handleLanguageSelect('🇩🇪')}>
                                    <img className='country-img' src={DE} alt="Germany" />
                                </span>
                                <span onClick={() => handleLanguageSelect('🇮🇹')}>
                                    <img className='country-img' src={IT} alt="Italy" />
                                </span>
                            </div>
                        )}
                    </div>
                    <button className="hamburger-btn" onClick={toggleNavMenu}>
                        <div className={`hamburger-icon ${navMenuOpen ? 'open' : ''}`}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
