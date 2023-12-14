import React, { useState, useEffect } from 'react';
import { useParams, useNavigate , Link} from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
 

const EditAuthor = (props) => {
    const { authors, setAuthors, refreshAuthors } = props;
    const [errors, setErrors] = useState([]); 
  const { id } = useParams();
  const nav = useNavigate();

  const [editingAuthor, setEditingAuthor] = useState(null);

useEffect(() => {
  const author = authors.find((author) => author._id === id);

 
  if (author) {
    setEditingAuthor({
      Name: author.Name,

    });
  }
}, [authors, id]);

 
  const handleSubmission = (submittedData) => {
    axios
      .patch(`http://localhost:5000/api/authors/${id}`, submittedData)
      .then((res) => {
        console.log(res.data.UpdateOne);

        const indexToUpdate = authors.findIndex((author) => author._id === id);

        console.log(indexToUpdate);

        if (indexToUpdate !== -1) {         
          const updatedAuthors = [...authors];
          updatedAuthors[indexToUpdate] = submittedData; 
          setAuthors(updatedAuthors);
        }

        refreshAuthors();
        nav('/authors');
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })           
  };

  return (
    <div style={{ float: 'left', width: '50%', marginLeft: '10px' }}>
    <h1 style={{textAlign: 'left'}}>Favorite authors</h1>
    <h3 style={{textAlign: 'left'}}><Link to="/authors" >Home</Link></h3>
    <h4 style={{textAlign: 'left'}}>Adit this author :</h4>
        <Form
        onSubmission={handleSubmission}
        authorToEdit={editingAuthor}
        errors={errors}
      ></Form>
    </div>
  )
}

export default EditAuthor