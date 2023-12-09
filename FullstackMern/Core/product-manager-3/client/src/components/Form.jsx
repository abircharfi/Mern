import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';

const Form = ({ onSubmission, initialTitle, initialPrice, initialDescription }) => {
    console.log(initialTitle);
    console.log("**********************************");
    const [title, setTitle] = useState(initialTitle || '');
    const [price, setPrice] = useState(initialPrice || 0);
    const [description, setDescription] = useState(initialDescription || '');
    console.log(initialTitle)

    useEffect(() => {
        // Log the current state values whenever they change
        console.log("Current State:", title, price, description);
      }, [title, price, description]);
 
  console.log(title)

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title,
      price,
      description,
    };
    setTitle('');
    setPrice(0);
    setDescription('');
    onSubmission(obj);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Product Manager</Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
          <TextField
            label="Title"
            id="outlined-start-adornment"
            value={title}
            sx={{ m: 1, width: '25ch' }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="Price"
            label="Number"
            type="number"
            value={price}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setPrice(e.target.value)}
            variant="standard"
          />
          <TextField
            label="Description"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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