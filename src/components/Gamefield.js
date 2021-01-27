import { useState, useRef, Fragment } from 'react';
import Card from "./Card.js"

function shuffle(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}

export default function GameField(props) {
    const [score, setScore] = useState(0);
    const highscore = useRef(0);
    const [cardName, setCardName] = useState([
        "Re:Zero", "Sword Art Online", "Overlord",
        "Konosuba", "Shield Hero", "That Time I Got Reincarnated as a Slime",
        "Devil's a Parttimer", "No Game No Life", "Mondaiji Tachi"
    ]);

    const onClick = () => {
        setScore(score + 1);
        shuffle(cardName);
    }

    return (
        <Fragment>
            <h1 className="heading">Memory Game: Name That Isekai</h1>
            <div className="scoreCounter">
                <p>Score: {score}</p>
                <p>Highscore: {highscore.current}</p>
            </div>
            <div className="fieldContainer">
                {
                    cardName.map((card) => {
                        return (
                            <Card title={card} onClick={onClick} />
                        );

                    })
                }
            </div>
        </Fragment>
    )
}