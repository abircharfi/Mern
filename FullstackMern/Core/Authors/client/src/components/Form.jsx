import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Form = ({ onSubmission, authorToEdit, errors }) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: '',

  });

  console.log(errors);

  console.log(authorToEdit);
  useEffect(() => {

    if (authorToEdit) {
      setFormData(authorToEdit);
    }
  }, [authorToEdit]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmission(formData);
  };

  const handleCancel = (e) => {

    navigate('/authors');
  }


  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#6ABBF8',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontFamily: 'Comic Sans MS, cursive, sans-serif',
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ border: '1px solid #000', padding: '20px', maxWidth: '300px', margin: '20px 0 20px 20px' }}>
      {errors.map((err, index) => (
                    <p key="{index}" style={{ color: "red" }}>{err}</p>
                ))}
        
          <label htmlFor="name" >Name :</label>
          <input
            type="text"
            id="name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '10px', borderRadius: '5px' }}
          />
          

       
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={handleCancel}
            style={{ flex: '1', ...buttonStyle }}
          >
            Cancel
          </button>

          <button
            type="submit"
            style={{ flex: '1', marginLeft: '10px', ...buttonStyle }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form