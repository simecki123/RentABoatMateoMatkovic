import './DescriptionOfTheChosenBoatStyle.css';
import PropTypes from 'prop-types';

function DescriptionOfTheChoosenBoat({ boat }) {
    const {description} = boat
    return(
        <>
            <div className="boat-description-and-title-container">
                <h2 className="boat-description-title">Description:</h2>
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