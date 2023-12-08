import {React , useState} from 'react'
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

import { TextField, Button, Typography, Container, Paper } from '@mui/material';

const CreateProduct = (props) => {

  const {onProductCreate} = props
    const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  //const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title,
      price,
      description,
    };
    console.log(obj.price)
    axios.post('http://localhost:5000/api/products', obj)
      .then((res) => {
        console.log(res.data);
        onProductCreate();
        
      })
      .catch((err) => console.log(err));
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
      Create
    </Button>
    </form>
      </Paper>
    </Container>
  )
}

export default CreateProduct;