import { useState } from 'react';

import styled from 'styled-components';

const StyledFaq = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    text-align: center;

    & h3 {
        font-family: Poppins;
    }

    & h4 {
        cursor: pointer;
    }
`;

const StyledParagraph = styled.p`
    margin-left: 20%;
    margin-right: 20%;
         
`;

const StyledEnd = styled.p`
    margin-top: 3rem;
    font-size: 14px;
`;

const Faq = () => {
    const [firstAnswerIsShown, setFirstAnswerIsShown] = useState(false);
    const [secondAnswerIsShown, setSecondAnswerIsShown] = useState(false);
    const [thirdAnswerIsShown, setThirdAnswerIsShown] = useState(false);
    const [fourthAnswerIsShown, setFourthAnswerIsShown] = useState(false);

    const showFirstAnswerHandler = () => {
        if (!firstAnswerIsShown) {
            setFirstAnswerIsShown(true);
        } else {
            setFirstAnswerIsShown(false);
        }
    };

    const showSecondAnswerHandler = () => {
        if (!secondAnswerIsShown) {
            setSecondAnswerIsShown(true);
        } else {
            setSecondAnswerIsShown(false);
        }
    };

    const showThirdAnswerHandler = () => {
        if (!thirdAnswerIsShown) {
            setThirdAnswerIsShown(true);
        } else {
            setThirdAnswerIsShown(false);
        }
    };

    const showFourthAnswerHandler = () => {
        if (!fourthAnswerIsShown) {
            setFourthAnswerIsShown(true);
        } else {
            setFourthAnswerIsShown(false);
        }
    };

    return (
        <StyledFaq id="faq">
            <h3>FAQ:</h3>
            <div onClick={showFirstAnswerHandler}>
                <h4>Do I need to know how to swim to join a retreat?</h4>
                {firstAnswerIsShown ? <StyledParagraph>
                    Yes, as surfing is a water sport it is reccomended for you to
                    know how to swim.
                </StyledParagraph> : null}
            </div>
            <div onClick={showSecondAnswerHandler}>
                <h4>Do I need to speak English to attend surf classes?</h4>
                {secondAnswerIsShown ? <StyledParagraph>
                    It would be easier to communicate if you were an English speaker 
                    but some of our instructors also speak other languages, like Spanish
                    or French. Please contact us and we'll discuss all of the possibilities.
                </StyledParagraph> : null}
            </div>
            <div onClick={showThirdAnswerHandler}>
                <h4>Do I need to surf everyday?</h4>
                {thirdAnswerIsShown ? <StyledParagraph>
                    No. You can always modify your retreat plan so it could fit 
                    you in the best possible way. It is important for you to inform
                    us how many surf classes do you want to take before the start
                    of retreat though.
                </StyledParagraph> : null }
            </div>
            <div onClick={showFourthAnswerHandler}>
                <h4>Do I need to bring my own wetsuit with me?</h4>
                {fourthAnswerIsShown ? <StyledParagraph>
                    No, there's no need for you to bring your own wetsuit.
                    We provide good quality wetsuits for all participants.
                </StyledParagraph> : null }
            </div>
            <StyledEnd>
                If you have any further questions please feel free to message us.
            </StyledEnd>
        </StyledFaq>

    )
};

export default Faq;