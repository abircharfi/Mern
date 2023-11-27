import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Starwars = ({setSearchId, setSearchType, handleSearch }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleSearch(setSearchType, setSearchId);
  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.SelectCustom">
          <Form.Label>Search For :</Form.Label>
          <Form.Select
            aria-label="Default select example"
            
            onChange={(e)=>{
              setSearchType(e.target.value);}}
            className="mx-auto"
            style={{ width: '50%' }}
          >
            <option value="type">Select the type </option>
            <option value="people">people</option>
            <option value="planet">planet</option>
            <option value="film">film</option>
            <option value="species">species</option>
            <option value="vehicles">vehicles</option>
            <option value="starships">starships</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="number"
            className="mx-auto"
            style={{ width: '50%' }}
            onChange={(e)=>{setSearchId(e.target.value);}}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Starwars;
