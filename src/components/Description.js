import DecorationWave from './DecorationWave';

import './Description.styles.css';


const Description = () => {
    return (
        <div className="description">
            <h2 className="sectitle">It's time to begin your surf adventure!</h2>
            <p className="opening-txt">
                Our mission is to take you to surf paradise and help you make the
                best memories of your life! No matter if you're alfready an advanced
                surfer or just a begginer - we'll be happy to make sure to find
                the best option for you.
            </p>
            <h3>We provide:</h3>
            <div className="benefits">
                <div className="box">
                    <p>Surf classes</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/surf.png" 
                        alt="surfboard"
                    />
                </div>
                <div className="box">
                    <p>Small groups</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/conference-call--v1.png" 
                        alt="group"
                    />
                </div>
                <div className="box">
                    <p>Accomodation</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/country-house.png" 
                        alt="accomodation"
                    />
                </div>
                <div className="box">
                    <p>Best spots</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/island-on-water.png" 
                        alt="palm"
                    />
                </div>
                <div className="box">
                    <p>Friendly instructors</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/smiling-mouth.png"
                        alt="smile"
                    />
                </div>
            </div>
            <p>And many more...</p>
            <DecorationWave />
            <h2 className="sectitle">Destinations:</h2>
        </div>

        //<a href="https://icons8.com/icon/6dL6OzXlCkqV/country-house">Country House icon by Icons8</a>
        
    );
};

export default Description;