import BoatsForRentComponent from '../Boats-for-rent-component/BoatForRentComponent'
import HeaderComponent from '../HeaderComponents/HeaderComponent'
import BoatPictureComponent from '../Pictures-of-boat-components/BoatPictureComponent'

function MainPageComponent(){
    return (
        <>
          <HeaderComponent />
          <BoatPictureComponent />
          <BoatsForRentComponent />
        </>
      )
}

export default MainPageComponent;