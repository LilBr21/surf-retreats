import { StyledSliderButton } from './SliderButtons.styled';



const NextArrow = ({onClick}) => {
    return (
        <div onClick={onClick}>
            <StyledSliderButton nextbutton>Next</StyledSliderButton>
        </div>
    )
}

export default NextArrow;