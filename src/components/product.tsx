import { IProduct } from "../models";
import React, { useState } from 'react'
import './product.css';
interface ProductProps {
  product: IProduct
}



export function Product(props: ProductProps) {
  const [hide, show] = useState(false)
  const [count, setcount] = useState(1)
  console.log(props)
  return (
    <div className='keret'>
      <h1>{props.product.title}</h1>
      <img id="kep" src={props.product.image} alt={props.product.title} />
      <h1>{props.product.price}$</h1>
      <button onClick={ () => show(prev => !prev) }>{ hide ? "hide" : "Show"}</button>
      {hide &&<div>
        <p>{props.product.description}</p>
        <h1>Rate:{props.product.rating.rate}★</h1>
        <h3><span>Category:</span>{props.product.category}</h3>
        <button>Add to cart   {count}pct</button>
          <p>
            <button id="counter" onClick={ () => setcount( count + 1) }>+</button>
            <button id="counter" onClick={ () => setcount( count - 1) }>-</button>
          </p>
        
      </div>}
     
    </div> 
  );
}
