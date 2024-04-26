import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ media, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
    };

    const currentMedia = media[currentIndex];
    const isVideo = currentMedia.includes('.mp4');

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                {isVideo ? (
                    <div className="modal-image-container">
                        <video className="modal-image" src={currentMedia} controls autoPlay loop>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : (
                    <div className="modal-image-container">
                        <img className="modal-image" src={currentMedia} alt={`Media ${currentIndex + 1}`} />
                    </div>
                )}
                <div className="modal-navigation">
                    <button className="modal-nav-button" onClick={handlePrev}>←</button>
                    <span>{currentIndex + 1} / {media.length}</span>
                    <button className="modal-nav-button" onClick={handleNext}>→</button>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    media: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of image URLs and/or video URLs
    initialIndex: PropTypes.number.isRequired, // Initial index of the media to display
    onClose: PropTypes.func.isRequired, // Function to handle modal close
};

export default Modal;
