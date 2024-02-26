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
        <div>
            <h3>Contact Me</h3>
            <form className='form' onSubmit={handleFormSubmit}>
                {/* Input field for a name */}
                <input
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type='text'
                    placeholder='name'
                    required
                />

                {/* Input field for email */}
                <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type='email'
                    placeholder='email'
                    required
                />

                {/* Input field for a message */}
                <input
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    type='text'
                    placeholder='message'
                    required
                />

                <button type='submit'>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )};
        </div>
    );
};