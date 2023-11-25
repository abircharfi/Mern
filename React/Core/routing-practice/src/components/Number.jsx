import React from 'react'
import { useParams } from "react-router-dom";

const Number = (props) => {
    const {number} = useParams();
  return (
    <div><h3>The number is {number}</h3></div>
  )
}

export default Number