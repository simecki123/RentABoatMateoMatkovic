import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponents/HeaderComponent';
import ChosenBoatImagesComponent from './ChoosenBoatImages/ChosenBoatImagesComponent';
import DescriptionOfTheChoosenBoat from './DescriptionOfChosenBoat/DescriptionOfTheChosenBoat';
import RentABoatFormComponent from './RentBoatForm/RentBoatFormComponent';
import RentalPricesComponent from './RentalPricesOfTheBoat/RentalPricesComponent';
import TechnicalCharacteristiccsOfTheBoat from './TechnicalcharacteristicsAndEquipment/TechicnalCharacteristicsOfTheBoat';

function RentBoatComponent() {
    return(

        <>
            <HeaderComponent />
            <ChosenBoatImagesComponent />
            <DescriptionOfTheChoosenBoat />
            <TechnicalCharacteristiccsOfTheBoat />
            <RentalPricesComponent />
            <RentABoatFormComponent />
            <FooterComponent />
        
        </>
    );
}

export default RentBoatComponent;