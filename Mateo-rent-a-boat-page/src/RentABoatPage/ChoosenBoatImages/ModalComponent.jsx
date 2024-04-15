import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './Modal.css';

function Modal({ images, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="modal-image-container">
                    <img className="modal-image" src={images[currentIndex]} alt={`Boat ${currentIndex + 1}`} />
                </div>
                <div className="modal-navigation">
                    <button className="modal-nav-button" onClick={handlePrev}>←</button>
                    <span>{currentIndex + 1} / {images.length}</span>
                    <button className="modal-nav-button" onClick={handleNext}>→</button>
                </div>
            </div>
        </div>
    );
}

// Prop Types Validation
Modal.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of image URLs (strings)
    initialIndex: PropTypes.number.isRequired, // Initial index of the image to display
    onClose: PropTypes.func.isRequired, // Function to handle modal close
};

export default Modal;

