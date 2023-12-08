import {React , useState} from 'react'
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CreateProduct = () => {
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
        //nav('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div><form onSubmit={handleSubmit}>
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
    <Button variant="contained" type="submit">
      Create
    </Button>
  </form></div>
  )
}

export default CreateProduct;