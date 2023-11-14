import React, { useState } from 'react';

const PersonCard =(props)=>{


    const [state,setState]= useState({age :props.age}) ;
    
    
    const   handleClick = () => {
            setState ( {age : state.age + 1});
         
        
    }
    return (
       <div>
       <h1>{props.firstName} , {props.lastName}</h1>
       <p> Age : {props.age}</p> 
       <p> Hair Color : {props.hairColor}</p>
       <p>{ state.age } </p>
       <button onClick ={ handleClick } >Birthday button for {props.lastName} {props.firstName}</button>
       
       </div>
    )


}

export default PersonCard;


