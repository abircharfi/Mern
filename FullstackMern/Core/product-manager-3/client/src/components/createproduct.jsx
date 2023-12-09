import React from 'react'
import axios from 'axios';
import Form from './Form'
//import { useNavigate } from 'react-router-dom';

import { TextField, Button, Typography, Container, Paper } from '@mui/material';

const CreateProduct = (props) => {

  const {onProductCreate} = props

  //const nav = useNavigate();

  const handleSubmission = (submittedData) => {
    console.log(submittedData.price);
    axios.post('http://localhost:5000/api/products', submittedData)
      .then((res) => {
        console.log(res.data);
        onProductCreate();
      })
      .catch((err) => console.log(err));
  };
  
  return (
 <Form onSubmission={handleSubmission} ></Form>
  )
}

export default CreateProduct;