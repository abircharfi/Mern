import Axios from 'axios';
import { useEffect, useState} from 'react';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect (() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response);
        setPokemons(response.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  },([]));
 
 
  

  return (
    <div className="App">
      <ul style={{ listStyleType: 'none' }}>
        {pokemons.map((pokemon, index) => (
          <li key={index} data={pokemon}>
            {pokemon.name}
            {console.log(pokemon.name)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
