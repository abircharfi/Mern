import React, { useState } from 'react'
import axios from 'axios';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

const AddPlayer = (props) => {
 
    const {refresh } = props;
    const [errors, setErrors] = useState([]); 
    const nav = useNavigate();

    const handleSubmission = (submittedData) => {
        axios.post('http://localhost:1337/api/players/addplayer', submittedData)
          .then((res) => {
            console.log(res.data);
            refresh();
            nav('../players/list')
          })
          .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })           
      };


    
    
      return (
        <div >
          <h3>Add Player</h3>
          
         <Form onSubmission={handleSubmission} errors={errors} setErrors={setErrors}></Form>
        </div>
      );
    };

export default AddPlayer