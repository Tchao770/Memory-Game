import { useState, useRef, useReducer, Fragment } from 'react';
import Card from "./Card.js"

export default function GameField(props) {
    const [score, setScore] = useState(0);
    const highscore = useRef(0);

    const cardName =
        [
            "Re:Zero", "Sword Art Online", "Overlord",
            "Konosuba", "Shield Hero", "That Time I Got Reincarnated as a Slime",
            "Devil's a Parttimer", "No Game No Life", "Mondaiji Tachi"
        ];

    const onClick = () => {
        setScore(score + 1)
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
                            <Card title={card} key={card} onClick={onClick}/>
                        );

                    })
                }
            </div>
        </Fragment>
    )
}