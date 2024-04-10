import './PrivateToursImagesStyle.css';
import React, { useState } from 'react';

import boat1 from '../../assets/boat1.jpg';
import boat2 from '../../assets/boat2.jpg';
import boat3 from '../../assets/boat3.jpg';
import boat4 from '../../assets/boat4.jpg';
import boat5 from '../../assets/boat5.jpg';
import boat6 from '../../assets/boat6.jpg';

function PrivateToursImages() {
    const boatImages = [boat1, boat2, boat3, boat4, boat5, boat6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleChangeImage = () => {
        const nextIndex = (currentImageIndex + 1) % boatImages.length;
        setCurrentImageIndex(nextIndex);
    };

    return(

        <>

            <div className="private-tours-images-container">
                
                
                <div className="location-image-wrapper">

                <div className="custom-shape-divider-top-1712770032">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                    
                    
                    <img className="location-image" src={boatImages[currentImageIndex]} alt="Boat" />
                    
                    <button className="change-location-image-btn" onClick={handleChangeImage}>&#8680;</button>
                    
                </div>

                    <div className="custom-shape-divider-bottom-1712770095">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                
            </div>

        </>
    );
}

export default PrivateToursImages;