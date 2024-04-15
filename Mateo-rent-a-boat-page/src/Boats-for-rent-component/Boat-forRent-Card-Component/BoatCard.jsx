import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BoatCard.css'; // Import CSS for BoatCardComponent
import { useTranslation } from 'react-i18next';

function BoatCardComponent({ boat }) {
    const { t } = useTranslation();
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
                <p className='data'><strong>{t("boatLength")}</strong> {length}</p>
                <p className='data'><strong>{t("boatWidth")}</strong> {width}</p>
                <p className='data'><strong>{t("boatEngine")}</strong> {engine}</p>
                <p className='data'><strong>{t("numOfPersons")}</strong> {persons}</p>
                <p className='data'><strong>{t("boatPrice")}</strong> {price}</p>
                <Link to={`/rentBoat/${id}`}>
                    <button className='see-more-btn'>{t("seeMore")}&#8680;</button>
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
