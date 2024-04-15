import React from 'react';
import logo from '../assets/MatinLogo.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import './FooterComponent.css'; // Import CSS for FooterComponent
import { useTranslation } from 'react-i18next';

function FooterComponent() {
    const { t } = useTranslation();


    const handleInstagramClick = () => {
        window.open('https://www.instagram.com', '_blank');
    };

    const handleFacebookClick = () => {
        window.open('https://www.facebook.com', '_blank');
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-container">
                    <img className="logo-footer" src={logo} alt="Logo" />
                </div>
                <div id='contacts' className="info-section">
                    <div className="contacts">
                        <p>📌 Put Plovanije 5 Zadar Croatia</p>
                        <p>📞 56987233 Mateo</p>
                        <p>📞 256489 Loreta</p>
                        <p>📧 mateo15@gmail.com</p>
                    </div>
                    <div className="footer-links">
                        <p ><a className='options' href='#boats-for-rent'>{t("option1")}</a></p>
                        <p ><a className='options' href='/privateTours' >{t("option2")}</a></p>
                        <p><a className='options' href='/termsOfUse' >{t("option3")}</a></p>
                        <p><a className='options' href='#contacts' >{t("option4")}</a></p>
                    </div>
                    <div className="social-media">
                        <p>{t("followUs")}</p>
                        <div className="social-media-icons">
                            <img
                                className="social-media-icon-footer"
                                src={instagram}
                                alt="Instagram"
                                onClick={handleInstagramClick}
                            />
                            <img
                                className="social-media-icon-footer"
                                src={facebook}
                                alt="Facebook"
                                onClick={handleFacebookClick}
                            />
                        </div>
                        <p>{t("paymentMethods")}</p>
                        <p>{t("paymentText")}</p>
                    </div>
                </div>
                <hr className="divider" />
                <div className="copyright-section">
                    <p>Copyright © 2024 August Boats | All rights reserved</p>
                </div>
                <div className="attribution">
                    <p>
                        Icons by{' '}
                        <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer">
                            Freepik
                        </a>{' '}
                        and{' '}
                        <a href="https://www.flaticon.com/authors/ruslan-babkin" target="_blank" rel="noopener noreferrer">
                            Ruslan Babkin
                        </a>{' '}
                        from Flaticon
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;
