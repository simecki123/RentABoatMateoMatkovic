import React from 'react';
import PropTypes from 'prop-types';
import './TechnicalCharacteristicsOfTheBoatStyle.css';
import { useTranslation } from 'react-i18next';

function TechnicalCharacteristiccsOfTheBoat({ boat }) {
    const { t } = useTranslation();

    const {id, Technical_characteristics, Additional_equipment } = boat; // Destructure 'Technical_characteristics' and 'Additional_equipment' from the 'boat' prop

    return (
        <div className="technical-characteristics-and-additional-equipment-container">
            <h2 className="technical-characteristics-and-additional-equipment-title">{t("technicalCharacteristicsAndAdditionalEqouipment")}</h2>
            <div className="techical-characteristics-and-additional-equipment-small-container">
                <div className='technical-characteristics-container'>
                    <h3 className='technical-characteristics-title'>{t("technicalCharacteristics")}</h3>
                    <ul className='unordered-list-technical-characteristics-and-additional-equipment'>
                        {Object.entries(Technical_characteristics).map(([key, value]) => (
                            <li key={key} className='list-technical-characteristics-and-additional-equipment'>
                                {t(`technicalCharacteristiclist${id}${key}`)}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='additional-equipment-container'>
                    <h3 className='technical-characteristics-title'>{t("AdditionalEquipment")}</h3>
                    <ul className='unordered-list-technical-characteristics-and-additional-equipment'>
                        {Object.entries(Additional_equipment).map(([key, value]) => (
                            <li key={key} className='list-technical-characteristics-and-additional-equipment'>
                                {t(`additionalEquipmentList${id}${key}`)}
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
        id: PropTypes.number.isRequired,
        Technical_characteristics: PropTypes.object.isRequired, // 'Technical_characteristics' should be an object
        Additional_equipment: PropTypes.object.isRequired, // 'Additional_equipment' should be an object
    }).isRequired,
};

export default TechnicalCharacteristiccsOfTheBoat;
