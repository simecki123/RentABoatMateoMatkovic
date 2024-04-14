import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponents/HeaderComponent';
import ChosenBoatImagesComponent from './ChoosenBoatImages/ChosenBoatImagesComponent';
import DescriptionOfTheChoosenBoat from './DescriptionOfChosenBoat/DescriptionOfTheChosenBoat';
import RentABoatFormComponent from './RentBoatForm/RentBoatFormComponent';
import RentalPricesComponent from './RentalPricesOfTheBoat/RentalPricesComponent';
import TechnicalCharacteristiccsOfTheBoat from './TechnicalcharacteristicsAndEquipment/TechicnalCharacteristicsOfTheBoat';
import boatsData from '../boatsDataFolder/boatsData';
import { useParams } from 'react-router-dom';

function RentBoatComponent() {
    const { id } = useParams(); // Get the 'id' parameter from the URL

    // Find the boat with the matching 'id' from the URL in the boatsData array
    const selectedBoat = boatsData.find((boat) => boat.id === parseInt(id));

    if (!selectedBoat) {
        return <div>Boat not found</div>;
    }

    return (
        <>
            <HeaderComponent />
            <ChosenBoatImagesComponent boat={selectedBoat}  />
            <DescriptionOfTheChoosenBoat  boat={selectedBoat} />
            <TechnicalCharacteristiccsOfTheBoat boat={selectedBoat}  />
            <RentalPricesComponent boat={selectedBoat} />
            <RentABoatFormComponent  />
            <FooterComponent />
        </>
    );
}

export default RentBoatComponent;