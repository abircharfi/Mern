import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Button from './Button ';

const DisplayAuthors = (props) => {

    const {authors , setAuthors , refreshAuthors} = props;

    const  RemoveAuthor=(deleteId)=>{

      axios.delete('http://localhost:5000/api/authors/'+deleteId)
      .then((res)=>{
        refreshAuthors();
      console.log(res.data.DeleteOne);
      const FiltredAuthors= authors.filter((EachAuthor)=>{
        return (EachAuthor._id !== deleteId)
      })
      
      setAuthors(FiltredAuthors);
      
      
      })
      .catch((err)=>{
      console.log(err);
      
      })
    }
  return (
    <div style={{ float: 'left', width: '50%', marginLeft: '10px' }}>
      <h1 style={{textAlign: 'left'}}>Favorite authors</h1>
      <h3 style={{textAlign: 'left'}}><Link to="/authors/new" >Add an author</Link></h3>
      <h4 style={{textAlign: 'left'}}>We have quotes By :</h4>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#D3D3D3', color: 'white', border: '1px solid black', padding: '8px' }}>Author</th>
            <th style={{ backgroundColor: '#D3D3D3', color: 'white', border: '1px solid black', padding: '8px' }}>Actions available</th>
          </tr>
        </thead>
      
           
           <tbody>
           {authors.map((author, index) => (
             <React.Fragment key={index}>
               <tr style={{ backgroundColor: index % 2 === 0 ? 'white' : '#D3D3D3', border: '1px solid black' }}>
                 <td style={{ border: '1px solid black', padding: '8px' }}>
                   <Link>{author.Name}</Link>
                 </td>
                 <td style={{ border: '1px solid black', padding: '8px' }}>
                 <Link to={`/authors/${author._id}/edit`}>
                   <Button  type="edit"/>
                   </Link>
                   <Button onClick={()=>{RemoveAuthor(author._id)}} type="delete"/>
                 </td>
               </tr>
             </React.Fragment>
           ))}
         </tbody>
         
        
      </table>
    </div>
  );
};

export default DisplayAuthors;
