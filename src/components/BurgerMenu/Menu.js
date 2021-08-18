import { Link } from 'react-scroll';

import { StyledMenu } from './Menu.styled';
import { StyledLink } from './Link.styled';

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