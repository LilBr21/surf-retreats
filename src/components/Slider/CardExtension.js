import './CardExtension.styles.css';

let portugalExtension = {
    extname: 'Portugal, Peniche',
    extdesc: "Our retreats in Portugal allow you to experience some of the best ways of Europe. During the summer the ocean gets more beginner friendly. During the winter it's always a real playground for the advanced surfers.",
    accomodation: 'In Peniche we offer you a stay in our hostel. You can choose between a dorm which fits up to 6 people and a private room for 2 persons.',
    prices: '760$ / 960$',
    dates: '08.11.2021 - 14.11.2021, 07.02.2022-13.02.2022, 20.06-26.06.2022'
}

let costaRicaExtension = {
    extname: 'Costa Rica',
    extdesc: "Experience Costa Rica's tropical chill vibe with us. We normally stay in the south part which guarantees the best and longest left waves we've ever surfed. Long sandy beaches are waiting for you.",
    accomodation: 'In costa rica we stay in bungalows near the beach. That means that it takes about a minute walking to go surfing and there are beautiful sunsets to watch from our terrace. In Costa Rica we provide only shared accomodation (4 - 6 persons in one room).',
    prices: '1050$',
    dates: '22.11.2021 - 28.11.2021, 13.12.2021 - 19.12.2021, 21.03.2022 - 27.03.2022'
}

let panamaExtension = {
    extname: 'Portugal, Peniche',
    extdesc: 'sth shit',
    accomodation: 'sth',
    prices: '$$$',
    dates: '249458'
}

let morrocoExtension = {
    extname: 'Portugal, Peniche',
    extdesc: 'sth shit',
    accomodation: 'sth',
    prices: '$$$',
    dates: '249458'
}

let extendedInfo = [
    portugalExtension, 
    costaRicaExtension, 
    panamaExtension, 
    morrocoExtension
];

const CardExtension = (props) => {
    return (
        <div className="extended-card">
            <div className="top-line">
                <p className="closing-cross">+</p>
                <h2 className="extended-title">{extendedInfo[props.chosenplace].extname}</h2>
            </div>
            <h4>Basic info:</h4>
            <p className="basic-txt">{extendedInfo[props.chosenplace].extdesc}</p>
            <h4>Classes:</h4>
            <p className="basic-txt">During each retreat we provide 5 days of surf classes.
                Normally we surf about 4 hours per day and during the break there 
                are theoretical lessons with instructors when you focus mainly on video analysys.
            </p>
            <h4>Accomodation:</h4>
            <p className="basic-txt">{extendedInfo[props.chosenplace].accomodation}</p>
            <h4>Price:</h4>
            <p className="basic-txt">One week retreat with 5 days of surf-classes in a shared/private room:</p>
            <p className="price">{extendedInfo[props.chosenplace].prices}</p>
            <h4>Dates of upcoming retreats:</h4>
            <p className="basic-txt">{extendedInfo[props.chosenplace].dates}</p>
            <p className="bottom-txt">
                Feel free to ask us about possibilities to modify your stay (eg.
                change the number of surf classes). The prices may vary depending
                on those modifications. We're sure, we're find the best possible option
                for your stay.
            </p>
            </div>
    )
};

export default CardExtension;