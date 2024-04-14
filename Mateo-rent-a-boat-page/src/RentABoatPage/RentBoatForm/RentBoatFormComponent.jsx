import React, { useState } from 'react';
import './RentBoatFormStyle.css';
import logo from '../../assets/MatinLogo.png';

function RentABoatFormComponent() {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        const selectedDateString = event.target.value;
        setSelectedDate(selectedDateString);
    };

    return (
        <>
            <div className='rent-aboat-form-container'>
                <h2 className='rent-aboat-form-title'>Rent this boat</h2>
                <form className='rent-aboat-form' action="https://api.web3forms.com/submit" method="POST">
                    <div className='important-data-and-logo-container'>
                        <div className='important-data-container'>
                            <label className='input-label'>Name and surname</label>
                            <input name='Name and surname' type='text' placeholder='John Snow' />
                            <label className='input-label'>E-mail</label>
                            <input name='email' type="text" placeholder='something@gmail.com' />
                            <label className='input-label'>Mobile number</label>
                            <input name='phone-number' type='number' placeholder='095-356-587' />
                            <label className='input-label'>Date</label>
                            {/* Visible date input allowing user selection */}
                            <input
                                type='date'
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                            {/* Hidden input to store selected date for form submission */}
                            <input
                                name='rent-date'
                                type='hidden'
                                value={selectedDate}
                            />
                            {/* Access key for Web3Forms API (assuming it's required) */}
                            <input
                                type="hidden"
                                name="access_key"
                                value="07e223af-d705-4551-a5f6-fcd705f6d17b"
                            />
                        </div>
                        <div className='logo-container'>
                            <img className='logo-in-form' src={logo} alt="Logo" />
                        </div>
                    </div>
                    <div className='message-checkbox-button-container'>
                        <label className='input-label'>Message</label>
                        <textarea name='additional-message' placeholder='Write important additional message here for us.' />
                        <input type='checkbox' id="checkbox1" name="iagree-checkbox" value="Agreed" />
                        <label htmlFor="checkbox1">I Agree</label>
                        <p>By sending an inquiry through this form, you acknowledge you are familiar with the privacy policy and agree with it. With this, you also give consent (permission) for the collection and processing of personal data specified in the form, and which are necessary for us to be able to accommodate your request.</p>
                    </div>
                    <button type='submit' className='book-the-boat'>Book the boat</button>
                </form>
            </div>
        </>
    );
}

export default RentABoatFormComponent;
