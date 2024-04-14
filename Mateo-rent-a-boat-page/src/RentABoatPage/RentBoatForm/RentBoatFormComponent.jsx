import React, { useState } from 'react';
import './RentBoatFormStyle.css';
import logo from '../../assets/MatinLogo.png';

function RentABoatFormComponent() {
    const [selectedDate, setSelectedDate] = useState('');
    const [formError, setFormError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleDateChange = (event) => {
        const selectedDateString = event.target.value;
        setSelectedDate(selectedDateString);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormError('');

        const form = event.target;
        const formData = new FormData(form);

        // Validation rules
        const validationRules = [
            { field: 'Name and surname', errorMessage: 'Please fill in your name and surname.' },
            { field: 'email', errorMessage: 'Please enter a valid email address.' },
            { field: 'phone-number', errorMessage: 'Please enter a valid mobile number (e.g., 095-356-587).' },
            { field: 'rent-date', errorMessage: 'Please select a date for renting the boat.' },
            { field: 'iagree-checkbox', errorMessage: 'Please agree to the terms and conditions.' }
        ];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
        const phoneRegex = /^\d{3}-\d{3}-\d{3}$/; // Regex for mobile number (e.g., 095-356-587)

        for (const { field, errorMessage } of validationRules) {
            const value = formData.get(field);

            if (!value) {
                setFormError(errorMessage);
                return;
            }

            if (field === 'email' && !emailRegex.test(value)) {
                setFormError(errorMessage);
                return;
            }

            if (field === 'phone-number' && !phoneRegex.test(value)) {
                setFormError(errorMessage);
                return;
            }

            if (field === 'rent-date' && !value) {
                setFormError(errorMessage);
                return;
            }

            if (field === 'iagree-checkbox' && value !== 'Agreed') {
                setFormError(errorMessage);
                return;
            }
        }

        // Submit the form
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset(); // Clear form fields
            } else {
                throw new Error('Failed to submit form.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormError('Failed to submit the form. Please try again later.');
        }
    };

    return (
        <>
            <div className='rent-aboat-form-container'>
                <h2 className='rent-aboat-form-title'>Rent this boat</h2>
                {!isSubmitted ? (
                    <form className='rent-aboat-form' onSubmit={handleSubmit}>
                        <div className='important-data-and-logo-container'>
                            <div className='important-data-container'>
                                <label className='input-label'>Name and surname</label>
                                <input name='Name and surname' type='text' placeholder='John Snow' />
                                <label className='input-label'>E-mail</label>
                                <input name='email' type='text' placeholder='something@gmail.com' />
                                <label className='input-label'>Mobile number</label>
                                <input name='phone-number' type='text' placeholder='095-356-587' />
                                <label className='input-label'>Date</label>
                                <input
                                    type='date'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                                <input
                                    name='rent-date'
                                    type='hidden'
                                    value={selectedDate}
                                />
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
                            {formError && <div className="error-message">{formError}</div>}
                        </div>
                        <button type='submit' className='book-the-boat'>Book the boat</button>
                    </form>
                ) : (
                    <div className="submission-success">
                        <p className='input-label'>Thank you for your submission!</p>
                        {/* You can add additional content or a link here */}
                    </div>
                )}
            </div>
        </>
    );
}

export default RentABoatFormComponent;
