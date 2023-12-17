import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Form from './Form';
import { useNavigate } from 'react-router-dom';



const CreateAuthor = (props) => {
    const {refreshAuthors} = props;
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

   

    const handleSubmission = (submittedData) => {
        console.log(submittedData.price);
        axios.post('http://localhost:5000/api/authors', submittedData)
          .then((res) => {
            console.log(res.data);
            refreshAuthors();
            navigate('/authors');
            
          })
          .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })           
      };
  return (
    <div style={{ float: 'left', width: '50%', marginLeft: '10px' }}>
      <h1 style={{textAlign: 'left'}}>Favorite authors</h1>
      <h3 style={{textAlign: 'left'}}><Link to="/authors" >Home</Link></h3>
      <h4 style={{textAlign: 'left'}}>Add new author :</h4>
      <Form onSubmission={handleSubmission} errors={errors} ></Form>
      
    </div>
  )
}

export default CreateAuthor