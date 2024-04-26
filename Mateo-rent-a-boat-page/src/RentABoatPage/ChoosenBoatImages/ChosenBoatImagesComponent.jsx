import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ChosenBoatImages.css';
import Modal from './ModalComponent';

function ChosenBoatImagesComponent({ boat }) {
    const { img, images, videos } = boat;
    const allImages = Object.values(images);
    const allVideos = Object.values(videos);

    const [currentMedia, setCurrentMedia] = useState({
        type: 'video',
        src: allVideos.length > 0 ? allVideos[0] : null,
    });

    const [smallImages] = useState(allImages.slice(0, 5));
    const [visibleImagesIndex, setVisibleImagesIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            rotateVisibleImages();
        }, 4000);

        // Cleanup function for useEffect
        return () => clearInterval(interval);
    }, [visibleImagesIndex]);

    const rotateVisibleImages = () => {
        setVisibleImagesIndex((prevIndex) => (prevIndex + 1) % smallImages.length);
    };

    const handleMediaClick = (media, index) => {
        setShowModal(true);
        setSelectedMediaIndex(index);

        // Determine if the clicked media is an image or video
        if (media.endsWith('.jpg')) {
            setCurrentMedia({
                type: 'image',
                src: media,
            });
        } else if (media.endsWith('.mp4')) {
            setCurrentMedia({
                type: 'video',
                src: media,
            });
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="boat-images-container">
            <div className="chosen-boat-big-image-container" onClick={() => handleMediaClick(currentMedia.src, 0)}>
                
                    <video className="chosen-boat-big-image" src={allVideos[0]} autoPlay loop muted>
                        Your browser does not support the video tag.
                    </video>
                
            </div>
            <div className="chosen-boat-small-images-container">
                {smallImages.map((image, index) => {
                    const offsetIndex = (index + visibleImagesIndex) % smallImages.length;
                    const isVisible = index < 4;

                    return (
                        <div
                            key={index}
                            className="chosen-boat-small-image-container"
                            style={{
                                transition: 'opacity 0.3s ease-in-out',
                                opacity: isVisible ? 1 : 0,
                                transform: `translateX(${isVisible ? 0 : -100}%)`,
                                pointerEvents: isVisible ? 'auto' : 'none',
                            }}
                        >
                            <img
                                className="chosen-boat-small-image"
                                src={smallImages[offsetIndex]}
                                alt={`Boat ${offsetIndex + 1}`}
                                onClick={() => handleMediaClick(smallImages[offsetIndex], offsetIndex + 1)}
                            />
                        </div>
                    );
                })}
            </div>
            {showModal && (
                <Modal
                    media={currentMedia.type === 'image' ? allImages.concat(allVideos) : allVideos.concat(allImages)}
                    initialIndex={selectedMediaIndex}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

ChosenBoatImagesComponent.propTypes = {
    boat: PropTypes.shape({
        img: PropTypes.string.isRequired,
        images: PropTypes.objectOf(PropTypes.string).isRequired,
        videos: PropTypes.objectOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ChosenBoatImagesComponent;
