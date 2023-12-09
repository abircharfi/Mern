import React  from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react'

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const DisplayOneProduct = () => {
  const { id } = useParams()

  const [thisproduct, setThisproduct] = useState(null)

  console.log(id)

  useEffect(() => {
  axios.get("http://localhost:5000/api/products/" + id)
  .then((res) => {
    console.log(res.data.OneProduct);
    setThisproduct(res.data.OneProduct);

  })
   .catch(err => {
                console.log(err)
            })
    }, [id])

  return (
    <div>
     <h1>DisplayOneProduct</h1>
     <div style={{ width: '100%' }}> 
     <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
  {thisproduct ? (
    <>
      <Item>Title : {thisproduct.title}</Item>
      <Item>Price : {thisproduct.price}</Item>
      <Item>Description : {thisproduct.description}</Item>
    </>
  ) : (
    <h3>Loading</h3>
  )}
</Box>
  </div>
   
    </div>
  )
}

export default DisplayOneProduct;