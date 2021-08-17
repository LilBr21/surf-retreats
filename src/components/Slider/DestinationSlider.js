import DestinationCard from './DestinationCard';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './DestinationSlider.styles.css';

import portugalpic from '../../assets/portugal-surf.jpg';
import costaricapic from '../../assets/costa-rica-surf.jpg';
import panamapic from '../../assets/panama-surf.jpg';
import moroccopic from '../../assets/morocco-surf.jpg';

const DestinationSlider = () => {
    return (
            <div className="destinations">
                <DestinationCard
                    destination='Portugal'
                    placedescription="Explore one of the finest Europe surf spots 
                    with us in Portugal. Our base is located in Peniche, one of 
                    the most famous surf spots. Peniche is known for it's long 
                    beach breaks, sandy beaches and great left and right waves 
                    to catch."
                    picture={portugalpic}
                    cardnumber={0}
                />
                <DestinationCard
                    destination='Costa Rica'
                    placedescription="Paradise on Earth for surfers. A huge variety 
                    of waves makes it a perfect place for begginers and advanced 
                    surfers. You won't get bored here. It's up to you wether you 
                    choose to surf all day or go for a hike into the jungle or maybe 
                    ride a horse during the sunset on the beach"
                    picture={costaricapic}
                    cardnumber={1}
                />
                <DestinationCard
                    destination='Panama'
                    placedescription="Travel with us to Panama and stay in Santa 
                    Catalina - surfers paradise. This place is well known for it's 
                    consistent waves all year round. There are places begginer 
                    friendly, and some are expert-only."
                    picture={panamapic}
                    cardnumber={2}
                />
                <DestinationCard 
                    destination='Morocco'
                    placedescription='Are you ready to surf the best waves of Africa? 
                    Join our next surf retreat in Morocco! Sun all year round, long 
                    waves and famous righthand spots. Sounds like a plan? Book your 
                    surf trip to Morocco with us!'
                    picture={moroccopic}
                    cardnumber={3}
                />
            </div>
    )
};

export default DestinationSlider;