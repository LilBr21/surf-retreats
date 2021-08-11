import './Arrow.styles.css';

const PrevArrow = ({onClick}) => {
    return (
        <div className="prev-arrow" onClick={onClick}>
            <button className="prev-button">Prev</button>
        </div>
    )
}

export default PrevArrow;