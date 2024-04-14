import './RentBoatFormStyle.css';
import logo from '../../assets/MatinLogo.png';

function RentABoatFormComponent() {
    return(
        <>
            <div className='rent-aboat-form-container'>
                <h2 className='rent-aboat-form-title'>Rent this boat</h2>
                <form className='rent-aboat-form'>
                    <div className='important-data-and-logo-container'>
                        <div className='important-data-container'>
                            <label className='input-label'>Name and surname</label>
                            <input type='text' placeholder='John Snow' />
                            <label className='input-label'>E-mail</label>
                            <input type="text" placeholder='something@gmail.com' />
                            <label className='input-label'>Mobile number</label>
                            <input type='number' placeholder='095-356-587' />
                            <label className='input-label'>Date</label>
                            <input type='date' placeholder='07/07/2024' />
                        </div>
                        <div className='logo-container'>
                            <img className='logo-in-form' src={logo} />
                        </div>
                    </div>
                    <div className='message-checkbox-button-container'>
                        <label className='input-label'>Message</label>
                        <textarea placeholder='Write important additonal message here for us.' />
                        <input type='checkbox'id="checkbox1" name="iagreecheckbox" value="Agreed" />
                        <label > I Agree</label>
                        <p>By sending an inquiry through this form, you acknowledge you are familiar
                             with the privacy policy and agree with it. With this you also give consent
                              (permission) for the collection and processing of personal data specified
                               in the form, and which are necessary for us to be able to accommodate your
                                request.</p>
                    </div>
                    <button className='book-the-boat'>Book the boat</button>
                </form>
            </div>
        </>
    );
}

export default RentABoatFormComponent;