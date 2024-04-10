import './Boat-for-rent-style.css';
import BoatCardComponent from './Boat-forRent-Card-Component/BoatCard';
import boat1 from '../assets/boat1.jpg';

function BoatsForRentComponent() {
    const boats = [{
        "img": boat1,
        "name": "August",
        "length": "6.3m",
        "width": "2.3m",
        "engine": "Destroyer69",
        "persons": "6",
        "price": "from 400€"
    }];

    return (
        <div id='boats-for-rent' className="boats-about-us-container">
            <div className="boats-for-rent-title">
                <h2 className="title-for-rent-boats">Boats for rent</h2>
                
                <div className='allboats-for-rent'>
                    {boats.map((boat, index) => (
                        <BoatCardComponent key={index} boat={boat} />
                        
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BoatsForRentComponent;
