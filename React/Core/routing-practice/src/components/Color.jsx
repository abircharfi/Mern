import React from 'react'
import { useParams } from 'react-router-dom'


const Color = (props) => {
    const {word} = useParams();
    const {color1} = useParams();
    const {color2} = useParams();
  return (
    <div style={ {backgroundColor: color2}}>

       <h1 style={ {color: color1}}> The Word is : {word}</h1> 

    </div>
  )
}

export default Color