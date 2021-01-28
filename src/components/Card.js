import { useState, useRef, useReducer } from 'react';


export default function Card(props) {
    return (
        <div className="Card" onClick={() => {
            props.onClick(props.title, props.clicked)
            }}>
            <p>{props.title}</p>
        </div>
    )
}