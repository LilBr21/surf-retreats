import styled from 'styled-components';

import DecorationWave from './DecorationWave';

const StyledDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
        font-family: 'Poppins';
        font-size: 30px;

        @media (max-width: 540px) {
            text-align: center;
        }
    }   
`;

const StyledOpening = styled.p`
    width: 50%;
    font-size: 20px;
    text-align: center;

    @media (max-width: 540px) {
        width: 70%;
    }
`;

const StyledBenefits = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 540px) {
        flex-direction: column;
    }
`;

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50px;
    width: 60px;
    margin: 2.5rem 2.5rem 4.5rem 2.5rem;
    font-weight: 500;
`;

const Description = () => {
    return (
        <StyledDescription id="description">
            <h2>It's time to begin your surf adventure!</h2>
            <StyledOpening>
                Our mission is to take you to surf paradise and help you make the
                best memories of your life! No matter if you're alfready an advanced
                surfer or just a begginer - we'll be happy to make sure to find
                the best option for you.
            </StyledOpening>
            <h3>We provide:</h3>
            <StyledBenefits>
                <StyledBox>
                    <p>Surf classes</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/surf.png" 
                        alt="surfboard"
                    />
                </StyledBox>
                <StyledBox>
                    <p>Small groups</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/conference-call--v1.png" 
                        alt="group"
                    />
                </StyledBox>
                <StyledBox>
                    <p>Accomodation</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/country-house.png" 
                        alt="accomodation"
                    />
                </StyledBox>
                <StyledBox>
                    <p>Best spots</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/island-on-water.png" 
                        alt="palm"
                    />
                </StyledBox>
                <StyledBox>
                    <p>Friendly instructors</p>
                    <img 
                        src="https://img.icons8.com/ios/50/000000/smiling-mouth.png"
                        alt="smile"
                    />
                </StyledBox>
            </StyledBenefits>
            <p>And many more...</p>
            <DecorationWave />
            <h2>Destinations:</h2>
        </StyledDescription>

        //<a href="https://icons8.com/icon/6dL6OzXlCkqV/country-house">Country House icon by Icons8</a>
        
    );
};

export default Description;