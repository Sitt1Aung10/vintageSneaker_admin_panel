import React from 'react'
import endpoints from '../../../endpoints/endpoints';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateProduct = () => {
    const [products,setProducts] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        fetch(endpoints.addProduct)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProducts(data);
        })
        .catch(err => 
            console.error(err));
    },[]);
  return (
    <div>
        <input type="text" placeholder='Product Name' />
        <input type="text" placeholder='Product Price' />
        <input type="text" placeholder='Product Quantity' />
        <input type="text" placeholder='Product Image' />
        <button type='submit' onClick={() => Navigate('/addProduct')}>Add Product</button>

    </div>
  )
}

export default CreateProduct;