import React from 'react'
import axios from 'axios';
import Form from './Form'



const CreateProduct = (props) => {

  const {onProductCreate} = props


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