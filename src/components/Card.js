import {useState, useRef, useReducer} from 'react';


export default function Card(props){
    return(
        <div className="Card">
            <p>{props.title}</p>
        </div>
    )
}