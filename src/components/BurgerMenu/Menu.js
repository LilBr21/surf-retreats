import { Link } from 'react-scroll';

import { StyledMenu } from './Menu.styled';
import { StyledLink } from './Link.styled';

const Menu = () => {
    return (
        <StyledMenu>
        <div className="menu">
            <StyledLink>
            <Link
            to="description"
            activeClass="active"
            spy={true}
            smooth={true}
            className="link">
                Description
            </Link>
            </StyledLink>
            <StyledLink>
            <Link
            to="destinations"
            activeClass="active"
            spy={true}
            smooth={true}
            className="link">
                Destinations
            </Link>
            </StyledLink>
            <StyledLink>
            <Link
            to="gallery"
            activeClass="active"
            spy={true}
            smooth={true}
            className="link">
                Gallery
            </Link>
            </StyledLink>
            <StyledLink>
            <Link 
            to="faq"
            activeClass="active"
            spy={true}
            smooth={true}
            className="link">
                FAQ
            </Link>
            </StyledLink>
            <StyledLink>
            <Link 
            to="bookings"
            activeClass="active"
            spy={true}
            smooth={true}
            className="link">
                Bookings
            </Link>
            </StyledLink>
        </div>
        </StyledMenu>
    )
};

export default Menu;