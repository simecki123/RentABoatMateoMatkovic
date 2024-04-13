import './RentalPricesStyle.css';

function RentalPricesComponent(){
    return(
        <>
            <div className='rental-prices-big-container'>
                <h2 className='rental-prices-title'>Rental prices:</h2>
                <div className='rental-prices-main-container'>
                    <div className='rental-prices-small-container'>
                        <ul className='rental-prices-list'>
                            <li className='rental-price'>1.5-31.5              300€</li>
                            <hr></hr>
                            <li className='rental-price'>1.6-30.6              350€</li>
                            <hr></hr>
                            <li className='rental-price'>1.7-31.8              400€</li>
                            <hr></hr>
                            <li className='rental-price'>1.9-30.9              350€</li>
                        </ul>
                    </div>
                    <div className='rental-prices-small-container'>
                        <ul className='rental-price-list'>
                            <li className='rental-note'>*Stated prices are for one day rental</li>
                            <li className='rental-note'>*The half-day rental price is 70% of the full day rental price</li>
                            <li className='rental-note'>*Skipper price is 100 € per day</li>
                            <li className='rental-note'>*Fuel is not included in the price</li>
                            <li className='rental-note'>*The security deposit is 600 euros</li>
                            <li className='rental-note'>*Payment when taking over the boat</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RentalPricesComponent;