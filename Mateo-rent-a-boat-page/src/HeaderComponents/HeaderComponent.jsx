import React, { useState, useRef, useEffect } from 'react';
import './HeaderComponent.css';
import logo from '../assets/MatinLogo.png';
import GB from '../assets/britain.jpeg';
import HR from '../assets/croatia.jpeg';
import DE from '../assets/germany.jpeg';
import IT from '../assets/italy.jpeg';

function HeaderComponent() {
    const [selectedLanguage, setSelectedLanguage] = useState('🇬🇧');
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const languageDropdownRef = useRef(null);
    const navMenuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Close language menu if clicked outside
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setLanguageMenuOpen(false);
            }
            // Close nav menu if clicked outside
            if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
                setNavMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

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
            case '🇭🇷':
                return HR; // Return the image for Croatia
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
                    <div className="language-dropdown" ref={languageDropdownRef}>
                        <button className="language-btn" onClick={toggleLanguageMenu}>
                            <img className='country-img' src={renderLanguageImage(selectedLanguage)} alt="Country Flag" />
                        </button>
                        {languageMenuOpen && (
                            <div className="language-options">
                                <span onClick={() => handleLanguageSelect('🇭🇷')}>
                                    <img className='country-img' src={HR} alt='Croatia' />
                                </span>
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
                                <a className='options-header' href='#boats-for-rent'>Boats for Rent</a>
                                <a className='options-header' href='/privateTours' >Private Tours</a>
                                <a className='options-header' href='/termsOfUse' >Terms of use</a>
                                <a className='options-header' href='#contacts' >Contacts</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;
