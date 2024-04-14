import React from 'react';
import PropTypes from 'prop-types';
import './RentalPricesStyle.css';

function RentalPricesComponent({ boat }) {
    const { prices } = boat; // Destructure the 'prices' object from the 'boat' prop

    return (
        <div className='rental-prices-big-container'>
            <h2 className='rental-prices-title'>Rental prices:</h2>
            <div className='rental-prices-main-container'>
                <div className='rental-prices-small-container'>
                    <ul className='rental-prices-list'>
                        {/* Iterate over the entries of 'prices' object */}
                        {Object.entries(prices).map(([monthRange, price]) => (
                            <React.Fragment key={monthRange}>
                                <li className='rental-price'>{monthRange} {price}</li>
                                <hr />
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                <div className='rental-prices-small-container'>
                    <ul className='rental-price-list'>
                        <li className='rental-note'>*Stated prices are for one day rental</li>
                        <li className='rental-note'>*The half-day rental price is 70% of the full day rental price</li>
                        <li className='rental-note'>*Skipper price is 100 € per day</li>
                        <li className='rental-note'>*Fuel is not included in the price</li>
                        <li className='rental-note'>*The security deposit is 600 euros</li>
                        <li className='rental-note'>*Payment when taking over the boat</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

RentalPricesComponent.propTypes = {
    boat: PropTypes.shape({
        prices: PropTypes.object.isRequired, // 'prices' should be an object, not an array
    }).isRequired,
};

export default RentalPricesComponent;
