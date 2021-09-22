import React from "react";

const People = ({name, nickname, img, status, index, killCharacter}) =>  ( 
    <div className='char-wrapper'>
        <h1> {name} </h1>
        <h2> {nickname} </h2>
        {/*<ul> {props.occupation.map(job => <li> {job} </li>)} </ul>*/}
        <img src={img} alt={`pictures of ${name}`} />
        <p> currently (spoiler) {status} </p>
        {
            status !== 'Deceased'
             && <button onClick={() => killCharacter(index)}>KILL!</button>
            
        }
    </div>
)
export default People;