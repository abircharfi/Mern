
import './App.css';
import { useState } from 'react';
import Starwars from './components/Starwars';
import Display from './components/Display';
import { BrowserRouter ,  Routes , Route} from 'react-router-dom';


function App() {

  const [searchType, setSearchType] = useState('');
  const [searchId, setSearchId] = useState(0);
 
  const handleSearch = () => {
    
    console.log(searchType);
    console.log(searchId);
  };

 
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Starwars setSearchType={setSearchType} setSearchId={setSearchId}  handleSearch={handleSearch} />}/>
        <Route path='/:searchType/:searchId' element={<Display />} />
      
   
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
