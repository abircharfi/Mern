
import './App.css';
import { Route, Routes } from 'react-router-dom'
import CreateProduct from './components/createproduct';

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/products" element={<CreateProduct />} />

      </Routes>
      
    </div>



  );
}

export default App;
