import './DescriptionOfTheChosenBoatStyle.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function DescriptionOfTheChoosenBoat({ boat }) {
    const { t } = useTranslation();

    const {description} = boat
    return(
        <>
            <div className="boat-description-and-title-container">
                <h2 className="boat-description-title">{t("description")}</h2>
                <div className="boat-description-container">
                    <p className="boat-description">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

DescriptionOfTheChoosenBoat.propTypes = {
    boat: PropTypes.shape({
        description: PropTypes.string.isRequired,
        
    }).isRequired,
};

export default DescriptionOfTheChoosenBoat;