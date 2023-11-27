import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import Starwars from './Starwars';


const Display = () => {
  const [wars, setWars] = useState([]);
  const { searchType, searchId } = useParams();
  


  useEffect(() => {
    Axios.get(`https://swapi.dev/api/${searchType}/${searchId}/`)
      .then((response) => {
        setWars(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchId]);



  return (
    <div>

      <Starwars></Starwars>
     
      <div style={{ marginTop: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
  {console.log(searchType)}
  {console.log(searchId)}
  <h2 style={{ fontWeight: 'bold' , marginLeft: '10px' }}>{wars.name}</h2>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <h4 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Height:</h4>
    <p style={{ margin: '0' }}>{wars.height} cm</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <h4 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Mass :</h4>
    <p style={{ margin: '0' }}>{wars.mass} Kg</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <h4 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Hair Color :</h4>
    <p style={{ margin: '0' }}>{wars.hair_color}</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <h4 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Birthday :</h4>
    <p style={{ margin: '0' }}>{wars.birth_year}</p>
  </div>
</div>


      
     
    </div>
  );
};

export default Display;
