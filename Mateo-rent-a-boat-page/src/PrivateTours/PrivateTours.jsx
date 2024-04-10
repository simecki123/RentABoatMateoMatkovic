import BoatsForRentComponent from "../Boats-for-rent-component/BoatForRentComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponents/HeaderComponent";
import PrivateToursMapComponent from "./PrivateToursMap/PrivateToursMapComponent";
import PrivateToursImages from "./PrivateToursPictures/PrivateToursImages";
import PrivateToursText from "./PrivateToursText/PrivateToursText";

function PrivateTours() {
    return(

        <>
            <HeaderComponent />
            <PrivateToursText />
            <PrivateToursImages />
            <PrivateToursMapComponent />
            <BoatsForRentComponent />
            <FooterComponent />
        </>
    );
}

export default PrivateTours;