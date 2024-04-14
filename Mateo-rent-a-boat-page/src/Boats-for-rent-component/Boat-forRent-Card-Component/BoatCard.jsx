import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BoatCard.css'; // Import CSS for BoatCardComponent

function BoatCardComponent({ boat }) {
    const { id, img, name, length, width, engine, persons, price } = boat;

    return (
        <div className="boat-container">
            <div className="boat-details">
                <h3 className="title">{name}</h3>
                <div className="boat-image">
                    <img className="mini-boat-img" src={img} alt={name} />
                </div>
            </div>
            <div className="boat-info">
                <p className='data'><strong>Length:</strong> {length}</p>
                <p className='data'><strong>Width:</strong> {width}</p>
                <p className='data'><strong>Engine:</strong> {engine}</p>
                <p className='data'><strong>Number of persons:</strong> {persons}</p>
                <p className='data'><strong>Price:</strong> {price}</p>
                <Link to={`/rentBoat/${id}`}>
                    <button className='see-more-btn'>See more &#8680;</button>
                </Link>
            </div>
        </div>
    );
}

// PropTypes for BoatCardComponent
BoatCardComponent.propTypes = {
    boat: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        length: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        engine: PropTypes.string.isRequired,
        persons: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
};

export default BoatCardComponent;
