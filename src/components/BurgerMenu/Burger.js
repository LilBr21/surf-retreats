import { StyledBurger } from './Burger.styled';

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