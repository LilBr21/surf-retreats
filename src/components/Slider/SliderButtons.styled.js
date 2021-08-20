import styled from 'styled-components';

export const StyledSliderButton = styled.button`
    position: absolute;
    z-index: 10;
    height: 45px;
    width: 45px;
    border: none;
    border-radius: 50%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    background-color: #a26576;
    color: #fff;
    cursor: pointer;
    top: 50%;
    left: ${props => props.prevbutton ? '0%' : 'auto'};
    right: ${props => props.nextbutton ? '0%' : 'auto'};

    & :hover {
        background-color: rgb(233, 72, 104);
    }
`; 