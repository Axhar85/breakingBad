import React from "react";
import People from "./People";

const List = (props) =>  
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
    
    

export default List;