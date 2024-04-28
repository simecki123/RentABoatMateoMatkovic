import React, { useState, useRef, useEffect } from 'react';
import './HeaderComponent.css';
import logo from '../assets/MatinLogo.jpg';
import GB from '../assets/britain.jpg';
import HR from '../assets/croatia.jpg';
import DE from '../assets/germany.jpg';
import IT from '../assets/italy.jpg';
import { useTranslation } from 'react-i18next';
import i18n from '../i18nn.js';

function HeaderComponent() {
    const { t } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Default language code
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const languageDropdownRef = useRef(null);
    const navMenuRef = useRef(null);

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage); // Set the initial language

        // Function to handle clicks outside the language dropdown
        const handleClickOutsideLanguage = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setLanguageMenuOpen(false);
            }
        };

        // Function to handle clicks outside the navigation menu
        const handleClickOutsideNavMenu = (event) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
                setNavMenuOpen(false);
            }
        };

        // Attach event listeners when component mounts
        document.addEventListener('mousedown', handleClickOutsideLanguage);
        document.addEventListener('mousedown', handleClickOutsideNavMenu);

        // Clean up event listeners when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideLanguage);
            document.removeEventListener('mousedown', handleClickOutsideNavMenu);
        };
    }, [selectedLanguage]);

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
            case 'hr':
                return HR; // Return the image for Croatia
            case 'en':
                return GB; // Return the image for Great Britain
            case 'ger':
                return DE; // Return the image for Germany
            case 'it':
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
                    <h1 className="title">August boats</h1>
                </div>
                <div className="actions">
                    <div className="language-dropdown" ref={languageDropdownRef}>
                        <button className="language-btn" onClick={toggleLanguageMenu}>
                            <img className='country-img' src={renderLanguageImage(selectedLanguage)} alt="Country Flag" />
                        </button>
                        {languageMenuOpen && (
                            <div className="language-options">
                                <span onClick={() => handleLanguageSelect('hr')}>
                                    <img className='country-img' src={HR} alt='Croatia' />
                                </span>
                                <span onClick={() => handleLanguageSelect('en')}>
                                    <img className='country-img' src={GB} alt="Great Britain" />
                                </span>
                                <span onClick={() => handleLanguageSelect('ger')}>
                                    <img className='country-img' src={DE} alt="Germany" />
                                </span>
                                <span onClick={() => handleLanguageSelect('it')}>
                                    <img className='country-img' src={IT} alt="Italy" />
                                </span>
                            </div>
                        )}
                    </div>
                    <div className='option-dropdown' ref={navMenuRef}>
                        <button className="hamburger-btn" onClick={toggleNavMenu}>
                            <div className={`hamburger-icon ${navMenuOpen ? 'open' : ''}`}>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                        </button>
                        {navMenuOpen && (
                            <div className="nav-menu">
                                <a className='options-header' href='/#boats-for-rent'>{t("option1")}</a>
                                
                                <a className='options-header' href='/termsOfUse' >{t("option3")}</a>
                                <a className='options-header' href='/#contacts' >{t("option4")}</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
