import React from 'react'
import { useState } from 'react';


const Form = ({onSubmission , errors , setErrors}) => {

    
console.log(errors.length);
    const [formData, setFormData] = useState({
        Name: '',
        PrePosition: '',
    
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors([])
      };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmission(formData);
      };
       
    
    const containerStyle = {
        width: '500px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid black',
        display: 'grid',
        gap: '10px',
      };
    
      const buttonContainerStyle = {
        gridColumn: 'span 2', 
        textAlign: 'right',
      };
    
      const buttonStyle = {
        backgroundColor: 'green',
        padding: '10px 25px',
        border: '3px solid black',
        boxShadow: '0 0 5px black',
        color: 'white',
        cursor: 'pointer',
      };
    
      const labelStyle = {
        marginBottom: '5px',
        width: '220px',
        display: 'inline-block',
      };
    
      const inputStyle = {
        marginBottom: '10px',
        width: '260px',
        padding: '5px',
        border: '1px solid black',
      };
  return (
    <div style={containerStyle}>
         <form onSubmit={handleSubmit}>
         
          {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}
                
            <div>
              <label htmlFor="playerName" style={labelStyle}>
                Player Name:
              </label>
              <input type="text" id="playerName" name="Name"  value={formData.Name}
            onChange={handleChange}  style={inputStyle}  />
            </div>
    
            <div>
              <label htmlFor="preferredPosition" style={labelStyle}>
                Preferred Position:
              </label>
              <input
                type="text"
                id="preferredPosition"
                style={inputStyle}
                name="PrePosition"
                value={formData.PrePosition}
            onChange={handleChange}
              />
            </div>
    
            <div style={buttonContainerStyle}>
              <button type="submit" style={buttonStyle} disabled={ errors.length !== 0 }>
                Add
              </button>
            </div>
          </form>
    </div>
  )
}

export default Form