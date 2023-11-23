import './App.css';
import { useState } from 'react';

function App() {

const [pokemons, setPokemons] = useState([]);
  const fetchPokemons =()=>{

  fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            return response.json();
        }).then(response => {
              console.log(response);
              setPokemons(response.results)
        }).catch(err=>{
            console.log(err);
        });
      }


  return (
    <div className="App">

     <button onClick={(e)=>fetchPokemons()}>Fetch Pokemon</button> 
      
     <ul style={{ listStyleType: 'none' }}>
      {pokemons.map((pokemon,index ) => (

      <li key={index} data={pokemon}>{pokemon.name}</li>

      ))}
     </ul>
      
    </div>
  );
}

export default App;

