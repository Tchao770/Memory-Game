import { useState, useRef, useReducer, Fragment } from 'react';
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
    const [clicked, setClicked] = useReducer(
        (state, action) => ({ ...state, ...action })
        , props.animeObj);
    const [cardName] = useState(props.animeTitles);

    function resetGame() {
        setScore(0);
        cardName.forEach((card) => {
            setClicked({ [card.title]: false });
        })
    }

    const onClick = (card, alreadyClicked) => {
        if (alreadyClicked) {
            if (score > highscore.current)
                highscore.current = score;
            resetGame();
        }
        else {
            setScore(score + 1);
            shuffle(cardName)
            setClicked({ [card]: true });
        }
    }

    return (
        <Fragment>
            <h1 className="heading">Memory Game: Isekai</h1>
            <Score score={score} highscore={highscore.current} />
            <div className="fieldContainer">
                {
                    cardName.map((card) => {
                        return (
                            <Card title={card.title} onClick={onClick} key={card.id} clicked={clicked[card.title]} url={card.url} />
                        );

                    })
                }
            </div>
        </Fragment>
    )

}

function Score(props) {
    return (
        <div className="scoreCounter">
            <p>Score: {props.score}</p>
            <p>Highscore: {props.highscore}</p>
        </div>
    );
}