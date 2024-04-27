import './PrivateToursImagesStyle.css';
import React, { useState, useRef, useEffect } from 'react';

import boat1 from '../../assets/_DSC4791.jpg';
import boat2 from '../../assets/_DSC4804.jpg';
import boat3 from '../../assets/_DSC4810.jpg';
import boat4 from '../../assets/_DSC4831.jpg';
import boat5 from '../../assets/_DSC4839.jpg';
import boat6 from '../../assets/_DSC4857.jpg';

import video1 from '../../assets/MatinBrod1.mp4';


function PrivateToursImages() {
    

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
    const videoRef = useRef(null); // Create a ref using useRef hook

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

    return (
        <div className="boat-picture-container">
            <div className="boat-image-wrapper">
                
                <button className="change-image-btn left-btn" onClick={() => handleChangeImage('prev')}>
                    &#8592;
                </button>
                {boatImages[currentImageIndex].type === 'image' ? (
                    <img className="boat-image" src={boatImages[currentImageIndex].url} alt="Boat" />
                ) : (
                    <video
                        ref={videoRef}
                        className="boat-image"
                        autoPlay
                        loop
                        muted
                        onLoadedData={() => videoRef.current.play()}
                    >
                        <source src={boatImages[currentImageIndex].url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <button className="change-image-btn" onClick={() => handleChangeImage('next')}>&#8594;</button>
            </div>
            
        </div>
    );
}

export default PrivateToursImages;