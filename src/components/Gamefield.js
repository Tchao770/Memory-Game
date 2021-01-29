import { useState, useRef, useReducer, Fragment } from 'react';
import Card from "./Card.js"
import Jikan from "./jikanAPI.js"

const animeList =  Jikan();

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
    console.log(animeList);
    const [score, setScore] = useState(0);
    const highscore = useRef(0);
    const [clicked, setClicked] = useReducer(
        (state, action) => ({ ...state, ...action })
        , {
            "Re:Zero": false,
            "Sword Art Online": false,
            "Overlord": false,
            "Konosuba": false,
            "Shield Hero": false,
            "That Time I Got Reincarnated as a Slime": false,
            "Devil's a Parttimer": false,
            "No Game No Life": false,
            "Mondaiji Tachi": false
        });

    const [cardName] = useState([
        "Re:Zero", "Sword Art Online", "Overlord",
        "Konosuba", "Shield Hero", "That Time I Got Reincarnated as a Slime",
        "Devil's a Parttimer", "No Game No Life", "Mondaiji Tachi"
    ]);

    function resetGame() {
        setScore(0);
        cardName.forEach((card) => {
            setClicked({ [card]: false });
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
            shuffle(cardName);
            setClicked({ [card]: true });
        }
    }

    return (
        <Fragment>
            <h1 className="heading">Memory Game: Isekai</h1>
            <div className="scoreCounter">
                <p>Score: {score}</p>
                <p>Highscore: {highscore.current}</p>
            </div>
            <div className="fieldContainer">
                {
                    cardName.map((card) => {
                        return (
                            <Card title={card} onClick={onClick} key={card} clicked={clicked[card]} />
                        );

                    })
                }
            </div>
        </Fragment>
    )
}