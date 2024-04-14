import React from 'react';
import PropTypes from 'prop-types';
import './TechnicalCharacteristicsOfTheBoatStyle.css';

function TechnicalCharacteristiccsOfTheBoat({ boat }) {
    const { Technical_characteristics, Additional_equipment } = boat; // Destructure 'Technical_characteristics' and 'Additional_equipment' from the 'boat' prop

    return (
        <div className="technical-characteristics-and-additional-equipment-container">
            <h2 className="technical-characteristics-and-additional-equipment-title">Technical characteristics and additional equipment:</h2>
            <div className="techical-characteristics-and-additional-equipment-small-container">
                <div className='technical-characteristics-container'>
                    <h3 className='technical-characteristics-title'>Technical characteristics:</h3>
                    <ul className='unordered-list-technical-characteristics-and-additional-equipment'>
                        {Object.entries(Technical_characteristics).map(([key, value]) => (
                            <li key={key} className='list-technical-characteristics-and-additional-equipment'>
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='additional-equipment-container'>
                    <h3 className='technical-characteristics-title'>Additional equipment:</h3>
                    <ul className='unordered-list-technical-characteristics-and-additional-equipment'>
                        {Object.entries(Additional_equipment).map(([key, value]) => (
                            <li key={key} className='list-technical-characteristics-and-additional-equipment'>
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

TechnicalCharacteristiccsOfTheBoat.propTypes = {
    boat: PropTypes.shape({
        Technical_characteristics: PropTypes.object.isRequired, // 'Technical_characteristics' should be an object
        Additional_equipment: PropTypes.object.isRequired, // 'Additional_equipment' should be an object
    }).isRequired,
};

export default TechnicalCharacteristiccsOfTheBoat;
