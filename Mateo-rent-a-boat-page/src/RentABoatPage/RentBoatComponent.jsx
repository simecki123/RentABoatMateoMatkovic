import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponents/HeaderComponent';
import ChosenBoatImagesComponent from './ChoosenBoatImages/ChosenBoatImagesComponent';
import DescriptionOfTheChoosenBoat from './DescriptionOfChosenBoat/DescriptionOfTheChosenBoat';
import TechnicalCharacteristiccsOfTheBoat from './TechnicalcharacteristicsAndEquipment/TechicnalCharacteristicsOfTheBoat';

function RentBoatComponent() {
    return(

        <>
            <HeaderComponent />
            <ChosenBoatImagesComponent />
            <DescriptionOfTheChoosenBoat />
            <TechnicalCharacteristiccsOfTheBoat />
            <FooterComponent />
        
        </>
    );
}

export default RentBoatComponent;