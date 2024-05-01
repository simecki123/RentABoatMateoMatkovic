import React, { useState, useRef, useEffect } from 'react';
import './BoatPictureStyle.css';

import instagram from '../assets/instagram.jpg';
import facebook from '../assets/facebook.jpg';
import watsup from '../assets/whatsapp.jpg';

// Import boat images (optimized versions)
import boat1 from '../assets/DJI_0792.jpg';
import boat2 from '../assets/DJI_0788.jpg';
import boat3 from '../assets/DJI_0835.jpg';
import boat4 from '../assets/DJI_0811.jpg';
import boat5 from '../assets/_DSC4947.jpg'; 
import boat6 from '../assets/_DSC4917.jpg';

// Import boat videos (optimized versions)
import video1 from '../assets/MatinBrod1.mp4';

import { useTranslation } from 'react-i18next';

function BoatPictureComponent() {
    const { t } = useTranslation();

    const boatImages = [
        { type: 'video', url: video1 },
        { type: 'image', url: boat1 },
        { type: 'image', url: boat2 },
        { type: 'image', url: boat3 },
        { type: 'image', url: boat4 },
        { type: 'image', url: boat5 },
        { type: 'image', url: boat6 }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const videoRef = useRef(null);

    const handleChangeImage = (direction) => {
        if (direction === 'next') {
            const nextIndex = (currentImageIndex + 1) % boatImages.length;
            setCurrentImageIndex(nextIndex);
        } else if (direction === 'prev') {
            const prevIndex = (currentImageIndex - 1 + boatImages.length) % boatImages.length;
            setCurrentImageIndex(prevIndex);
        }
    };

    useEffect(() => {
        const videoElement = videoRef.current;
    
        if (videoElement) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };
    
            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.target === videoElement) {
                        if (entry.isIntersecting) {
                            videoElement.play();
                        } else {
                            videoElement.pause();
                        }
                    }
                });
            };
    
            const observer = new IntersectionObserver(callback, options);
            observer.observe(videoElement);
    
            return () => {
                observer.unobserve(videoElement);
            };
        }
    }, [videoRef]);

    const currentImage = boatImages[currentImageIndex];

    const openWhatsAppChat = () => {
        const phoneNumber = '+385919887215'; // Your phone number including country code
        const url = `https://wa.me/${phoneNumber}`;

        window.open(url, '_blank'); // Open WhatsApp chat link in a new tab
    };

    return (
        <div className="boat-picture-container">
            <div className="boat-image-wrapper">
                <div className="custom-shape-divider-top-1712592141">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <button className="change-image-btn left-btn" onClick={() => handleChangeImage('prev')}>
                    &#8592;
                </button>
                {currentImage.type === 'image' ? (
                    <img className="boat-image" src={currentImage.url} alt="Boat" loading="lazy" />
                ) : (
                    <video
                        ref={videoRef}
                        className="boat-image"
                        autoPlay
                        loop
                        muted
                        onLoadedData={() => videoRef.current.play()}
                    >
                        <source src={currentImage.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <div className="content-overlay">
                    <div className="centered">
                        <h2 className='rent-a-boat-title'>{t("rentABoat")}</h2>
                        <div className="social-media-icons">
                            <a href="https://www.instagram.com/augustboats?igsh=dWQ3OXc0YzRwNXFt" target="_blank" rel="noopener noreferrer">
                                <button className='social-media-button'><img className='social-media-icon' src={instagram} alt="Instagram" /></button>
                            </a>
                            <a href="https://www.facebook.com/share/Cxe6H33hC2Gib6m7/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                                <button className='social-media-button'><img className='social-media-icon' src={facebook} alt="Facebook" /></button>
                            </a>
                            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <button className='social-media-button' onClick={openWhatsAppChat}>
                                    <img className='social-media-icon' src={watsup} alt="WhatsApp" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <button className="change-image-btn" onClick={() => handleChangeImage('next')}>&#8594;</button>
            </div>
            <div className="custom-shape-divider-bottom-1712656412">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}

export default BoatPictureComponent;
