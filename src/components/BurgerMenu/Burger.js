import styled from 'styled-components';

const StyledBurger = styled.button`
    position: absolute;
    top: 23rem;
    right: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media (max-width: 540px) {
            top: 10rem;
        }

    &:focus {
        outline: none;
    }

    & div {
        width: 2rem;
        height: 0.25rem;
        background: #184b4e;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
`;

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div className="burger-part"></div>
            <div className="burger-part"></div>
            <div className="burger-part"></div>
        </StyledBurger>
    )
};

export default Burger;