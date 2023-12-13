import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';

const Form = ({ onSubmission, productToEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
  });
console.log(productToEdit);
  useEffect(() => {
   
    if (productToEdit) {
      setFormData(productToEdit);
    }
  }, [productToEdit]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmission(formData); // Fix the function name here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Product Manager</Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
          <TextField
            label="Title"
            name="title"
            id="outlined-start-adornment"
            value={formData.title}
            sx={{ m: 1, width: '25ch' }}
            onChange={handleChange}
          />
          <TextField
            id="Price"
            label="Number"
            type="number"
            name="price"
            value={formData.price}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            variant="standard"
          />
          <TextField
            label="Description"
            id="outlined-start-adornment"
            name="description"
            sx={{ m: 1, width: '25ch' }}
            value={formData.description}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
