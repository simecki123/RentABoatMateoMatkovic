import React from 'react';
import PropTypes from 'prop-types';
import './RentalPricesStyle.css';
import { useTranslation } from 'react-i18next';

function RentalPricesComponent({ boat }) {
    const { t } = useTranslation();

    const { prices } = boat; // Destructure the 'prices' object from the 'boat' prop

    return (
        <div className='rental-prices-big-container'>
            <h2 className='rental-prices-title'>{t("rentalPrices")}</h2>
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
                        <li className='rental-note'>{t("rentalprice1")}</li>
                        <li className='rental-note'>{t("rentalprice2")}</li>
                        <li className='rental-note'>{t("rentalprice3")}</li>
                        <li className='rental-note'>{t("rentalprice4")}</li>
                        <li className='rental-note'>{t("rentalprice5")}</li>
                        <li className='rental-note'>{t("rentalprice6")}</li>
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
