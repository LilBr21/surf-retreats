import React, { useState } from 'react'

import styled from 'styled-components';

import useInput from '../hooks/use-input'

const StyledFormWrapper = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    justify-content: center;
    height: 100%;
    width: 75%;
    background: #184b4e;
    margin-bottom: 1.5rem;
    border-radius: 15px;

    & form {
        display: flex;
        flex-direction: column;
        color: #fff;
        width: 16rem;

        & label {
            font-size: 15px;
            font-weight: 500;
            margin-top: 0.75rem;
            margin-bottom: 0.5rem;
        }

        & input, select, textarea {
            height: 1.5rem;
            border-radius: 5px;
        }

        & textarea {
            height: 8rem;
        }

        & p {
            font-size: 15px;
        }

        & button {
            height: 2.5rem;
            margin-top: 2rem;
            border-radius: 5px;
            background-color: rgb(233, 72, 104);
            color: #fff;
            font-size: 17px;
            cursor: pointer;

            &:hover {
                background-color: rgb(192, 57, 84);
            }
        }
    }

    @media (max-width: 540px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`;

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

    const {
        value: enteredMessage,
        isValid: messageIsValid,
        hasError: messageHasError,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessageInput
    } = useInput(isNotEmpty);
    
    let formIsValid = false;

    if (nameIsValid && surnameIsValid && emailIsValid && phoneIsValid && messageIsValid) {
        formIsValid = true;
    }

    // const emailRegex = /@"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"/;

    // const emailIsValid = (emailRegex.isMatch(enteredEmail));

    const checkValidityHandler = (event) => {
        event.preventDefault();

        if (!nameIsValid || !surnameIsValid || !emailIsValid || !phoneIsValid || !messageIsValid) {
            return;
        }

        resetNameInput();
        resetSurnameInput();
        resetEmailInput();
        resetPhoneInput();
        resetMessageInput();
        setIsSubmitted(true);
    }
        
    return (
        <StyledFormWrapper>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                <label className="label" htmlFor="surname">Surname:</label>
                <input 
                    type="text" 
                    id="surname"
                    onChange={surnameChangeHandler}
                    onBlur={surnameBlurHandler}
                    value={enteredSurname}
                />
                <label htmlFor="email">E-mail:</label>
                <input
                    type="email" 
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                <label htmlFor="phoenum">Phone number:</label>
                <input
                    type="tel" 
                    id="phonenum"
                    onChange={phoneChangeHandler}
                    onBlur={phoneBlurHandler}
                    value={enteredPhoneNum}
                />
                <label htmlFor="destination">Destination:</label>
                <select id="destination">
                    <option value="portugal">Portugal</option>
                    <option value="costarica">Costa Rica</option>
                    <option value="panama">Panama</option>
                    <option value="morocco">Morocco</option>
                </select>
                <label htmlFor="message">Message:</label>
                <textarea
                    type="text" 
                    id="message"
                    onChange={messageChangeHandler}
                    onBlur={messageBlurHandler}
                    value={enteredMessage}
                />
                {nameInputHasError && (<p>Name must not be empty</p>)}
                {surnameInputHasError && (<p>Surname must not be empty</p>)}
                {emailHasError && (<p>Please enter correct email</p>)}
                {phoneHasError && (<p>Please enter correct phone number</p>)}
                {messageHasError && (<p>Message must not be empty</p>)}
                {isSubmitted && (<p>Form is submitted!</p>)}
                <button
                    type="submit" 
                    onClick={checkValidityHandler} 
                    disabled={!formIsValid}>
                    Contact us
                </button>
            </form>
        </StyledFormWrapper>
    )
};

export default Form;