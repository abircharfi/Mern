import {React } from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const DisplayProducts = (props) => {

 const {products , setProducts ,refreshProducts} = props;


  const  RemoveProduct=(deleteId)=>{

axios.delete('http://localhost:5000/api/products/'+deleteId)
.then((res)=>{
refreshProducts();
console.log(res.data.del);
const FiltredProducts = products.filter((EachProduct)=>{
  return (EachProduct._id !== deleteId)
})

setProducts(FiltredProducts);


})
.catch((err)=>{
console.log(err);

})



  } 
  
  




  return (
    <div>
  <h1>DisplayProducts</h1> 
    <Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
           
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {products.map((product, index) => (
            <StyledTableRow  key={index}>
              
              <StyledTableCell align="left"> <Link to={`/products/${product._id}`}>{product.title}</Link></StyledTableCell>
              <StyledTableCell align="left">{product.price}</StyledTableCell>
              <StyledTableCell align="center">{product.description}</StyledTableCell>
              <StyledTableCell align="center">
              <Link to={`/products/${product._id}/update`}>
                <Button variant="contained">Update</Button>
             </Link> 
             
                <Button variant="outlined" color="error" onClick={()=>{RemoveProduct(product._id)}}>Delete</Button>   
          

             </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    
  </div>
  )
}

export default DisplayProducts;