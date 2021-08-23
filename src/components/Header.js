import styled from 'styled-components';

import headerpicture from '../assets/headerpic.png';

const StyledHeader = styled.div`

    position: relative;
    width: 110%;
    height: 28rem;
    z-index: 0;
    transform: rotateZ(-5deg) translateY(-6rem) translateX(-1rem);
    background-image: 
        linear-gradient(to right, transparent, 50%, #184b4e), 
        url(${props => props.img});
        background-size: 100%;
    
    @media (max-width: 540px) {
        background-color: #184b4e;
        background-image: initial;
        height: 15rem;
    }

    & h1 {
        position: absolute;
        margin-top: 15rem;
        margin-left: 65%;
        transform: rotateZ(15deg);
        color: #fff;
        font-family: 'Pacifico';
        font-size: 45px;

        @media (max-width: 540px) {
            margin-top: 7.5rem;
            font-size: 30px;
        }
    }
`;

const Header = () => {
    return (
        <div>
            <StyledHeader img={headerpicture}>
                <h1>Surf Chasers</h1>
            </StyledHeader>
        </div>
    );
};

export default Header;