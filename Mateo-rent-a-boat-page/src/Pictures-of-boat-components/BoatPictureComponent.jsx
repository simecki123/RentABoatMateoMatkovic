import React, { useState } from 'react';
import './BoatPictureStyle.css';

import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import watsup from '../assets/whatsapp.png';

// Import boat images
import boat1 from '../assets/boat1.jpg';
import boat2 from '../assets/boat2.jpg';
import boat3 from '../assets/boat3.jpg';
import boat4 from '../assets/boat4.jpg';
import boat5 from '../assets/boat5.jpg';
import boat6 from '../assets/boat6.jpg';
import { useTranslation } from 'react-i18next';

function BoatPictureComponent() {
const { t } = useTranslation();

    const boatImages = [boat1, boat2, boat3, boat4, boat5, boat6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleChangeImage = () => {
        const nextIndex = (currentImageIndex + 1) % boatImages.length;
        setCurrentImageIndex(nextIndex);
    };

    return (
        <div className="boat-picture-container">
            
            <div className="boat-image-wrapper">
                <div className="custom-shape-divider-top-1712592141">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                    
                </div>
                
                <img className="boat-image" src={boatImages[currentImageIndex]} alt="Boat" />
                <div className="content-overlay">
                    <div className="centered">
                        <h2 className='rent-a-boat-title'>{t("rentABoat")}</h2>
                        <div className="social-media-icons">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <button className='social-media-button'><img className='social-media-icon' src={instagram} alt="Instagram" /></button>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <button className='social-media-button'><img className='social-media-icon' src={facebook} alt="Facebook" /></button>
                            </a>
                            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <button className='social-media-button'><img className='social-media-icon' src={watsup} alt="WhatsApp" /></button>
                            </a>
                        </div>
                    </div>
                </div>
                <button className="change-image-btn" onClick={handleChangeImage}>&#8680;</button>
                <div className="custom-shape-divider-bottom-1712656412">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            
        </div>
    );
}

export default BoatPictureComponent;
