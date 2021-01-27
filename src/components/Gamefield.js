import { useState, useRef, useReducer } from 'react';
import Card from "./Card.js"

export default function GameField(props) {

    const cardName =
        [
            "Re:Zero", "Sword Art Online", "Overlord",
            "Konosuba", "Shield Hero", "That Time I Got Reincarnated as a Slime",
            "Devil's a Parttimer", "No Game No Life", "Mondaiji Tachi"
        ]

    return (
        <div>
            <h1 className="heading">Memory Game: Name That Isekai</h1>
            <div className="fieldContainer">
                {
                    cardName.map((card) => {
                        return (
                            <Card title={card}/>
                        );

                    })
                }
            </div>
        </div>
    )
}