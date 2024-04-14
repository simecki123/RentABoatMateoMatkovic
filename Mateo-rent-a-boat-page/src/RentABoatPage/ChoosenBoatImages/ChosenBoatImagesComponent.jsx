import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ChosenBoatImages.css';
import Modal from './ModalComponent';

function ChosenBoatImagesComponent({ boat }) {
    const { img, images } = boat; // Destructure the 'img' and 'images' properties from the 'boat' prop
    const allImages = Object.values(images); // Convert images object values to an array

    const [currentImage, setCurrentImage] = useState(img);
    const [smallImages] = useState(allImages.slice(0, 5)); // Slice to get the first 5 small images
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

ChosenBoatImagesComponent.propTypes = {
    boat: PropTypes.shape({
        img: PropTypes.string.isRequired,
        images: PropTypes.objectOf(PropTypes.string).isRequired, // 'images' should be an object of strings (image URLs)
    }).isRequired,
};

export default ChosenBoatImagesComponent;
