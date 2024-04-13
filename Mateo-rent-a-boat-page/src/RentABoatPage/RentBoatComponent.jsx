import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponents/HeaderComponent';
import ChosenBoatImagesComponent from './ChoosenBoatImages/ChosenBoatImagesComponent';
import DescriptionOfTheChoosenBoat from './DescriptionOfChosenBoat/DescriptionOfTheChosenBoat';

function RentBoatComponent() {
    return(

        <>
            <HeaderComponent />
            <ChosenBoatImagesComponent />
            <DescriptionOfTheChoosenBoat />
            <FooterComponent />
        
        </>
    );
}

export default RentBoatComponent;