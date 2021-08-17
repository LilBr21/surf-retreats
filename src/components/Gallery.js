import Slider from "react-slick";
import NextArrow from './Slider/NextArrow';
import PrevArrow from './Slider/PrevArrow';
import DecorationWave from './DecorationWave';

import gallerypic1 from '../assets/austin-neill-uHD0uyp79Dg-unsplash.jpg';
import gallerypic2 from '../assets/austin-neill-Z6v4dSNayVg-unsplash.jpg';
import gallerypic3 from '../assets/koji-futami-H5xFET9Fvlw-unsplash.jpg';
import gallerypic4 from '../assets/luis-santiago-y8LhzOXTi1c-unsplash.jpg';

import './Gallery.styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const gallerypics = [gallerypic1, gallerypic2, gallerypic3, gallerypic4];

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // beforeChange: (current, next) => setDestinationIndex(next)
    };
    
    return (
        <div>
            <DecorationWave />
            <div className="gallery">
                <Slider {...settings}>
                    {gallerypics.map((img) => (
                        <div>
                            <img src={img} alt="retreats gallery pictures"/>
                        </div>
                    ))}
                </Slider>
            </div>
            <DecorationWave />
        </div>
    )

};

export default Gallery;