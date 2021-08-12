import { useState } from 'react';

const Faq = () => {
    const [firstAnswerIsShown, setFirstAnswerIsShown] = useState(false);
    const [secondAnswerIsShown, setSecondAnswerIsShown] = useState(false);

    const showFirstAnswerHandler = () => {
        if (!firstAnswerIsShown) {
            setFirstAnswerIsShown(true);
        } else {
            setFirstAnswerIsShown(false);
        }
    }

    const showSecondAnswerHandler = () => {
        if (!secondAnswerIsShown) {
            setSecondAnswerIsShown(true);
        } else {
            setSecondAnswerIsShown(false);
        }
    }

    return (
        <div className="faq-container">
            <h3>FAQ:</h3>
            <div onClick={showFirstAnswerHandler}>
                <h4>Do I need to know how to swim to join a retreat?</h4>
                {firstAnswerIsShown ? <p>
                    Yes, as surfing is a water sport it is reccomended for you to
                    know how to swim.
                </p> : null}
            </div>
            <div onClick={showSecondAnswerHandler}>
                <h4>Do I need to speak English to attend surf classes?</h4>
                {secondAnswerIsShown ? <p>
                    It would be easier to communicate if you were an English speaker 
                    but some of our instructors also speak other languages, like Spanish
                    or French. Please contact us and we'll discuss all of the possibilities.
                </p> : null}
            </div>
        </div>

    )
};

export default Faq;