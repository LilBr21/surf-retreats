
const DestinationCard = (props) => {
    return (
        <div className="card">
            <h2>{props.destination}</h2>
            <p>{props.placedescription}</p>
            <div>{props.picture}</div>
        </div>
    )
};

export default DestinationCard;