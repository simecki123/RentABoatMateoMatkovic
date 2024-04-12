import React, { useState, useEffect } from 'react';
import boat1 from '../../assets/boat1.jpg';
import boat2 from '../../assets/boat2.jpg';
import boat3 from '../../assets/boat3.jpg';
import boat4 from '../../assets/boat4.jpg';
import boat5 from '../../assets/boat5.jpg';
import boat6 from '../../assets/boat6.jpg';
import './ChosenBoatImages.css';
import Modal from './ModalComponent';

function ChosenBoatImagesComponent() {
    const [allImages] = useState([boat1, boat2, boat3, boat4, boat5, boat6])
    const [currentImage, setCurrentImage] = useState(allImages[0]);
    const [smallImages] = useState(allImages.slice(1));
    const [visibleImagesIndex, setVisibleImagesIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            rotateVisibleImages();
        }, 4000); // Rotate images every 4 seconds (adjust as needed)
        return () => clearInterval(interval);
    }, [visibleImagesIndex]);

    const rotateVisibleImages = () => {
        setVisibleImagesIndex((prevIndex) => (prevIndex + 1) % smallImages.length);
    };

    const handleImageClick = (image, index) => {
        setShowModal(true);
        setSelectedImageIndex(index);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="boat-images-container">
            <div className="chosen-boat-big-image-container" onClick={() => handleImageClick(currentImage, 0)}>
                <img className="chosen-boat-big-image" src={currentImage} alt="Big Boat" />
            </div>
            <div className="chosen-boat-small-images-container">
                {smallImages.map((image, index) => {
                    const offsetIndex = (index + visibleImagesIndex) % smallImages.length;
                    const isVisible = index < 4; // Show the first 4 small images

                    return (
                        <div
                            key={index}
                            className="chosen-boat-small-image-container"
                            style={{
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: isVisible ? 1 : 0,
                                transform: `translateX(${isVisible ? 0 : -100}%)`, // Slide out to the left
                                pointerEvents: isVisible ? 'auto' : 'none', // Enable/disable click events
                            }}
                        >
                            <img
                                className="chosen-boat-small-image"
                                src={smallImages[offsetIndex]}
                                alt={`Boat ${offsetIndex + 1}`}
                                onClick={() => handleImageClick(smallImages[offsetIndex], offsetIndex + 1)}
                            />
                        </div>
                    );
                })}
            </div>
            {showModal && (
                <Modal
                    images={allImages}
                    initialIndex={selectedImageIndex}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

export default ChosenBoatImagesComponent;
