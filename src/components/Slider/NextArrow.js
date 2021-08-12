import './Arrow.styles.css';

const NextArrow = ({onClick}) => {
    return (
        <div className="next-arrow" onClick={onClick}>
            <button className="next-button">Next</button>
        </div>
    )
}

export default NextArrow;