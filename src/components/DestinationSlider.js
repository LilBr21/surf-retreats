import Slider from "react-slick";
import DestinationCard from './DestinationCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './DestinationSlider.styles.css';

const DestinationSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }; 
    return (
        <Slider {...settings} className="slider">
            <DestinationCard 
                destination='Portugal'
                placedescription='Explore one of the finest Europe surf spots with us
                in Portugal. Our base is located in Peniche, one of the most famous
                surf spots.'
            />
            <DestinationCard
                destination='Costa Rica'
                placedescription='Paradise on Earth when it comes to riding lefts.
                Long waves perfect for longboarders and begginers.'
            />
        </Slider>
    )
};

export default DestinationSlider;