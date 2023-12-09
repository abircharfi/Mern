
import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import CreateProduct from './components/createproduct';
import DisplayProducts from './components/displayproducts';
import { useState , useEffect} from 'react'
import DisplayOneProduct from './components/displayoneproduct';
import Editproduct from './components/editproduct';


function App() {

  const [products, setProducts] = useState([])

  function refreshProducts () {
  axios.get('http://localhost:5000/api/products')
    .then((res) => {
      console.log(res.data.product);
      setProducts(res.data.product);
    })
    .catch((err) => console.log(err));
  }
  useEffect(() => {
      refreshProducts ()
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<div><CreateProduct onProductCreate={refreshProducts} /><DisplayProducts refreshProducts={refreshProducts} products={products} setProducts={setProducts} /></div>}  />
        <Route path='/products/:id' element={<DisplayOneProduct  />}></Route>
        <Route path='/products/:id/update' element={<Editproduct onProductUpdate={refreshProducts} products={products} setProducts={setProducts} />}></Route>
      </Routes>
      
    </div>



  );
}

export default App;
