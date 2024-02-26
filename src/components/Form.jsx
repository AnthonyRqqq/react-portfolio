import { useState } from 'react';
import { validateEmail } from '../utils/helper';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        };
    };

    const handleInputBlur = (event) => {
        if (!event.target.value) {
            setErrorMessage('This field is required.')
        } else {
            setErrorMessage('')
        };
    }

    const handleFormSubmit = (event) => {
        // Prevent page refresh
        event.preventDefault();

        // Checks for valid email
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        };

        // Resets entry fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    };

    return (
        <div className='form-div'>
            <h3 className='row justify-content-center'>Contact Me</h3>
            <form className='contact-form justify-content-center' onSubmit={handleFormSubmit}>
                {/* Input field for a name */}
                <div className='row col justify-content-center'>
                    <input
                        className='col-3'
                        value={name}
                        name='name'
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        type='text'
                        placeholder='name'
                        required
                    /></div>

                {/* Input field for email */}
                <div className='row justify-content-center'>
                    <input
                        className='col-3'
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        type='email'
                        placeholder='email'
                        required
                    /></div>

                {/* Input field for a message */}
                <div className='row justify-content-center'>
                    <input
                        className='col-3 message-input'
                        value={message}
                        name='message'
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        type='text'
                        placeholder='message'
                        required
                    /></div>

                <div className='row justify-content-center'>
                    <button className='col-1 justify-content-center' type='submit'>Submit</button></div>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text row justify-content-center'>{errorMessage}</p>
                </div>
            )};
        </div>
    );
};