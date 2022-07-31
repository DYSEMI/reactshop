import './App.css';
//import {products} from './Data/data';
import {Product} from './components/product';
import axios from 'axios';
import { IProduct } from './models';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
const [products, setproducts] = useState<IProduct[]>([])
const [loading, setloading] = useState(false);

async function fetchProducts() {
  setloading(true)
  const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
  setproducts(response.data)
  setloading(false)
}

  useEffect( ()=> {
    fetchProducts()
  }, [])

  return (
    <div>
      { loading &&<h1>Loading ...</h1>}
     {products.map(product => <Product product={product} />)}
    </div>
  );
}

export default App;
