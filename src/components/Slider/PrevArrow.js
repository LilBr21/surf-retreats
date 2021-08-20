
import { StyledSliderButton } from './SliderButtons.styled';

const PrevArrow = ({onClick}) => {
    return (
        <div onClick={onClick}>
            <StyledSliderButton prevbutton>Prev</StyledSliderButton>
        </div>
    )
}

export default PrevArrow;