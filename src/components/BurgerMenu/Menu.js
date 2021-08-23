import { Link } from 'react-scroll';

import styled from 'styled-components';

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    padding: 2rem;
    position: absolute;
    background-color: #fff;
    top: 24rem;
    right: 0;
    transition: transform 0.3s ease-out;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};

    @media (max-width: 540px) {
        width: 100%;
        padding: 0;
    }
`;

const StyledLink = styled.div`
    font-size: 1.5rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #184b4e;
    transition: color 0.3s linear;
    cursor: pointer;
`;

const Menu = ({open, setOpen}) => {
    return (
        <StyledMenu open={open}>
            <StyledLink>
                <Link
                    to="description"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    className="link"
                    onClick={() => setOpen(!open)}>
                    Description
                </Link>
            </StyledLink>
            <StyledLink>
                <Link
                    to="destinations"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    className="link"
                    onClick={() => setOpen(!open)}>
                    Destinations
                </Link>
            </StyledLink>
            <StyledLink>
                <Link
                    to="gallery"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    className="link"
                    onClick={() => setOpen(!open)}>
                    Gallery
                </Link>
            </StyledLink>
            <StyledLink>
                <Link 
                    to="faq"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    className="link"
                    onClick={() => setOpen(!open)}>
                    FAQ
                </Link>
            </StyledLink>
            <StyledLink>
                <Link 
                    to="bookings"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    className="link"
                    onClick={() => setOpen(!open)}>
                    Bookings
                </Link>
            </StyledLink>
        </StyledMenu>
    )
};

export default Menu;