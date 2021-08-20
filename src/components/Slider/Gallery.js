import styled from 'styled-components';

import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import DecorationWave from '../DecorationWave';

import gallerypic1 from '../../assets/austin-neill-uHD0uyp79Dg-unsplash.jpg';
import gallerypic2 from '../../assets/austin-neill-Z6v4dSNayVg-unsplash.jpg';
import gallerypic3 from '../../assets/koji-futami-H5xFET9Fvlw-unsplash.jpg';
import gallerypic4 from '../../assets/luis-santiago-y8LhzOXTi1c-unsplash.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const StyledGallery = styled.div`
    width: 60%;
    margin: 10rem auto;

    @media (max-width: 480px) {
        display: none;
    }
`;

const StyledMobileGallery = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;

        & img {
            width: 95%;
            margin: 0 0.5rem 0.5rem 0.5rem;
            border-radius: 5px;
        }
    }
`;

const Gallery = () => {

    const gallerypics = [
        { picture: gallerypic1, id: Math.floor(Math.random() * Date.now()) },
        { picture: gallerypic2, id: Math.floor(Math.random() * Date.now()) },
        { picture: gallerypic3, id: Math.floor(Math.random() * Date.now()) },
        { picture: gallerypic4, id: Math.floor(Math.random() * Date.now()) }
    ];

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    
    return (
        <div id="gallery">
            <DecorationWave />
            <StyledGallery>
                <Slider {...settings}>
                    {gallerypics.map((img) => (
                        <div key={img.id}>
                            <img 
                                src={img.picture} 
                                alt="retreats gallery pictures"
                            />
                        </div>
                    ))}
                </Slider>
            </StyledGallery>
            <StyledMobileGallery>
                {gallerypics.map((img) => (
                    <div key={img.id}>
                        <img 
                            src={img.picture} 
                            alt="retreats gallery pictures"
                        />
                    </div>
                ))}
            </StyledMobileGallery>
            <DecorationWave />
        </div>
    )

};

export default Gallery;