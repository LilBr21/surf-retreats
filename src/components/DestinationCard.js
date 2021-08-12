import './DestinationCard.styles.css';

const DestinationCard = (props) => {
    return (
        <div className="card">
            <h2 className="destination-name">{props.destination}</h2>
            <p className="place-description">{props.placedescription}</p>
            <img className="destination-pic" src={props.picture} alt="portugal surf" />
        </div>
    )
};

export default DestinationCard;