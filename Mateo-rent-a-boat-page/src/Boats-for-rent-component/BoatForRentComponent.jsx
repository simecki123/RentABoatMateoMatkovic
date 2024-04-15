import './Boat-for-rent-style.css';
import BoatCardComponent from './Boat-forRent-Card-Component/BoatCard';
import boatsData from '../boatsDataFolder/boatsData';
import { useTranslation } from 'react-i18next';

function BoatsForRentComponent() {
    const { t } = useTranslation();

    return (
        <div id='boats-for-rent' className="boats-about-us-container">
            <div className="boats-for-rent-title">
                <h2 className="title-for-rent-boats">{t("boatsForRentTitle")}</h2>
                
                <div className="allboats-for-rent">
                    {boatsData.map((boat) => (
                        <BoatCardComponent key={boat.id} boat={boat} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BoatsForRentComponent;
