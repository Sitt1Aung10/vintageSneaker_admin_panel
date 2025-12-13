import React from 'react'
//line 3 to line 4 include
import endpoints from '../../../endpoints/endpoints';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
  //line 8 to 65 include//
  const [products, setProducts] = useState([]);
  const Navigate = useNavigate();

useEffect(() => {
  console.log("API URL:", endpoints.getProducts);

  fetch(endpoints.getProducts)
    .then(res => {
      console.log("STATUS:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("DATA FROM API:", data);
      setProducts(Array.isArray(data) ? data : []);
    })
    .catch(err => console.error("FETCH ERROR:", err));
}, []);


  return (
    <div className="products">
      <p>Total products: {products.length}</p>
      <button onClick={() => Navigate('/createProduct')}>Add Products</button>

      {products.length === 0 && <p>No products found</p>}


      {products.map(product => (
        <div className="product-card bg-amber-700 p-2 text-white" key={product.product_id}>
          <img
            src={
              product.product_image
                ? `http://localhost/vintage-sneaker-DB/vintage-sneaker-master/uploads/${product.product_image}`
                : "http://localhost/vintage-sneaker-DB/vintage-sneaker-master/uploads/no-image.png"
            }
            alt={product.product_name}
            width="150"
          />


          <h3>{product.product_name}</h3>

          <p>
            Price: ${product.product_price}
            {product.discount > 0 && (
              <span> (-{product.discount}%)</span>
            )}
          </p>

          <p>Stock: {product.product_quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;