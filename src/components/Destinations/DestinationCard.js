import { useState } from 'react';

import styled from 'styled-components';

import CardExtension from './CardExtension';

const StyledCard = styled.div`
   -webkit-box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 15px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    height: 700px;
    max-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    @media (max-width: 540px) {
        height: 100%;
    }

    & div {
        max-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
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
                <div>
                <h2>{props.destination}</h2>
                <p>{props.placedescription}</p>
                <img src={props.picture} alt="portugal surf" />
                <button 
                    onClick={showExtensionHandler}>
                    Click for more info
                </button>
                </div>
            </StyledCard> : null}
            <div>
                {extensionIsShown ? <CardExtension 
                    onHideExtensionHandler={hideExtensionHandler} 
                    cardnumber={props.cardnumber}/> : null
                }
            </div>
        </div>
    )
};

export default DestinationCard;