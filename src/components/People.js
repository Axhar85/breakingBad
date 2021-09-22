import React from "react";

const People = (props) =>  ( 
    <div className='char-wrapper'>
        <h1> {props.name} </h1>
        <h2> {props.nickname} </h2>
        <img src={props.img} alt={`pictures of ${props.name}`} />
        <p> currently (spoiler) {props.status} </p>
    </div>
    
   
)
export default People;