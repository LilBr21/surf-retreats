import { useState } from 'react';

import CardExtension from './CardExtension';

import './DestinationCard.styles.css';

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
            {cardIsShown ? <div className="card">
                <h2 className="destination-name">{props.destination}</h2>
                <p className="place-description">{props.placedescription}</p>
                <img className="destination-pic" src={props.picture} alt="portugal surf" />
                <button className="card-btn" onClick={showExtensionHandler}>Click for more info</button>
            </div> : null}
            <div className="extension">
                {extensionIsShown ? <CardExtension onHideExtensionHandler={hideExtensionHandler} chosenplace={props.chosenplace}/> : null}
            </div>
        </div>
    )
};

export default DestinationCard;