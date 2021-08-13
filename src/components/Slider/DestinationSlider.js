import { useState } from 'react';

import Slider from "react-slick";
import DestinationCard from './DestinationCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './DestinationSlider.styles.css';

import portugalpic from '../../portugal-surf.jpg';
import costaricapic from '../../costa-rica-surf.jpg';
import panamapic from '../../panama-surf.jpg';
import moroccopic from '../../morocco-surf.jpg';

const DestinationSlider = () => {
    const [destinationIndex, setDestinationIndex] = useState(0);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setDestinationIndex(next)
    }; 

    console.log(destinationIndex);

    return (
        <Slider {...settings} className="slider">
            <DestinationCard
                destination='Portugal'
                placedescription="Explore one of the finest Europe surf spots 
                    with us in Portugal. Our base is located in Peniche, one of 
                    the most famous surf spots. Peniche is known for it's long 
                    beach breaks, sandy beaches and great left and right waves 
                    to catch."
                picture={portugalpic}
                chosenplace={destinationIndex}
            />
            <DestinationCard
                destination='Costa Rica'
                placedescription="Paradise on Earth for surfers. A huge variety 
                of waves makes it a perfect place for begginers and advanced 
                surfers. You won't get bored here. It's up to you wether you 
                choose to surf all day or go for a hike into the jungle or maybe 
                ride a horse during the sunset on the beach"
                picture={costaricapic}
                chosenplace={destinationIndex}
            />
            <DestinationCard
                destination='Panama'
                placedescription="Travel with us to Panama and stay in Santa 
                Catalina - surfers paradise. This place is well known for it's 
                consistent waves all year round. There are places begginer 
                friendly, and some are expert-only."
                picture={panamapic}
                chosenplace={destinationIndex}
            />
            <DestinationCard 
                destination='Morocco'
                placedescription='Are you ready to surf the best waves of Africa? 
                Join our next surf retreat in Morocco! Sun all year round, long 
                waves and famous righthand spots. Sounds like a plan? Book your 
                surf trip to Morocco with us!'
                picture={moroccopic}
                chosenplace={destinationIndex}
            />
        </Slider>
    )
};

export default DestinationSlider;