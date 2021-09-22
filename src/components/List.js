import React from "react";
import People from "./People";

const List = (props) =>  
<>
    {props.isAlive
    ? <button className= "survs-button"  onClick={props.showPeople}>Show Everybody</button>
    : <button className= "survs-button"  onClick={props.showPeople}>Show Surviovers</button>
    }
    
<div className="list-container">
   { props.characters.map(character => ( 
       <People  name={character.name}
                occupation= {character.occupation}
                img={character.img}
                status={character.status}
                nickname={character.nickname}
                key={character.char_id}
                />
   ))
   }
</div>
    
</>

export default List;