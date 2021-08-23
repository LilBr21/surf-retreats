import { useState } from 'react';

import styled from 'styled-components';

import CardExtension from './CardExtension';

const StyledCard = styled.div`
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 15px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 540px) {
        height: 100%;
    }

    & h2 {
        font-family: 'Pacifico';
    }

    & p {
        margin-left: 2rem;
        margin-right: 2rem;
        text-align: center;
        line-height: 1.5rem;
    }

    & img {
        height: 70%;
        width: 70%;
        border-radius: 15px;
        margin-bottom: 2rem;
    }

    & button {
        height: 2.5rem;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        border-radius: 5px;
        border: none;
        background-color: rgb(233, 72, 104);
        color: #fff;
        font-size: 17px;
        cursor: pointer;

        &:hover {
            background-color: rgb(192, 57, 84);
        }
    }
`;

const DestinationCard = (props) => {
    const [extensionIsShown, setExtensionIsShown] = useState(false);
    const [cardIsShown, setCardIsShown] = useState(true);

    const showExtensionHandler = (event) => {
        event.preventDefault();

        setCardIsShown(false);
        setExtensionIsShown(true);
    };

    const hideExtensionHandler = () => {
        setCardIsShown(true);
        setExtensionIsShown(false);
    };

    return (
        <div>
            {cardIsShown ? <StyledCard>
                <h2>{props.destination}</h2>
                <p>{props.placedescription}</p>
                <img src={props.picture} alt="portugal surf" />
                <button 
                    onClick={showExtensionHandler}>
                    Click for more info
                </button>
            </StyledCard> : null}
            <div className="extension">
                {extensionIsShown ? <CardExtension 
                    onHideExtensionHandler={hideExtensionHandler} 
                    cardnumber={props.cardnumber}/> : null
                }
            </div>
        </div>
    )
};

export default DestinationCard;