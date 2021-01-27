import { useState, useRef, useReducer } from 'react';
import Card from "./Card.js"

export default function GameField(props) {
    
    return (
        <div>
            <h1 className="heading">Memory game</h1>
            <div className="fieldContainer">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}