import { useState } from 'react';

import './Faq.styles.css';

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
        <div id="faq" className="faq-container">
            <h3 className="faq-title">FAQ:</h3>
            <div className="question" onClick={showFirstAnswerHandler}>
                <h4>Do I need to know how to swim to join a retreat?</h4>
                {firstAnswerIsShown ? <p className="faq-answer">
                    Yes, as surfing is a water sport it is reccomended for you to
                    know how to swim.
                </p> : null}
            </div>
            <div className="question" onClick={showSecondAnswerHandler}>
                <h4>Do I need to speak English to attend surf classes?</h4>
                {secondAnswerIsShown ? <p className="faq-answer">
                    It would be easier to communicate if you were an English speaker 
                    but some of our instructors also speak other languages, like Spanish
                    or French. Please contact us and we'll discuss all of the possibilities.
                </p> : null}
            </div>
            <div className="question" onClick={showThirdAnswerHandler}>
                <h4>Do I need to surf everyday?</h4>
                {thirdAnswerIsShown ? <p className="faq-answer">
                    No. You can always modify your retreat plan so it could fit 
                    you in the best possible way. It is important for you to inform
                    us how many surf classes do you want to take before the start
                    of retreat though.
                </p> : null }
            </div>
            <div className="question" onClick={showFourthAnswerHandler}>
                <h4>Do I need to bring my own wetsuit with me?</h4>
                {fourthAnswerIsShown ? <p className="faq-answer">
                    No, there's no need for you to bring your own wetsuit.
                    We provide good quality wetsuits for all participants.
                </p> : null }
            </div>
            <p className="faq-end">If you have any further questions please feel free to message us.</p>
        </div>

    )
};

export default Faq;