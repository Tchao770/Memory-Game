import {useState, useRef, useReducer} from 'react';


export default function Card(props){
    return(
        <div className="Card" onClick={props.onClick}>
            <p>{props.title}</p>
        </div>
    )
}