import React, { useState } from 'react'

import useInput from '../hooks/use-input'
import './Form.styles.css';

const isNotEmpty = value => value.trim() !== '';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { 
        value: enteredName, 
        isValid: nameIsValid,
        hasError: nameInputHasError, 
        valueChangeHandler: nameChangeHandler, 
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(isNotEmpty); 

    const {
        value: enteredSurname,
        isValid: surnameIsValid,
        hasError: surnameInputHasError,
        valueChangeHandler: surnameChangeHandler,
        inputBlurHandler: surnameBlurHandler,
        reset: resetSurnameInput
    } = useInput(isNotEmpty)

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    const {
        value: enteredPhoneNum,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhoneInput
    } = useInput(isNotEmpty);
    
    let formIsValid = false;

    if (nameIsValid && surnameIsValid && emailIsValid && phoneIsValid) {
        formIsValid = true;
    }

    // const emailRegex = /@"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"/;

    // const emailIsValid = (emailRegex.isMatch(enteredEmail));

    const checkValidityHandler = (event) => {
        event.preventDefault();

        if (!nameIsValid || !surnameIsValid || !emailIsValid || !phoneIsValid) {
            return;
        }

        resetNameInput();
        resetSurnameInput();
        resetEmailInput();
        resetPhoneInput();
        setIsSubmitted(true);
    }
        
    return (
        <div className="form-wrapper">
            <form className="form">
                <label className="label" htmlFor="name">Name:</label>
                <input 
                    className="input" 
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                <label className="label" htmlFor="surname">Surname:</label>
                <input 
                    className="input" 
                    type="text" 
                    id="surname"
                    onChange={surnameChangeHandler}
                    onBlur={surnameBlurHandler}
                    value={enteredSurname}
                />
                <label className="label" htmlFor="email">E-mail:</label>
                <input 
                    className="input" 
                    type="email" 
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                <label className="label" htmlFor="phoenum">Phone number:</label>
                <input 
                    className="input" 
                    type="tel" 
                    id="phonenum"
                    onChange={phoneChangeHandler}
                    onBlur={phoneBlurHandler}
                    value={enteredPhoneNum}
                />
                <label className="label" htmlFor="destination">Destination:</label>
                <select className="input" id="destination">
                    <option value="portugal">Portugal</option>
                    <option value="costarica">Costa Rica</option>
                    <option value="panama">Panama</option>
                    <option value="morocco">Morocco</option>
                </select>
                {nameInputHasError && (<p className="validation-msg">Name must not be empty</p>)}
                {surnameInputHasError && (<p className="validation-msg">Surname must not be empty</p>)}
                {emailHasError && (<p className="validation-msg">Please enter correct email</p>)}
                {phoneHasError && (<p className="validation-msg">Please enter correct phone number</p>)}
                {isSubmitted && (<p>Form is submitted!</p>)}
                <button 
                    className="form-btn" 
                    type="submit" 
                    onClick={checkValidityHandler} 
                    disabled={!formIsValid}>
                    Contact us
                </button>
            </form>
        </div>
    )
};

export default Form;