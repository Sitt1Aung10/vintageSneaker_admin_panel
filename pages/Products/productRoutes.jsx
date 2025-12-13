import React, { Children } from 'react'
import Product from './view/products.jsx'
import CreateProduct from './entry/createProduct.jsx'
import Layout from '../../src/components/layout.jsx'

const ProductRoutes =  {
  path : '/',
  element : <Layout />,
  children : [
    {
    path : '/product',
    element : <Product />
    },
    {
    path : '/createProduct',
    element : <CreateProduct />
    }
  ]
}

export default ProductRoutes