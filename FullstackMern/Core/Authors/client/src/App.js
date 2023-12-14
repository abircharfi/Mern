import './App.css';
import {Routes , Route} from 'react-router-dom';
import DisplayAuthors from './components/DisplayAuthors';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  const [authors, setAuthors] = useState([])
  

  function refreshAuthors () {
  axios.get('http://localhost:5000/api/authors')
    .then((res) => {
      console.log(res.data);
      setAuthors(res.data);
    })
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshAuthors ()
  }, [])
  
  return (
    <div className="App">
      <Routes>
       <Route path='/authors' element={<DisplayAuthors refreshAuthors={refreshAuthors} authors={authors} setAuthors={setAuthors}/>}></Route> 
      <Route path='/authors/new' element={<CreateAuthor refreshAuthors={refreshAuthors}/>}/>
      <Route path='/authors/:id/edit' element={<EditAuthor refreshAuthors={refreshAuthors} authors={authors} setAuthors={setAuthors} />}/>
      </Routes>
    </div>
  );
}

export default App;
